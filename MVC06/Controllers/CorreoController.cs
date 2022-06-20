using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

using MVC06.Models;

namespace MVC06.Controllers
{
    public class CorreoController : Controller
    {
        private DaoCorreo daoCorreo;

        public CorreoController()
        {
            daoCorreo = new DaoCorreo();
        }

        [HttpPost]
        public JsonResult CorreosIns(int idcliente, string correo)
        {
            string result = "";

            if (correo != null && correo.Trim().Length > 0)
            {
                correos c = new correos();
                c.idcliente = idcliente;
                c.correo = correo;
                daoCorreo.correosIns(c);
            }
            else
            {
                result = "Ingrese correo electronico";
            }
            return Json(new { msg = result, JsonRequestBehavior.AllowGet });
        }

        [HttpPost]
        public JsonResult CorreosUpd(int idcorreo, int idcliente, string correo)
        {
            string result = "";

            if (correo != null && correo.Trim().Length > 0)
            {
                correos c = new correos();
                c.idcorreo = idcorreo;
                c.idcliente = idcliente;
                c.correo = correo;
                daoCorreo.correosUpd(c);
            }
            else
            {
                result = "Ingrese correo electronico";
            }
            return Json(new { msg = result, JsonRequestBehavior.AllowGet });
        }

        [HttpPost]
        public JsonResult CorreosDel(int idcorreo)
        {
            string result = "";

            daoCorreo.correosDel(idcorreo);

            return Json(new { msg = result, JsonRequestBehavior.AllowGet });
        }
    }
}