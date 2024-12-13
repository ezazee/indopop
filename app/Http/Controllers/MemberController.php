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

    public function memberEdit($slug){
        $member = User::with('role')->where('slug', $slug)->firstOrFail();
        return view('backend.pages.member.edit',compact('member'));
    }


    public function memberUpdate(Request $request, $id)
    {
        $users = User::findOrFail($id);

        if ($request->hasFile('images')) {
            $directory = 'profile';

            if (!Storage::exists($directory)) {
                Storage::makeDirectory($directory);
            }

            if ($users->images && Storage::exists($users->images)) {
                Storage::delete($users->images);
            }

            $imagePath = $request->file('images')->store($directory, 'public');
        } else {
            $imagePath = $users->images;
        }

        $fullName = $request->input('first_name') . ' ' . $request->input('last_name');
        $newSlug = Str::slug($fullName);

        $updateData = [
            'first_name' => $request->input('first_name'),
            'last_name' => $request->input('last_name'),
            'name' => $fullName,
            'slug' => $newSlug,
            'email' => $request->input('email'),
            'phone' => $request->input('phone'),
            'birthday' => $request->input('birthday'),
            'description' => $request->input('description'),
            'role_id' => 1,
            'status' => $request->input('status'),
            'images' => $imagePath,
        ];

        if ($request->filled('password')) {
            $request->validate([
                'password' => 'required|confirmed|min:8',
            ]);
            $updateData['password'] = bcrypt($request->input('password'));
        }

        $users->update($updateData);
        return redirect()->back()->with('success', 'Users updated successfully.');
    }

    public function destroy($id)
    {
        $member = User::findOrFail($id);
        $member->delete();
        Alert::error('Deleted', 'Member deleted successfully.');
        return redirect()->route('member.index')->with('success', 'Member deleted successfully.');
    }
}
