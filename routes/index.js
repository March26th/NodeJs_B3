const userRouter= require("./userRoutes")

module.exports = (app)=>{
    app.use("/api/v1",userRouter)
};

const courseRouter= require("./courseRoutes")

module.exports = (app)=>{
    app.use("/api/v1",courseRouter)
};
