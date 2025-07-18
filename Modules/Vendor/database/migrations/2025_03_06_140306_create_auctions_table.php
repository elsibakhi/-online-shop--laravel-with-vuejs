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
        Schema::create('auctions', function (Blueprint $table): void {
            $table->id();
            $table->timestamp('start');
            $table->timestamp('end');
            $table->enum('status', ['pending', 'started', 'done', 'fails', 'postponed'])->default('pending');
            $table->float('initial_price');
            $table->float('current_price');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('auctions');
    }
};
