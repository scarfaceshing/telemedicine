<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    //
    public function __construct() {
     $this->middleware('auth:sanctum', ['except' => ['login']]);
    }

    public function login(Request $request) {

     $credentials = $request->validate([
      'name' => ['required'],
      'password' => ['required'],
      ]);

      if (!Auth::attempt($credentials)) return response()->json(['status' => 'Unauthorized'], 401);

      return response()->json(["status" => "Success"]);
    }

    public function me(Request $request) {

     return response()->json(auth()->user());
    }
}
