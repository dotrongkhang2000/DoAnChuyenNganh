using System.Web.Mvc;
using System.Web.Routing;

namespace TeduShop.Web
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapMvcAttributeRoutes();

            routes.MapRoute(
                name: "Admin",
                url: "admin/{action}/{id}",
                defaults: new
                {
                    controller = "Admin",
                    action = "Index",
                    id = UrlParameter.Optional
                },
                namespaces: new string[] { "TeduShop.Web.Controllers" }
            );

            routes.MapRoute(
                name: "Login",
                url: "Account/{action}/{id}",
                defaults: new 
                { 
                    controller = "Account", 
                    action = "Login", 
                    id = UrlParameter.Optional 
                },
                namespaces: new string[] { "TeduShop.Web.Controllers" }
            );

            routes.MapRoute(
                name: "About",
                url: "About/{action}/{id}",
                defaults: new { controller = "About", action = "Index", id = UrlParameter.Optional },
                namespaces: new string[] { "TeduShop.Web.Controllers" }
            );

            routes.MapRoute(
                name: "Product Category",
                url: "{alias}/{action}/{id}",
                defaults: new { controller = "Product", action = "Category", id = UrlParameter.Optional },
                namespaces: new string[] { "TeduShop.Web.Controllers" }
            );

            routes.MapRoute(
                name: "Product",
                url: "{alias}/{action}/{id}",
                defaults: new { controller = "Product", action = "Detail", id = UrlParameter.Optional },
                namespaces: new string[] { "TeduShop.Web.Controllers" }
            );

            routes.MapRoute(
                name: "Product Search",
                url: "Product/{action}/{id}",
                defaults: new { controller = "Product", action = "Search", id = UrlParameter.Optional },
                namespaces: new string[] { "TeduShop.Web.Controllers" }
            );

            routes.MapRoute(
                name: "TagList",
                url: "Tag/{action}/{id}",
                defaults: new { controller = "Product", action = "ListByTag", id = UrlParameter.Optional },
                namespaces: new string[] { "TeduShop.Web.Controllers" }
            );

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional },
                //tranh viec trung lap controller dan den loi
                namespaces: new string[] { "TeduShop.Web.Controllers" }
            );
        }
    }
}