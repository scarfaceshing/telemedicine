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
     extract(request()->only(['filter', 'limit', 'page', 'sort', 'order']));


     $user = new User;
     $count = count($user->all());

     $data = $user
      ->whereLike(["name", "email"], "%{$filter}%")
      ->skip($page)
      ->limit($limit)
      ->orderBy($order, $sort)
      ->get();

     return response()->json([
      "result" => $data,
      "count" => $count
     ]);
    }
}
