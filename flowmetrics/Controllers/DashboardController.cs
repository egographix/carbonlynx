
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;
using index.Repository;
using System.Web;



namespace index.Controllers
{
    public class DashboardController : Controller
    {
       
            ICharts _ICharts;
            public DashboardController()
            {
                _ICharts = new ChartsConcrete();
            }

            [System.Web.Http.HttpGet]
            public ActionResult BarChart()
            {
                try
                {
                    string tempMobile = string.Empty;
                    string tempProduct = string.Empty;
                    _ICharts.FB(out tempMobile, out tempProduct);
                    ViewBag.MobileCount_List = tempMobile.Trim();
                    ViewBag.Productname_List = tempProduct.Trim();

                    return View();
                }
                catch (Exception)
                {
                    throw;
                }
            }
        }
    }  
