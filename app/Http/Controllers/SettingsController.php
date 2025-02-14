<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Settings;
use Illuminate\Support\Str;
use RealRashid\SweetAlert\Facades\Alert;
use Storage;


class SettingsController extends Controller
{
    // Annalytics
    public function annalytic()
    {
        $settings = Settings::first();
        return view('backend.pages.settings.googleAnnalytic.index',compact('settings'));
    }

    public function addannalytic(Request $request)
    {
        $request->validate([
            'analytics' => 'required|string',
        ]);

        $settings = Settings::first();

        if ($settings) {
            $settings->update([
                'analytics' => $request->analytics,
            ]);
    
            Alert::success('Success', 'Analytics updated successfully!');
        } else {

            Settings::create([
                'analytics' => $request->analytics,
            ]);
    
            Alert::success('Success', 'Analytics added successfully!');
        }

        return redirect()->route('settings.annalytic')->with('success', 'Analytics berhasil ditambahkan!');
    }

    // Google Tag
    public function googleTag()
    {
        $settings = Settings::first();
        return view('backend.pages.settings.googleTag.index',compact('settings'));
    }

    public function addgoogleTag(Request $request)
    {
        $request->validate([
            'gtag' => 'required|string',
        ]);

        $settings = Settings::first();

        if ($settings) {
            $settings->update([
                'gtag' => $request->gtag,
            ]);
    
            Alert::success('Success', 'Google Tag updated successfully!');
        } else {

            Settings::create([
                'gtag' => $request->gtag,
            ]);
    
            Alert::success('Success', 'Google Tag added successfully!');
        }

        return redirect()->route('settings.googletag')->with('success', 'gtag berhasil ditambahkan!');
    }

    // Member Dasboard
    public function memberDashboard()
    {
        $user = User::whereHas('role', function ($query) {
            $query->where('name', 'Administrator');
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
        Alert::success('Success', 'Member added successfully!!');
        return redirect()->route('settings.memberDashboard')->with('success', 'Admin berhasil ditambahkan!');
    }

    public function deleteMemberDashboard($id)
    {
        $member = User::findOrFail($id);
        $member->delete();
        Alert::error('Delete', 'Member Deleted!!');
        return redirect()->route('settings.memberDashboard')->with('success', 'Member deleted successfully.');
    }

    public function search(Request $request)
    {
        $query = strtolower($request->input('query'));
        $folder = $request->input('folder', '');

        $files = Storage::disk('public')->allFiles($folder);

        $filteredFiles = array_filter($files, function ($file) use ($query) {
            return stripos(basename($file), $query) !== false;
        });

        return response()->json(array_values($filteredFiles));
    }
}
