const Contract = require("../models/Contract")
const mongoose = require("mongoose")
const crypto = require('crypto')
const algorithm = process.env.ALGORITHM
const encoding_1 = process.env.ENCOD_METHOD_PRIMARY
const encoding_2 = process.env.ENCOD_METHOD_SECUNDARY
const client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN)
const Mideal = process.env.PHONE

// ENCRYPT CONTRACT
exports.contract_encrypt = (req, res, next) => {
    var password = crypto.randomBytes(32).toString(encoding_1)
    var encrypt = crypto.createCipher(algorithm, password)
    var encrypted = encrypt.update(req.body.payload, encoding_2, encoding_1)
    encrypted += encrypt.final(encoding_1)

    var contract = new Contract({
        _id: new mongoose.Types.ObjectId(),
        encryptedFile: encrypted
    })

    contract
        .save()
        .then(result => {
            client
                .messages
                .create({
                    body: "Olá, " + `${req.body.fullName}` + ".\nO Número do seu contrato criado no Mideal é: \n" + `${contract._id}` + "\n A senha para acesso do contrato é: \n" + `${password}` + "\nArmazene a senha em local seguro, por ser única e intrasferível, não será possível recupera-lá para acesso posterior!",
                    from: Mideal,
                    to: '+' + `${req.body.phoneNumber}`
                })
                .then(resp => {
                    return res.status(200).send({
                        message: "contrado armazenado com sucesso",
                        _id: result._id,
                        password: password
                    })
                })
                .catch(err => {
                    return res.status(404).json({
                        message: "Número para contato é inválido!",
                        error: err
                    })
                })
        })
        .catch(err => {
            return res.status(500).json({
                message: "Erro ao armazenar o contrato!",
                error: err
            })
        })
}

//DECRYPT CONTRACT
exports.contract_decrypt = (req, res, next) => {
    Contract.find({
            _id: req.body._id
        })
        .exec()
        .then(contract => {
            if (contract.length < 1) {
                return res.status(404).json({
                    message: "Documento não existe!"
                })
            }
            if (contract[0]._id) {
                var decrypt = crypto.createDecipher(algorithm, req.body.password);
                var decryptedFile = decrypt.update(contract[0].encryptedFile, encoding_1, encoding_2)
                decryptedFile += decrypt.final(encoding_2)

                return res.status(200).send(decryptedFile)
            }
            return res.status(401).json({
                message: "Erro de Senha, acesso ao documento não permitido!"
            })
        })
        .catch(err => {
            return res.status(500).json({
                error: err
            })
        })
}