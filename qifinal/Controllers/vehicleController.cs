using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace qisep07.Controllers
{
    public class vehicleController : Controller
    {
        // GET: search
        public ActionResult Index()
        {
            return View("search");
        }

        public ActionResult addvehicle()
        {
            return View("addveh");
        }

        public ActionResult addowner()
        {
            return View("addown");
        }
    }
}