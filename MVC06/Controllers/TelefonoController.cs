using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

using MVC06.Models;

namespace MVC06.Controllers
{
    public class TelefonoController : Controller
    {
        private DaoTelefono daoTelefono;

        public TelefonoController()
        {
            daoTelefono = new DaoTelefono();
        }

        [HttpPost]
        public JsonResult TelefonosIns(int idcliente, string telefono)
        {
            string result = "";

            if (telefono != null && telefono.Trim().Length > 0)
            {
                telefonos t = new telefonos();
                t.idcliente = idcliente;
                t.telefono = telefono;
                daoTelefono.telefonosIns(t);
            }
            else
            {
                result = "Ingrese numero telefonico";
            }
            return Json(new { msg = result, JsonRequestBehavior.AllowGet });
        }

        [HttpPost]
        public JsonResult TelefonosUpd(int idtelefono, int idcliente, string telefono)
        {
            string result = "";

            if (telefono != null && telefono.Trim().Length > 0)
            {
                telefonos t = new telefonos();
                t.idtelefono = idtelefono;
                t.idcliente = idcliente;
                t.telefono = telefono;
                daoTelefono.telefonosUpd(t);
            }
            else
            {
                result = "Ingrese numero telefonico";
            }
            return Json(new { msg = result, JsonRequestBehavior.AllowGet });
        }

        [HttpPost]
        public JsonResult TelefonosDel(int idtelefono)
        {
            string result = "";

            daoTelefono.telefonosDel(idtelefono);

            return Json(new { msg = result, JsonRequestBehavior.AllowGet });
        }
    }
}