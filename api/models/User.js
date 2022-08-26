import mongoose from "mongoose";

const userModel = mongoose.Schema({

    fname : {
        type : String,
        requried :  true, 
        trim : true
    },
    lname : {
        type : String,
        requried : true,
        trim : true
    },
    email : {
        type : String,
        trim : true,
    },
    password : {
        type : String,
        requried : [ true, 'All fields are requried' ],
        trim : true,
    },
    username : {
        type : String,
        trim : true
    },
    photo : {
        type : String
    },
    age : {
        type : Number,
    },
    gender : {
        type : String,
        requried : true
    },
    isAdmin : {
        type : Boolean,
        default : false
    },
    isVerified : {
        type : Boolean,
        default : false
    },
    statue : {
        type : Boolean,
        default : true
    },
    trash : {
        type : Boolean,
        default : false
    }

}, {
    timestamps : true
});


// export default students model
export default mongoose.model( 'User', userModel )