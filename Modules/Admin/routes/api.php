<?php

use Illuminate\Support\Facades\Route;
use Modules\Admin\Http\Controllers\AdminController;

Route::middleware(['auth:sanctum'])->prefix('v1')->group(function (): void {
    Route::apiResource('admin', AdminController::class)->names('admin');
});
