const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const customerSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    PhoneNumber: {
        type: Number,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true,
    },
    energyPlan: {
        type: String,
        required: true,
    }
}, {timestamps: true})

module.exports = mongoose.model('customer', customerSchema);

