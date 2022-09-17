/*
    Rutas Auth
    host + /api/auth
*/
const { check } = require("express-validator");
const { Router } = require("express");
const router = Router();
const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-jwt");

const {
  crearUsuario,
  loginUsuario,
  validarTokens,
} = require("../controllers/auth");

router.post(
  "/",
  [
    check("email", "El email es obligatorio").isEmail(),
    check("password", "El password debe ser mayor de 6 digitos").isLength({
      min: 6,
    }),
    validarCampos,
  ],
  loginUsuario
);

router.post(
  "/new",
  [
    check("name", "El name es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    check("password", "El password debe ser mayor de 6 digitos").isLength({
      min: 6,
    }),
    validarCampos,
  ],
  crearUsuario
);

router.get("/renew", validarJWT, validarTokens);

module.exports = router;
