const router = require("express").Router();
const Workouts = require("../../models/workouts.js");



router.post("/", ({ body }, res) => {
    Workouts.create(body)
      .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  router.put("/:id", (req, res) => {
    id = req.params.id
    Workouts.findOneAndUpdate({"_id": id}, {$push: {exercises: req.body} })
    .then(result => {
      res.json(result);
      })
    .catch(err => {
      res.json(err);
    })
  })

  router.get("/", (req, res) => {
    Workouts.aggregate([
      {
          $addFields:{
              totalDuration: {$sum: "$exercises.duration"}
          }
      }
  ])
  .then(dbWorkout => {
      res.json(dbWorkout);
  }).catch(err => {
      res.json(err);
  });
  
  });

  router.get("/range", (req, res) => {
    Workouts.aggregate([
      {
          $addFields:{
              totalDuration: {$sum: "$exercises.duration"}
          }
      }
  ])
    .then(dbWorkout => {
      res.json(dbWorkout);
    }).catch(err => {
      res.json(err);
    });
  });





module.exports = router;