<?php

namespace Modules\Vendor\Repositories;

use Modules\Vendor\Models\NormalPaid;

class NormalPaidRepository
{
    public function __construct(protected NormalPaid $normalPaidModel = new NormalPaid) {}

    public function getFields()
    {
        return $this->normalPaidModel->getFillable();

    }

    public function create(array $data): NormalPaid
    {
        return $this->normalPaidModel->create($data);
    }
}
