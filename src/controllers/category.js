const categoryModel = require('../models/category')
const miscHelper = require('../helpers/helper')

module.exports = {
    getAllCategory: (req, res) => {
        categoryModel.getAllCategory()
            .then((resultData) => {
                const result = resultData
                miscHelper.response(res, result)
            })
            .catch((error) => {
                miscHelper.response(res, 'Ups something wrong!', 400, error)
            })
    },
    getCategoryById: (req, res) => {
        const id_category = req.params.id_category
        categoryModel.getCategoryById(id_category)
            .then((resultData) => {
                const result = resultData[0]
                miscHelper.response(res, result)
            })
            .catch((error) => {
                miscHelper.response(res, 'Ups something wrong!', 400, error)
            })
    },
    addCategory: (req, res) => {
        const data = {
            name: req.body.name,
            image: req.body.image,
            color: '#' + req.body.color,
            created_at: new Date(),
            updated_at: new Date()
        }
        categoryModel.addCategory(data)
            .then(() => {
                miscHelper.response(res, data, 201)
            })
            .catch((error) => {
                miscHelper.response(res, 'Ups something wrong!', 400, error)
            })
    },
    deleteCategory: (req, res) => {
        const id_category = req.params.id_category
        categoryModel.deleteCategory(id_category)
            .then((resultData) => {
                const result = resultData[0]
                miscHelper.response(res, result, 200)
            })
            .catch((error) => {
                miscHelper.response(res, 'Ups something wrong!', 400, error)
            })
    },
    updateCategory: (req, res) => {
        const id_category = req.params.id_category
        const data = {
            name: req.body.name,
            image: req.body.image,
            color: '#' + req.body.color,
            updated_at: new Date()
        }
        categoryModel.updateCategory(id_category, data)
            .then(() => {
                miscHelper.response(res, data, 200)
            })
            .catch((error) => {
                miscHelper.response(res, 'Ups something wrong!', 400, error)
            })
    },
}