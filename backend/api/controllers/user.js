const mongoose = require("mongoose")
const User = require("../models/User")
const client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN)
const bcrypt = require('bcrypt')

exports.user_register = (req, res, next) => {
    User.find({
        email: req.body.email
    })
    .exec()
    .then(user => {
        if (user.length >= 1) {
            return res.status(409).json({
                message: "email já existe!"
            })
        } else {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if (err) {
                    return res.status(500).json({
                        error: err
                    })
                } else {
                    const user = new User({
                        _id: new mongoose.Types.ObjectId(),
                        fullName: req.body.fullName,
                        countryCode: req.body.countryCode,
                        phone: req.body.phone,
                        verified: req.body.verified,
                        email: req.body.email,
                        password: hash
                    })
                    user
                        .save()
                        .then(result => {
                            console.log('resultado: ',result);
                            res.status(200).send({
                                message: "usuário cadastrado com sucesso",
                                phone: req.body.phone,
                                result
                            })
                        })
                        .catch(err => {
                            console.log(err);
                            res.status(500).json({
                                error: err
                            })
                        })
                }
            })
        }
    })
}

exports.user_login = (req, res, next) => {
    User.find({
        email: req.body.email
    })
    .exec()
    .then(user => {
        if (user.length < 1) {
            console.log(user)
            return res.status(401).json()
        }
        bcrypt.compare(req.body.password, user[0].password, (err, result) => {
            if (err) {
                return res.status(401).json({
                    message: "Senha Errada"
                })
            }
            if (result) {
                console.log(result)
                const usuario = {
                    id: user[0]._id,
                    fullName: user[0].fullName,
                    countryCode: user[0].countryCode,
                    phone: user[0].phone,
                    verified: user[0].verified,
                    email: user[0].email
                }
                console.log("access_token: ", user[0]._id, "usuario:", user[0].username)
                return res.status(200).send(usuario)
            }
            res.status(401).json({
                message: "Não permitido"
            })
        })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            error: err
        })
    })
}
// TODO - CHECK ERRORS
exports.user_verify = (req, res, next) => {
    User.find({
        email: req.body.email
    })
    .exec()
    .then(user => {
        if (user.length < 1) {
            console.log(user)
            return res.status(401).json()
        }
        if (req.body.phone && (req.query.code).length === 4) {
            client
                .verify
                .services(process.env.SERVICE_ID)
                .verificationChecks
                .create({
                    to: `+${req.query.phone}`,
                    code: req.query.code
                })
                .then(data => {
                    if (data.status === "approved") {
                        user.verified = true;
                        user.save().then(result => {
                                    res.status(200).send({
                                    message: "Usuario verificado!",
                                    data
                                })
                                .catch(err => {
                                    console.log(err);
                                    res.status(500).json({
                                        error: err
                                    })
                                })
                        })
                    }
                })
        } else {
            res.status(400).send({
                message: "Erro no número de telefone ou código de verifição :(",
                phone: req.query.phone,
                data
            })
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            error: err
        })
    })
}
