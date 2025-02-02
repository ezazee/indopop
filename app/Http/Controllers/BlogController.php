<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Categori;
use App\Models\Post;
use App\Models\Tag;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use RealRashid\SweetAlert\Facades\Alert;


class BlogController extends Controller
{
    public function blogPost(Request $request)
    {
        $query = Post::with('kategori', 'user');
    
        if ($request->has('filter_columns')) {
            foreach ($request->filter_columns as $index => $column) {
                $operator = $request->filter_operators[$index] ?? 'like';
                $value = $request->filter_values[$index] ?? '';
    
                if (!empty($column) && !empty($value)) {
                    if ($column === 'categori') {
                        $query->whereHas('kategori', function ($q) use ($operator, $value) {
                            if ($operator === 'like') {
                                $value = "%$value%"; 
                            }
                            $q->where('nama_kategori', $operator, $value);
                        });
                    } elseif ($column === 'author') {
                        $query->whereHas('user', function ($q) use ($operator, $value) {
                            if ($operator === 'like') {
                                $value = "%$value%"; 
                            }
                            $q->where('name', $operator, $value);
                        });
                    }else {
                        if ($operator === 'like') {
                            $value = "%$value%"; 
                        }
                        $query->where($column, $operator, $value);
                    }
                }
            }
        }
    
        $post = $query->latest()->paginate(20);
    
        return view('backend.pages.blog.posting.index', compact('post'));
    }
    
    public function editPost($id){
        $post = Post::with('kategori')->findOrFail($id);
        $category = Categori::all();
        return view('backend.pages.blog.posting.edit',compact('post','category'));
    }
    public function createPost() {
        $category = Categori::all();
        return view('backend.pages.blog.posting.create',compact('category'));
    }

    public function PostAdd(Request $request) {

        // $validatedData = $request->validate([
        //     'name' => 'required|string|max:255',
        //     'slug' => 'nullable|string|max:255|unique:posts,slug',
        //     'description' => 'nullable|string',
        //     'content' => 'nullable|string',
        //     'seo_meta.seo_title' => 'nullable|string|max:255',
        //     'seo_meta.seo_description' => 'nullable|string|max:255',
        //     'status' => 'required|string|in:published,draft',
        //     'headline' => 'nullable|string|in:yes,no',
        //     'categories' => 'required|integer|exists:categories,id',
        //     'banner_image' => 'nullable|url',
        //     'tag' => 'nullable|json',
        // ]);
    
            // dd($request);
            $post = Post::create([
                'title' => $request->input('title'),
                'slug' => $request->input('title', Str::slug($request->input('title'))),
                'short_description' => $request->input('short_description'),
                'content' => $request->input('content'),
                'keyword' => $request->input('seo_meta.seo_title'),
                'description' => $request->input('seo_meta.seo_description'),
                'status' => $request->input('status'),
                'headline' => $request->input('headline', 'no'),
                'kategori_id' => $request->input('categories'),
                'gambar' => $request->input('banner_image'),
                'user_id' => Auth::id(),
            ]);
            
            $tags = json_decode($request->input('tag'), true);
            if ($tags && is_array($tags)) {
                $tagIds = [];
                foreach ($tags as $tag) {
                    if (!empty($tag['value'])) {
                        $slug = Str::slug($tag['value']);
                        
                        $tagModel = Tag::firstOrCreate(
                            ['nama_tags' => $tag['value']],
                            ['slug' => $slug] 
                        );
                        $tagIds[] = $tagModel->id;
                    }
                }
            
                $post->tags()->sync($tagIds);
            }
        Alert::success('Success', 'Post added successfully!!');
        return redirect()->back()->with('success', 'post Added successfully.');
    }


    public function PostUpdate(Request $request, $id) {

        $post = Post::findOrFail($id);

        $post->update([
            'title' => $request->input('title'),
            'short_description' => $request->input('short_description'),
            'content' => $request->input('content'),
            'keyword' => $request->input('seo_meta.seo_title'),
            'description' => $request->input('seo_meta.seo_description'),
            'status' => $request->input('status'),
            'headline' => $request->input('headline', 'no'),
            'kategori_id' => $request->input('categories'),
            'gambar' => $request->input('banner_image'),
        ]);
    
        $tags = json_decode($request->input('tag'), true);
        if ($tags && is_array($tags)) {
            $tagIds = [];
            foreach ($tags as $tag) {
                if (!empty($tag['value'])) {
                    $slug = Str::slug($tag['value']);
                    
                    $tagModel = Tag::firstOrCreate(
                        ['nama_tags' => $tag['value']],
                        ['slug' => $slug]
                    );
                    $tagIds[] = $tagModel->id;
                }
            }
    
            $post->tags()->sync($tagIds);
        }
    
        Alert::success('Success', 'Post updated successfully!!');
        return redirect()->back()->with('success', 'post Added successfully.');
    }
    

    public function deletePost($id)
    {
        $post = Post::findOrFail($id);
        $post->delete();
        Alert::error('Delete', 'Post Deleted!!');
        return redirect()->route('blog.post')->with('success', 'Post deleted successfully.');
    }
    
}
