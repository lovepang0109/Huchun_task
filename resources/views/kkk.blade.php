
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Website Viewer</title>
</head>
<body>
    <h1>Website Viewer</h1>
    <form method="post" action="{{ route('mytest') }}">
    	@csrf
        <label for="url">Enter URL:</label>
        <input type="text" id="url" name="url" placeholder="http://example.com" required>
        <input type="submit" value="View">
    </form>
    
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $url = filter_var($_POST['url'], FILTER_SANITIZE_URL);

        // Validate URL format
        if (filter_var($url, FILTER_VALIDATE_URL)) {
            echo '<h2>Viewing: ' . htmlspecialchars($url) . '</h2>';
            echo '<iframe src="' . htmlspecialchars($url) . '" width="100%" height="600px"></iframe>';
        } else {
            echo '<p style="color:red;">Invalid URL</p>';
        }
    }
    ?>
</body>
</html>
