<?php

namespace Modules\Finance\Actions\PurchaseTransaction;

use Modules\Finance\Http\Resources\PurchaseTransactionResource;

class GetUserPurchaseTransactionsAction
{
    public function execute()
    {

        return PurchaseTransactionResource::collection(auth()->user()->purchaseTransactions()->get());

    }
}
