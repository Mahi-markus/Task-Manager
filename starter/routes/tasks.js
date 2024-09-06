const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  updateTask,
  getTask,
  deleteTask,
  createTask,
} = require("../controller/tasks");

//routes

router.route("/").post(createTask);
router.route("/").get(getAllTasks);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
