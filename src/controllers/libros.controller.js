const { v4: uuid } = require("uuid");
const { libros } = require("../database/db.js");

const obtenerLibros = (req, res) => {
  return res.json({
    msg: "libros obtenidos",
    data: libros,
  });
};

const crearLibros = (req, res) => {
  const { nombre, sku, cantidad, ciudades } = req.body;

  const libro = {
    id: uuid(),
    nombre: nombre,
    sku: sku,
    cantidad: cantidad,
    ciudades: ciudades,
  };

  libros.push(libro);

  return res.json({
    ok: true,
    msg: "Libro agregado",
    data: libro,
  });
};

const actualizarLibro = (req, res) => {
  const { nombrelibro, idlibro } = req.params;

  return res.json({
    msg: "libro actualizado",
    data: {
      nombrelibro: nombrelibro,
      idlibro: idlibro,
    },
  });
};

const eliminarlibro = (req, res) => {
  return res.json({
    msg: "libro eliminado",
  });
};

module.exports = {
  obtenerLibros,
  crearLibros,
  actualizarLibro,
  eliminarlibro,
};
