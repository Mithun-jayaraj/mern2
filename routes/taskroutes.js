const express = require('express');
const router = express.Router();
const {createTask} = require('../controllers/taskcontrollers');     
const {protect} = require('../middlewares/authmiddleware');
router.post('/createtask',protect,createTask);
module.exports = router;