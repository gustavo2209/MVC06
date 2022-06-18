using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVC06.Controllers
{
    public class CorreoController : Controller
    {
        // GET: Correos
        public ActionResult Index()
        {
            return View();
        }
    }
}