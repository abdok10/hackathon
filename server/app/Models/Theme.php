<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Theme extends Model
{
    use HasFactory;

    protected $fillable = [
        'domaines_id',
        'intitule_theme',
        'duree_formation',
        'status',
    ];

    public function domaine()
    {
        return $this->belongsTo(Domaine::class, 'domaines_id');
    }

    public function plans()
    {
        return $this->hasMany(Plan::class, 'themes_id');
    }

    public function actions()
    {
        return $this->hasMany(Action::class, 'themes_id');
    }
}
