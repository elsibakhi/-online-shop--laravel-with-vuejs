<?php

namespace Modules\Finance\Http\Controllers;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Modules\Admin\Services\CategoryService;
use Modules\Finance\Actions\PurchaseTransaction\DeletePurchaseTransactionAction;
use Modules\Finance\Actions\PurchaseTransaction\GetUserPurchaseTransactionsAction;
use Modules\Finance\Models\PurchaseTransaction;

class PurchaseTransactionController extends Controller
{
    //
    public function __construct(protected CategoryService $categoryService) {}

    public function index(GetUserPurchaseTransactionsAction $getUserPurchaseTransactionsAction)
    {

        $transactions = $getUserPurchaseTransactionsAction->execute();

        return Inertia::render('Finance::Purchase/index', compact('transactions'));
    }

    public function destroy(DeletePurchaseTransactionAction $deletePurchaseTransactionAction, PurchaseTransaction $transaction)
    {

        $deletePurchaseTransactionAction->execute($transaction);

        return to_route('purchase-transactions.index')->with('message', trans('finance::messages.purchase-transaction.deleted'));
    }
}
