const Bill = require("../models/bill")
const mongoose = require("mongoose")

const getBill = async(req, res) =>{ 
    const{id}=req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No Such bill'})
   }

    const bill = await Bill.findById(id)

   if (!bill){
        return res.status(404).json({error: 'No Such bill'})
   }

    res.status(200).json(bill)
}


const createBill = async(req, res) =>{
    const {customer_id, payment_amount, payment_method, payment_date} = req.body

    try{
        const bill = await Bill.create({customer_id, payment_amount, payment_method, payment_date})
        res.status(200).json(bill)
    }catch (error){
        res.status(400).json({ error: error.message })
    }
}


module.exports = {
    getBill, 
    createBill,
}

