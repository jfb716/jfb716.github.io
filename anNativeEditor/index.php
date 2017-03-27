<!DOCTYPE html>
<html lang="en-US">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>AN Native Editor</title>

        <!-- Site Styles -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
        <link rel="stylesheet" href="resources/style.css">

        <!-- JavaScript API's -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>

        <!-- My JavaScript -->
        <script src="resources/editor.js"></script>


    </head>
    <body>
          <br>
          <br>
          <br>
                <div class="container">
                  <div class="row">
                    <div class="col-8">
                      <div class="jumbotron">
                        <div class="alert alert-info text-center" role="alert">
                          <strong>Editable Audience Network Native Tag</strong>
                        </div>
                        <textarea rows="30" cols="80" contenteditable="true" class="anTag1">
                          <?php
                            $textDisplay = file_get_contents("resources/antag.txt");
                            echo htmlspecialchars($textDisplay);
                          ?>
                        </textarea>
                      </div>
                    </div>
                    <div class="col-4">
                      <div class="jumbotron anTag2">
                        <?php
                          echo file_get_contents("resources/antag.txt");
                        ?>

                      </div>
                    </div>


                  </div>
                </div>
    </body>
</html>
