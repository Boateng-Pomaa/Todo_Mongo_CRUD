const express = require('express');
const router = new express.Router();

const controller = require('../controls/todoController');


router.get('/',controller.getTODO)
router.post('/',controller.createToDo)
router.get('/:id',controller.getATodo)
router.put('/:id',controller.updateToDo)
router.delete('/:id',controller.deleteToDo)
module.exports = router;