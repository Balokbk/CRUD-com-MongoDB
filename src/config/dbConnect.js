import mongoose, { Connection, mongo } from "mongoose";

async function conectaNaDb(){
    mongoose.connect(process.env./*<Connection>*/)
    return mongoose.connection
}

export default conectaNaDb