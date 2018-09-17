<?php

  #LOOPS - Execute code a set number of times

  /*
      For
      While
      Do..While
      Foreach
  */

    for ($i=0; $i < 10; $i++) {
      echo 'Number '.$i;
      echo '<br>';
    }

    $a = 0;

    while ($a <= 10) {
      echo $a;
      echo '<br>';
      $a++;
    }

    $i = 0;

    do{
      echo $i;
      echo '<br>';
      $i++;
    }
    while ($i < 10);

    $people = array('Blair', 'Kayleigh', 'Graeme');

    foreach ($people as $person) {
      echo $person;
      echo '<br>';
    }

    $people = array('Blair' => 21, 'Kayleigh' => 22, 'Graeme' => 23);

    foreach ($people as $person => $age) {
      echo $person.': '.$age;
      echo '<br>';
    }

?>
