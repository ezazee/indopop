<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
use App\Helpers\ImageResizeHelper;

class ResizeImages extends Command
{
    protected $signature = 'images:resize';
    protected $description = 'Resize images and move them to the destination folder';

    public function handle()
    {
        // Path folder sumber dan tujuan
        $sourceDir = public_path('storage/gambar');
        $destinationDir = public_path('storage/photos/shares');

        // Verifikasi apakah folder sumber ada
        if (!File::exists($sourceDir)) {
            $this->error("❌ Folder sumber tidak ditemukan di: $sourceDir");
            return;
        }

        $this->info("📂 Memeriksa folder sumber: $sourceDir");

        // Verifikasi jika folder tujuan tidak ada, buat folder baru
        if (!File::exists($destinationDir)) {
            $this->info("📂 Folder tujuan tidak ada, membuat folder baru: $destinationDir");
            File::makeDirectory($destinationDir, 0777, true);
        }

        // Gunakan glob untuk mengambil file gambar (jpg, jpeg, png)
        $imagePaths = File::glob($sourceDir . '/*.{jpg,png,jpeg}', GLOB_BRACE);

        $this->info("🔍 Jumlah file ditemukan: " . count($imagePaths));

        if (count($imagePaths) === 0) {
            $this->info("❌ Tidak ada file gambar di folder sumber.");
            return;
        }

        // Proses setiap file gambar
        foreach ($imagePaths as $imagePath) {
            $filename = basename($imagePath);
            $thumbFilename = $filename;

            // Cek apakah file sudah ada di folder tujuan
            if (File::exists($destinationDir . '/' . $thumbFilename)) {
                $this->line("<fg=yellow>File sudah ada: $filename, melewati file ini.</>");
                continue;
            }

            $this->info("🔄 Memulai proses resize untuk: $filename");

            // Resize gambar dan mendapatkan hasilnya
            $resizeResult = ImageResizeHelper::MigrasiResize($imagePath, $filename, $thumbFilename);

            // Cek hasil resize
            if (!isset($resizeResult['error'])) {
                $this->error("❌ Error resizing image: $filename");
                continue;
            }

            // Pindahkan gambar yang sudah diresize ke folder tujuan
            $destinationPath = $destinationDir . '/' . $thumbFilename;

            // Pastikan gambar dipindahkan dengan benar
            if (File::move($resizeResult['resized_path'], $destinationPath)) {
                $this->info("✅ Berhasil memindahkan gambar ke folder tujuan: $destinationPath");
            } else {
                $this->error("❌ Gagal memindahkan gambar ke folder tujuan: $destinationPath");
            }

            // Menunggu sejenak sebelum melanjutkan untuk batch berikutnya
            sleep(1);
        }

        $this->info('📦 Proses resize gambar selesai.');
    }
}
