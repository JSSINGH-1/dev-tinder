import mongoose from 'mongoose';




export const connectDB = async () =>{

    await mongoose.connect(
        "mongodb+srv://janmejaysingh1199:e5juJUyd7BIIawDY@devtinder.rz7voqe.mongodb.net/"
    )
}


// connectDB().then(() =>{
//     console.log("Mongoose connected sucessfuly")
// }).catch((error) =>{
//     console.Console.log("error ", error )
// })

// module.exports = connectDB

