<?php

namespace App\Http\Controllers;

use App\Models\Action;
use Illuminate\Http\Request;

class ActionController extends Controller
{
    public function index() {
        return Action::all();
    }

    public function store(Request $request) {
        $request->validate([
            'exercice' => 'required',
            'entreprises_id' => 'required|exists:entreprises,id',
            // other fields...
        ]);

        return Action::create($request->all());
    }

    public function show($id) {
        return Action::findOrFail($id);
    }

    public function update(Request $request, $id) {
        $action = Action::findOrFail($id);
        $action->update($request->all());

        return $action;
    }

    public function destroy($id) {
        $action = Action::findOrFail($id);
        $action->delete();

        return response()->noContent();
    }
}
