<?php

namespace App\Http\Controllers;

use Jenssegers\Agent\Agent;

class HomeController extends Controller
{
    protected $agent;

    public function __construct()
    {
        $this->agent = new Agent();
    }

    public function index()
    {
        if ($this->agent->isMobile()) {
            return view('frontend.mobile.mobile', [
                'content' => 'frontend.mobile.pages.index'
            ]);
        } else {
            return view('frontend.dekstop.dekstop', [
                'content' => 'frontend.desktop.pages.index'
            ]);
        }
    }

    public function detail()
    {
        if ($this->agent->isMobile()) {
            return view('frontend.mobile.pages.detail');
        } else {
            return view('frontend.dekstop.pages.detail');
        }
    }

    public function redaksi()
    {
        if ($this->agent->isMobile()) {
            return view('frontend.mobile.pages.redaksi');
        } else {
            return view('frontend.dekstop.pages.redaksi');
        }
    }


    public function kebijakanPrivasi()
    {
        if ($this->agent->isMobile()) {
            return view('frontend.mobile.pages.kebijakan-privasi');
        } else {
            return view('frontend.dekstop.pages.kebijakan-privasi');
        }
    }

    public function kodeEtik()
    {
        if ($this->agent->isMobile()) {
            return view('frontend.mobile.pages.kode-etik');
        } else {
            return view('frontend.dekstop.pages.kode-etik');
        }
    }

    public function visiMisi()
    {
        if ($this->agent->isMobile()) {
            return view('frontend.mobile.pages.visi-misi');
        } else {
            return view('frontend.dekstop.pages.visi-misi');
        }
    }

    public function siteMap()
    {
        if ($this->agent->isMobile()) {
            return view('frontend.mobile.pages.site-map');
        } else {
            return view('frontend.dekstop.pages.site-map');
        }
    }
    public function kanal()
    {
        if ($this->agent->isMobile()) {
            return view('frontend.mobile.pages.kanal');
        } else {
            return view('frontend.dekstop.pages.kanal');
        }
    }
    public function byIndex()
    {
        if ($this->agent->isMobile()) {
            return view('frontend.mobile.pages.byIndex');
        } else {
            return view('frontend.dekstop.pages.byIndex');
        }
    }
    public function searchResult()
    {
        if ($this->agent->isMobile()) {
            return view('frontend.mobile.pages.search-result');
        } else {
            return view('frontend.dekstop.pages.search-result');
        }
    }
}
