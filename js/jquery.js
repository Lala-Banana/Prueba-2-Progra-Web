$(document).ready(function(){
    // Función para cargar contenido
    function cargarContenido(archivo) {
      $("#contenido").load(archivo);
    }

    // Eventos click para cada enlace
    $("#link-maceteros").click(function(e){
      e.preventDefault();
      cargarContenido('maceteros.html');
    });

    $("#link-sustratos").click(function(e){
      e.preventDefault();
      cargarContenido('sustratos.html');
    });

    $("#link-flores").click(function(e){
      e.preventDefault();
      cargarContenido('flores.html');
    });

    $("#link-arbustos").click(function(e){
      e.preventDefault();
      cargarContenido('arbustos.html');
    });
  });