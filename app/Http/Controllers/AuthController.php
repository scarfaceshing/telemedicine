<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

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

      if($credentials) response()->json(['error' => $credentials], 422);

      if (!Auth::attempt($credentials)) return response()->json(['status' => 'Unauthorized'], 401);
      $token = Auth::user()->createToken('API Token')->plainTextToken;

      return response()->json(['access_token' => $token]);
    }

    public function me(Request $request) {
     return Auth::user();
    }

    public function checkAuth(Request $request) {
     if (!auth()->check()) return ["authenticate" => false, "message" => "Not authenticate"];
     else return response()->json(["authenticate" => true, "message" => "User authenticated"]);
    }

    public function logout(Request $request) {
     /* if (Auth::guard('web')->logout()) return response()->json(['status' => 'Unauthorized'], 401);

     return response()->json(['status' => 'Logout Successfully']); */
     $request->user()->tokens()->delete();
     Auth::guard('web')->logout();

     return response()->json(["status" => "true"]);
    }
}
