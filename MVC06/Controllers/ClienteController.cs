using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

using MVC06.Models;

namespace MVC06.Controllers
{
    public class ClienteController : Controller
    {
        private DaoCliente daoCliente;

        public ClienteController()
        {
            daoCliente = new DaoCliente();
        }

        [HttpPost]
        public JsonResult ClientesIns(string apellido, string nombre)
        {
            string result = "";

            if (apellido == null || apellido.Trim().Length == 0)
            {
                result = "Ingrese apellido del cliente";
            }
            else
            {
                if(nombre == null || nombre.Trim().Length == 0)
                {
                    result = "Ingrese nombre del cliente";
                }
                else
                {
                    clientes c = new clientes();
                    c.apellidos = apellido;
                    c.nombres = nombre;
                    daoCliente.clientesIns(c);
                }
            }
            return Json(new { msg = result, JsonRequestBehavior.AllowGet });
        }

        [HttpPost]
        public JsonResult ClientesUpd(int idcliente, string apellido, string nombre)
        {
            string result = "";

            if (apellido == null || apellido.Trim().Length == 0)
            {
                result = "Ingrese apellido de cliente";
                
            }
            else
            {
                if(nombre == null || nombre.Trim().Length == 0)
                {
                    result = "Ingrese nombre de cliente";
                }
                else
                {
                    clientes c = new clientes();
                    c.idcliente = idcliente;
                    c.apellidos = apellido;
                    c.nombres = nombre;
                    daoCliente.clientesUpd(c);
                }
                
            }
            return Json(new { msg = result, JsonRequestBehavior.AllowGet });
        }

        [HttpPost]
        public JsonResult ClientesDel(int idcliente)
        {
            string result = "";

            daoCliente.clientesDel(idcliente);

            return Json(new { msg = result, JsonRequestBehavior.AllowGet });
        }
    }
}