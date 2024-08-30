import router from "@adonisjs/core/services/router";

const roles = router.group(()=>{
    router.post('crearRol/', '#controllers/roles_controller.crearRol')
    router.get('obtenerRoles/', '#controllers/roles_controller.obtenerRoles')
    router.get('obtenerRol/:rolId', '#controllers/roles_controller.obtenerRol')
    router.patch('actualizarRol/:rolId', '#controllers/roles_controller.actualizarRol')
    router.delete('eliminarRol/:rolId', '#controllers/roles_controller.eliminarRol')
}).prefix('api/v1/roles')



export default roles;