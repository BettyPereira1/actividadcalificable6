// $(document).ready(function(){

//     $("#btnGuardar").bind("click", validate);
// });



const doctor = {
    nombre: "",
    apellido: "",
    numeroCedula: 0,
    especialidad: "",
    consultorio: "",
    cooreoElectronioc: ""
}

const ListaDoctores = {
    doctores: []
}

var baseDoctores;

function GuardarDoctor() {
    const miLocalStorage = window.localStorage;

    doctor.nombre = document.getElementById("sNombre").value;
    doctor.apellido = document.getElementById("sApellido").value;
    doctor.numeroCedula = document.getElementById("nNumeroCedula").value;
    doctor.especialidad = document.getElementById("sEspecialidad").value;
    doctor.consultorio = document.getElementById("sConsultorio").value;
    doctor.cooreoElectronioc = document.getElementById("mail").value;
    //var objJson = JSON.stringify(doctor) 

    baseDoctores = miLocalStorage.getItem('baseDoctores');
    if (baseDoctores == null) {
        ListaDoctores.doctores.push(doctor);
        baseDoctores = JSON.stringify(ListaDoctores);    
    }else {
        var database = JSON.parse(baseDoctores);
        for (let index = 0; index < database.doctores.length; index++) {
            ListaDoctores.doctores.push(database.doctores[index]);
            
        }
        ListaDoctores.doctores.push(doctor);
        baseDoctores = JSON.stringify(ListaDoctores);
    }
    
    
    miLocalStorage.setItem('baseDoctores', baseDoctores);
    document.location.href = "RegistroDoctor.html";
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