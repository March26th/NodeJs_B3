const mongoose= require('mongoose')
const Schema=mongoose.Schema

const userSchema = new Schema({
    name:{
        type:String,
        required: [true,"Vui lòng nhập tên"],
        minlength:[3,"Độ dài trên 3 kí tự"]
    },
    age:{
        type:Number,
        required: [true,"Vui lòng nhập tuổi"],
        min:5,
        max:100
    }
});
module.exports = mongoose.model("users",userSchema)