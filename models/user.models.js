import mongoose from "mongoose";

// const UserScheema = new mongoose.Scheema({},{})
// ak tou attributes ka object hai or dora time stamps ka hai jo mostly
// projects may use hota hai like created at or updated at 

const UserSchema = new mongoose.Schema({
  username: String,
  // ac tara bhee lek saktay hai but agr humay detail denee ho tou like 2nd walee tara kartay hai
  // ac kay boht sare attributes hotay hai
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    default: 'Bot'
  },
  phone: {
    type: Number,
    unique: true,
    sparse: true // unique constraint lagay ga, but multiple null values allow hongi
  },
  password: {
    type: String,
    required: true,
    // custom errors
    minlength: [6, 'must be at least 6 ,got {VALUE}'], // min instead of minlength issue fixed
    maxlength: 12
  },
  subtodo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'subtodo' // foreign key jesa kaam karega
  }
}, 
// time stamps
// set created time when document is first inserted and updated when 
// the last time data is saved
{
  timestamps: true
});

// Exporting the model
const User = mongoose.model("User", UserSchema);
export default User;
