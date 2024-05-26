import mongoose from "mongoose";
import User from "../models/usermodel.js";
import bcrypt from "bcrypt";
import  Jwt from "jsonwebtoken";
import  generator from "generate-password";

const secret ="ashish2211"
 export const signup = async(req,res)=>{
    console.log(req.body)
     const {username,password,email} = req.body;
     try {
        const exist =  await User.findOne({
            $or:[{username},{email}]
        })

        
        if (exist){
            res.status(400).send("the username or  email already exist")
            return
            
        }
        const salt =await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password,salt)
        const newuser = new User({
            username:username,
            password:hash,
            email:email
        });
        
        const token = Jwt.sign(email,secret);

        await newuser.save()
        
        res.cookie("JWT",token,{
            httpOnly: true, // Ensures the cookie is only accessible via HTTP(S) and not by client-side scripts
            maxAge: 30 * 24 * 60 * 60 * 1000, // Cookie expires in 30 day
            secure: true, // Ensures the cookie is only sent over HTTPS in production
            })
        res.send("user created succesfully ").status(200)
     } catch (error) {
        res.status(404).json("unable to create user")
        console.log(error);
     }
};

export const login = async(req,res)=>{
    const {username,password,email}=req.body;
    const exist = await User.findOne({email});
    if (!exist){
        res.status(400).send("user doesnot exist")
        return 
    }
    
    const compare =  await bcrypt.compare(password,exist.password)
    const check = exist.username===username;

    if (!compare || !check){
        res.status(400).send("wrong username or password");
        return
    }
  
    
    try {
        const token = Jwt.sign(email,secret);
        res.cookie("JWT",token,{
            httpOnly: true, // Ensures the cookie is only accessible via HTTP(S) and not by client-side scripts
            maxAge: 30 * 24 * 60 * 60 * 1000, // Cookie expires in 30 day
            secure: true, // Ensures the cookie is only sent over HTTPS in production
            })
        const { password ,...rest} =exist._doc 
        console.log(rest)   
        res.status(200).json(rest)  
    } catch (error) {
        console.log(error)
        res.send("cannot create the jwt").status(400)
    }

};

export const oauth = async ( req, res)=>{
    const {username,email,photo} =req.body ;
    
    const exist = await User.findOne({email});
     if (exist){
        const token = Jwt.sign(email,secret);
        const {password,...rest} =exist._doc 
        res.cookie("JWT",token,{
            httpOnly: true, // Ensures the cookie is only accessible via HTTP(S) and not by client-side scripts
            maxAge: 30 * 24 * 60 * 60 * 1000, // Cookie expires in 30 days
            secure: true, // Ensures the cookie is only sent over HTTPS in production
            })
        console.log(rest)  
        res.status(201).json(rest)
     }
     else{
        const genpassword =generator.generate(
            { 
                length: 8, 
                numbers: true, 
                symbols: true, 
                uppercase: false, 
                excludeSimilarCharacters: true, 
                strict: true, 
              
            }
        )
        const newuser = new User({
            username:username,
            password:genpassword,
            email:email
        });
        const token = Jwt.sign(email,secret);

        await newuser.save()
        const {password,...rest} =newuser._doc
        console.log(rest) 
        
        res.cookie("JWT",token,{
            httpOnly: true, // Ensures the cookie is only accessible via HTTP(S) and not by client-side scripts
            maxAge: 30 * 24 * 60 * 60 * 1000, // Cookie expires in 30 day
            secure: true, // Ensures the cookie is only sent over HTTPS in production
            });
        res.json(rest).status(200)
     }

}


export const update = async (req,res)=>{
    const {username, email,password} = await req.body;
    const p =password
    
    try {
        const exist = await User.findById(req.params.id)
        console.log(exist)
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(p,salt);
        
        await exist.updateOne({username:username});
        await exist.updateOne({password:hash})
        await exist.updateOne({email:email})
        console.log(exist,"aa")
        const token = Jwt.sign(email,secret);
        
        
        const { password ,...rest} =exist._doc 

        

        res.cookie("JWT",token,{
            httpOnly: true, // Ensures the cookie is only accessible via HTTP(S) and not by client-side scripts
            maxAge: 30 * 24 * 60 * 60 * 1000, // Cookie expires in 30 day
            secure: true, // Ensures the cookie is only sent over HTTPS in production
            })
          
        res.status(200).json(rest);

    } catch (error) {
        res.status(400).send("error")
        console.log(error)
    }

}

export const deleteuser =  async (req,res)=>{
    try {
    const e = await User.findById(req.params.id)    
    if (!e){
        res.status(400).send("id does not exist")
        return
    };
    const exist = await User.findByIdAndDelete( req.params.id);
    res.status(202).send("user deleted")

        
    } catch (error) {
        res.status(400).send("unable to delete")
        console.log(error)
    }
     
}



