const express = require("express");
const router = express.Router();

const { createTask,getTasks ,getTasksById , updateTask , deleteTask } = require("../controllers/TaskControllers");
const { protect } = require("../middleware/authMiddleware");



router.post("/createTask",protect, createTask); 
router.get("/getTasks",protect, getTasks);
router.get("/getTasks/:id",protect, getTasksById);
router.put("/updateTasks/:id",protect, updateTask);
router.delete("/deleteTask/:id",protect, deleteTask);

module.exports = router;