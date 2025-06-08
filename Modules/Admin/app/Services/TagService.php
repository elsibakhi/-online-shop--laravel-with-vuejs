<?php

namespace Modules\Admin\Services;

use Modules\Admin\Repositories\TagRepository;

class TagService
{
    public function __construct(protected TagRepository $TagRepository) {}

    public function showAll()
    {
        return $this->TagRepository->getAll();
    }

    public function storeMany(array $data)
    {
        $data = array_map(fn ($item) => ['tag' => $item], $data['tags']);

        return $this->TagRepository->addMany($data);
    }

    public function store(array $data)
    {
        return $this->TagRepository->addOne($data);
    }

    public function find($id)
    {
        return $this->TagRepository->find($id);
    }

    public function update($id, array $data)
    {
        return $this->TagRepository->updateOne($id, $data);
    }

    public function delete($id)
    {
        return $this->TagRepository->deleteOne($id);
    }

    public function deleteMany(array $data)
    {
        $ids = $data['ids'];

        return $this->TagRepository->deleteMany($ids);
    }
}
