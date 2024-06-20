
<h1>



<?php  
	echo "This is laravel first app project";

	echo $path;

	use Illuminate\Support\Facades\File;

    $path = public_path();
    $files = File::allFiles($path);
  
    dd($files);
?>

</h1>