<?php
  if (isset($_GET['name'])) {
    echo htmlentities($_GET['name']);
  }

  // if (isset($_POST['name'])) {
  //   echo htmlentities($_POST['name']);
  // }

  // if (isset($_REQUEST['name'])) {
  //   echo htmlentities($_REQUEST['name']);
  //   echo htmlentities($_REQUEST['email']);
  // }

?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>My Website</title>
  </head>
  <body>
    <form action="get_post.php" method="POST">
      <div>
        <label>Name</label><br>
        <input type="text" name="name">
      </div>
      <div>
        <label>Email</label><br>
        <input type="text" name="email">
      </div>
      <input type="submit" name="" value="Submit">
    </form>

    <ul>
      <li>
        <a href="get_post.php?name=Blair">Blair</a>
      </li>
      <li>
        <a href="get_post.php?name=Kayleigh">Kayleigh</a>
      </li>
    </ul>

  </body>
</html>
