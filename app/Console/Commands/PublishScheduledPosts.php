<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Post;
use Carbon\Carbon;

class PublishScheduledPosts extends Command
{
    protected $signature = 'posts:publish-scheduled';
    protected $description = 'Publish scheduled posts at their scheduled date and time';

    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        $now = Carbon::now();

        $posts = Post::where('status', 'schedule')
            ->whereDate('start_date', $now->toDateString())
            ->whereTime('start_time', $now->toTimeString())
            ->get();

        foreach ($posts as $post) {
            $post->status = 'publish';
            $post->start_date = null;
            $post->start_time = null;
            $post->save();

            $this->info("Post ID {$post->id} published successfully.");
        }

        return 0;
    }

}
