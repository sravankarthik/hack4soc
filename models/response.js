const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = Schema;

const responseSchema = new mongoose.Schema({
    user: {
        type: ObjectId,
        ref: "User"
    },
    type: {
        type: Number
    },
    qna: [{
        question: {
            type: String
        },
        rating: {
            type: String
        },
        feedback: {
            type: String
        }
    }]


}, { timestamps: true });

module.exports = mongoose.model("Response", responseSchema);