<?php

use App\Http\Controllers\HomeController;
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
