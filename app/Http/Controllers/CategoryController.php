<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\Categori;

class CategoryController extends Controller
{
    public function categoryEdit($id) {
        $categories = Categori::all(); 
        $category = Categori::where('id', $id)->firstOrFail();
        return view('backend.pages.blog.category.edit',compact('categories','category'));
    }
    public function categoryCreate() {
        $categories = Categori::all();
        return view('backend.pages.blog.category.create',compact('categories'));
    }

    public function categoryAdd(Request $request) {
        Categori::create([
            'nama_kategori' => $request->nama_kategori,
            'slug' => Str::slug($request->nama_kategori),
        ]);
        return redirect()->back()->with('success', 'Category Added successfully.');
    }
    
    public function categoryDestroy($id){
        $category = Categori::where('id', $id)->first();

        if ($category) {
            $category->delete();
            return redirect()->route('category.create')->with('success', 'Category deleted successfully.');
        }

        return redirect()->route('category.edit')->with('error', 'Category not found.');
    }
}
