<?php

namespace Modules\Finance\Actions\Balance;

use Modules\Finance\Models\WalletTransaction;

class GetTransactionsForIndexPage
{
    public function execute()
    {

        return WalletTransaction::query()
            ->where('user_id', auth()->id())
            ->latest()
            ->paginate(10);
    }
}
