const mongoose = require("mongoose")
const User = require("../models/User")
const client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN)
const bcrypt = require('bcrypt')

// REGISTER USER
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
                            userName: req.body.userName,
							fullName: req.body.fullName,
							countryCode: req.body.countryCode,
							stateCode: req.body.stateCode,
							phoneNumber: req.body.phoneNumber,
							verified: false,
							email: req.body.email,
							password: hash
						})
						user
							.save()
							.then(result => {
								return res.status(200).send({
									message: "usuário cadastrado com sucesso",
									result
								})
							})
							.catch(err => {
								return res.status(500).json({
									error: err
								})
							})
					}
				})
			}
        })
        .catch(err => {
			return res.status(500).json({
				error: err
			})
		})
}

//LOGIN USER
exports.user_login = (req, res, next) => {
	User.find({
			email: req.body.email
		})
		.exec()
		.then(user => {
			if (user.length < 1) {
				return res.status(401).json()
			}
			bcrypt.compare(req.body.password, user[0].password, (err, result) => {
				if (err) {
					return res.status(401).json({
						message: "Senha Errada"
					})
				}
				if (result) {
					const usuario = {
                        id: user[0]._id,
                        userName: user[0].userName,
						fullName: user[0].fullName,
						countryCode: user[0].countryCode,
						stateCode: user[0].stateCode,
						phoneNumber: user[0].phoneNumber,
						verified: user[0].verified,
						email: user[0].email
					}
					console.log("ID: ", user[0]._id, "TELEFONE:", user[0].countryCode + user[0].stateCode + user[0].phoneNumber)
					return res.status(200).send(usuario)
				}
				return res.status(401).json({
					message: "Não permitido"
				})
			})
		})
		.catch(err => {
			return res.status(500).json({
				error: err
			})
		})
}
// SEND VERIFICATION
exports.user_sendVerification = (req, res, next) => {
	User.find({
			_id: req.body._id
		})
		.exec()
		.then(user => {
			if (user.length < 1) {
				return res.status(401).json()
			}
			if (user[0]._id) {
				client
					.verify
					.services(process.env.SERVICE_ID)
					.verifications
					.create({
						to: `+${user[0].countryCode + user[0].stateCode + user[0].phoneNumber}`,
						channel: 'sms'
					})
					.then(verification => {
						return res.status(200).send({
								message: "sms enviado para: " + `+${user[0].countryCode + user[0].stateCode + user[0].phoneNumber}`,
								verification
							})
                    })
                    .catch(err => {
                        return res.status(500).json({
                            error: err
                        })
                    })
			} else {
				return res.status(400).send({
					message: "Requisição não efetuada"
				})
			}
		})
		.catch(err => {
			return res.status(500).json({
				error: err
			})
		})
}

exports.user_verify = (req, res, next) => {
	User.find({
			_id: req.body._id
		})
		.exec()
		.then(user => {
			if (user.length < 1) {
				return res.status(401).json()
			}
			if (user[0]._id) {
				client
					.verify
					.services(process.env.SERVICE_ID)
					.verificationChecks
					.create({
						to: `+${user[0].countryCode + user[0].stateCode + user[0].phoneNumber}`,
						code: `${req.body.code}`
					})
					.then(verification => {
						User.findOneAndUpdate({ _id: user[0]._id }, { verified: true }, { new: true, useFindAndModify: false })
							.then(result => {
								return res.status(200).send({
                                    message: `+${user[0].countryCode + user[0].stateCode + user[0].phoneNumber}` + " confirmado!",
									verification
								})
							})
							.catch(err => {
								return res.status(500).json({
									error: err
								})
							})
					})
					.catch(err => {
						return res.status(500).json({
							error: err
						})
					})
			} else {
				return res.status(400).send({
					message: "Requisição não efetuada"
				})
			}
		})
		.catch(err => {
			console.log(err)
			return res.status(500).json({
				error: err
			})
		})
}
