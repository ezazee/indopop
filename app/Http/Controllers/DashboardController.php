<?php

namespace App\Http\Controllers;

use App\Services\GoogleAnalyticsService;
use Illuminate\Http\Request;
use App\Models\Settings;
use App\Models\User;
use App\Models\Post;



class DashboardController extends Controller
{
    protected $analyticsService;

    public function __construct(GoogleAnalyticsService $analyticsService)
    {
        $this->analyticsService = $analyticsService;
    }

    public function index()
    {
        $userCount = User::where('role_id', 1)->count();
        $postCount = Post::where('status', 'publish')->count();
        return view('backend.index', compact('userCount','postCount'));

        // $settings = Settings::first();
        // $propertyId = $settings->analytics;
        // $startDate = now()->subDays(30)->format('Y-m-d');
        // $endDate = now()->format('Y-m-d');

        // try {
        //     $analyticsData = $this->analyticsService->getReport($propertyId, $startDate, $endDate);
        //     dd($analyticsData);
        //     return view('backend.index', compact('analyticsData','userCount','postCount'));
        // } catch (\Exception $e) {
        //     return view('backend.index', ['error' => $e->getMessage()]);
        // }
    }

    public function getTopPages(Request $request)
    {
        $settings = Settings::first();
        $propertyId = $settings->analytics;

        $startDate = $request->query('start_date', now()->subDays(7)->format('Y-m-d'));
        $endDate = $request->query('end_date', now()->format('Y-m-d'));

        try {
            $analyticsData = $this->analyticsService->getReport($propertyId, $startDate, $endDate);

            $topPages = [];
            if (!empty($analyticsData['topPages'])) {
                foreach ($analyticsData['topPages'] as $page) {
                    $topPages[] = [
                        'page' => $page['page'],
                        'sessions' => $page['sessions'],
                    ];
                }
            }
            return response()->json([
                'topPages' => $topPages,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ]);
        }
    }

    public function gettopBrowsers(Request $request){
        $settings = Settings::first();
        $propertyId = $settings->analytics;

        $startDate = $request->query('start_date', now()->subDays(7)->format('Y-m-d'));
        $endDate = $request->query('end_date', now()->format('Y-m-d'));

        try {
            $analyticsData = $this->analyticsService->getReport($propertyId, $startDate, $endDate);

            $topBrowsers = [];
            if (!empty($analyticsData['topBrowsers'])) {
                foreach ($analyticsData['topBrowsers'] as $page) {
                    $topBrowsers[] = [
                        'browser' => $page['browser'],
                        'sessions' => $page['sessions'],
                    ];
                }
            }
            return response()->json([
                'topBrowsers' => $topBrowsers,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ]);
        }
    }

    public function gettopReferrers(Request $request){
        $settings = Settings::first();
        $propertyId = $settings->analytics;

        $startDate = $request->query('start_date', now()->subDays(7)->format('Y-m-d'));
        $endDate = $request->query('end_date', now()->format('Y-m-d'));

        try {
            $analyticsData = $this->analyticsService->getReport($propertyId, $startDate, $endDate);

            $topReferrers = [];
            if (!empty($analyticsData['topReferrers'])) {
                foreach ($analyticsData['topReferrers'] as $page) {
                    $topReferrers[] = [
                        'referrer' => $page['referrer'],
                        'sessions' => $page['sessions'],
                    ];
                }
            }
            return response()->json([
                'topReferrers' => $topReferrers,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ]);
        }
    }

    public function exportDataPost()
    {
        return view('backend.pages.export.export-post.index');
    }

    public function exportReport()
    {
        return view('backend.pages.export.export-report.index');
    }

    public function loginPage()
    {
        return view('backend.pages.auth.login');
    }
}
