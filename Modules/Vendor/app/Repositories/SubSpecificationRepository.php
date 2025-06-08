<?php

namespace Modules\Vendor\Repositories;

use Modules\Vendor\Models\Specification;
use Modules\Vendor\Models\SubSpecification;

class SubSpecificationRepository
{
    public function __construct(protected SubSpecification $subSpecificationModel) {}

    public function firstOrCreateTo(Specification $specification, array $data)
    {
        return $specification->subSpecifications()->firstOrCreate($data);

    }
}
