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

    public function index(Request $request) {

     [$data, $count] = User::getDataTable([
      'id',
      'name',
      'email',
      'email_verified_at',
      'created_at',
      'updated_at'
      ]);

      return response()->json([
          'result' => $data,
          'count' => $count
      ]);
    }
}
