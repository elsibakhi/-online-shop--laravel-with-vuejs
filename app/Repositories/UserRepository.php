<?php

namespace App\Repositories;

use App\Models\User;

class UserRepository
{
    public function __construct(protected User $userModel) {}

    public function findByUsername($username): ?User
    {
        return $this->userModel->firstWhere('username', $username);
    }
}
