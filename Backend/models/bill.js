const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const billSchema = new Schema({
    customer_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "customer",
        required: true
    },
    payment_amount:{
        type: Number,
        required: true,
    },
    payment_method: {
        type: String,
        required: true,
    },
    payment_date: {
        type: Date,
        required: true,
        default: Date.now,
    },
}, {timestamps: true})

module.exports = mongoose.model('bills', billSchema);

