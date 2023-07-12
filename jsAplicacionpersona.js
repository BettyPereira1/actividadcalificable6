// $(document).ready(function(){

//     $("#btnGuardar").bind("click", validate);
// });



const persona = {
    nombre: "",
    apellido: "",
    numeroCedula: 0,
    edad:0,
    telefono:0,
    especialidad: "",
    consultorio: "",
    correoElectronico: ""
}

const Listapersonas = {
    personas: []
}

var basePersona;

function GuardarPersona() {
    const miLocalStorage = window.localStorage;
    
    persona.nombre = document.getElementById("sNombre").value;
    persona.apellido = document.getElementById("sApellido").value;
    persona.numeroCedula = document.getElementById("nNumeroCedula").value;
    persona.edad=document.getElementById("nEdad").value;
    persona.telefono=document.getElementById("nTelefono").value
    persona.especialidad = document.getElementById("sEspecialidad").value;
    persona.consultorio = document.getElementById("sConsultorio").value;
    persona.correoElectronioc = document.getElementById("mail").value;
    //var objJson = JSON.stringify(doctor) 

    basePersona = miLocalStorage.getItem('basePersonas');
    if (basePersona == null) {
        Listapersonas.personas.push(persona);
        basePersona = JSON.stringify(Listapersonas);    
    }else {
        var database = JSON.parse(basePersona);
        for (let index = 0; index < database.personas.length; index++) {
            Listapersonas.personas.push(database.personas[index]);
            
        }
        Listapersonas.personas.push(personas);
        basePersonas = JSON.stringify(ListaPersonas);
    }
    
    
    miLocalStorage.setItem('basePersonas', basePersona);
    document.location.href = "RegistroPersona.html";
}



function validateEmailAddress(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validate() {
    var mensajeValidacion = document.getElementById("result");
    mensajeValidacion.value = "";
    // document.getElementById("result").value = "";
    var emailaddress = document.getElementById("mail").value;
    if (validateEmailAddress(emailaddress)) {
        mensajeValidacion.style.visibility = "visible";
        mensajeValidacion.value = emailaddress + " es valido";
        mensajeValidacion.style.color = "green";
    } else {
        mensajeValidacion.style.visibility = "visible";
        mensajeValidacion.value = emailaddress + " no tiene el formato correcto, por favor reingresarlo   :(";
        // mensajeValidacion.value(emailaddress + " is not correct, please retry:(");
        // $("#result").text(emailaddress + " is not correct, please retry:(");
        mensajeValidacion.style.color = "red";
        // $("#result").css("color", "red");
    }
    return false;
}