const Customer = require("../models/customers")
const Bill = require("../models/bill")
const mongoose = require("mongoose")

const createBill = async(req, res) =>{
    const {customer_id, payment_amount, payment_method, payment_date} = req.body
}