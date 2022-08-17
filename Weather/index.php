<?php
   error_reporting(E_ERROR | E_PARSE);

  $weather = "";

  $error = "";

  if(isset($_GET['city'])){

    $urlContent = file_get_contents('https://api.openweathermap.org/data/2.5/weather?q='.$_GET['city'].'&units=metric&appid=e26fbcf1d6e728a5a2bd51c9a23b2dcd');

    $forcastArray = json_decode($urlContent, true); 

    

    if($forcastArray['cod'] == 200) {

      $weather = 'The weather in '.$_GET['city'].' is '.$forcastArray['weather'][0]['description'];

      $weather = $weather.'. The temperature is '.$forcastArray['main']['temp'].'&#8451;'.'. The speed of wind is '.$forcastArray['wind']['speed'].' m/sec';

    } else {
      $error = "The city name is incorrect, please try another name";
    }

    

  }

?>

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Weather</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
  <div class="container" id="div1">
    <h1>Weather in your city</h1>
    <form>
    <div class="mb-3">
      <h5  class="text-center">Input a city name</h5>
      <input type="text" name="city" class="form-control"  aria-describedby="City weather" placeholder="Enter city name">
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
    </form>
  </div>
  <div id="forecastDiv">
        <?php

          if($weather){

              echo '<div class="alert alert-primary" role="alert">'.$weather.'</div>';

          } else if($error) {
              echo '<div class="alert alert-danger" role="alert">'.$error.'</div>';
          }

          ?>
    </div>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
</body>
</html>