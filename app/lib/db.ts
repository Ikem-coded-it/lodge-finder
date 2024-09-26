import mongoose from "mongoose";

const connectToDB = async() => {
    const connection: {isConnected?: number} = {};
    try {
        if (connection.isConnected) {
            return console.log("DB connected")
        }
        const db = await mongoose.connect(process.env.MONGO_URI as string)
        console.log("DB connected")
        connection.isConnected = db.connections[0].readyState
    } catch(e: any) {
        console.log(e.message)
        throw new Error(e)
    }
}

export default connectToDB;