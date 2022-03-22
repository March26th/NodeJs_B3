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
    },
    role:{
        type:String,
        enum:["user","admin"]
        
    },
    password:String,
    post:[
        {content: String,
        title: string,
        comment: [{user: String, comment: String}]
        }
    ]
});
module.exports = mongoose.model("Users",userSchema)