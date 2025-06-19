<?php

namespace Modules\Vendor\Services;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Modules\Admin\Repositories\CategoryRepository;
use Modules\Admin\Repositories\TagRepository;
use Modules\Customer\Http\Resources\ItemInSearchResource;
use Modules\Vendor\Http\Requests\ItemRequest;
use Modules\Vendor\Http\Resources\ItemResource;
use Modules\Vendor\Repositories\ItemRepository;
use Modules\Vendor\Services\Helpers\ItemServiceHelper;

class ItemService
{
    use ItemServiceHelper;

    public function __construct(protected ItemRepository $itemRepository) {}

    public function index(): array
    {

        $categories = resolve(CategoryRepository::class)->getAllWithSubCategories();

        $tags = resolve(TagRepository::class)->getAllAsc();

        Inertia::share('itemsConfig', config('vendor.items'));

        return compact(['categories', 'tags']);
    }

    public function show(int $id): Model
    {

        $item = $this->itemRepository->getWithRelationsById($id, ['priceable', 'tags', 'extensions', 'subCategory.category', 'subSpecifications.specification']);
        $item['specifications'] = $this->formatSpecificationsForEditForm($item);

        return $item;

    }

    /**
     * load user authenticated items
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function loadUserItems()
    {
        return ItemResource::collection($this->itemRepository->getAllAsPagesForAuthUser(6));
    }

    /**
     * load user authenticated items
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function loadAllItems()
    {
        return ItemResource::collection($this->itemRepository->getAllAsPages(6));
    }

    public function store(ItemRequest $request)
    {

        DB::transaction(function () use ($request): void {

            do {
                $code = Str::camel(auth()->user()->name.' '.Str::random(10));

            } while ($this->itemRepository->isThisCodeExists($code));

            $item_data = [
                'code' => $code,
                'title' => $request->title,
                'description' => $request->description,
                'quantity' => $request->quantity,
                'remaining_quantity' => $request->quantity,
                'sub_category_id' => $request->sub_category,
                'user_id' => auth()->id(),
            ];

            // create priceable and attach it with item
            $priceableModel = $this->createPriceable($request);

            // Attach sub specifications to item

            $subSpecifications = $this->AttachSpecifications($request);

            // Attach tags to item

            $tagsIds = $this->AttachTags($request);

            // Attach extensions to item

            $extensions = $this->createExtensions($request);

            $this->itemRepository->store(
                $item_data,
                $priceableModel,
                $subSpecifications,
                $tagsIds,
                $extensions
            );
        });
    }

    public function getItemDataForEditForm(int $id): array
    {
        $loadedRelations = ['extensions', 'tags', 'priceable', 'subSpecifications.specification'];
        $item_data = $this->itemRepository->getWithRelationsById($id, $loadedRelations);
        $data = $item_data->toArray();

        // لهيكلة التاقز بما يتناسب مع السكيما
        $data['tags'] = $item_data->tags->pluck('tag');

        $data['specifications'] = $this->formatSpecificationsForEditForm($item_data);

        return $data;
    }

    public function update(ItemRequest $request, int $id)
    {

        DB::transaction(function () use ($request, $id): void {

            $item = $this->itemRepository->findOrFail($id);

            // create priceable and attach it with item or return the data if you need update the values of it
            $priceableInfo = $this->UpdatePriceable($request, $item->priceable_type);

            // Attach sub specifications to item

            $subSpecifications = $this->AttachSpecifications($request);

            // Attach tags to item

            $tagsIds = $this->AttachTags($request);

            // Attach extensions to item

            $extensions = $this->createExtensions($request);

            $baseData = [
                'title' => $request->title,
                'description' => $request->description,
                'quantity' => $request->quantity,
                'remaining_quantity' => $request->quantity,
                'sub_category_id' => $request->sub_category,

            ];
            $this->itemRepository->update($item, $baseData, $priceableInfo, $subSpecifications, $tagsIds, $extensions);
        });
    }

    public function destroy(int $id): void
    {
        $this->itemRepository->destroy($id);
    }

    public function search(array $data)
    {
        return ItemInSearchResource::collection($this->itemRepository->search($data['query']));
    }

    public function rate(int $item, array $data)
    {

        $this->itemRepository->findOrFail($item)->ratings()->create($data);

    }
}
