<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Helpers\ImageResizeHelper;
use Illuminate\Support\Facades\Storage;
use File;

class ResizeImages extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'images:resize';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Resize all images in the specified folder and save resized images in a new folder';

    /**
     * Execute the console command.
     *
     * @return void
     */
    public function handle()
    {
        $sourceDir = public_path('storage/gambar');
        $destinationDir = public_path('storage/photos/shares');

        if (!File::exists($destinationDir)) {
            File::makeDirectory($destinationDir, 0777, true);
        }

        $images = File::allFiles($sourceDir);

        foreach ($images as $image) {
            $filename = $image->getFilename();
            $thumbFilename = $filename;

            if (File::exists($destinationDir . '/' . $thumbFilename)) {
                $this->line("<fg=yellow>File sudah ada: $filename, melewati file ini.</>");
                continue;
            }

            $resizeResult = ImageResizeHelper::MigrasiResize($image, $filename, $thumbFilename);

            if (!isset($resizeResult['error'])) {
                $this->error("Error resizing image: $filename");
            } else {
                $this->info("Successfully resized image: $filename");
            }
        }

        $this->info('Image resizing process completed.');
    }

}
