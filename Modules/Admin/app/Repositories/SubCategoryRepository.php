<?php

namespace Modules\Admin\Repositories;

use Illuminate\Database\Eloquent\Collection;
use Modules\Admin\Models\SubCategory;

class SubCategoryRepository
{
    public function __construct(protected SubCategory $subCategoryModel) {}

    public function getAllDesc(): Collection
    {
        return $this->subCategoryModel->with('category')->orderByDesc('id')->get();
    }

    public function find(int $id): SubCategory
    {
        return $this->subCategoryModel->findOrFail($id);
    }

    public function addOne(array $data): SubCategory
    {
        return $this->subCategoryModel->create($data);
    }

    public function updateOne(int $id, array $data): bool
    {
        return $this->find($id)->update($data);
    }

    public function deleteOne(int $id): int
    {
        return $this->find($id)->delete();
    }
}
