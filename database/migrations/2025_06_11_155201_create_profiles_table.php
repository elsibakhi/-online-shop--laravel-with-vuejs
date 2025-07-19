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
        Schema::create('profiles', function (Blueprint $table) {
            $table->id();
            $table->string('locale')->default('en');
            $table->char('countryCode', 5)->default('US');
            $table->enum('timezone', DateTimeZone::listIdentifiers())->default('America/New_York');
            $table->string('avatar')->nullable();
            $table->string('phone')->nullable();
            $table->string('lat')->nullable();
            $table->string('lng')->nullable();
            $table->string('city')->nullable();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('profiles');
    }
};
