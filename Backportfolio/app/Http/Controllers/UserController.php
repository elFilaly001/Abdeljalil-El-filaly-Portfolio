<?php

namespace App\Http\Controllers;

use App\Models\UserMongo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index()
    {
        $users = UserMongo::all();
        return response()->json($users);
    }

    public function store(Request $request)
    {
        // dd($request->all());
        $users = $request->all();
        $users['password'] = Hash::make($users['password']);
        $user = UserMongo::create($users);
        return response()->json($user);
    }
}
