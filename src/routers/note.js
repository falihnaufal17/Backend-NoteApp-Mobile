const express = require('express')
const Route = express.Router()
const noteController = require('../controllers/note')

Route
    .get('/', noteController.getAllNote)
    .get('/desc', noteController.getNoteDescending)
    .get('/:id_note', noteController.getNoteById)
    .get('/:id_category', noteController.getNoteByCategory)
    .post('/', noteController.addNote)
    .delete('/:id_note', noteController.deleteNote)
    .patch('/:id_note', noteController.updateNote)

module.exports = Route