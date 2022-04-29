const jwt = require("jsonwebtoken")

const tokenAuth = async function (req, res, next) {
    try {
        const key = req.headers['x-api-key']
        if (!key) { return res.status(403).send("Unauthorised access") }
        try {
            const tokendata = jwt.verify(key, "Project 1")
            console.log(tokendata)
             req.tokenId = tokendata.id
             next()
        }
        catch (error) {
            res.status(403).send("Unauthorised access");
        }
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}
module.exports.tokenAuth = tokenAuth