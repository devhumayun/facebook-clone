import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';
import Token from '../models/Token.js';
import User from "../models/User.js";
import { createToken } from '../utility/createToken.js';
import { sendEmail } from '../utility/sendEmail.js';

import createError from './createError.js';

/**
 * @route /api/user
 * @desc get all user
 * @method get
 * @access public
*/

export const allUser = async ( req, res, next ) => {

    try{
        let users = await User.find()

        if( !users ){

           return  next(createError(404, 'Users Not Found'));

        }else{
            res.status(200).json(users);
        }

    }catch(error){
        next(error)
    }

};

/**
 * @route /api/user/:id
 * @desc get single user
 * @method get
 * @access public
*/

export const singleUser = async ( req, res, next ) => {

    try{

        let single_user = await User.findById(req.params.id);

        if(!single_user){

            return next(createError(404, 'User  Not Found'));

        }else{
            res.status(200).json(single_user);
        }
  
      }catch(error){
        next(error);
      }

};

/**
 * @route /api/user
 * @desc create new user
 * @method post
 * @access public
*/

export const createUser = async ( req, res, next ) => {

        const { password } = req.body
        // create solt
        const solt = await bcrypt.genSalt(10);
        // create hash password
        const hash_password = await bcrypt.hash( password, solt );

    try{
        const register_user = await User.create({ ...req.body, password : hash_password})

         const token =  createToken({ id: register_user._id })

         await Token.create({
            useId : register_user._id,
            token : token
         })

         const verify_link = `http://localhost:3000/user/${register_user._id}/verify/${ token }`

        await sendEmail(register_user.email, 'Instagram', verify_link)
        
         res.status(200).json(register_user.email)
  
        res.status(200).json({
            messeage : " User create successfull "
        });
    
    }catch(error){
        next(error)
    }


};

/**
 * @route /api/user/:id
 * @desc  update user
 * @method put or patch
 * @access private
*/

export const updateUser = async ( req, res, next ) => {

    try{

       let id = req.params.id
       let update_user = await User.findByIdAndUpdate(id, req.body, {
        new : true
     })

     if(!update_user){

        return next(createError(404, 'User  Not Found'));

     }else{

        res.status(200).json(update_user)

     }

    }catch(error){
        next(error)
    }

};


/**
 * @route /api/user/:id
 * @desc  delete user
 * @method delete
 * @access private
*/

export const deleteUser = async ( req, res, next ) => {

    
    try{

       let id = req.params.id
       let delete_user = await User.findByIdAndDelete(id)

     if(!delete_user){

        return next(createError(404, 'User Not Found'));

     }else{

        res.status(200).json(delete_user)

     }

    }catch(error){

        next(error)

    }

}


/**
 * @name user login
 * @route api/user/login
 * @method post
 * @access public
 */

export const userLogin = async ( req, res, next ) => {

    try{

        const login_user = await User.findOne({ email: req.body.email })

        if( !login_user ){

            return next(createError(404, 'E-mail Not Found'));
        }
            
         // check password
         const check_password = (await bcrypt.compare(req.body.password, login_user.password));

        if(!check_password){
            return next(createError(404, 'Invalid password'));
        }

        // create token
        const token = jwt.sign({ id : login_user._id, isAdmin : login_user.isAdmin }, process.env.TOKEN_SECRET);

        const { _id, password, isAdmin, ...user_info } = login_user._doc;

        res.cookie("access_token", token).status(200).json({
            token,
            user_info
        })

        
    }catch(error){
        next(error)
    }

}



/**
 * @name user me
 * @route api/user/me
 * @method get
 * @access public
 */

export const getLoggedInUser = async (req, res, next) => {

   try {

    // get token
    const bearer_token = req.headers.authorization
    let token = ''

    if(bearer_token){

        // token
        const token = bearer_token.split(' ')[1]

        // get token user
        const loggedin_user = jwt.verify(token, process.env.TOKEN_SECRET)

        if( loggedin_user ){

            const user = await User.findById(loggedin_user.id)
            
            res.send(user)

        }

        if(!loggedin_user){
            next(createError(401, `Token doesn't exists`))
        }

    }

    if(!bearer_token){
        next(createError(404,'Token Not Found'))
    }
    
   } catch (error) {
    next(error)
   }

}


// User account verify
export const accountVerified = async ( req, res, next ) => {

   try {
    
    const { id, token } = req.body

   const verify_user = await Token.findOne({ id : id, token : token })

   if( !verify_user){
    next(createError(404, 'Invalid URL'))
   }

   if( verify_user ){
    await User.findByIdAndUpdate(id, {
        isVerified : true
    })
    res.status(200).json('Success')
    verify_user.remove()
   }
   
  

   } catch (error) {
    next(error)
   } 

  
}


// Recovery Password link genaret
export const recoverPassword = async (req, res, next) => {

    try {

        const { email } = req.body

        // check recovery user
        const recovery_user = await User.findOne({ email })

        if(!recovery_user){
            res.status(401).json(`Email doesn't exists`)
        }

        if(recovery_user){

            const token = createToken({ id : recovery_user._id })

            // recovery link
            const recovery_link = `http://localhost:3000/user/recover/${ token }`

            await sendEmail(recovery_user.email, 'Reset Password', recovery_link )

            res.status(200).json('Recovery Link send')

        }
        
    } catch (error) {
        next(error)
    }

}


// Reset user password
export const resetPassword = async (req, res, next) => {

    try {
        
     // get token form body data
    const { token, password } = req.body

     // create solt
     const solt = await bcrypt.genSalt(10);
     // create hash password
     const hash_password = await bcrypt.hash( password, solt );

    // get recovery user id
    const { id } = jwt.verify(token, process.env.TOKEN_SECRET)

    if(id){

        const recovery_user = await User.findByIdAndUpdate(id, {
            password : hash_password
        })

        res.status(200).json({
            messeage : "Password Changed Successful"
        })
    }

    } catch (error) {
        next(error)
    }

}