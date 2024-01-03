const express = require('express')
// exports
const router = new express.Router()
const userController = require('../Controllers/userController')
const bookController =require('../Controllers/bookController')
const jwtmiddleware = require('../Middlewares/jwtmiddleware')
const multerConfig = require('../Middlewares/multerMiddleware')

// this folder to define to all api request 
// register API router file 
// in api 1 argument is path and  redierct it 
router.post('/user/register', userController.register)

// this is login api define 
router.post('/user/login',userController.login)
 
// this is add books  router specific middlewerar
// add-projects
router.post('/books/add',jwtmiddleware,multerConfig.single('bookImage'),bookController.addbooks)

// getuserbooks in user
router.get('/user/all-books',jwtmiddleware,bookController.alluserBook)

// alll user books
router.get('/books/all',bookController.allBook)

// edit books
router.put('/books/edit/:id',jwtmiddleware,multerConfig.single("bookImage"),bookController.editbook)


// delete books
router.delete('/books/remove/:id',jwtmiddleware,bookController.deletebook)

router.put('/user/edit', jwtmiddleware,multerConfig.single("profileImage"), userController.editUser);


// export the  Router() in the step all defined datas 
module.exports = router