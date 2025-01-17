import mongoose from "mongoose"

const MONGODB_URI = process.env.MONGODB_URI

const ConnectionDB = async () =>{
  try{
    if(!MONGODB_URI){
      throw new Error("MongoDB URI is not defined!")
    }
    await mongoose.connect(MONGODB_URI,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB!');
  }
  catch(error){
    console.error("Error connecting to MongoDB", error)
    process.exit(1)
  }
}

export default ConnectionDB