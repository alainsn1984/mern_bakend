const { check } = require("express-validator");
const { Router } = require("express");
const { validarCampos } = require("../middlewares/validar-campos");
const router = Router();
const { validarJWT } = require("../middlewares/validar-jwt");
const {
  getEvento,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
} = require("../controllers/events");
const { isDate } = require("../helpers/isDate");

//Todas las rutas deben pasar por el JWT
router.use(validarJWT);

//Obtener Eventos
router.get("/", getEvento);

//Crear eventos
router.post(
  "/",
  [
    check("title", "El titulo debe ser obligatorio").not().isEmpty(),
    check("start", "Fecha de inicio es obligatoria").custom(isDate),
    check("end", "Fecha de inicio es obligatoria").custom(isDate),
    validarCampos,
  ],
  crearEvento
);

//Actualizar Eventos
router.put("/:id", actualizarEvento);

//Eliminar Eventos
router.delete("/:id", eliminarEvento);

module.exports = router;
