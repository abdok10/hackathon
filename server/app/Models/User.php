<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'email',
        'password',
        'roles_id'
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    // public function roles()
    // {
    //     return $this->belongsToMany(Role::class, 'model_has_roles', 'model_id', 'role_id');
    // }
    public function hasRole() {
        return $this->belongsTo(Role::class, 'roles_id');
    }

    public function entreprises()
    {
        return $this->hasMany(Entreprise::class, 'users_id');
    }

    public function etablissements()
    {
        return $this->hasMany(Etablissement::class, 'users_id');
    }

    public function intervenants()
    {
        return $this->hasMany(Intervenant::class, 'users_id');
    }

    public function regions()
    {
        return $this->hasMany(Region::class, 'users_id');
    }
}
