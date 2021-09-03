//requiring mongoose for our project
const mongoose = require("mongoose");

//connecting to mongodb database this return a promise so we will use then catch
//if there is no such db in that name then it will simply create a new db students-api
mongoose.connect("mongodb://localhost:27017/students-api",{
      useCreateIndex:true,
      useNewUrlParser:true,
      useUnifiedTopology:true,
      useFindAndModify:false
}).then(()=>{
      console.log("connection is successful...");
}).catch((err)=>{
    console.log(err);
});