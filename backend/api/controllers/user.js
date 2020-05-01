const mongoose = require("mongoose")
const User = require("../models/User")
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
								return res.status(201).send({
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
				return res.status(401).json({
					message: "email não cadastrado!"
				})
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