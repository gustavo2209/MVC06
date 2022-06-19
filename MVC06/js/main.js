
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

// ACCIONES CON FRASES

function frasesIns(idautor, autor) {
    $("#tbl_frases_accion").val("INS");
    $("#tbl_frases_idautor").val(idautor);
    $("#tbl_frases_autor").val(autor);
    $("#tbl_frases_frase").val("");

    $("#dlg_frases_title").text("Nueva Frase");
    $("#dlg_frases_errores").html("");

    $("#dlg_frases").modal("show");
}

function frasesUpd(idfrase, idautor, autor) {
    $("#tbl_frases_accion").val("UPD");
    $("#tbl_frases_idfrase").val(idfrase);
    $("#tbl_frases_idautor").val(idautor);
    $("#tbl_frases_autor").val(autor);
    $("#tbl_frases_frase").val($("#idfrase_" + idfrase).text());

    $("#dlg_frases_title").text("Actualizar Frase");
    $("#dlg_frases_errores").html("");

    $("#dlg_frases").modal("show");
}

function frasesInsUpd() {
    var accion = $("#tbl_frases_accion").val();
    var idfrase = $("#tbl_frases_idfrase").val();
    var idautor = $("#tbl_frases_idautor").val();
    var frase = $("#tbl_frases_frase").val();

    if (accion === "INS") {
        $.ajax({
            url: "Frases/FrasesIns",
            dataType: "json",
            type: "POST",
            data: {
                idautor: idautor,
                frase: frase
            },
            success: function (result) {
                //alert(JSON.stringify(result));

                if (result.msg === "") {
                    window.location = "../";
                } else {
                    $("#dlg_frases_errores").html(result.msg);
                }
            }
        });
    } else if (accion === "UPD") {
        $.ajax({
            url: "Frases/FrasesUpd",
            dataType: "json",
            type: "POST",
            data: {
                idfrase: idfrase,
                idautor: idautor,
                frase: frase
            },
            success: function (result) {
                //alert(JSON.stringify(result));

                if (result.msg === "") {
                    window.location = "../";
                } else {
                    $("#dlg_frases_errores").html(result.msg);
                }
            }
        });
    }
}

function frasesDel(idfrase) {
    $("#dlg_confirm_dato1").val("DEL_FRASE");
    $("#dlg_confirm_dato2").val(idfrase);

    $("#dlg_confirm_title").text("Retirar Frase");
    $("#dlg_confirm_msg").html("¿Desea retirar frase?");

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
    } else if (accion === "DEL_FRASE") {
        var idfrase = $("#dlg_confirm_dato2").val();

        $.ajax({
            url: "Frases/FrasesDel",
            dataType: "json",
            type: "POST",
            data: {
                idfrase: idfrase
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