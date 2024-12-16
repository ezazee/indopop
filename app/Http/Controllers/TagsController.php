<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tag;
use Illuminate\Support\Str;


class TagsController extends Controller
{
    public function tagsIndex()
    {
        $tag = Tag::paginate(15);
        return view('backend.pages.blog.tags.index',compact('tag'));
    }
    public function tagsEdit($id)
    {
        $tag = Tag::where('id', $id)->firstOrFail();
        return view('backend.pages.blog.tags.edit',compact('tag'));
    }
    public function tagsCreate()
    {
        return view('backend.pages.blog.tags.create');
    }

    public function tagAdd(Request $request){
        Tag::create([
            'nama_tags' => $request->nama_tags,
            'slug' => Str::slug($request->nama_tags),
        ]);
        return redirect()->back()->with('success', 'Tag Added successfully.');
    }
}
