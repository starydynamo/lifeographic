<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ChangeColumnReasonIdToReasonsForCategoryValuesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
            Schema::table('category_values', function(Blueprint $table)
            {
                $table->dropColumn('reason_id');
                $table->text('reasons')->after('category_value');
            });
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
            Schema::table('category_values', function(Blueprint $table)
            {
                $table->integer('reason_id');
                $table->dropColumn('reasons');
            });
            
	}

}
