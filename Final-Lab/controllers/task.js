import errorHandler from "../middlewares/error.js";
import { validate } from "../middlewares/validation.js";
import { Task } from "../models/task.js";

export const getMyTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find({});

    res.status(200).json({
      success: true,
      tasks,
    });
  } catch (error) {
    next(error);
  }
};

//*
export const create = async (req, res, next) => {
  try {

  const { title, description } = req.body;

    validate(req, res, title, description);

    await Task.create({
      title,
      description,
    });

    res.status(201).json({
      success: true,
      message: "Task created successfully",
    });
  } catch (error) {
    next(error);
  }
};

//*
export const update = async (req, res, next) => {
  try {
    const { id } = req.params;

    const task = await Task.findById(id);

    if (!task) return next(new errorHandler("Task not found", 404));

    task.isCompleted = !task.isCompleted;
    await task.save();

    res.status(200).json({
      success: true,
      message: "Task updated successfully",
    });
  } catch (error) {
    next(error);
  }
};

//*
export const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    const task = await Task.findById(id);

    if (!task) return next(new errorHandler("Task not found", 404));

    await task.deleteOne();

    res.status(200).json({
      success: true,
      message: "Task Deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
