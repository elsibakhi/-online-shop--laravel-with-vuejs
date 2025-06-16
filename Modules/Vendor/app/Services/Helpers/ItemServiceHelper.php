<?php

namespace Modules\Vendor\Services\Helpers;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;
use Illuminate\Support\Collection;
use Modules\Admin\Repositories\TagRepository;
use Modules\Vendor\Http\Requests\ItemRequest;
use Modules\Vendor\Repositories\AuctionRepository;
use Modules\Vendor\Repositories\NormalPaidRepository;
use Modules\Vendor\Repositories\SpecificationRepository;
use Modules\Vendor\Repositories\SubSpecificationRepository;

trait ItemServiceHelper
{
    // ---------- store and update helpers ----------------------
    public function createPriceable(ItemRequest $request): Model
    {

        $modelRepo = $this->getPriceableRepository($request->input('payment_type'));

        // Create the instance
        return $modelRepo->create($request->validated());

    }

    public function AttachSpecifications(ItemRequest $request): array
    {
        $subs = [];
        if ($request->filled('specifications')) {

            foreach ($request->specifications as $specification) {

                // not the best in performance
                // ---------- i will fix it later ---------->>>>>>>>>>>>>>>>>>>
                $specification_row = resolve(SpecificationRepository::class)->firstOrCreate([
                    'name' => $specification['name'],
                ]);

                foreach ($specification['subs'] as $sub) {

                    // not the best in performance
                    // ---------- i will fix it later ---------->>>>>>>>>>>>>>>>>>>

                    $sub_specification_row = resolve(SubSpecificationRepository::class)->firstOrCreateTo($specification_row, ['name' => $sub['key']]);

                    $subs[$sub_specification_row->id] = ['value' => $sub['value']];
                }

            }

        }

        return $subs;
    }

    public function AttachTags(ItemRequest $request): array
    {
        if ($request->filled('tags')) {
            $tagsArray = collect($request->tags)->map(fn ($item) => ['tag' => $item])->all();

            $tagRepo = resolve(TagRepository::class);

            $tagRepo->insertOrUpdate($tagsArray);
            $ids = $tagRepo->getIds($request->tags);

            // Retrieve the tag IDs
            return $ids;

        }

        return [];

    }

    public function createExtensions(ItemRequest $request): array
    {
        $extensions = [];

        if ($request->hasFile('extensions')) {
            foreach ($request->allFiles()['extensions'] as $file) {

                $path = $file->store('items/extensions', 'public');
                $extensions[] = [
                    'path' => $path,
                    'name' => $file->getClientOriginalName(),  // File name
                    'mime_type' => $file->getMimeType(),           // MIME type
                    'size' => $file->getSize(),   // Size in KB
                ];

            }
        }

        return $extensions;

    }

    // ---------- update helpers ----------------------

    public function UpdatePriceable(ItemRequest $request, string $itemPriceabletype): array
    {

        $modelRepo = $this->getPriceableRepository($request->input('payment_type'));
        $data = $request->validated();
        if ($request->input('payment_type') == 'auction') {

            $data['start'] = Carbon::parse($data['date'].' '.$data['start_time'], auth()->user()->profile->timezone)->setTimezone('UTC')->toDateTimeString();
            $data['end'] = Carbon::parse($data['date'].' '.$data['end_time'], auth()->user()->profile->timezone)->setTimezone('UTC')->toDateTimeString();
        }

        if ($itemPriceabletype == $request->input('payment_type')) {
            return [
                'hasPricableWithThisType' => true,
                'payload' => collect($data)->only($modelRepo->getFields())->toArray(),
            ];

        } else {

            // create new instance
            $priceable = $modelRepo->create($data);

            return [
                'hasPricableWithThisType' => false,
                'payload' => $priceable,
            ];

        }
    }

    // ---------- getItemDataForEditForm helpers ----------------------
    public function formatSpecificationsForEditForm(Model $data): Collection
    {
        return collect($data->subSpecifications
            // لاعادة هيكلة المواصفات لتبدو مثل ما هو موجود في السكيما
            ->map(fn ($sub_specification) => [
                'name' => $sub_specification->specification->name,
                'subs' => [
                    [
                        'key' => $sub_specification->name,
                        'value' => $sub_specification->pivot->value,
                    ],
                ],
            ]))
            // تجميع المواصفات المتشابهة
            ->groupBy('name')
            // دمج المواصفات الفرعية في المواصفات المتشابهة
            ->map(fn ($specification) => $specification->reduce(function ($carry, $item) {

                if (empty($carry)) {
                    return $item;
                }
                $carry['subs'] = array_merge($carry['subs'], $item['subs']);

                return $carry;
            }))
            // لازالة المفتاج الذي يوضع من قبل دالة groupby
            // هنا نحن حصلنا على القيم بدون المفاتيح
            ->values();
    }

    //  ---------------------- shared in this trait ---------------------------

    public function getPriceableRepository(string $paymentType): object
    {

        $PriceableRepo = [
            'normal' => NormalPaidRepository::class,
            'auction' => AuctionRepository::class,
        ];

        if (! array_key_exists($paymentType, $PriceableRepo)) {
            throw new \InvalidArgumentException("Unsupported payment type: $paymentType");
        }

        $modelRepo = $PriceableRepo[$paymentType];

        return new $modelRepo;

    }
}
