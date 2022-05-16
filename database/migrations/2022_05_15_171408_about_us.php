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
        
        Schema::create('about_us', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->tinyText('body');
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
        //
    }
};
