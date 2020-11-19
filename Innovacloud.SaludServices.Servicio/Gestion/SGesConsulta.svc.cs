using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;

namespace Innovacloud.SaludServices.Servicio.Gestion
{
    [Serializable]
    [ServiceBehavior(IncludeExceptionDetailInFaults = true)]
    public class SGesConsulta : ISGesConsulta
    {
        public string prueba()
        {
            return "Hola David";
        }
    }
}