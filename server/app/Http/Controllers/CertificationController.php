<?php

namespace App\Http\Controllers;

use App\Models\Certification;
use Illuminate\Http\Request;

class CertificationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $certifications = Certification::all();
        return view('certifications.index', compact('certifications'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('certifications.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'domaines_id' => 'required',
            'Intervenants_id' => 'required',
            'intiltule_certification' => 'required|max:45',
            'organisme_certification' => 'required|max:45',
            'type_certification' => 'required|max:45',
        ]);

        Certification::create($request->all());

        return redirect()->route('certifications.index')
                        ->with('success', 'Certification created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Certification $certification)
    {
        return view('certifications.show', compact('certification'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Certification $certification)
    {
        return view('certifications.edit', compact('certification'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Certification $certification)
    {
        $request->validate([
            'domaines_id' => 'required',
            'Intervenants_id' => 'required',
            'intiltule_certification' => 'required|max:45',
            'organisme_certification' => 'required|max:45',
            'type_certification' => 'required|max:45',
        ]);

        $certification->update($request->all());

        return redirect()->route('certifications.index')
                        ->with('success', 'Certification updated successfully.');
    }

    public function destroy(Certification $certification) {
        $certification->delete();

        return redirect()->route('certifications.index')
                        ->with('success', 'Certification deleted successfully.');
    }

}