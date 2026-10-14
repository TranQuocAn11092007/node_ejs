const mongoose=require('mongoose')
const ConnectDB= async ()=>{
    try{
        await mongoose.connect('mongodb+srv://tqana25078_db_user:tranquocan@cluster0.q1hf6lm.mongodb.net/?appName=Cluster0/users_db')
        console.log('Kết nối MongoDB thành công')
    }catch(err){
        console.error('Lỗi kết nối MongoDB: ',err)
        process.exit(1)
    }
}

module.exports=ConnectDB