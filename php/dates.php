<?php

  echo date('d').'<br>';   //Day
  echo date('m').'<br>';   //Month
  echo date('y').'<br>';   //Year
  echo date('Y').'<br>';   //Full Year
  echo date('l').'<br>';   //Day of the week

  echo date('d/m/Y').'<br>';

  echo date('h').'<br>';  //Hour
  echo date('i').'<br>';  //Minute
  echo date('s').'<br>';  //Second
  echo date('a').'<br>';  //AM/PM

  date_default_timezone_set('Europe/London');

  $timestamp = mktime(8, 45, 55, 2, 18, 1997);

  echo date('d/m/Y h:i:sa', $timestamp).'<br>';

  $timestamp2 = strtotime('7:00pm March 22 2016');

  echo date('d/m/Y h:i:sa', $timestamp2).'<br>';

  $timestamp3 = strtotime('+2 Months');

  echo date('d/m/Y h:i:sa', $timestamp3);

?>
