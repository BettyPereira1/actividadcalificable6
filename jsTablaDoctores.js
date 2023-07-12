$(function () {
    const miLocalStorage = window.localStorage;
    const baseDoctores = miLocalStorage.getItem('baseDoctores');

    $("#cuerpo").html("");
    data = JSON.parse(baseDoctores);
    for (var i = 0; i < data.doctores.length; i++) {
        var tr = `<tr>
          <td>`+ data.doctores[i].nombre + `</td>
          <td>`+ data.doctores[i].apellido + `</td>
          <td>`+ data.doctores[i].numeroCedula + `</td>
          <td>`+ data.doctores[i].especialidad + `</td>
          <td>`+ data.doctores[i].consultorio + `</td>
          <td>`+ data.doctores[i].cooreoElectronioc + `</td>
        </tr>`;
        $("#cuerpo").append(tr)
    }
});