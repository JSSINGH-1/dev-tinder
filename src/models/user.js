import mongoose  from "mongoose";


const userSchema = new mongoose.Schema({
    firstName : {
        type: String
    },
    lastName : {
        type: String
    },
    emailId : {
        type : String
    },
    password : {
        type : String
    },
    age: {
        type : Number
    },
    gender :{
        type : String
    }
})

const UserModel = mongoose.model("user", userSchema);

export default UserModel
