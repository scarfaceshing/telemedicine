<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    //
    public function __construct()
    {
     $this->middleware('auth:sanctum');
    }

    public function index() {

     $user = User::all();

     return response()->json(["user" => $user]);
    }
}
