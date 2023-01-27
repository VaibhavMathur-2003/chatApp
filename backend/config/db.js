const mongoose = require("mongoose");

const connectDB = async()=>{
    try{
        mongoose.set("strictQuery", false);
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`mongodb: ${conn.connection.host}`);

    } catch (error) {
        console.log(`error: ${error.message}`);
        process.exit();
    }
};

module.exports = connectDB;