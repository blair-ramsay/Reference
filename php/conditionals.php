<?php

  # CONDITIONALS

  /*
      ==          Checks value
      ===         Checks value and data type
      <           Less than
      >           Greater than
      <=          Less than or equal to
      >=          Greater than or equal to
      !=          Not equal to (Value only)
      !==         Not equal to (Value and Data Type)

      &&          And
      ||          Or
      XOR         Xor
  */

  $num = 5;

  // if($num > 4){
  //   if($num < 10){
  //     echo "True";
  //   }
  // }
  //
  // if($num > 4 && $num < 10){
  //   echo "True";
  // }

  $favColour = 'Red';

  switch ($favColour) {
    case 'Red':
      echo "Your favourite colour is red";
      break;
    case 'Blue':
      echo "Your favourite colour is red";
      break;
    case 'Green':
      echo "Your favourite colour is red";
      break;
    default:
      echo "Your favourite colour is something else";
      break;
  }

?>
