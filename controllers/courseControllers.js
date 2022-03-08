const courseController = require("../models/courseModel")

module.exports.getAll = async (req,res) => {
    let users = await User.find()
    res.json(users)
}

module.exports.create = async (req,res) => {
    await User.create(req.body)
    res.status(201).send("Tạo thành công")
}

module.exports.update = async (req,res) => {
    let id = req.params.id;
    await User.findByIdAndUpdate(id, req.body)
    res.status(200).send("Cập nhật thành công")
}

module.exports.delete = async (req,res) => {
    let id = req.params.id;
    await User.findByIdAndDelete(id)
    res.status(200).send("Xóa thành công")
}


