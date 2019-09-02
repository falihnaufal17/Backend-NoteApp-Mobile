const express = require('express')
const Route = express.Router()
const categoryController = require('../controllers/category')

Route
    .get('/', categoryController.getAllCategory)
    .get('/:id_category', categoryController.getCategoryById)
    .post('/', categoryController.addCategory)
    .delete('/:id_category', categoryController.deleteCategory)
    .patch('/:id_category', categoryController.updateCategory)

module.exports = Route