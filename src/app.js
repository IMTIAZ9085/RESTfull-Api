//MAKING A RESTFUL API
//REQUIRING EXPRESS FOR PROJECT
const express = require("express");
const app = express();
const studentRouter= require("./routers/student");

//this is used for to get the pure json data..to recognize
app.use(express.json());

app.use(studentRouter);

//requireing the database connection file
require("./db/conn"); //IMPORTANT

//now require the model and collection file where we have defined them
const Student = require("./models/Students");


//port no
const port = process.env.PORT || 3000;

//MAKING ROUTER USING EXPRESS
// app.get("/",(req, res) => {
//       res.send("welcome to the home page");        //this route must need to add first but for making API it is not necessary
// });

//creating a new student

//201 status code means successful created

// app.post("/students", (req, res) => {

//       //getting the student data from postman
//       console.log(req.body);
//       const user=new Student(req.body);
//       user.save().then(() => {
//             res.status(201).send(user);    //also changing the status for certain result
//       }).catch((err) => {
//             res.status(400).send(err);
//       })
//       // res.send("hello form the other side");
// });


// //now we will do the same thing in async mode

// app.post("/students", async (req, res) => {
//       try {
//             //getting the student data from postman
//             // console.log(req.body);
//             const user = new Student(req.body);
//             const creatuser = await user.save();
//             res.status(201).send(creatuser);

//       } catch (err) {
//             res.status(400).send(err);
//       }
// });


// //programming part to read api data
// //root means /student part will always same only post =>get
// app.get("/students", async (req, res) => {

//       try {
//             const studentsData = await Student.find();
//             res.send(studentsData);
//       } catch (err) {
//             res.send(err);
//       }
// });


// //get individual students data from database
// app.get("/students/:name", async (req, res) => {
//       try {
//             const name = req.params.name;
//             const student_data = await Student.findOne({name});
//             res.status(201).send(student_data);
//       } catch (err) {
//             res.status(400).send(err);
//       }

// })


// //NOW IT IS DELETE FUNCTION TO UPDATE DATABASE
// app.delete("/students/:id", async (req, res) =>{
//   try{
//       //   const _id = req.params.id;
//     const deleteStudent= await Student.findByIdAndDelete(req.params.id);
//      res.status(201).send(deleteStudent);

//   }catch(e){
//       res.status(400).send(e);
//   }
// });


// //NOW WE WILL SEE HOW TO PATCH DATA AND UPDATE THE DATABASES
// app.patch("/students/:id", async (req, res)=>{
//       try{
//            const _id = req.params.id;  //if same as database then no change (_id)
//          const updated = await Student.findByIdAndUpdate(_id,req.body,{
//                new:true
//          });  // if not same then {databasename : mygivename}
//          res.status(201).send(updated);

//       }catch(err){
//             res.status(400).send(err);
//       }
// });


//NEW EXPRESS ROUTER
 //step 1
// const router = new express.Router();

 //step 2 =>defined the router
// router.get("/imtiaz", (req, res)=>{
//       res.send("hellow guys");
// });

// step 3 => we need to register ours router
// app.use(router);



//listening to the port number
app.listen(port, () => {
      console.log(`server is listening on ${port}.........`);
});









//getting errro
// OverwriteModelError: Cannot overwrite `Student` model once compiled.