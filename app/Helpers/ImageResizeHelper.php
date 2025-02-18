<?php

namespace App\Helpers;

use Illuminate\Support\Facades\Storage;

class ImageResizeHelper
{
    public static function md5sum(string $filePath)
    {
        return md5_file($filePath);
    }

    public static function isDuplicateFile($filePath, $directory)
    {
        $hash = self::md5sum($filePath);

        $existingFiles = Storage::files($directory);

        foreach ($existingFiles as $file) {
            $existingFilePath = storage_path('app/' . $file);
            $existingFileHash = self::md5sum($existingFilePath);

            if ($existingFileHash === $hash) {
                return true;
            }
        }

        return false;
    }

    public static function resizeImage($image, $filename, $thumbFilename)
    {
        $extension = $image->getClientOriginalExtension();

        $path = $image->storeAs('public/gambar', $filename);

        $filePath = $image->getRealPath();

        list($width, $height) = getimagesize($image);

        $newWidth = 123;
        $newHeight = 123;

        $thumb = imagecreatetruecolor($newWidth, $newHeight);

        if ($extension == 'jpeg' || $extension == 'jpg') {
            $source = imagecreatefromjpeg($image);
        } elseif ($extension == 'png') {
            $source = imagecreatefrompng($image);
        } elseif ($extension == 'gif') {
            $source = imagecreatefromgif($image);
        } elseif ($extension == 'webp') {
            $source = imagecreatefromwebp($image);
        }else {
            return ['error' => 'Tipe file tidak valid.'];
        }

        imagecopyresampled($thumb, $source, 0, 0, 0, 0, $newWidth, $newHeight, $width, $height);

        $thumbPath = storage_path('app/public/photos/shares/' . $thumbFilename);

        if ($extension == 'jpeg' || $extension == 'jpg') {
            imagejpeg($thumb, $thumbPath, 60);
        } elseif ($extension == 'png') {
            imagepng($thumb, $thumbPath, 6);
        }

        imagedestroy($thumb);
        imagedestroy($source);

        return [
            'path' => 'gambar/' . $filename,
            'thumb_path' => 'photos/shares/' . $thumbFilename,
            'error' => 'File sudah ada di sistem.',
            'success' => 'Success'
        ];
    }

    public static function MigrasiResize($image, $filename, $thumbFilename)
    {
        // Assuming $image is a string (file path), get the extension and filename.
        $extension = pathinfo($image, PATHINFO_EXTENSION);

        $sourcePath = $image; // Assuming $image is the full file path.

        // Copy the source image to the destination folder
        $path = public_path('storage/gambar/' . $filename);
        copy($sourcePath, $path);

        list($width, $height) = getimagesize($sourcePath);

        // Set the new dimensions for the thumbnail
        $newWidth = 123;
        $newHeight = 123;

        // Create a true color image
        $thumb = imagecreatetruecolor($newWidth, $newHeight);

        // Check the file extension and create the image resource accordingly
        if ($extension == 'jpeg' || $extension == 'jpg') {
            $source = imagecreatefromjpeg($sourcePath);
        } elseif ($extension == 'png') {
            $source = imagecreatefrompng($sourcePath);
        } elseif ($extension == 'gif') {
            $source = imagecreatefromgif($sourcePath);
        } else {
            return ['error' => 'Tipe file tidak valid.'];
        }

        // Resample the image to create a thumbnail
        imagecopyresampled($thumb, $source, 0, 0, 0, 0, $newWidth, $newHeight, $width, $height);

        // Set the path for the thumbnail
        $thumbPath = public_path('storage/photos/shares/' . $thumbFilename);

        // Save the thumbnail to the destination folder
        if ($extension == 'jpeg' || $extension == 'jpg') {
            imagejpeg($thumb, $thumbPath, 60); // Quality 60 for jpg
        } elseif ($extension == 'png') {
            imagepng($thumb, $thumbPath, 6); // Compression level 6 for png
        }

        // Clean up memory
        imagedestroy($thumb);
        imagedestroy($source);

        return [
            'path' => 'gambar/' . $filename,
            'thumb_path' => 'photos/shares/' . $thumbFilename,
            'error' => 'File sudah ada di sistem.',
            'success' => 'Success'
        ];
    }

}

