const express = require("express");
const mongoose = require("mongoose");
const routes = require('./routes/routes')

const app = express()

app.use(express.json());

app.use("/api", routes)

mongoose.connect('mongodb://localhost:27017/halooo')

    .then(() => {
        app.listen(3000, () => {
            console.log("Listening to port 3000")
        })
    })

    .catch(() => {
        res.status(500).json({
            success: "false"
        })
    })