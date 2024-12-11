<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TagsController extends Controller
{
    public function tagsIndex()
    {
        return view('backend.pages.blog.tags.index');
    }
    public function tagsEdit()
    {
        return view('backend.pages.blog.tags.edit');
    }
    public function tagsCreate()
    {
        return view('backend.pages.blog.tags.create');
    }
}
