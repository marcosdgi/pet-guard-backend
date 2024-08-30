import router from "@adonisjs/core/services/router";


const estado_solicitud = router.group(() => {
    router.get('obtenerEstadosSolicitud/', '#controllers/estado_solicituds_controller.index')
    router.post('crearEstadoSolicitud/', '#controllers/estado_solicituds_controller.crearEstadoSolicitud')
}).prefix('api/v1/estadoSolicitud/')

export default estado_solicitud;