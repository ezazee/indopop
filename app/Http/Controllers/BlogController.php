<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Categori;
use App\Models\Post;

class BlogController extends Controller
{
    public function blogPost(){
        $post = Post::with('kategori', 'user')
        ->latest()
        ->paginate(20);

        
        return view('backend.pages.blog.posting.index',compact('post'));
    }
    public function editPost(){
        return view('backend.pages.blog.posting.edit');
    }
    public function createPost() {
        $category = Categori::all();
        return view('backend.pages.blog.posting.create',compact('category'));
    }

    public function PostAdd(Request $request) {
        dd($request);
        return redirect()->back()->with('success', 'Category Added successfully.');
    }
    
}
