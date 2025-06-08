<?php

namespace Modules\Vendor\Repositories;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection;
use Modules\Admin\Models\Tag;
use Modules\Vendor\Models\Item;

class ItemRepository
{
    public function __construct(protected Item $ItemModel) {}

    public function getAll(): Collection
    {
        return $this->ItemModel->all();
    }

    /**
     * get authenticated user  items as pages
     */
    public function getAllAsPagesForAuthUser(int $items = 10): LengthAwarePaginator
    {
        return $this->ItemModel->where('user_id', auth()->id())->paginate($items);
    }

    /**
     * get all  items as pages
     */
    public function getAllAsPages(int $items = 10): LengthAwarePaginator
    {
        return $this->ItemModel->paginate($items);
    }

    public function store(array $data, Model $priceableModel, array $subSpecifications, array $tagsIds, array $extensions): void
    {

        $item = $this->ItemModel->create($data);

        // Associate the created model with this one
        $item->priceable()->associate($priceableModel)->save();

        // attach subs with the item
        $item->subSpecifications()->sync($subSpecifications);

        // Attach the tag IDs to the item
        $item->tags()->sync($tagsIds);

        $item->extensions()->createMany($extensions);

    }

    public function getWithRelationsById(int $id, array $relations): Item
    {
        return $this->ItemModel->with($relations)->findOrFail($id);
    }

    public function findOrFail(int $id): Item
    {
        return $this->ItemModel->findOrFail($id);
    }

    public function findByCode(string $code): ?Item
    {
        return $this->ItemModel->firstWhere('code', $code);
    }

    public function update(Item $item, array $baseData, array $priceableInfo, array $subSpecifications, array $tagsIds, array $extensions): void
    {
        $item->update($baseData);

        if ($priceableInfo['hasPricableWithThisType']) {
            $item->priceable()->update($priceableInfo['payload']);
        } else {
            $item->priceable()->delete();
            // Associate the created model with this one
            $item->priceable()->associate($priceableInfo['payload'])->save();
        }

        // attach subs with the item
        $item->subSpecifications()->sync($subSpecifications);

        // Attach the tag IDs to the item
        $item->tags()->sync($tagsIds);

        // delete last extensions and attach the new one
        $item->extensions()->delete();
        $item->extensions()->createMany($extensions);
    }

    public function destroy(int $id): void
    {
        $this->ItemModel->destroy($id);
    }

    /**
     * Get items for guest customer in landing page grouped by category name
     */
    public function getItemsForGuestCustomerInLanding(): Collection
    {

        return $this->ItemModel
            ->select('items.*')
            ->where('status', 'available')
            ->addSelect(['categories.name as category_name', 'categories.id as category_id'])
            ->join('sub_categories', 'sub_categories.id', '=', 'items.sub_category_id')
            ->join('categories', 'categories.id', '=', 'sub_categories.category_id')
            ->orderBy('category_name')
            ->get();
    }

    public function isThisCodeExists(string $code): bool
    {
        return Item::where('code', $code)->exists();
    }

    /**
     * Search for items by query
     *
     * @return \Illuminate\Database\Eloquent\Collection<int, Item>
     */
    public function search(string $query): Collection
    {
        return $this->ItemModel->search($query)->take(10)->get();
    }
}
