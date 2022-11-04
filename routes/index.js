const express = require("express");
const router = express.Router();
const kpiController = require("../controllers/kpicontroller");
router.post("/submit-kpis", kpiController.submit);
module.exports = router;
