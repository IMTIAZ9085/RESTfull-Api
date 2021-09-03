const express = require("express");
// const app = express();

const router=new express.Router();
const Student=require("../models/Students");

//now we will do the same thing in async mode

router.post("/students", async (req, res) => {
      try {
            //getting the student data from postman
            // console.log(req.body);
            const user = new Student(req.body);
            const creatuser = await user.save();
            res.status(201).send(creatuser);
      } catch (err) {
            res.status(400).send(err);
      }
});


//programming part to read api data
//root means /student part will always same only post =>get
router.get("/students", async (req, res) => {
      try {
            const studentsData = await Student.find();
            res.send(studentsData);
      } catch (err) {
            res.send(err);
      }
});


//get individual students data from database
router.get("/students/:name", async (req, res) => {
      try {
            const name = req.params.name;
            const student_data = await Student.findOne({name});
            res.status(201).send(student_data);
      } catch (err) {
            res.status(400).send(err);
      }

});


//NOW IT IS DELETE FUNCTION TO UPDATE DATABASE
router.delete("/students/:id", async (req, res) =>{
  try{
      //   const _id = req.params.id;
    const deleteStudent= await Student.findByIdAndDelete(req.params.id);
     res.status(201).send(deleteStudent);

  }catch(e){
      res.status(400).send(e);
  }
});


//NOW WE WILL SEE HOW TO PATCH DATA AND UPDATE THE DATABASES
router.patch("/students/:id", async (req, res)=>{
      try{
           const _id = req.params.id;  //if same as database then no change (_id)
         const updated = await Student.findByIdAndUpdate(_id,req.body,{
               new:true
         });  // if not same then {databasename : mygivename}
         res.status(201).send(updated);

      }catch(err){
            res.status(400).send(err);
      }
});


//step 2 =>defined the router
router.get("/imtiaz", (req, res)=>{
      res.send("hellow guys");
});

module.exports = router;