const express = require("express");
const router = express.Router();

const { create, listAll, eventsCount, read, update, removeSoft, list} = require("../controllers/event");

//routes
/**
 * @swagger
 * /event:
 *  post:
 *      summary: Create Event
 *  requestBody: 
 *      content:
 *        application/json:
 *          schema:
 *            $ref: 
 *  responses:
 *      "200":
 *         description: A successful response
 *      "400":
 *         description: A bad request response
 */

router.post("/event", create); 
/**
 * 
 * @swagger
 * /event/{count}:
 *   get:
 *     tags:
 *       - name: "Event"
 *     summary: "All Event Active by count"
 *     parameters:
 *       - name: "count"
 *         in: "path"
 *         description: "count event search"
 *         required: true
 *         type: "integer"
 *         format: "int64"
 *     responses:
 *       "200": 
 *          description: "ok"   
 */
router.get("/event/:count", listAll);

/**
 * 
 * @swagger
 * /event/total:
 *   get:
 *     tags:
 *       - name: "Event"
 *     summary: "number of events entered"
 *     responses:
 *       "200": 
 *          description: "ok"   
 */
router.get("/event/total", eventsCount);
/**
 * @swagger
 * /event/{slug}:
 *   get:
 *     tags:
 *       - name: "Event"
 *     summary: "show service with the name in path"
 *     parameters:
 *       - name: "slug"
 *         in: "path"
 *         description: "service name"
 *         required: true
 *         type: "string"
 *     responses:
 *       "200": 
 *          description: "ok"   
 */
router.get("/event/:slug", read);
router.put("/event/:slug", update);
router.patch("/event/:slug", removeSoft);
router.post("/events", list);




module.exports = router;

/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       required:
 *         - name
 *         - rut
 *  
 *       properties:
 *         name:
 *            type: string
 *         rut:
 *            type: string
 *         date:
 *            type: Date
 *         descrip:
 *            type: string
 *         acciones:
 *            type: string
 *         slug:
 *            type: string
 *            unique: true
 *            lowercase: true
 *            index: true
 *         active:
 *            type: Boolean
 *            default: true
 *         status:
 *            type: string
 *            default: "Active"
 *            enum:
 *            - "Active"
 *            - "Inactive"
 *       example:
 *         name: Caida por las escaleras
 *         rut: "19802123-4"
 *         date: 01/01/2022
 *         slug: 19802123-4
 *         active: true
 *         status: "Active"
 * 
 * 
   
 */