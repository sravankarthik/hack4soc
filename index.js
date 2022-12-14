const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const app = express()
const cookieParser = require("cookie-parser");
const cors = require("cors");

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const responseRoutes = require("./routes/response");


//Routes
// app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", responseRoutes);




//DB connection
const port = 8000
// mongoose.connect('mongodb://localhost:27017/seminar')
//     .then(() => { console.log("DB connected...") });
mongoose.connect('mongodb+srv://test:test@cluster0.un8gpf6.mongodb.net/test')
    .then(() => { console.log("DB connected...") });
//Server connection
app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})