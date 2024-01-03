const users =require('../models/userSchema')
// this controller to  define the router api   logic  to solve that  api  in  extions is js fil 
//  in json web token is Authrization  one person to login to permission 
// to add and delete upate to all acccsee to in login  persion  the reason to implement  use of json webtoken 
const jwt = require ('jsonwebtoken')

// register
exports.register =async (req,res)=>{
    console.log("inside register controller function");
    const {username,email,password}=req.body
    // console.log(`${username},${email},${password}`);

   try {const existingUser = await users.findOne({email})
    if(existingUser){
        res.status(406).json("Account already  exit!!! please login...")
    }else{
        // in model to mangoose 
        const newUser= new  users({
            username,email,password,profile:""
        })
        await newUser.save()
        // save 
        res.status(200).json(newUser)
    }
    }
    catch(err){
        res.status(401).json(`register Api Failed ,err ${err}`)
    }
}
// login define  
exports.login = async(req,res)=>{
    console.log("inside login controller function ");
    const {email,password} = req.body
   
    try{
        const existingUser = await users.findOne({email,password})
        if(existingUser){
            const token = jwt.sign({userId:existingUser._id},"masssecretkey1221")
            res.status(200).json({
                existingUser,token
            })
        }else{
            res.status(404).json(`incorrect email/password ckeck in to register`)
        }

    }catch(err){
        res.status(401).json(`login Api Failed ,err ${err}`)
    }
}

// update 
exports.editUser = async(req,res)=>{
    const userId = req.payload
    const {username,email,password,profile} = req.body
    const uploadImage = req.file?req.file.filename:profile

    try{

        const updateUser =await users.findByIdAndUpdate({_id:userId},{
            username,email,password,profile:uploadImage
        },{new:true})

        await updateUser.save()
        res.status(200).json(updateUser)

    }catch(err){
        res.status(401).json(err)
    }
}