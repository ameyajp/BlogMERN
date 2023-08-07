import mongoose from "mongoose"


const Connection=async(username,password)=>{
    const URL=`mongodb://${username}:${password}@ac-lxryeq0-shard-00-00.knmuz1f.mongodb.net:27017,ac-lxryeq0-shard-00-01.knmuz1f.mongodb.net:27017,ac-lxryeq0-shard-00-02.knmuz1f.mongodb.net:27017/?ssl=true&replicaSet=atlas-l04scc-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{

        
        await mongoose.connect(URL,{ useNewUrlParser:true});
        console.log('Database connected successfully');

    }catch(error)
    {
        console.log('Error while connecting with database ',error);
    }
}

export default Connection;