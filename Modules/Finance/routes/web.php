<?php

use Illuminate\Foundation\Http\Middleware\HandlePrecognitiveRequests;
use Illuminate\Support\Facades\Route;
use Modules\Finance\Http\Controllers\BidController;
use Modules\Finance\Http\Controllers\FinanceController;
use Modules\Finance\Http\Controllers\InvoiceController;
use Modules\Finance\Http\Controllers\OrderController;

Route::middleware(['auth', 'verified'])->group(function () {

    Route::get('balance', [OrderController::class, 'getBalance'])->name('finance.balance');
    Route::resource('finances', FinanceController::class)->names('finance');

    // bids
    Route::get('auction/{auction}/bid', [BidController::class, 'show'])->name('auction.bid.show');
    Route::post('auction/{auction}/bid', [BidController::class, 'bid'])->name('auction.bid.store');

    // buy now page
    Route::get('order/buy-now/{item}', [OrderController::class, 'buyNow'])->name('order.buy-now');

    // stripe
    Route::get('order/stripe/checkout/page', [OrderController::class, 'buyNowFromStripeCheckoutPage'])->name('order.stripe.checkout-page');
    Route::get('order/stripe/checkout/success', [OrderController::class, 'buyNowFromStripeCheckoutSuccess'])->name('order.stripe.checkout-success');
    Route::get('order/stripe/checkout/cancel', [OrderController::class, 'buyNowFromStripeCheckoutCancel'])->name('order.stripe.checkout-cancel');

    Route::post('order/buy-now/from-balance', [OrderController::class, 'buyNowFormBalance'])->name('order.buy-now.from-balance');
    Route::post('order/checkout/cart/from-balance', [OrderController::class, 'CheckoutItemsCartFormBalance'])->name('order.checkout.cart.from-balance')->middleware([HandlePrecognitiveRequests::class]);
    Route::resource('order', OrderController::class)->only([]);

    Route::get('invoice/buy/{transaction}', [InvoiceController::class, 'buy'])->name('invoice.buy');
    Route::get('invoice/buy/{transaction}/download', [InvoiceController::class, 'downloadInvoice'])->name('invoice.buy.download');
});
