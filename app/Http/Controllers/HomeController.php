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
        return view('kkk');
    }

}
