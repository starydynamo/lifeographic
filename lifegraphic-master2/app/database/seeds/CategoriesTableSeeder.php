<?php

class CategoriesTableSeeder extends Seeder {

	public function run()
        {
            DB::table('users')->delete();
            Category::create(array('name' => 'love'));
            Category::create(array('name' => 'health'));
            Category::create(array('name' => 'assets'));
            Category::create(array('name' => 'mood'));
        }

}