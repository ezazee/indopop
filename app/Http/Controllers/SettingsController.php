<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SettingsController extends Controller
{
    public function annalytic()
    {
        return view('backend.pages.settings.googleAnnalytic.index');
    }

    public function googleTag()
    {
        return view('backend.pages.settings.googleTag.index');
    }

    public function memberDashboard()
    {
        return view('backend.pages.settings.memberDashboard.index');
    }

    public function editMemberDashboard()
    {
        return view('backend.pages.settings.memberDashboard.edit');
    }

    public function createMemberDashboard()
    {
        return view('backend.pages.settings.memberDashboard.create');
    }
}
