import router from "@adonisjs/core/services/router";


const solicitudAdopcion = router.group(() => {
    //rutas de solicitudes de adopciones
    router.post('crearSolicitudAdopcion/', '#controllers/solicitud_adopcions_controller.crearSolicitud')
    router.get('obtenerSolicitudesAdopcion/', '#controllers/solicitud_adopcions_controller.obtenerSolicitudes')
}).prefix('api/v1/solicitudAdopcion/')

export default solicitudAdopcion;