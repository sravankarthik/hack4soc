const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = Schema;

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    phone_number: {
        type: String
    },
    grade: {
        type: Number
    },
    prediction: {
        type: String
    }

}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);