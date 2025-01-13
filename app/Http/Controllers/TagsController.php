<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tag;
use Illuminate\Support\Str;
use RealRashid\SweetAlert\Facades\Alert;


class TagsController extends Controller
{
    public function tagsIndex(Request $request)
    {

        $query = Tag::query();

        if ($request->has('filter_columns')) {
            foreach ($request->input('filter_columns') as $index => $column) {
                $operator = $request->input('filter_operators')[$index] ?? '=';
                $value = $request->input('filter_values')[$index] ?? '';
    
                if (!empty($column) && !empty($value)) {
                    if ($operator === 'like') {
                        $value = "%$value%";
                    }
    
                    $query->where($column, $operator, $value);
                }
            }
        }
    
        $tag = $query->paginate(50);
        return view('backend.pages.blog.tags.index',compact('tag'));
    }
    public function tagsEdit($id)
    {
        $tag = Tag::where('id', $id)->firstOrFail();
        Alert::success('Success', 'Tags updated successfully!!');
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
        Alert::success('Success', 'Tags added successfully!!');
        return redirect()->back()->with('success', 'Tag Added successfully.');
    }

    public function tagDelete($id){
        $tag = Tag::findOrFail($id);
        $tag->delete();
        Alert::error('Delete', 'Tag Deleted!!');
        return redirect()->route('tags.index')->with('success', 'Member deleted successfully.');
    }
}
