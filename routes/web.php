<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\MediaController;
use App\Http\Controllers\TagsController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\MemberController;
use App\Http\Controllers\SettingsController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// ~~~~~~~~~~~~~~~~~~~~~~~~~~  {{ !! END-USER ROUTING !! }} ~~~~~~~~~~~~~~~~~~~~~~~~~~ //

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/detail', [HomeController::class, 'detail'])->name('detail.desktop');
Route::get('/redaksi', [HomeController::class, 'redaksi'])->name('redaksi.desktop');
Route::get('/kebijakan-privasi', [HomeController::class, 'kebijakanPrivasi'])->name('kebijakan.desktop');
Route::get('/kode-etik', [HomeController::class, 'kodeEtik'])->name('kodeEtik.desktop');
Route::get('/visi-misi', [HomeController::class, 'visiMisi'])->name('visiMisi.desktop');
Route::get('/site-map', [HomeController::class, 'siteMap'])->name('siteMap.desktop');
Route::get('/kanal', [HomeController::class, 'kanal'])->name('kanal.desktop');
Route::get('/indeks', [HomeController::class, 'byIndex'])->name('byIndex.dekstop');
Route::get('/search-result', [HomeController::class, 'searchResult'])->name('searchResult.dekstop');



// ~~~~~~~~~~~~~~~~~~~~~~~~~~  {{ !! DASHBOARD ROUTING !! }} ~~~~~~~~~~~~~~~~~~~~~~~~~~ //
Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');


// === {{ !! Blog Page !! }} === //
// Post
Route::get('/dashboard/blog/post', [BlogController::class, 'blogPost'])->name('blog.post');
Route::get('/dashboard/blog/post/edit', [BlogController::class, 'editPost'])->name('blog.edit');
Route::get('/dashboard/blog/post/create', [BlogController::class, 'createPost'])->name('blog.create');

// Tags
Route::get('/dashboard/blog/tags', [TagsController::class, 'tagsIndex'])->name('tags.index');
Route::get('/dashboard/blog/tags/edit', [TagsController::class, 'tagsEdit'])->name('tags.edit');
Route::get('/dashboard/blog/tags/create', [TagsController::class, 'tagsCreate'])->name('tags.create');

// Category
Route::get('/dashboard/blog/category/edit', [CategoryController::class, 'categoryEdit'])->name('category.edit');
Route::get('/dashboard/blog/category/create', [CategoryController::class, 'categoryCreate'])->name('category.create');


// === {{ !! Media Page !! }} === //
// Media Page
Route::get('/dashboard/media', [MediaController::class, 'index'])->name('media.index');
Route::post('/dashboard/media', [MediaController::class, 'store'])->name('media.store');
Route::delete('/media/{id}', [MediaController::class, 'destroy'])->name('media.destroy');

Route::get('/media', [PostController::class, 'index'])->name('media.index');
Route::post('/media', [PostController::class, 'store'])->name('media.store');


// === {{ !! Member Page !! }} === //
// Member
Route::get('/dashboard/member', [MemberController::class, 'memberIndex'])->name('member.index');
Route::get('/dashboard/member/create', [MemberController::class, 'memberCreate'])->name('member.create');
Route::post('/dashboard/member/create', [MemberController::class, 'memberPost'])->name('member.post');


// === {{ !! Export Data Page !! }} === //
// Export Data
Route::get('/dashboard/export-data', [DashboardController::class, 'exportData'])->name('dashboard.export');


// === {{ !! Settings Page !! }} === //
// Google Annalytics
Route::get('/dashboard/settings/annalyics', [SettingsController::class, 'annalytic'])->name('settings.annalytic');

// Google Tag Manager
Route::get('/dashboard/settings/google-tag', [SettingsController::class, 'googleTag'])->name('settings.googletag');
