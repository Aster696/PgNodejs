const express = require('express');
const controller = require('../controller/controller');

const router = express.Router();

// display all
router.get('/', controller.getData);

// display by id
router.get('/:id', controller.getDataById);

// add data
router.post('/', controller.postData);

// update data
router.patch('/:id', controller.updateData);

// delete data
router.delete('/:id', controller.deleteData);

module.exports = router;