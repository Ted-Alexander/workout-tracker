const mongoose = require("mongoose");

const Schema = mongoose.Schema;


  
const workoutsSchema = new Schema({
  
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
  
  
  {
    
    type: {
        type: String,
        required: "Resistance or Cardio",
    },
    name: {
      type: String,
      trim: true,
      required: "Enter a name for workout",
    },
    distance: {
      type: Number,
      required: "Enter a distance",
    },
    duration: {
      type: Number,
    },
    weight: {
      type: Number,
      trim: true,
    },
    sets:{
      type: Number,
      trim: true,
    },
    reps:{
      type: Number,
      trim: true,
    },
    
  
  }  
],
});

const Workout = mongoose.model("Workout", workoutsSchema);

module.exports = Workout;