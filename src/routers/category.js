const express = require('express')
const Route = express.Router()
// const multer = require('multer')
// const path = require('path')

const categoryController = require('../controllers/category')

// let storage = multer.diskStorage({
//     destination: function (req, file, callback) {
//         callback(null, './uploads/images/')
//     },

//     filename: function (req, file, callback) {
//         callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
//     }
// })

// let upload = multer({ storage: storage, limits: { fileSize: 100000000 } })

Route
    .get('/', categoryController.getAllCategory)
    .get('/:id_category', categoryController.getCategoryById)
    .post('/', categoryController.addCategory)
    .delete('/:id_category', categoryController.deleteCategory)
    .patch('/:id_category', categoryController.updateCategory)

module.exports = Route