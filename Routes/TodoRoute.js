const express = require('express');

const router = express.Router();
const controller = require('../controllers/TodoController');

router.get('/', controller.getTodo)
router.post('/add', controller.createTodo)
router.get('/delete/:_id', controller.deleteTodo)
router.get('/get/update/:_id', controller.getUpdateTodo)
router.post('/update/:_id', controller.updateTodo)


module.exports = router;