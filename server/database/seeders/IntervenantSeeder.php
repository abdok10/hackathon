<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class IntervenantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('intervenants')->insert([
            [
                'etablissements_id' => 1,
                'users_id' => 1,
                'matricule' => Str::random(10),
                'nom' => 'John Doe',
                'datenaissance' => '1980-01-01',
                'intitule_diplome' => 'PhD in Computer Science',
                'type_diplome' => 'PhD',
                'specialite_diplome' => 'Artificial Intelligence',
                'type_intervenant' => 1,
                'status' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'etablissements_id' => 2,
                'users_id' => 2,
                'matricule' => Str::random(10),
                'nom' => 'Jane Smith',
                'datenaissance' => '1990-05-15',
                'intitule_diplome' => 'Master in Business Administration',
                'type_diplome' => 'Master',
                'specialite_diplome' => 'Management',
                'type_intervenant' => 2,
                'status' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            // Add more records as needed
        ]);
    }
}

