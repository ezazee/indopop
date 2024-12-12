<?php

namespace App\Http\Controllers;

use App\Models\MediaItem;
use App\Models\Post;
use Illuminate\Http\Request;

class MediaController extends Controller
{
    public function index()
    {
        $mediaItems = MediaItem::all();
        dd($mediaItems);
        return view('backend.pages.media.index', compact('mediaItems'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $mediaItem = MediaItem::create(['name' => $request->file('image')->getClientOriginalName()]);
        $mediaItem->addMedia($request->file('image'))->toMediaCollection('images');

        return redirect()->route('media.index')->with('success', 'Image uploaded successfully.');
    }

    public function destroy($id)
    {
        $mediaItem = MediaItem::findOrFail($id);
        $mediaItem->clearMediaCollection('images');
        $mediaItem->delete();

        return response()->json(['success' => 'Image deleted successfully.']);
    }
}
