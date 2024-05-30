<?php 

namespace App\Http\Controllers;

use App\Models\Intervenant;
use Illuminate\Http\Request;

class IntervenantController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $intervenants = Intervenant::all();
        return response()->json($intervenants);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // Typically used for returning a view with a form for creating a new resource.
        // return view('intervenants.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'etablissements_id' => 'required|exists:etablissements,id',
            'users_id' => 'required|exists:users,id',
            'matricule' => 'required|string|max:45',
            'nom' => 'required|string|max:45',
            'datenaissance' => 'required|date',
            'intitule_diplome' => 'required|string|max:45',
            'type_diplome' => 'required|string|max:45',
            'specialite_diplome' => 'required|string|max:45',
            'type_intervenant' => 'required|integer',
            'status' => 'required|integer',
        ]);

        $intervenant = Intervenant::create($validatedData);

        return response()->json($intervenant, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $intervenant = Intervenant::findOrFail($id);
        return response()->json($intervenant);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $intervenant = Intervenant::findOrFail($id);
        // Typically used for returning a view with a form for editing the resource.
        // return view('intervenants.edit', compact('intervenant'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'etablissements_id' => 'required|exists:etablissements,id',
            'users_id' => 'required|exists:users,id',
            'matricule' => 'required|string|max:45',
            'nom' => 'required|string|max:45',
            'datenaissance' => 'required|date',
            'intitule_diplome' => 'required|string|max:45',
            'type_diplome' => 'required|string|max:45',
            'specialite_diplome' => 'required|string|max:45',
            'type_intervenant' => 'required|integer',
            'status' => 'required|integer',
        ]);

        $intervenant = Intervenant::findOrFail($id);
        $intervenant->update($validatedData);

        return response()->json($intervenant);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $intervenant = Intervenant::findOrFail($id);
        $intervenant->delete();

        return response()->json(null, 204);
    }
}
