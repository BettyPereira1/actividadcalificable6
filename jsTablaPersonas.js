$(function () {
    const miLocalStorage = window.localStorage;
    const baseDoctores = miLocalStorage.getItem('basePersonas');

    $("#cuerpo").html("");
    data = JSON.parse(baseDoctores);
    for (var i = 0; i < data.personas.length; i++) {
        var tr = `<tr>
          <td>`+ data.personas[i].nombre + `</td>
          <td>`+ data.personas[i].apellido + `</td>
          <td>`+ data.personas[i].numeroCedula + `</td>
          <td>`+ data.personas[i].edad + `</td>
          <td>`+ data.personas[i].telefono + `</td>
          <td>`+ data.personas[i].especialidad + `</td>
          <td>`+ data.personas[i].consultorio + `</td>
          <td>`+ data.personas[i].correoElectronico + `</td>
        </tr>`;
        $("#cuerpo").append(tr)
    }
});