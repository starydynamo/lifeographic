<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateReasonsTable extends Migration {

	public function up()
	{
		Schema::create('reasons', function(Blueprint $table) {
			$table->increments('id');
			$table->integer('user_id')->unsigned();
			$table->integer('category_id')->unsigned();
			$table->text('reason_text');
		});
	}

	public function down()
	{
		Schema::drop('reasons');
	}
}