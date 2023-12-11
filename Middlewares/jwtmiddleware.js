const jwt = require('jsonwebtoken')

const jwtmiddleware = (req, res, next) => {
    console.log("inside jwtmiddleware ");
    const token = req.headers['authorization'].split(" ")[1]
    // console.log(token);
    try {
        const jwtResponse = jwt.verify(token, "masssecretkey1221")
        console.log(jwtResponse);
        req.payload = jwtResponse.userId
        next()
    } catch (err) {
        res.status(401).json("Autorization failed !!! please login.....")
    }

}
module.exports = jwtmiddleware