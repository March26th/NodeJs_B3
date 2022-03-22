const user = require('../models/userModel')
const { use } = require('../routes/userRoutes')
const asyncHandle = require('./asyncHandle')

const getAllUsersAndPosts = (req,res) =>{
    user.findOne({}).then((data)=>{
        res.json(data)
    })
}

const getUserAndPosts = (req,res)=>{
    user.findOne({
        id: req.body.id
    }).then(data=>{
        if(data){
            res.json({status: 'success', content: data})
        }
        else {
            res.json('can\'t find from id')
        }
    })
}

const getUsersBetween18And40 = (req,res)=>{
    const arrayResult = []
    user.findOne({}).then(users =>{
        users.map((user, index)=>{
            if(user.age > 18 && user.age < 40){
                arrayResult.push(user);
            }
        })
        res.json(arrayResult)

    }
    

    )
    .catch(err=>{
        console.log('nguyeen an cute')
    })
}



const getUsersNameStartWithH = (req,res)=>{
    user.findOne({}).then(data=>{
        const arrayName = []
        data.map(user=>{
            if(user.name[0] == 'H' ||user.name[0] == 'h'){
                arrayName.push(user)
            }
        })
        res.json(arrayName)

    })
}


const deleteUserById = (req,res)=>{
    user.findByIdAndDelete({
        id: req.body.id
    })
    .then(()=>{
        res.json('deleted')
    })
}

const updateUserById = (req,res)=>{
    user.findByIdAndUpdate({id: id.body.id},req.body).then(()=>{
        res.json('updated')
    })
}




// [NODEJS - BTVN]
// Tạo 1 model User, Post phù hợp với các yêu cầu dưới
// User và Post là quan hệ 1 - n (1 người có thể có nhiều bài viết)
// Viết các api sau:
// Lấy ra thông tin và bài viết của tất cả user
// Lấy ra thông tin và bài viết của 1 người dùng theo (id user)
// Lấy ra các user có tuổi nằm trong khoảng 18 - 40 tuổi
// Lấy ra các user có tên bắt đầu bằng chữ "h"
// Cập nhật thông tin của người dùng theo id
// Xoá người dùng theo id
// Viết 1 middleware để các api thứ 1,3,4,6 phải có quyền admin mới được dùng