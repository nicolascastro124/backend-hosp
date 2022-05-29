const express = require("express");
const router = express.Router();

const { create, list, read, update, remove, removeSoft } = require("../controllers/service");

//routes

//end-points
router.post("/service", create); 
router.get("/services",list);
router.get("/service/:slug", read);
router.put("/service/:slug", update);
router.delete("/service/:slug", remove);
router.patch("/service/:slug", removeSoft);


module.exports = router;