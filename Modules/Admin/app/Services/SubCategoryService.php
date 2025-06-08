<?php

namespace Modules\Admin\Services;

use Modules\Admin\Models\SubCategory;
use Modules\Admin\Repositories\CategoryRepository;
use Modules\Admin\Repositories\SubCategoryRepository;

class SubCategoryService
{
    public function __construct(protected SubCategoryRepository $subCategoryRepository, protected CategoryRepository $categoryRepository) {}

    public function showAll(): array
    {
        return [$this->subCategoryRepository->getAllDesc(), $this->categoryRepository->getAllDesc()];
    }

    public function store(array $data): SubCategory
    {
        return $this->subCategoryRepository->addOne($data);
    }

    public function find(int $id): SubCategory
    {
        return $this->subCategoryRepository->find($id);
    }

    public function update(int $id, array $data): bool
    {
        return $this->subCategoryRepository->updateOne($id, $data);
    }

    public function delete(int $id): int
    {
        return $this->subCategoryRepository->deleteOne($id);
    }
}
