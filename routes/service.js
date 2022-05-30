const express = require("express");
const router = express.Router();

const { create, list, read, update, remove, removeSoft } = require("../controllers/service");

//routes
/**
 * @swagger
 * path:
 * /service:
 *  post:
 *      summary: Create service
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


router.post("/service", create);

/**
 * 
 * @swagger
 * /services:
 *   get:
 *     tags:
 *       - name: "Service"
 *     summary: "All Service Active"
 *     responses:
 *       "200": 
 *          description: "ok"   
 */

router.get("/services", list);
/**
 * @swagger
 * /service/{slug}:
 *   get:
 *     tags:
 *       - name: "Service"
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
router.get("/service/:slug", read);
/**
 * @swagger
 * /service/{slug}:
 *   put:
 *     tags:
 *       - name: "Service"
 *     summary: "Update an existing Service"
 *     parameters:
 *       - name: "slug"
 *         in: "path"
 *         description: "service name"
 *         required: true
 *         type: "string"
 *     responses:
 *       "200": 
 *          description: "ok"   
 *       "400": 
 *          description: "Bad Request"
 *       "404": 
 *          description: "Service not found"
 *  
 */
router.put("/service/:slug", update);
/**
 * @swagger
 * /service/{slug}:
 *   delete:
 *     tags:
 *       - name: "Service"
 *     summary: "Delete an existing Service"
 *     parameters:
 *       - name: "slug"
 *         in: "path"
 *         description: "service name"
 *         required: true
 *         type: "string"
 *     responses:
 *       "200": 
 *          description: "ok"   
 *       "400": 
 *          description: "Bad Request"
 *       "404": 
 *          description: "Service not found"
 *  
 */
router.delete("/service/:slug", remove);
/**
 * @swagger
 * /service/{slug}:
 *   path:
 *     tags:
 *       - name: "Service"
 *     summary: "Change Status of Service"
 *     parameters:
 *       - name: "slug"
 *         in: "path"
 *         description: "service name"
 *         required: true
 *         type: "string"
 *     responses:
 *       "200": 
 *          description: "ok"   
 *       "400": 
 *          description: "Bad Request"
 *       "404": 
 *          description: "Service not found"
 *  
 */
router.patch("/service/:slug", removeSoft);


module.exports = router;

/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *            type: string
 *            minlength: 2
 *            maxlength: 32
 *         slug:
 *            type: string
 *            unique: true
 *            lowercase: true
 *            index: true
 *         status:
 *            type: string
 *            default: "Active"
 *            enum:
 *            - "Active"
 *            - "Inactive"
 *       example:
 *         name: Informatica
 *         slug: informatica
 *         status: Active      
 */