const conn = require('../configs/db')

module.exports = {
    getAllNote: () => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT note.id_note, note.title, note.description, note.id_category, category.name, category.color, note.created_at, note.updated_at FROM note INNER JOIN category ON note.id_category = category.id_category ORDER BY title ASC`, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    getNoteById: (id_note) => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT note.id_note, note.title, note.description, note.id_category, category.name, category.color,note.created_at, note.updated_at FROM note INNER JOIN category ON note.id_category = category.id_category WHERE id_note = ?`, id_note, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },

    getNoteByCategory: (id_category) => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT note.id_note, note.title, note.description, note.id_category, category.name, category.color,note.created_at, note.updated_at FROM note INNER JOIN category ON note.id_category = category.id_category WHERE id_category = ?`, id_category, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },

    getNoteDescending: () => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT note.id_note, note.title, note.description, note.id_category, category.name, category.color, note.created_at, note.updated_at FROM note INNER JOIN category ON note.id_category = category.id_category ORDER BY title DESC`, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    addNote: (data) => {
        return new Promise((resolve, reject) => {
            conn.query(`INSERT INTO note SET ?`, data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    deleteNote: (id_note) => {
        return new Promise((resolve, reject) => {
            conn.query(`DELETE FROM note WHERE id_note = ?`, id_note, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    updateNote: (id_note, data) => {
        return new Promise((resolve, reject) => {
            conn.query(`UPDATE note SET ? WHERE id_note = ?`, [data, id_note], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
}