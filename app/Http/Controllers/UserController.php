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

    public function index($offset=0,$limit=5,$orderby='created_at',$sortby='asc') {

     $data = User::skip($offset)
     ->limit($limit)
     ->orderBy($orderby, $sortby)
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
