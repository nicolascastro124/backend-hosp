const express = require("express");
const router = express.Router();

const { create, listAll, eventsCount, read, update, removeSoft, list} = require("../controllers/event");


//routes
router.post("/event", create); 
router.get("/event/:count", listAll);
router.get("/event/total", eventsCount);
router.get("/event/:slug", read);
router.put("/event/:slug", update);
router.patch("/event/:slug", removeSoft);
router.post("/events", list);




module.exports = router;