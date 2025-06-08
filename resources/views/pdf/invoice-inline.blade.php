<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Invoice #{{ $transaction['id']}}</title>
</head>
<body style="font-family: Arial, sans-serif; font-size: 14px; color: #333; padding: 30px; margin: 0;">

    {{-- Header --}}
    <div style="text-align: center; border-bottom: 2px solid #000; padding-bottom: 10px; margin-bottom: 30px;">
        <h1 style="margin: 0; font-size: 28px;">{{ config('app.name') }}</h1>
        <p style="margin: 5px 0; font-size: 18px;">Purchase Invoice</p>
    </div>

    {{-- Invoice Info --}}
    <div style="max-width: 800px; margin: auto;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
            <div>
                <h4 style="margin: 0;">Invoice ID</h4>
                <p style="margin: 5px 0;">#{{ $transaction['id'] }}</p>
                <p style="margin: 5px 0;">Date: {{ \Carbon\Carbon::parse($transaction['created_at'])->format('Y-m-d') }}</p>
            </div>
            <div>
                <span style="padding: 6px 12px; color: white; border-radius: 5px;
                    background-color: {{ $transaction['status'] === 'completed' ? '#28a745' : '#ffc107' }};">
                    {{ ucfirst($transaction['status']) }}
                </span>
            </div>
        </div>

        {{-- Parties --}}
        <div style="display: flex; justify-content: space-between; margin-bottom: 30px;">
        
            <div>
                <h4 style="margin-bottom: 5px;">Buyer</h4>
                <p style="margin: 0;">{{ $transaction['buyer'] }}</p>
            </div>
        </div>

        {{-- Items Table --}}
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <thead>
                <tr style="background: #f0f0f0;">
                    <th style="padding: 8px; border: 1px solid #ccc;">Item</th>
                    <th style="padding: 8px; border: 1px solid #ccc;">Qty</th>
                    <th style="padding: 8px; border: 1px solid #ccc;">Unit Price</th>
                    <th style="padding: 8px; border: 1px solid #ccc;">Total</th>
                    <th style="padding: 8px; border: 1px solid #ccc;">Discount</th>
                    <th style="padding: 8px; border: 1px solid #ccc;">Total After Discount</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($transaction['items'] as $item)
                    @php
                        $lineTotal = $item['price'] * $item['quantity'];
                        $discountAmount = $lineTotal * $item['discount'];
                        $totalAfterDiscount = $lineTotal - $discountAmount;
                    @endphp
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">{{ $item['title'] }}</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">{{ $item['quantity'] }}</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">${{ number_format($item['price'], 2) }}</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">${{ number_format($lineTotal, 2) }}</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">${{ number_format($discountAmount, 2) }}</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">${{ number_format($totalAfterDiscount, 2) }}</td>
                    </tr>
                @endforeach
            </tbody>
        </table>

        {{-- Totals --}}
        <div style="text-align: right; margin-top: 20px;">
            <p><strong>Subtotal:</strong> ${{ number_format($subtotal, 2) }}</p>
            <p><strong>Discount:</strong> -${{ number_format($totalDiscount, 2) }}</p>
            <p style="font-size: 18px;"><strong>Total:</strong> ${{ number_format($total, 2) }}</p>
        </div>
    </div>

    {{-- Footer --}}
    <div style="position: fixed; bottom: 30px; left: 0; right: 0; text-align: center; font-size: 12px; color: #777;">
        <hr style="border: none; border-top: 1px solid #ccc; margin-bottom: 5px; width: 90%;">
        <p style="margin: 0;">
            &copy; {{ date('Y') }} {{ config('app.name') }} | Transaction Date: {{ \Carbon\Carbon::parse($transaction['created_at'])->format('Y-m-d') }}
        </p>
    </div>

</body>
</html>
