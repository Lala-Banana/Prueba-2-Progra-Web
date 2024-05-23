$(document).ready(function(){
    $("#registroForm").submit(function(event){
        // Evitar que el formulario se envíe automáticamente
        event.preventDefault();
        
        // Realizar las validaciones
        var rut = $("#rut").val();
        var nombre = $("#nombre").val();
        var apellido = $("#apellido").val();
        var correo = $("#correo").val();
        var edad = $("#edad").val();
        var genero = $("#genero").val();
        var celular = $("#celular").val();

        var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9_\.\-]+$/;

        // Rut: largo entre 9 y 10 caracteres
        if(rut.length < 9 || rut.length > 10){
            alert("El Rut debe tener entre 9 y 10 caracteres.");
            return;
        }

        // Nombre, Apellidos: largo entre 3 y 20 caracteres
        if(nombre.length < 3 || nombre.length > 20 ||
            apellido.length < 3 || apellido.length > 20){
            alert("El Nombre y  Apellido deben tener entre 3 y 20 caracteres.");
            return;
        }

        // Formato correo
        if (!expr.test(correo)){
            alert("Formato de correo invalido.");
            return;
        }

        // Edad: Validación de edad 
        if (edad <18){
            alert("Debes ser mayor de edad.");
            return;
        }

        // Género: seleccionado
        if(genero === ""){
            alert("Por favor, seleccione un Género.");
            return;
        }

        // Celular: largo entre 9 y 12 caracteres y numérico
        var celularRegex = /^[0-9]+$/;
        if(celular.length < 9 || celular.length > 12 || !celularRegex.test(celular)){
            alert("El Celular debe tener entre 9 y 12 caracteres numéricos.");
            return;
        }

        // Si todas las validaciones pasan, se puede enviar el formulario
        alert("¡Registro exitoso!");
        // Aquí podrías enviar el formulario utilizando AJAX o cualquier otro método
        
        // Limpiar los campos del formulario
        $("#registroForm")[0].reset();
   
    });
});
