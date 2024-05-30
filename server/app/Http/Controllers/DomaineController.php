<?php

namespace App\Http\Controllers;

use App\Models\Domaine;
use Illuminate\Http\Request;

class DomaineController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $domaines = Domaine::all();
        return response()->json($domaines);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // Typically used for returning a view with a form for creating a new resource.
        // return view('domaines.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'nom_domaine' => 'required|string|max:255',
            'status' => 'required|integer',
        ]);

        $domaine = Domaine::create($validatedData);

        return response()->json($domaine, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $domaine = Domaine::findOrFail($id);
        return response()->json($domaine);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $domaine = Domaine::findOrFail($id);
        // Typically used for returning a view with a form for editing the resource.
        // return view('domaines.edit', compact('domaine'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'nom_domaine' => 'required|string|max:255',
            'status' => 'required|integer',
        ]);

        $domaine = Domaine::findOrFail($id);
        $domaine->update($validatedData);

        return response()->json($domaine);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $domaine = Domaine::findOrFail($id);
        $domaine->delete();

        return response()->json(null, 204);
    }
}
