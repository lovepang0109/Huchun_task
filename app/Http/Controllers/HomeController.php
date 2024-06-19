<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    //
    public function index(){
        return view('app');
    }

     public function kkk(){
        $base_path =  base_path();
        return view('kkk', ['path'=>$base_path]);
    }

}
