<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i =1; $i < 5; $i++){
            DB::table('products')->insert([
                'name' => 'Product-'. $i,
                'price' => $i . '00000',
                'color' => 'Color-' .$i,
                'desc' => 'Description'. $i,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => null,
            ]);
        }
    }
}
