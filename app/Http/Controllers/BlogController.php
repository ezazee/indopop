<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Categori;

class BlogController extends Controller
{
    public function blogPost(){
        return view('backend.pages.blog.posting.index');
    }
    public function editPost(){
        return view('backend.pages.blog.posting.edit');
    }
    public function createPost() {
        $category = Categori::all();
        // dd($category);
        return view('backend.pages.blog.posting.create',compact('category'));
    }
}
