using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

using MVC06.Models;

namespace MVC06.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            DaoCorreo daoCorreo = new DaoCorreo();
            List<clientes> list = daoCorreo.correosQry();
            ViewBag.Lista = list;

            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}