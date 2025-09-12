<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use App\Helpers\CacheHelper;

class Post extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;

    protected $fillable = [
        'title', 'content', 'gambar', 'short_description', 
        'image_caption', 'slug', 'status', 'headline', 
        'start_date', 'start_time', 'keyword', 
        'description', 'kategori_id', 'user_id','adult','reporter_id','multipages','seo'
    ];
    

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('images')->useDisk('public');
    }

    public function kategori()
    {
        return $this->belongsTo(Categori::class, 'kategori_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class, 'post_tags');
    }

    public function reporter()
    {
        return $this->belongsTo(Reporter::class, 'reporter_id');
    }

    protected static function booted()
    {
        static::saved(function ($post) {
            CacheHelper::forget('home_headline');
            CacheHelper::forget('home_terkini');
            CacheHelper::forget('home_terpopuler');

            if ($post->kategori) {
                CacheHelper::forget("kanal_{$post->kategori->slug}_posts");
                CacheHelper::forget("kanal_{$post->kategori->slug}_terkini");
                CacheHelper::forget("kanal_{$post->kategori->slug}_terpopuler");
            }

            CacheHelper::forget("article_{$post->id}");
        });

        static::deleted(function ($post) {
            CacheHelper::forget('home_headline');
            CacheHelper::forget('home_terkini');
            CacheHelper::forget('home_terpopuler');

            if ($post->kategori) {
                CacheHelper::forget("kanal_{$post->kategori->slug}_posts");
                CacheHelper::forget("kanal_{$post->kategori->slug}_terkini");
                CacheHelper::forget("kanal_{$post->kategori->slug}_terpopuler");
            }

            CacheHelper::forget("article_{$post->id}");
        });
    }
}
