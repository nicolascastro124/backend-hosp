const Service = require("../models/service");
const slugify = require("slugify");


//Añadir un registro
exports.create = async (req, res) => {
  try {
    const { name } = req.body;
    res.json(await new Service({ name, slug: slugify(name) }).save());
  } catch (err) {
    console.log(err);
    res.status(400).send("Error al Crear Servicio");
  }
};
//Buscar todos los registros Activos
exports.list = async (req, res) => {
  res.json(
    await Service.find({ status: "Active" }).sort({ createAt: -1 }).exec()
  );
};
//Buscar uno por nombre
exports.read = async (req, res) => {
  let service = await Service.findOne({
    slug: req.params.slug,
    status: "Active",
  }).exec();
  res.json(service);
};

//Actualizar 
exports.update = async (req, res) => {
  const { name, status } = req.body;
  try {
    const updated = await Service.findOneAndUpdate(
      { slug: req.params.slug },
      { name, slug: slugify(name), status},
      { new: true }
    ).exec();
    res.json(updated);
  } catch (err) {
    res.status(400).send("Error al Actualizar Servicio");
  }
};

// hard delete
exports.remove = async (req, res) => {
    try {
      const deleted = await Service.findOneAndRemove({
        slug: req.params.slug,
      }).exec();
      res.json(deleted);
    } catch (err) { 
      console.log(err);
      return res.status(400).send("Error al Eliminar Servicio");
    }
  };


//soft delete
exports.removeSoft = async (req, res) => {
  try {
    const deleted = await Service.findOneAndUpdate(
      { slug: req.params.slug },
      { status: "Inactive" },
      { new: true }
    ).exec();
    res.json(deleted);
  } catch (err) {
    res.status(400).send("Error al Eliminar Servicio");
  }
};
