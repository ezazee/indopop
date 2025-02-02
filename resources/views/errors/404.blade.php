<!-- resources/views/error/404.blade.php -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Not Found</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Poppins', sans-serif;
            text-align: center;
            padding: 50px;
        }
        h1 {
            font-size: 100px;
            color: #FF5733;
        }
        p {
            font-size: 20px;
            color: #555;
        }
        a {
            color: #007BFF;
            text-decoration: none;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <h1>404</h1>
    <p>Oops! The page you are looking for could not be found.</p>
    <p><a href="{{ url('/') }}">Go back to Home</a></p>
</body>
</html>
