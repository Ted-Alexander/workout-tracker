const mongoose = require("mongoose");

const Schema = mongoose.Schema;


  
const workoutsSchema = new Schema({
    
    // isCardio: {
    //     type: Boolean,
    // },
    // cardioName: {
    //   name: String,
    //   required: "Enter a name for workout",
    // },
    // Distance: {
    //   type: Number,
    //   required: "Enter a distance",
    // },
    //   Duration: {
    //   type: Number,
    // },
    // Name: {
    //   name: String,
    //   trim: true,
    //   required: "Enter a name for workout",
    // },
    // Weight: {
    //   type: Number,
    //   trim: true,
    // },
    // Sets:{
    //   type: Number,
    //   trim: true,
    // },
    // Reps:{
    //   type: Number,
    //   trim: true,
    // },
    // ResistanceDuration: {
    //   type: Number,
    //   trim: true,
    // },
  }  
);

const Workout = mongoose.model("Workout", workoutsSchema);

module.exports = Workout;