<?php

namespace Modules\Vendor\Repositories;

use Modules\Vendor\Models\Specification;

class SpecificationRepository
{
    public function __construct(protected Specification $specificationModel) {}

    public function firstOrCreate(array $data)
    {
        return $this->specificationModel->firstOrCreate($data);

    }
}
