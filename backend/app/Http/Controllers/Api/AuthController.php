<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{

        public function __construct(){
            $this->middleware("auth:sanctum",['except'=>["register"]]);
        }


    public function register(Request $request){

        $request->validate([
            "name"=>'required|string',
            "email"=>"required|unique:users,email",
            "password"=>"required|string|confirmed",
        ]);

        $user=User::create([
            "name"=>$request->name,
            "email"=>$request->email,
            "password"=>bcrypt($request->password),
        ]);

        $token=$user->createToken("token-name")->plainTextToken;

        return response()->json([
            "success"=>$user,
            "token"=>$token,
        ]);
    }

    public function logout(Request $request){
        $request->user()->currentAccessToken()->delete();
        return response()->json([
            "success"=>true,
            "message"=>"User has been log Out!"
        ]);


    }


}
