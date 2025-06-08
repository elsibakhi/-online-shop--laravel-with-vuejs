<?php

use Illuminate\Support\Facades\Route;
use Modules\Vendor\Http\Controllers\VendorController;

Route::middleware(['auth:sanctum'])->prefix('v1')->group(function (): void {
    Route::apiResource('vendor', VendorController::class)->names('vendor');
});
