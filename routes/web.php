<?php

use App\Http\Controllers\NotificationController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Modules\Customer\Http\Controllers\CustomerController;

// Route::get('/', fn() => Inertia::render('Welcome', [
//     'canLogin' => Route::has('login'),
//     'canRegister' => Route::has('register'),
//     'laravelVersion' => Application::VERSION,
//     'phpVersion' => PHP_VERSION,

// ]));

Route::middleware(['auth', 'verified'])->group(function (): void {
    Route::get('/dashboard', [CustomerController::class, 'authIndex'])->name('dashboard');
    Route::get('/home', [CustomerController::class, 'authIndex'])->name('home');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('user/search/{query]', [UserController::class, 'search'])->name('user.search');
    Route::get('notification/get', [NotificationController::class, 'get'])->name('notification.get');
});

require __DIR__.'/auth.php';
