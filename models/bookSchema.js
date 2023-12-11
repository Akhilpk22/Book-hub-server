// assign the mongoose to a varialbe
const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    bookTitle:{
        type:String,
        require:true
    },
    autorName:{
        type:String,
        require:true
    },
    bookCategory:{
        type:String,
        require:true
    },
    bookDescription:{
        type:String,
        require:true
    },
    bookLink:{
        type:String,
        require:true
    },
    bookImage:{
        type:String,
        require:true
    },
    userId:{
        type:String,
        require:true
    }


})
const books = mongoose.model("books",bookSchema)

module.exports = books