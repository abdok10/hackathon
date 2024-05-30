<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class userController extends Controller
{
    public function index()
    {
        $users = User::with(['hasRole', 'entreprises', 'etablissements', 'intervenants', 'regions'])->get();

        // return User::all();
        return response()->json($users);
    }

    public function show($id)
    {
        return User::findOrFail($id);
    }

    public function store(Request $request)
    {
        $request->validate([
            'roles_id'=>'required|integer',
            'email'=>'required|string',
            'password'=>'required|min:8'
        ]
        );
        return User::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'roles_id'=>'required|integer',
            'email'=>'required|string',
            'password'=>'required|min:8'
        ]
        );
        $user = User::findOrFail($id);
        $user->update($request->all());

        return $user;
    }

    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();

    }
}
