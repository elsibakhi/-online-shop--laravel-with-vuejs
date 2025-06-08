<?php

namespace Modules\Finance\Http\Controllers;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Modules\Finance\Actions\Invoice\DownloadInvoiceAction;
use Modules\Finance\Actions\Invoice\GetPurchaseTransactionForBuyingInvoiceAction;

class InvoiceController extends Controller
{
    /**
     * Display a buy invoice.
     */
    public function buy(GetPurchaseTransactionForBuyingInvoiceAction $getPurchaseTransactionForBuyingInvoiceAction, $transaction)
    {

        $transaction = $getPurchaseTransactionForBuyingInvoiceAction->execute($transaction);

        return Inertia::render('Finance::Invoice/buy', [
            'transaction' => $transaction,
        ]);

    }

    public function downloadInvoice(DownloadInvoiceAction $downloadInvoiceAction, $transactionId)
    {
        $response = $downloadInvoiceAction->execute($transactionId);

        return $response;
    }
}
