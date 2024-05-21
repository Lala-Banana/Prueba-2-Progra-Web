$(document).ready(function(){
  $('a.nav-link').on('click', function(e){
      e.preventDefault();
      var target = $(this).data('target');
      $('#contenido').load(target);
  });
});