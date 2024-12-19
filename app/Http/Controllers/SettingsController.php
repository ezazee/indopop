<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Str;

class SettingsController extends Controller
{
    // Annalytics
    public function annalytic()
    {
        return view('backend.pages.settings.googleAnnalytic.index');
    }

    // Google Tag
    public function googleTag()
    {
        return view('backend.pages.settings.googleTag.index');
    }

    // Member Dasboard
    public function memberDashboard()
    {
        $user = User::whereHas('role', function ($query) {
            $query->where('name', 'administrator');
        })->paginate(5);
        return view('backend.pages.settings.memberDashboard.index',compact('user'));
    }

    public function editMemberDashboard($id)
    {
        $member = User::with('role')->where('id', $id)->firstOrFail();
        return view('backend.pages.settings.memberDashboard.edit',compact('member'));
    }

    public function createMemberDashboard()
    {
        return view('backend.pages.settings.memberDashboard.create');
    }
    
    public function addMemberDashboard(Request $request){
        $request->validate([
            'password' => 'required|min:8|confirmed',
        ]);

        $emailExists = User::where('email', $request->email)->exists();

        if ($emailExists) {
            return redirect()->back()
                ->withInput() 
                ->withErrors(['email' => 'Email sudah ada di database.']);
        }

        User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'name' => $request->first_name . ' ' . $request->last_name,
            'slug' => Str::slug($request->first_name . $request->last_name),
            'email' => $request->email,
            'phone' => $request->phone,
            'password' => bcrypt($request->password),
            'role_id' => 2,
            'status' => 'active',
        ]);

        return redirect()->route('settings.memberDashboard')->with('success', 'Admin berhasil ditambahkan!');
    }

    public function deleteMemberDashboard($id)
    {
        $member = User::findOrFail($id);
        $member->delete();
        return redirect()->route('settings.memberDashboard')->with('success', 'Member deleted successfully.');
    }

}
