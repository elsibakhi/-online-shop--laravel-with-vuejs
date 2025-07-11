<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('tags', function (Blueprint $table): void {
            $table->id();
            $table->string('tag')->unique();

        });
    }

    public function down()
    {
        Schema::dropIfExists('tags');
    }
};
