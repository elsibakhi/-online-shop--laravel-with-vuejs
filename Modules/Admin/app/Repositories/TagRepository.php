<?php

namespace Modules\Admin\Repositories;

use Modules\Admin\Models\Tag;

class TagRepository
{
    public function __construct(protected Tag $TagModel) {}

    public function getAll()
    {
        return $this->TagModel->all();
    }

    public function getAllAsc()
    {
        return $this->TagModel->orderBy('tag')->get();
    }

    public function find(int $id)
    {
        return $this->TagModel->findOrFail($id);
    }

    public function insertOrUpdate(array $tagsArray): void
    {

        $this->TagModel->upsert($tagsArray, ['tag']);

    }

    public function getIds(array $tags): array
    {

        return $this->TagModel->whereIn('tag', $tags)->pluck('id')->toArray();

    }

    public function addOne(array $data)
    {
        return $this->TagModel->create($data);
    }

    public function addMany(array $data)
    {

        return $this->TagModel->insert($data);
    }

    public function updateOne(int $id, array $data)
    {
        return $this->TagModel->findOrFail($id)->update($data);
    }

    public function deleteOne(int $id)
    {
        return $this->TagModel->findOrFail($id)->delete();
    }

    public function deleteMany(array $ids)
    {
        return $this->TagModel->destroy($ids);
    }
}
