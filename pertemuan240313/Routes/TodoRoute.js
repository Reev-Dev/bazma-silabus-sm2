const express = require('express');
const router = express.Router();

const TodoController = require('../Controllers/TodoController');

router.get('/', TodoController.getAllTodo);
router.post('/', TodoController.storeTodo);
router.put('/:id', TodoController.updateTodo);
router.delete('/:id', TodoController.deleteTodo);
router.get('/:id', TodoController.getTodoById);

module.exports = router;
