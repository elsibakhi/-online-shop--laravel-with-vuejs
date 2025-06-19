<?php

namespace Modules\Finance\Actions\PurchaseTransaction;

class DeletePurchaseTransactionAction
{
    public function execute($transaction)
    {

        $transaction->delete();

    }
}
