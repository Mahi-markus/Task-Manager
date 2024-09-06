const Task = require("../model/Task");
const asyncWrapper = require("../middleware/async");
const createCustomError = require("../error/custom-error");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});

  res.status(200).json({ tasks });
});

const createTask = asyncWrapper(async (req, res) => {
  task = await Task.create(req.body);
  res.status(201).json({ task });
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;

  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return res.status(404).json({ msg: `No task with id: ${taskID}` });
  }

  res.status(200).json({ task });
  console.log(task);
});

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  res.status(200).json({ task });

  if (!task) {
    return next(createCustomError(`no task with id:${taskID}`, 404));
  }
});

const deleteTask = asyncWrapper(async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    res.status(200).json({ task });

    if (!task) {
      return res.status(404).json({ msg: `no task with id:${taskID}` });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

module.exports = {
  createTask,
  getAllTasks,
  getTask,
  updateTask,
  deleteTask,
};
