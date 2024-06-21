<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;


class HomeController extends Controller
{
    //
    public function index(){
        return view('app');
    }

     public function kkk(){

        // $result = $this->visitGoogle();

        $client = new \VercelBlobPhp\Client();

        $result = $client->put(
          path: '0_indexAjax.json',   // path
          content: '{ss:iil}' // content,
          options: new \VercelBlobPhp\CommonCreateBlobOptions(
              addRandomSuffix: true,      // optional
              contentType: 'text',        // optional
              cacheControlMaxAge: 123,    // optional
          )
      );

     
        return view('kkk', ['path'=>$client->head('url')]);
    }


    // In your controller or route
    public function visitGoogle()
    {
        $response = Http::get('https://debjit012.medium.com/deploy-laravel-on-vercel-with-database-image-storage-and-email-2d3917cfc914');

        // You can now work with the response
        $statusCode = $response->status();
        $body = $response->body();

        // For example, you can return the response body
        return $body;
    }


}
