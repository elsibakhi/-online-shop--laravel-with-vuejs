<?php

namespace Modules\Finance\Actions\Invoice;

use Modules\Finance\Http\Resources\BuyInvoiceResource;
use Modules\Finance\Models\PurchaseTransaction;

class GetPurchaseTransactionForBuyingInvoiceAction
{
    public function execute(int $transactionId)
    {
        $transaction = PurchaseTransaction::query()
            ->where('buyer_id', auth()->id())
            ->with(['buyer', 'order.items'])
            ->findOrFail($transactionId);

        return new BuyInvoiceResource($transaction);
    }
}
