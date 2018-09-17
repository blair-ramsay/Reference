<?php

  # substr() - Returns a portion of a string

  // $output = substr('Hello', 1, 3);
  // $output = substr('Hello', -2);
  // echo $output;

  # strlen() - Returns the length of a string

  // $output = strlen('Hello World');
  // echo $output;

  # strpos()
  # Finds the position of the first occurance of a substring

  // $output = strpos('Hello World', 'o');
  // echo $output;

  # strrpos()
  # Finds the position of the last occurance of a substring

  // $output = strrpos('Hello World', 'o');
  // echo $output;

  # trim()
  # Strips whitespace

  // $text = 'Hello World            ';
  // var_dump($text);
  //
  // $trimmed = trim($text);
  // var_dump($trimmed);

  # strtoupper()
  # Makes everything uppercase

  // $output = strtoupper('Hello World');
  // echo $output;

  # strtolower()
  # Makes everything lowercase

  // $output = strtolower('Hello World');
  // echo $output;

  # ucwords()
  # Capitalize every word

  // $output = ucwords('hello world');
  // echo $output;

  # str_replace()
  # Replaces all occurances of a string with a replacement

  // $text = 'Hello World';
  // $output = str_replace('World', 'Everyone', $text);
  // echo $output;

  # is_string()
  # Check if string

  // $val = 'Hello';
  // $output = is_string($val);
  // echo $output;

  // $values = array(true, false, null, 'abc', 33, '33', 22.4, '22.4', '', ' ', 0, '0');
  //
  // foreach ($values as $value) {
  //   if (is_string($value)) {
  //     echo "$value is a string<br>";
  //   }
  // }

  # gzcompress()
  # Compress a string

  // $string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum massa egestas
  // diam mollis ullamcorper. Proin ultrices libero aliquet, dictum augue sed, efficitur massa.
  // Cras imperdiet felis sed volutpat venenatis. Nullam auctor tortor quis volutpat pharetra.
  // Vestibulum faucibus arcu ullamcorper, semper est quis, vestibulum metus. Cras malesuada augue
  // ligula, a blandit elit molestie eget. Sed non tortor erat. Morbi id eros sed est euismod
  // condimentum. Vivamus malesuada vulputate tellus quis bibendum. Etiam volutpat lacus et
  // nulla consequat faucibus. Nunc placerat volutpat lorem. Vestibulum nec velit a purus
  // imperdiet vestibulum. Aliquam ut neque et est finibus auctor.';
  //
  // $compressed = gzcompress($string);
  // echo $compressed;
  //
  // $original = gzuncompress($compressed);
  // echo $original;





















?>
