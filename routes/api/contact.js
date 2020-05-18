const router = require("express").Router();
const contactController = require("../../controllers/contactController");

// Matches with "/api/contacts"
router.route("/")
  .get(contactController.findAll)
  .post(contactController.create);

  
module.exports = router;
