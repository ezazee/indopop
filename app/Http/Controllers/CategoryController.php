<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function categoryIndex() {
        return view('backend.pages.blog.category.index');
    }
    public function categoryEdit() {
        return view('backend.pages.blog.category.edit');
    }
    public function categoryCreate() {
        return view('backend.pages.blog.category.create');
    }
}
