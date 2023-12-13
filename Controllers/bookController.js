const books = require('../models/bookSchema')

// add books 
exports.addbooks =async (req, res) => {
   console.log("inside add books function!!!");
   const userId = req.payload
   const bookImage = req.file.filename

   const {
      bookTitle,
      autorName,
      bookCategory,
      bookDescription,
      bookLink,
   } = req.body
   // console.log(`${bookTitle},${autorName},${bookCategory},${bookDescription},${bookLink},${bookImage},${userId}`);
   try{
      const existingBook = await books.findOne({bookLink})
      if(existingBook){
         res.status(406).json("books already exist!!! please upload another one ")

      }else{
         const newBook= new books({
            bookTitle,autorName,bookCategory,bookDescription,bookLink,bookImage,userId
         })
         await newBook.save()
         res.status(200).json(newBook)
      }

   }catch(err){
      res.status(401).json(`request faild error:${err}`)
   }
}

//get user book only token 
exports.alluserBook = async (req, res)=>{
   const userId = req.payload
   try{
      const userBooks = await books.find({userId})
      res.status(200).json(userBooks)

   }catch(err){
      res.status(401).json(err)
   }

}

// get all users book 
exports.allBook = async(req, res)=>{
   try{
      const bookDetails = await books.find()
      res.status(200).json(bookDetails)
   }catch(err){
      res.status(401).json(err)
   }

}

// update  books
exports.editbook = async (req, res)=>{
   // get the  book is 
   const { id } =req.params
   const  userId = req.payload
   const {
      bookTitle,
      autorName,
      bookCategory,
      bookDescription,
      bookLink,
      bookImage,
   } = req.body
   const uploadbookImage = req.file?req.file.filename:bookImage

   try{
      const updateBook = await books.findByIdAndUpdate({_id:id},{
         bookTitle,autorName,bookCategory,bookDescription,bookLink,bookImage:uploadbookImage,userId
      },{new:true}) 
      await updateBook.save()
      res.status(200).json(updateBook)
   }catch(err){
      res.status(401).json(err)
   }

}

// delete the book
exports.deletebook= async(req, res)=>{
   // which book you delete i wan to that book
   const {id}= req.params
   try{
      const removebook =await books.findByIdAndDelete({_id:id})
      res.status(200).json(removebook)

   }catch(err){
      res.status(404).json(err)
   }

}