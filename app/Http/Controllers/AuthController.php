<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    //
    public function __construct() {
     $this->middleware('auth:api', ['except' => ['login']]);
    }

    public function login(Request $request) {

     $credentials = $request->validate([
      'name' => ['required'],
      'password' => ['required'],
      ]);

      if($credentials) response()->json(['error' => $credentials], 422);

      if (!Auth::attempt($credentials)) return response()->json(['status' => 'Unauthorized'], 401);
      $accessToken = Auth::user()->createToken('authToken')->accessToken;

      return response()->json(['access_token' => $accessToken]);
    }

    public function me(Request $request) {
     return response()->json(auth()->user());
    }

    public function checkAuth(Request $request) {
     if (!auth()->check()) return ["authenticate" => false, "message" => "Not authenticate"];
     else return response()->json(["authenticate" => false, "message" => "User authenticate"]);
    }

    public function logout(Request $request) {

     Auth::user()->tokens->each(function($token, $key) {
      $token->delete();
     });

     // auth()->logout();
     return response()->json(["message" => "Logout successfully"]);
    }
}
