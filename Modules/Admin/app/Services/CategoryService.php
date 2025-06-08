<?php

namespace Modules\Admin\Services;

use Illuminate\Database\Eloquent\Collection;
use Modules\Admin\Models\Category;
use Modules\Admin\Repositories\CategoryRepository;

class CategoryService
{
    public function __construct(protected CategoryRepository $categoryRepository) {}

    public function showAll(): Collection
    {
        return $this->categoryRepository->getAllDesc();
    }

    public function store(array $data): Category
    {
        return $this->categoryRepository->addOne($data);
    }

    public function find(int $id): Category
    {
        return $this->categoryRepository->find($id);
    }

    public function update(int $id, array $data): bool
    {
        return $this->categoryRepository->updateOne($id, $data);
    }

    public function delete(int $id): int
    {
        return $this->categoryRepository->deleteOne($id);
    }
}
