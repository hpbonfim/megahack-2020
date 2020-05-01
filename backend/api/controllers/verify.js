const User = require("../models/User")
const client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN)

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

// VERIFY CODE
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
