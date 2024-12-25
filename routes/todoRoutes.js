const express = require('express');
const todoController = require('../controllers/todoController');

const router = express.Router();

router.post('/', todoController.addTodo);
router.put('/:id', todoController.editTodo);
router.delete('/:id', todoController.deleteTodo);

module.exports = router;