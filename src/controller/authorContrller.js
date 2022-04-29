const authorModel = require("../model/authorModel")
const jwt = require("jsonwebtoken")
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
const createAuthor = async (req, res) => {
    try {
        const data = req.body
        //new add -------
        if (Object.keys(data).length == 0) {
            return res.status(400).send({ status: true, msg: "input empty" })
        }
        if (!data.fname || !data.lname || !data.email || !data.password || !data.title)
            return res.status(400).send({ status: false, msg: "Enter mandatory fields" })

        if (typeof (data.fname) != "string" || typeof (data.lname) != "string") {
            return res.status(400).send({ status: false, msg: "Input is not string..." })
        }
        if (!validateEmail(data.email)) {
            return res.status(400).send({ status: false, msg: "Invaild E-mail id " })
        }
        const isEmailUnique = await authorModel.findOne({ email: data.email })
        if (isEmailUnique)
            return res.status(400).send({ status: false, msg: "email id already registered" })

        const result = await authorModel.create(data)
        res.status(201).send({ status: true, msg: result })
    }
    catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}

const login = async function (req, res) {
    try {
        const data = req.body
        if (Object.keys(data).length == 0) {
            return res.status(400).send({ status: false, msg: "Please Enter E-mail and Password..." })
        }
        if (data.email == undefined) {
            return res.status(400).send({ status: false, msg: "Please Enter Email" })
        }
        if (data.password == undefined) {
            return res.status(400).send({ status: false, msg: "Please Provide Password" })
        }
        if (!validateEmail(data.email)) {
            return res.status(400).send({ status: false, msg: "Invaild E-mail id " })
        }
        const result = await authorModel.findOne({ email: data.email, password: data.password }).select({ _id: 1 })
        if (!result) {
            return res.status(400).send({ status: false, msg: "Invalid Credentials" })
        }
        const token = jwt.sign({
            id: result._id
        }, "Project 1");
        res.setHeader("x-api-key", token);
        res.status(200).send({ status: true, data: "logged in successfully" })
    }
    catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}

module.exports.createAuthor = createAuthor;
module.exports.login = login
