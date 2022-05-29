const Event = require("../models/event");
const slugify = require("slugify");

//Añadir un registro
exports.create = async (req, res) => {
  try {
    const { name, rut , descrip, acciones } = req.body;
    res.json(await new Event({ name, rut, slug: slugify(rut), descrip, acciones }).save());
  } catch (err) {
    console.log(err);
    res.status(400).send({
      err: err.message,
      code: err.code,
    });
  }
};

//Buscar todos los registros Activos
exports.listAll = async (req, res) => {
  let events = await Event.find({ status: "Active" })
    .limit(parseInt(req.params.count))
    .sort([["createdAt", "desc"]])
    .exec()
  res.json(events);
};

//Cantidad de registros
exports.eventsCount = async (req, res) => {
  let total = await Event.find({ status: "Active" }).estimatedDocumentCount();
  res.json(total);
}

//soft delete
exports.removeSoft = async (req, res) => {
  try {
    const deleted = await Event.findOneAndUpdate(
      { slug: req.params.slug },
      { status: "Inactive" },
      { new: true }
    ).exec();
    res.json(deleted);
  } catch (err) {
    res.status(400).send("Error al Eliminar Evento Adverso");
  }
};

//Buscar uno por nombre
exports.read = async (req, res) => {
  let event = await Event.findOne({
    slug: req.params.slug,
    status: "Active",
  }).exec();
  res.json(event);
};

//Actualizar 
exports.update = async (req, res) => {
  const { name, date, descrip, acciones, status } = req.body;
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const updated = await Event.findOneAndUpdate(
      { slug: req.params.slug },
      { name, slug: slugify(name), date, descrip, acciones, status },
      { new: true }
    ).exec();
    res.json(updated);


  } catch (err) {
    console.log("Error al Actualizar Evento --->", err);
    res.status(400).json({
      err: err.message,
    });
  }
};

exports.list = async (req, res) => {
  console.table(req.body);
  try {
    const {sort, order, page} = req.body;
    const currentPage = page | 1;
    const perPage = 3;

    const events = await Event.find({status: "Active"})
    .skip((currentPage - 1) * perPage)
    .sort([[sort, order]])
    .limit(perPage)
    .exec();
  } catch (err) {
    console.log(err);

  }

}