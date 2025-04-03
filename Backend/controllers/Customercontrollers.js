const mongoose = require("mongoose");
const Customer = require("../models/customers");

const register = async (req, res) => {
    const { name, email, PhoneNumber, address, energyPlan } = req.body;

    try {
        const customer = await Customer.create({ name, email, PhoneNumber, address, energyPlan });
        res.status(201).json(customer);
    } catch (error) {
        console.error(" ERROR in register controller:", error); 
        res.status(500).json({ error: error.message || "Internal Server Error" });
    }
};

module.exports = {
    register
};