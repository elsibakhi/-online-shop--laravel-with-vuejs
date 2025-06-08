<?php

namespace App\Http\Controllers;

use App\Http\Requests\SearchRequest;
use App\Models\User;

class UserController extends Controller
{
    //
    public function search(SearchRequest $request)
    {

        return User::search($request->get('query'))->take(10)->get();

    }
}
