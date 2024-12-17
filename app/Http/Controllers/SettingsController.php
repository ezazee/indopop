<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

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

    // Roles Permission
    // public function rolesPermission()
    // {
    //     return view('backend.pages.settings.rolePermission.index');
    // }

    // public function editRolesPermission()
    // {
    //     return view('backend.pages.settings.rolePermission.edit');
    // }

    // public function createRolesPermission()
    // {
    //     return view('backend.pages.settings.rolePermission.create');
    // }
}
