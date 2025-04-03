const express = require("express")
const router = express.Router();
const {
    createBill,
} = require ("../controllers/controllers")

router.post("/customers/:id/paybill", createBill)

module.exports = router