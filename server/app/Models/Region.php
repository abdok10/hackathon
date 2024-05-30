<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Region extends Model
{
    use HasFactory;

    protected $fillable = [
        'users_id',
        'nom_region',
    ];

    public function etablissement()
    {
        return $this->hasMany(Etablissement::class, 'regions_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'users_id');
    }
}
