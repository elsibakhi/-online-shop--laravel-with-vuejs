<?php

use Illuminate\Foundation\Http\Middleware\HandlePrecognitiveRequests;
use Illuminate\Support\Facades\Route;
use Modules\Finance\Http\Controllers\BalanceController;
use Modules\Finance\Http\Controllers\BidController;
use Modules\Finance\Http\Controllers\InvoiceController;
use Modules\Finance\Http\Controllers\OrderController;
use Modules\Finance\Http\Controllers\PurchaseTransactionController;

Route::middleware(['auth', 'verified'])->group(function () {

    // Start Balance
    // Route::get('balance', [OrderController::class, 'getBalance'])->name('finance.balance');
    Route::get('balance', [BalanceController::class, 'index'])->name('balance.index');
    // stripe
    Route::get('balance/stripe/checkout/page', [BalanceController::class, 'getStripeCheckoutPage'])->name('balance.stripe.checkout-page');
    Route::post('balance/stripe/checkout/session', [BalanceController::class, 'createCheckoutSession'])->name('balance.stripe.checkout-session');

    Route::get('balance/stripe/checkout/return', [BalanceController::class, 'returnFromCheckoutSession'])->name('balance.stripe.checkout-return');

    // withdrawal
    Route::post('balance/stripe/withdrawal', [BalanceController::class, 'withdrawal'])->name('balance.stripe.withdrawal');
    Route::get('balance/stripe/onboarding/link', [BalanceController::class, 'goToOnboardingLink'])->name('stripe.onboarding-link');
    Route::get('balance/stripe/onboarding/return', [BalanceController::class, 'returnFromOnboarding'])->name('stripe.onboarding.return');
    // End Balance

    // purchase transactions
    Route::get('purchase/transactions', [PurchaseTransactionController::class, 'index'])->name('purchase-transactions.index');
    Route::delete('purchase/transactions/{transaction}', [PurchaseTransactionController::class, 'destroy'])->name('purchase-transactions.destroy');

    // bids
    Route::get('auction/{auction}/bid', [BidController::class, 'show'])->name('auction.bid.show');
    Route::post('auction/{auction}/bid', [BidController::class, 'bid'])->name('auction.bid.store');

    // start order

    // buy now page
    Route::get('order/buy-now/{item}', [OrderController::class, 'buyNow'])->name('order.buy-now');

    // stripe
    Route::get('order/stripe/checkout/page', [OrderController::class, 'getStripeCheckoutPage'])->name('order.stripe.checkout-page');
    Route::post('order/stripe/checkout/session', [OrderController::class, 'createCheckoutSession'])->name('order.stripe.checkout-session');

    Route::get('order/stripe/checkout/return', [OrderController::class, 'returnFromCheckoutSession'])->name('order.stripe.checkout-return');
    Route::get('order/stripe/checkout/success', [OrderController::class, 'buyNowFromStripeCheckoutSuccess'])->name('order.stripe.checkout-success');
    Route::get('order/stripe/checkout/cancel', [OrderController::class, 'buyNowFromStripeCheckoutCancel'])->name('order.stripe.checkout-cancel');

    Route::post('order/buy-now/from-balance', [OrderController::class, 'buyNowFormBalance'])->name('order.buy-now.from-balance');
    Route::post('order/checkout/cart/from-balance', [OrderController::class, 'CheckoutItemsCartFormBalance'])->name('order.checkout.cart.from-balance')->middleware([HandlePrecognitiveRequests::class]);
    // end order

    // invoice
    Route::get('invoice/buy/{transaction}', [InvoiceController::class, 'buy'])->name('invoice.buy');
    Route::get('invoice/buy/{transaction}/download', [InvoiceController::class, 'downloadInvoice'])->name('invoice.buy.download');

});
