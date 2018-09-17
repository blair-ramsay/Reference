<?php

  //Single line comment
  #Single line comment
  /*
  Multi line comment
  */

  #VARIABLES
  /*
    - Prefix with $
    - Start with a letter or an _
    - Only letters, numbers and underscores
    - Case sensitive
  */

  #DATA TYPES
  /*
    String        Hello
    Integer       5
    Float         3.14
    Boolean       True
    Arrays        []
    Objects       {}
    NULL          NULL
    Resource
  */

  $string1 = "Hello";
  $string2 = "World";

  $greeting = $string1 . " " . $string2 . "<br>";
  echo $greeting;

  $greeting2 = "$string1 $string2<br>";
  echo $greeting2;

  define('GREETING', 'Hello Everyone');
  echo GREETING;

?>
