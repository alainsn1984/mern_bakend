const { response } = require("express");
const Evento = require("../models/Evento");

const getEvento = async (req, res = response) => {
  const eventos = await Evento.find().populate("user", "name");
  res.json({
    ok: true,
    msg: "getEvents",
    eventos,
  });
};

const crearEvento = async (req, res = response) => {
  const evento = new Evento(req.body);

  try {
    evento.user = req.uid;
    const autoGuardado = await evento.save();
    res.json({
      ok: true,
      evento: autoGuardado,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }

  res.json({
    ok: true,
    msg: "crearEvents",
    evento,
  });
};

const actualizarEvento = (req, res = response) => {

  
  res.json({
    ok: true,
    msg: "Actualizar Evento",
  });
};

const eliminarEvento = (req, res = response) => {
  res.json({
    ok: true,
    msg: "Eliminar evento",
  });
};

module.exports = {
  getEvento,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
};
