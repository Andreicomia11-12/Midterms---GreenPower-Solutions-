const express = require("express")
const router = express.Router();
const {
    getBill,
    createBill,
} = require ("../controllers/controllers")
const {
    register
} = require('../controllers/Customercontrollers')

router.post("/new", register)

router.get("/customers/:id/bill", getBill)

router.post("/customers/:id/paybill", async (req, res) => {
    req.body.customer_id = req.params.id;
    createBill(req, res);
});

module.exports = router