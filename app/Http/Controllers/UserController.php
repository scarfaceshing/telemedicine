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

    public function index($offset, $limit) {
     $data = User::skip($offset)
      ->limit($limit)
      ->get();
     $total = count(User::all());

     return response()->json([
      "result" => $data,
      "query" => [
       "offset" => $offset,
       "limit" => $limit,
       "total" => $total
      ]]);
    }
}
