<?php

  #FUNCTION - Block of code that can be repeatedly called

  /*
      - Camel case      myFunction()
      - Lower case      my_function()
      - Pascal case     MyFunction()
  */

  function simpleFunction(){
    echo "Hello World<br>";
  }

  simpleFunction();

  function sayHello($name = 'World'){
    echo "Hello $name<br>";
  }

  sayHello('Blair');
  sayHello('John');
  sayHello();

  function addNumbers($num1, $num2){
    return $num1 + $num2;
  }

  //echo addNumbers(2,2);

  $myNum = 10;

  function addFive($num){
    $num += 5;
  }

  //By reference, updates value of variable
  function addTen(&$num){
    $num += 10;
  }

  addFive($myNum);
  echo "Value: $myNum<br>";

  addTen($myNum);
  echo "Value: $myNum<br>";

?>
