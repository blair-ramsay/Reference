<?php

  #Array - Variable that holds multiple values
  /*
    - Indexed
    - Associative
    - Multi-dimensional
  */

  // Indexed
  $people = array('Blair', 'Kayleigh', 'Graeme', 'Cat');
  //echo $people[0];

  $ids = array(23, 55, 12);
  //echo $ids[2];

  $cars = ['Honda', 'Toyota', 'Ford'];
  //echo $cars[1];

  //Add to arrays
  $cars[3] = 'BMW';
  $cars[] = 'Chevy';

  //echo count($cars);
  //print_r($cars);
  //var_dump($cars);

  // Associative Arrays
  $people = array('Blair' => 21, 'Kayleigh' => 22);
  echo $people['Blair'];

  $ids = [21 => 'Blair', 22 => 'Kayleigh'];
  echo $ids[22];

  $people['Graeme'] = 23;
  echo $people['Graeme'];

  // Multi-dimensional Arrays
  $cars = array(
    array('Honda', 20, 10),
    array('Toyota', 30, 20),
    array('Ford', 23, 12)
  );

  echo $cars[1][2];

?>
