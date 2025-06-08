<?php

namespace Modules\Admin\Repositories;

use Illuminate\Database\Eloquent\Collection;
use Modules\Admin\Models\Category;

class CategoryRepository
{
    public function __construct(protected Category $categoryModel) {}

    public function getAllDesc(): Collection
    {
        return $this->categoryModel->orderByDesc('id')->get();
    }

    public function getAllWithSubCategories(): Collection
    {
        return $this->categoryModel->with('subCategories')->orderByDesc('id')->get();
    }

    public function find(int $id): Category
    {
        return $this->categoryModel->findOrFail($id);
    }

    public function addOne(array $data): Category
    {
        return $this->categoryModel->create($data);
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
