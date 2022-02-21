$(document).ready(function()
{
    console.log( "El DOM esta listo" );
    const perfil = []
    $(".form").submit(function (e) {
        e.preventDefault();
        
        var nombre = $('#nombre').val();
        var apellido = $("#apellido").val();
        var username = $("#username").val();
        var password = $("#password").val();
        var email = $("#email").val();
        var area = $("#area").val();
        var extras = document.getElementsByName("era")
        for(let i = 0; i < extras.length; i++){
            const element = extras[i];
            if(element.checked){
                var lenguaje = element.value;
            }
        }
        var años = $("#años").val();
        var horas = $("#horas").val();
        var ingreso = $("#income").val();
        perfil.push({nombre: nombre, apellido: apellido, usuario: username, 
                     contraseña: password, email: email, area: area, Lenguaje: lenguaje, 
                     años:años, horas:horas,ingreso:ingreso});
        localStorage.setItem("PERFILES", JSON.stringify(perfil));
        console.log(localStorage.getItem("PERFILES"))
    });
});








