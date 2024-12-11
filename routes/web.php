<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\MediaController;
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



// Dashboard Route
Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
Route::get('/dashboard/blog/post', [BlogController::class, 'blogPost'])->name('blog.post');
Route::get('/dashboard/blog/edit', [BlogController::class, 'editPost'])->name('blog.edit');



// Media Page
Route::get('/dashboard/media', [MediaController::class, 'index'])->name('media.index');
Route::post('/dashboard/media', [MediaController::class, 'store'])->name('media.store');
Route::delete('/media/{id}', [MediaController::class, 'destroy'])->name('media.destroy');

