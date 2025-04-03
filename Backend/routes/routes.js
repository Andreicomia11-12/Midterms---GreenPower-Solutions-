const express = require("express")
const router = express.Router();
const {
    createBill,
} = require ("../controllers/controllers")

router.post("/customers/:id/paybill", async (req, res) => {
    req.body.customer_id = req.params.id;
    createBill(req, res);
});

module.exports = router