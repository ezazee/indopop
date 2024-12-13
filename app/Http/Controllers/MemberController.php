<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;


class MemberController extends Controller
{
    public function memberIndex() {
        return view('backend.pages.member.index');
    }

    public function memberCreate(){
        return view('backend.pages.member.create');
    }

    public function memberPost(Request $request){
        $request->validate([
            'password' => 'required|min:8|confirmed',
            'images' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $imagePath = null;
        if ($request->hasFile('images')) {
            $directory = 'profile';

            if (!Storage::exists($directory)) {
                Storage::makeDirectory($directory);
            }

            $imagePath = $request->file('images')->store($directory, 'public');
        } else {
            $imagePath = '';
        }

        User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'name' => $request->first_name . ' ' . $request->last_name,
            'slug' => Str::slug($request->first_name . $request->last_name),
            'email' => $request->email,
            'phone' => $request->phone,
            'birthday' => $request->birthday,
            'description' => $request->description,
            'password' => bcrypt($request->password),
            'role_id' => 1,
            'status' => $request->status,
            'images' => $imagePath,
        ]);

        return redirect()->route('member.index')->with('success', 'Member berhasil ditambahkan!');
    }
}
