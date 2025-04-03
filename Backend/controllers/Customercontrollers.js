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


const updateCustomer = async (req, res) => {
    const { id } = req.params;  // Get customer ID from URL
    const { new_address, new_phone_number, new_email } = req.body;  // Get new details from request body

    try {
        // Find and update the customer
        const updatedCustomer = await Customer.findByIdAndUpdate(
            id,
            { 
                address: new_address, 
                PhoneNumber: new_phone_number, 
                email: new_email 
            },
            { new: true, runValidators: true } // Return updated customer & validate new data
        );

        if (!updatedCustomer) {
            return res.status(404).json({ error: "Customer not found" });
        }

        res.status(200).json(updatedCustomer);
    } catch (error) {
        console.error("❌ ERROR updating customer:", error);
        res.status(500).json({ error: error.message || "Internal Server Error" });
    }
};


module.exports = {
    register,
    updateCustomer
};