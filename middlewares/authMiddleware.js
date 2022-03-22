const User = require("../models/userModel")


module.exports.author = async (req,res,next)=>{
    let {id} = req.query;
    let user = await User.findOne({id});

    if(!user){
        return res.send("User không tồn tại ")
    }
    if(user.role !== "user"){
        return res.send("User không có quyền")
    }
    next();
}
/*
[NodeJS] BTVN
Các bạn code api nén văn bản hoặc api mã hóa, giải mã 1 đoạn văn bản hoặc rút gọn link :
* Mô tả rút gọn link (nếu ai chọn)
- Người dùng nhập link gốc -> server trả về link rút gọn
- Truy cập link gút gọn -> chuyển hướng đến link gốc
Yêu cầu:
- API chỉ dùng được khi có token jwt
- Viết middleware xử lý lỗi
*/