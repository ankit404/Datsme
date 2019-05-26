  function updateBox() {
    var width = document.getElementById('main-video').offsetWidth;
    document.getElementById("overlay").style.width = width + "px";
    
    var height = document.getElementById('main-video').offsetHeight;
    document.getElementById('overlay').style.height = height + "px" ;

    setTimeout(updateBox,1);
  }
   updateBox();

  function colorChange() {
  $( 'span' ).delay(1000).fadeOut(1000,function(){
  $(this).text('CONNECTED');
  }).fadeIn(1000).delay(1000).fadeOut(1000,function(){
  $(this).text('WHOLESOME');
  }).fadeIn(1000).delay(1000).fadeOut(1000,function(){
  $(this).text('AMAZING');
  }).fadeIn(1000);
  }

  $(document).ready(function(){
  var colorLooper = setInterval(function() {
  colorChange();
  }, 1000);
  });
  