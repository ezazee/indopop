<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Categori;

class CategoryController extends Controller
{
    public function categoryEdit() {
        return view('backend.pages.blog.category.edit');
    }
    public function categoryCreate() {
        return view('backend.pages.blog.category.create');
    }

    public function categoryAdd(Request $request) {
        dd($request);
        Categori::create([
            'nama_kategori' => $request->nama_kategori,
            'slug' => Str::slug($request->nama_kategori),
        ]);
        return redirect()->back()->with('success', 'Category Added successfully.');
    }
}
