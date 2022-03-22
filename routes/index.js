const userRouter= require("./userRoutes")

module.exports = (app)=>{
    app.use("/api/v1",userRouter)
};

