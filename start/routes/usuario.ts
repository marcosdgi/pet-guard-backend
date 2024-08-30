import router from "@adonisjs/core/services/router";

const usuario = router.group(() => {
    router.get('obtenerUsuarios/:rolId', '#controllers/usuarios_controller.obtenerUsuarios')
    router.post('registrarUsuario/', '#controllers/usuarios_controller.crearUsuario')
    router.post('iniciarSesion/', '#controllers/usuarios_controller.login')
    // router.delete('eliminarUsuario/')
}).prefix('api/v1/usuarios/')
export default usuario;