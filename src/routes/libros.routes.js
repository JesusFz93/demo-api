const { Router } = require("express");
const {
  obtenerLibros,
  crearLibros,
  actualizarLibro,
  eliminarlibro,
} = require("../controllers/libros.controller");

const router = Router();
router.get("/", obtenerLibros);
router.post("/", crearLibros);
router.put("/:nombrelibro/:idlibro", actualizarLibro);
router.delete("/", eliminarlibro);

module.exports = router;
