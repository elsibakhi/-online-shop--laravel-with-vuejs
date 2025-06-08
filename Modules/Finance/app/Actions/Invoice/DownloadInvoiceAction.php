<?php

namespace Modules\Finance\Actions\Invoice;

use Barryvdh\DomPDF\Facade\Pdf;
use Modules\Finance\Http\Resources\BuyInvoiceResource;
use Modules\Finance\Models\PurchaseTransaction;

class DownloadInvoiceAction
{
    public function execute(int $transactionId)
    {
        $transaction = PurchaseTransaction::query()
            ->where('buyer_id', auth()->id())
            ->with(['buyer', 'order.items'])
            ->findOrFail($transactionId);

        $transactionForInvoice = (new BuyInvoiceResource($transaction))->toArray(request());
        $transactionForInvoice['items'] = $transactionForInvoice['items']->toArray(request());

        $subtotal = collect($transactionForInvoice['items'])->sum(function ($item) {
            $lineTotal = $item['price'] * $item['quantity'];
            $discount = $item['discount'] ?? 0;

            return $lineTotal - ($lineTotal * $discount);
        });

        $totalDiscount = 0;
        $total = $subtotal - $totalDiscount;

        $pdf = Pdf::loadView('pdf.invoice-inline', [
            'transaction' => $transactionForInvoice,
            'subtotal' => $subtotal,
            'totalDiscount' => $totalDiscount,
            'total' => $total,
        ]);

        return $pdf->download('invoice.pdf');
    }
}
