<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{

  public function store(Request $request)
  {
    $validator = Validator::make($request->all(), [
      'name' => 'required|string|max:255',
      'email' => 'required|string|max:255|unique:users',
      'password' => 'required|string|min:6',
    ]);

    if ($validator->fails()) {
      return response()->json(['errors' => $validator->errors()], 400);
    }

    $user = new User();
    $user->name = $request->name;
    $user->email = $request->email;
    $user->password = Hash::make($request->password);
    $user->next_expiration = Carbon::now()->addDays(10);
    $user->delete_account = Carbon::now()->addDays(15);
    $user->save();

    if (!$user->id) {
      return response()->json(['error' => 'Erro ao cadastrar usuário'], 400);
    }

    return response()->json([
      'access_token' => $user->createToken('auth-api')->accessToken
    ], 200);
  }
}
