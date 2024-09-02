import router from "@adonisjs/core/services/router";

const usuario = router.group(() => {
    router.get('obtenerUsuariosPorRol/:rolId', '#controllers/usuarios_controller.obtenerUsuariosPorRol')
    router.get('obtenerUsuariosById/:usuarioId', '#controllers/usuarios_controller.obtenerUsuariosPorRol')
    router.get('obtenerUsuarios/', '#controllers/usuarios_controller.obtenerUsuarios')
    router.post('registrarUsuario/', '#controllers/usuarios_controller.crearUsuario')
    router.post('iniciarSesion/', '#controllers/usuarios_controller.login')
    router.delete('eliminarUsuario/', '#controllers/usuarios_controller.eliminarUsuario')
}).prefix('api/v1/usuarios/')

export default usuario;