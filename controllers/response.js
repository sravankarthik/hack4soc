const Response = require("../models/response");
const User = require("../models/user");

exports.createResponse = (req, res) => {
    req.body.user = req.profile;
    const response = new Response(req.body);
    response.save((err, response) => {
        if (err) {
            return res.status(400).json({
                error: "Failed to save your response in DB"
            });
        }
        res.json(response);
    });
};

exports.getResponseById = (req, res, next, id) => {
    Response.findById(id).exec((err, response) => {
        if (err || !response) {
            return res.status(400).json({
                error: "response was not found"
            })
        }
        req.response = response;
        next();
    })
}

exports.getResponse = (req, res) => {
    return res.json(req.response);
}

exports.getAllResponse = (req, res) => {
    Response.find().populate('user').exec((err, responses) => {
        if (err || !responses) {
            return res.status(400).json({
                error: "responses was not found"
            })
        }
        res.json(responses);
    })
}