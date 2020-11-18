using Innovacloud.SaludServices.Entidad.Catalogos;
using System;
using System.Collections.Generic;
using System.Text;

namespace Innovacloud.SaludServices.Entidad.Globales
{
    public class EGloGlobales
    {
        public static string ambiente = "DESARROLLO";

        public static ECatCredenciales obtenerCredenciales()
        {
            ECatCredenciales reCredenciales = new ECatCredenciales();
            if (ambiente == "DESARROLLO")
            {
                reCredenciales.HostDB = "10.10.30.32";
                reCredenciales.NameDB = "Formulario";
                reCredenciales.UserDB = "sa";
                reCredenciales.PasswordDB = "123";
                reCredenciales.UrlPlataforma = "https://localhost:44395";
            }
            else if (ambiente == "PRUEBAS")
            {
                reCredenciales.HostDB = "";
                reCredenciales.NameDB = "";
                reCredenciales.UserDB = "";
                reCredenciales.PasswordDB = "";
                reCredenciales.UrlPlataforma = "";


            }
            else if (ambiente == "PRODUCCION")
            {
                reCredenciales.HostDB = "";
                reCredenciales.NameDB = "";
                reCredenciales.UserDB = "";
                reCredenciales.PasswordDB = "";
                reCredenciales.UrlPlataforma = "";

            }

            return reCredenciales;
        }
    }
}
