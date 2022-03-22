const user = require('../models/userModel')
const { use } = require('../routes/userRoutes')

const getAllUsersAndPosts = (req,res) =>{
    user.findOne({}).then((data)=>{
        res.json(data)
    })
    .catch(err=>{
        console.log('nguyeen an cute')
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