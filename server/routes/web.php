<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ActionController;
use App\Http\Controllers\CertificationController;
use App\Http\Controllers\DomaineController;
use App\Http\Controllers\EntrepriseController;
use App\Http\Controllers\EtablissementController;
use App\Http\Controllers\IntervenantController;
use App\Http\Controllers\PlanController;
use App\Http\Controllers\RegionController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\ThemeController;
use App\Http\Controllers\UserController;

Route::get('/', function () {
    return ['Laravel' => app()->version()];
});


Route::apiResource('actions', ActionController::class);
Route::apiResource('certifications', CertificationController::class);
Route::apiResource('domaines', DomaineController::class);
Route::apiResource('entreprises', EntrepriseController::class);
Route::apiResource('etablissements', EtablissementController::class);
Route::apiResource('intervenants', IntervenantController::class);
Route::apiResource('plans', PlanController::class);
Route::apiResource('regions', RegionController::class);
Route::apiResource('roles', RoleController::class);
Route::apiResource('themes', ThemeController::class);
Route::apiResource('users', UserController::class);


require __DIR__.'/auth.php';
