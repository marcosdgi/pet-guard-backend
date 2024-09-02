import router from "@adonisjs/core/services/router";

const mascota = router.group(() => {
    router.get('obtenerMascotas/', '#controllers/mascotas_controller.index')
    router.post('crearMascota/', '#controllers/mascotas_controller.crearMascota')
    router.patch('actualizarMascota/:mascotaId', '#controllers/mascotas_controller.actualizarInfoMascota')
    router.delete('eliminarMascota/','#controllers/mascotas_controller.elimminarMascota')
}).prefix('api/v1/mascotas/')

export default mascota;