using System.ServiceModel;



namespace Innovacloud.SaludServices.Servicio.Gestion
{
    // NOTA: puede usar el comando "Rename" del menú "Refactorizar" para cambiar el nombre de interfaz "ISGesConsulta" en el código y en el archivo de configuración a la vez.
    [ServiceContract]
    public interface ISGesConsulta
    {
        //CONSULTAR SUBRAMOS TRANSPORTE
        [OperationContract]
        [WebInvoke(Method = "GET", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Bare,
        UriTemplate = "prueba/texto")]
        string prueba();
    }
}
