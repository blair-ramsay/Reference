$('#btn1').click(function(){
  alert('Button Clicked');
});

$('#btn1').on('click', function(){
  //$('.para1').hide();
  $('.para1').toggle();
});

$('#btn2').on('click', function(){
  $('.para1').show();
});

$('#btn1').dblclick(function(){
  $('.para1').toggle();
});

$('#btn1').hover(function(){
  $('.para1').toggle();
});

$('#btn1').on('mousemove', function(){
  $('.para1').toggle();
});

$('#btn1').on('mousedown', function(){
  $('.para1').toggle();
});

$('#btn1').on('mouseup', function(){
  $('.para1').toggle();
});

$('#btn1').click(function(e){
  alert(e.currentTarget.id);
  alert(e.currentTarget.innerHTML);
  alert(e.currentTarget.outerHTML);
  alert(e.currentTarget.className);
});

$(document).on('mousemove', function(e){
  $('#coords').html('Coords: Y: ' + e.clientY + ' X: ' + e.clientX);
});

$('input').focus(function(){
  //alert('Focus');
  $(this).css('background', 'pink');
});

$('input').blur(function(){
  //alert('Focus');
  $(this).css('background', 'white');
});

$('input').keyup(function(e){
  console.log(e.target.value);
});

$('select#gender').change(function(e){
  alert(e.target.value);
});

$('#form').submit(function(e){
  e.preventDefault();
  var name = $('input#name').val();
  console.log(name);
});
