const User = require("../models/user");

exports.signup = (req, res) => {
    const user = new User(req.body);
    console.log(user);
    user.save((err, user) => {
        if (err) {
            return res.status(400).json({
                err: err
            })
        }
        res.json(user);
    });
};

exports.getUserById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: "user was not found"
            })
        }
        req.profile = user;
        next();
    })
}
exports.getAllUsers = (req, res) => {
    User.find().exec((err, users) => {
        if (err || !users) {
            return res.status(400).json({
                error: "user was not found"
            })
        }
        res.json(users);
    })
}

exports.updateUser = (req, res) => {
    User.findByIdAndUpdate(
        { _id: req.profile._id },
        { $set: req.body },
        { new: true, useFindAndModify: false },
        (err, user) => {
            if (err || !user) {
                return res.status(400).json({
                    error: "user was not able to update"
                })
            }
            user.salt = undefined;
            user.encry_password = undefined;
            res.json(user);
        }
    )
}

exports.getUser = (req, res) => {
    req.profile.salt = undefined;
    req.profile.encry_password = undefined;
    return res.json(req.profile);
}
