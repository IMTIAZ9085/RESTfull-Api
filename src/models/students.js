const mongoose = require("mongoose");

//requiring validator
const validator = require("validator");

//making a schema object  1.name 2.email 3.phone number 4.address
const studentSchema = new mongoose.Schema({
      name: {
            type: String,
            require: true,
            minlength: 3
      },
      email: {
            type: String,
            require: true,
            //IF WRONG THE  WE CAN THROW ERROR ON SPOT 
            unique: [true, "THIS EMAIL IS ALREADT IN USE"],
            validate(value) {
                  if (!validator.isEmail(value)) {
                        throw new Error("Invalid Email"); //checking the email validaty custom validator
                  }
            }
      },
      phone:{
            type:Number,
            min:10,
            require: true,
            unique: true
      },
      address:{ 
            type:String,
            require: true
      }
     
});

//now we will create a new collection using this model
const Student = new mongoose.model('Student',studentSchema);

//exporting the collection
module.exports = Student;