import router from "@adonisjs/core/services/router";

const mascota = router.group(() => {
    router.get('obtenerMascotas/', '#controllers/mascotas_controller.index')
}).prefix('api/v1/mascotas/')

export default mascota;