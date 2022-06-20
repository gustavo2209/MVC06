
// ACCIONES CON CLIENTES

function clientesIns() {
    $("#tbl_clientes_accion").val("INS");
    $("#tbl_clientes_apellidos").val("");
    $("#tbl_clientes_nombres").val("");

    $("#dlg_clientes_title").text("Nuevo Cliente");
    $("#dlg_clientes_errores").html("");

    $("#dlg_clientes").modal("show");
}

function clientesUpd(idcliente, apellidos, nombres) {
    $("#tbl_clientes_accion").val("UPD");
    $("#tbl_clientes_idcliente").val(idcliente);
    $("#tbl_clientes_apellidos").val(apellidos);
    $("#tbl_clientes_nombres").val(nombres);

    $("#dlg_clientes_title").text("Actualizar datos de Cliente");
    $("#dlg_clientes_errores").html("");

    $("#dlg_clientes").modal("show");
}

function clientesInsUpd() {
    var accion = $("#tbl_clientes_accion").val();
    var idcliente = $("#tbl_clientes_idcliente").val();
    var apellido = $("#tbl_clientes_apellidos").val();
    var nombre = $("#tbl_clientes_nombres").val();

    if (accion === "INS") {
        $.ajax({
            url: "Cliente/ClientesIns",
            dataType: "json",
            type: "POST",
            data: {
                apellido: apellido,
                nombre: nombre
            },
            success: function (result) {
                //alert(JSON.stringify(result));

                if (result.msg === "") {
                    window.location = "../";
                } else {
                    $("#dlg_clientes_errores").html(result.msg);
                }
            }
        });
    } else if (accion === "UPD") {
        $.ajax({
            url: "Cliente/ClientesUpd",
            dataType: "json",
            type: "POST",
            data: {
                idcliente: idcliente,
                apellido: apellido,
                nombre: nombre
            },
            success: function (result) {
                //alert(JSON.stringify(result));

                if (result.msg === "") {
                    window.location = "../";
                } else {
                    $("#dlg_clientes_errores").html(result.msg);
                }
            }
        });
    }
}

function clientesDel(idcliente, apellidos, nombres) {
    $("#dlg_confirm_dato1").val("DEL_CLIENTE");
    $("#dlg_confirm_dato2").val(idcliente);

    $("#dlg_confirm_title").text("Retirar Cliente");
    $("#dlg_confirm_msg").html("¿Desea retirar a " + apellidos + " " + nombres + "?");
    
    $("#dlg_confirm_error").hide();
    $("#dlg_confirm").modal("show");
}

// ACCIONES CON CORREOS

function correosIns(idcliente, apellidos, nombres) {
    $("#tbl_correos_accion").val("INS");
    $("#tbl_correos_idcliente").val(idcliente);
    $("#tbl_correos_apellidos_cliente").val(apellidos);
    $("#tbl_correos_nombres_cliente").val(nombres);
    $("#tbl_correos_correo").val("");

    $("#dlg_correos_title").text("Nuevo Correo");
    $("#dlg_correos_errores").html("");

    $("#dlg_correos").modal("show");
}

function correosUpd(idcorreo, idcliente, apellidos, nombres) {
    $("#tbl_correos_accion").val("UPD");
    $("#tbl_correos_idcorreo").val(idcorreo);
    $("#tbl_correos_idcliente").val(idcliente);
    $("#tbl_correos_apellidos_cliente").val(apellidos);
    $("#tbl_correos_nombres_cliente").val(nombres);
    $("#tbl_correos_correo").val($("#idcorreo_" + idcorreo).text());

    $("#dlg_correos_title").text("Actualizar Correo");
    $("#dlg_correos_errores").html("");

    $("#dlg_correos").modal("show");
}

function correosInsUpd() {
    var accion = $("#tbl_correos_accion").val();
    var idcorreo = $("#tbl_correos_idcorreo").val();
    var idcliente = $("#tbl_correos_idcliente").val();
    var correo = $("#tbl_correos_correo").val();

    if (accion === "INS") {
        $.ajax({
            url: "Correo/CorreosIns",
            dataType: "json",
            type: "POST",
            data: {
                idcliente: idcliente,
                correo: correo
            },
            success: function (result) {
                //alert(JSON.stringify(result));

                if (result.msg === "") {
                    window.location = "../";
                } else {
                    $("#dlg_correos_errores").html(result.msg);
                }
            }
        });
    } else if (accion === "UPD") {
        $.ajax({
            url: "Correo/CorreosUpd",
            dataType: "json",
            type: "POST",
            data: {
                idcorreo: idcorreo,
                idcliente: idcliente,
                correo: correo
            },
            success: function (result) {
                //alert(JSON.stringify(result));

                if (result.msg === "") {
                    window.location = "../";
                } else {
                    $("#dlg_correos_errores").html(result.msg);
                }
            }
        });
    }
}

function correosDel(idcorreo) {
    $("#dlg_confirm_dato1").val("DEL_CORREO");
    $("#dlg_confirm_dato2").val(idcorreo);

    $("#dlg_confirm_title").text("Retirar Correo");
    $("#dlg_confirm_msg").html("¿Desea retirar correo?");

    $("#dlg_confirm_error").hide();
    $("#dlg_confirm").modal("show");
}

// ACCIONES CON TELEFONOS

function telefonosIns(idcliente, apellidos, nombres) {
    $("#tbl_telefonos_accion").val("INS");
    $("#tbl_telefonos_idcliente").val(idcliente);
    $("#tbl_telefonos_apellidos_cliente").val(apellidos);
    $("#tbl_telefonos_nombres_cliente").val(nombres);
    $("#tbl_telefonos_telefono").val("");

    $("#dlg_telefonos_title").text("Nuevo Telefono");
    $("#dlg_telefonos_errores").html("");

    $("#dlg_telefonos").modal("show");
}

function telefonosUpd(idtelefono, idcliente, apellidos, nombres) {
    $("#tbl_telefonos_accion").val("UPD");
    $("#tbl_telefonos_idtelefono").val(idtelefono);
    $("#tbl_telefonos_idcliente").val(idcliente);
    $("#tbl_telefonos_apellidos_cliente").val(apellidos);
    $("#tbl_telefonos_nombres_cliente").val(nombres);
    $("#tbl_telefonos_telefono").val($("#idtelefono_" + idtelefono).text());

    $("#dlg_telefonos_title").text("Actualizar Telefono");
    $("#dlg_telefonos_errores").html("");

    $("#dlg_telefonos").modal("show");
}

function telefonosInsUpd() {
    var accion = $("#tbl_telefonos_accion").val();
    var idtelefono = $("#tbl_telefonos_idtelefono").val();
    var idcliente = $("#tbl_telefonos_idcliente").val();
    var telefono = $("#tbl_telefonos_telefono").val();

    if (accion === "INS") {
        $.ajax({
            url: "Telefono/TelefonosIns",
            dataType: "json",
            type: "POST",
            data: {
                idcliente: idcliente,
                telefono: telefono
            },
            success: function (result) {
                //alert(JSON.stringify(result));

                if (result.msg === "") {
                    window.location = "../";
                } else {
                    $("#dlg_telefonos_errores").html(result.msg);
                }
            }
        });
    } else if (accion === "UPD") {
        $.ajax({
            url: "Telefono/TelefonosUpd",
            dataType: "json",
            type: "POST",
            data: {
                idtelefono: idtelefono,
                idcliente: idcliente,
                telefono: telefono
            },
            success: function (result) {
                //alert(JSON.stringify(result));

                if (result.msg === "") {
                    window.location = "../";
                } else {
                    $("#dlg_telefonos_errores").html(result.msg);
                }
            }
        });
    }
}

function telefonosDel(idtelefono) {
    $("#dlg_confirm_dato1").val("DEL_TEL");
    $("#dlg_confirm_dato2").val(idtelefono);

    $("#dlg_confirm_title").text("Retirar Telefono");
    $("#dlg_confirm_msg").html("¿Desea retirar telefono?");

    $("#dlg_confirm_error").hide();
    $("#dlg_confirm").modal("show");
}

// ACCIONES GENERALES

function dlg_confirm_confirm() {
    var accion = $("#dlg_confirm_dato1").val();

    if (accion === "DEL_CLIENTE") {
        var idcliente = $("#dlg_confirm_dato2").val();

        $.ajax({
            url: "Cliente/ClientesDel",
            dataType: "json",
            type: "POST",
            data: {
                idcliente: idcliente
            },
            success: function (result) {
                //alert(JSON.stringify(result));

                if (result.msg === "") {
                    window.location = "../";
                } else {
                    $("#dlg_confirm_error").html(result.msg);
                }
            }
        });
    } else if (accion === "DEL_CORREO") {
        var idcorreo = $("#dlg_confirm_dato2").val();

        $.ajax({
            url: "Correo/CorreosDel",
            dataType: "json",
            type: "POST",
            data: {
                idcorreo: idcorreo
            },
            success: function (result) {
                //alert(JSON.stringify(result));

                if (result.msg === "") {
                    window.location = "../";
                } else {
                    $("#dlg_confirm_error").html(result.msg);
                }
            }
        });
    } else if (accion === "DEL_TEL") {
        var idtelefono = $("#dlg_confirm_dato2").val();

        $.ajax({
            url: "Telefono/TelefonosDel",
            dataType: "json",
            type: "POST",
            data: {
                idtelefono: idtelefono
            },
            success: function (result) {
                //alert(JSON.stringify(result));

                if (result.msg === "") {
                    window.location = "../";
                } else {
                    $("#dlg_confirm_error").html(result.msg);
                }
            }
        });
    }
}