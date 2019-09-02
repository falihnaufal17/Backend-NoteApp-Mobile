const noteModel = require('../models/note')
const miscHelper = require('../helpers/helper')

module.exports = {
    getAllNote: (req, res) => {
        noteModel.getAllNote()
            .then((resultData) => {
                const result = resultData
                miscHelper.response(res, result)
            })
            .catch((error) => {
                miscHelper.response(res, 'Ups something wrong!', 400, error)
            })
    },
    getNoteDescending: (req, res) => {
        noteModel.getNoteDescending()
            .then((resultData) => {
                const result = resultData
                miscHelper.response(res, result)
            })
            .catch((error) => {
                miscHelper.response(res, 'Ups something wrong!', 400, error)
            })
    },
    getNoteByCategory: (req, res) => {
        const id_category = req.params.id_category
        noteModel.getNoteByCategory(id_category)
            .then((resultData) => {
                const result = resultData[0]
                miscHelper.response(res, result)
            })
    },
    getNoteById: (req, res) => {
        const id_note = req.params.id_note
        noteModel.getNoteById(id_note)
            .then((resultData) => {
                const result = resultData[0]
                miscHelper.response(res, result)
            })
            .catch((error) => {
                miscHelper.response(res, 'Ups something wrong!', 400, error)
            })
    },
    addNote: (req, res) => {
        const data = {
            title: req.body.title,
            description: req.body.description,
            id_category: req.body.id_category,
            created_at: new Date(),
            updated_at: new Date()
        }
        noteModel.addNote(data)
            .then(() => {
                miscHelper.response(res, data, 201)
            })
            .catch((error) => {
                miscHelper.response(res, 'Ups something wrong!', 400, error)
            })
    },
    deleteNote: (req, res) => {
        const id_note = req.params.id_note
        noteModel.deleteNote(id_note)
            .then((resultData) => {
                const result = resultData[0]
                miscHelper.response(res, result, 200)
            })
            .catch((error) => {
                miscHelper.response(res, 'Ups something wrong!', 400, error)
            })
    },
    updateNote: (req, res) => {
        const id_note = req.params.id_note
        const data = {
            title: req.body.title,
            description: req.body.description,
            id_category: req.body.id_category,
            updated_at: new Date()
        }
        noteModel.updateNote(id_note, data)
            .then(() => {
                miscHelper.response(res, data, 200)
            })
            .catch((error) => {
                console.log(error)
                miscHelper.response(res, error, 400, 'Ups something wrong!')
            })
    },
}