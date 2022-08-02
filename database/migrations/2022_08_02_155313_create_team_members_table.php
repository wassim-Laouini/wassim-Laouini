<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('team_members', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100);
            $table->longText('image');
            $table->string('email')->nullable();
            $table->tinyText('description');
            $table->string('profession');
            $table->string('upwork_link')->nullable();
            $table->string('profile_link')->nullable();
            $table->tinyInteger('status')->default(0)->comment('1 is refrence to active , 0 is inactive');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('teams');
    }
};
