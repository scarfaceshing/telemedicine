<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    //
    public function __construct() {
     $this->middleware('auth:sanctum', ['except' => ['login', 'logout']]);
    }

    public function login(Request $request) {

     $credentials = $request->validate([
      'name' => ['required'],
      'password' => ['required'],
      ]);

      if (!Auth::attempt($credentials)) return response()->json(['status' => 'Unauthorized'], 401);

      $token = $request->user()->createToken($request->name.date("Y-m-d H:i:s"));
      return ['token' => $token->plainTextToken];
    }

    public function me(Request $request) {
     return response()->json(auth()->user());
    }

    public function checkAuth(Request $request) {
     if (!auth()->check()) return ["authenticate" => false, "message" => "Not authenticate"];
     else return ["authenticate" => false, "message" => "User authenticate"];
    }

    public function logout(Request $request) {
     auth()->user()->tokens()->delete();

     return response()->json(["message" => "Logout successfully"]);
    }
}
