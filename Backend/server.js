const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes");

const app = express();
app.use(express.json());
app.use("/api/v1", routes);

mongoose.connect("mongodb://localhost:27017/halooo")
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(3000, () => console.log("Server running on port 3000"));
    })
    .catch(err => {
        console.error("MongoDB connection error:", err);
        process.exit(1);
    });