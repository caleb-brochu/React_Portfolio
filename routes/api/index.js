const router = require("express").Router();
const contactRoutes = require("./contact");

// Contacrt routes
router.use("/contact", contactRoutes);

module.exports = router;
