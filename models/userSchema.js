// assign the mongoose to a varialbe
const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        min: [4, 'must be at least 4, got {VALUE}']
    },
    email: {
        type: String,
        require: true,
        unique: true,
        validator(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email")
            }
        }

    },
    password: {
        type: String,
        require: true

    },
    profile: {
        type: String
    }
})
const users = mongoose.model("users", userSchema)

module.exports = users 