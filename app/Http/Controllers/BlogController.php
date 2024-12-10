<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function blogPost(){
        return view('backend.pages.blog.posting.index');
    }

    public function editPost(){
        return view('backend.pages.blog.posting.edit');
    }
}
