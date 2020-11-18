using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text;

namespace Innovacloud.SaludServices.Entidad.Catalogos
{
    [DataContract]
    [Serializable]
    public class ECatCredenciales
    {
        /* CONEXION A SERVICIOS WEB  */
        [DataMember] public int Identificador { get; set; }

        [DataMember] public int IdCredenciales { get; set; }

        [DataMember] public string Url { get; set; }

        [DataMember] public string Llave { get; set; }

        [DataMember] public string UsuarioNombre { get; set; }

        [DataMember] public string Contrasena { get; set; }

        [DataMember] public string Origen { get; set; }

        [DataMember] public string Usuario { get; set; }

        [DataMember] public string Accion { get; set; }

        [DataMember] public string Identificador_ { get; set; }

        [DataMember] public int Estado { get; set; }

        [DataMember] public string Modo { get; set; }

        /*BASE DE DATOS*/
        [DataMember] public string HostDB { get; set; }

        [DataMember] public string NameDB { get; set; }

        [DataMember] public string UserDB { get; set; }

        [DataMember] public string PasswordDB { get; set; }

        [DataMember] public string UrlPlataforma { get; set; }

    }
}
