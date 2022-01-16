const express = require("express");
const router = express.Router();
const controllers = require("../controllers/foundingFathersControllers");

// add entry - CREATE
router.post("/add", controllers.addEntry);

// display from the collection - READ
router.get("/list", controllers.displayAll);
router.get("/presidents", controllers.displayPresidents);

// update entry keys: name & isPresident - UPDATE
router.patch("/update/:name", controllers.updateEntry); //enter full name dash separated, info to be updated as JSON body

// delete entry by name - DELETE
router.delete("/delete/:name", controllers.deleteEntry);

module.exports = router;
