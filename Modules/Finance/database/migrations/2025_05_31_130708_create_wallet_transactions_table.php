<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('wallet_transactions', function (Blueprint $table): void {
            $table->id();

            $table->decimal('amount', 15, 2);
            $table->string('currency', 10)->default('USD');
            $table->enum('method', ['stripe', 'paypal', 'crypto']);
            $table->enum('transaction_type', ['deposit', 'withdrawal']);
            $table->enum('status', ['pending', 'completed', 'failed'])->default('pending');
            $table->string('external_reference')->nullable();
            $table->json('metadata')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('wallet_transactions');
    }
};
