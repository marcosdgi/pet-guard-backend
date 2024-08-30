import router from "@adonisjs/core/services/router";

const tipoRaza = router.group(()=>{
    router.get('obtenerTiposRaza/', '#controllers/tipo_razas_controller.index')
    router.post('crearTipoRaza/', '#controllers/tipo_razas_controller.crearTipoRaza')
    router.get('obtenerTipoRaza/:razaId', '#controller/tipo_razas_controller.obtenerRaza')
    router.delete('eliminarRaza/:razaId','#controllers/tipo_razas_controller.eliminarRaza')
}).prefix('api/v1/tipoRaza/')

export default tipoRaza;