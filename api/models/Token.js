import mongoose from "mongoose";

const tokenModel = mongoose.Schema({

    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        requried : true
    },
    token : {
        type : String,
        requried : true
    }
    
}, {
    timestamps : true
});


// export default students model
export default mongoose.model( 'Token', tokenModel )