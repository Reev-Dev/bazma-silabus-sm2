const database = require('../db/connection.js');
const response = require('../helpers/response.js');

// Membuat getTodo = localhost:6000/api/todos

const getAllTodo = (req, res) => {
    const querySql = 'SELECT * FROM todo';
    database.query(querySql, (err, result) => {
        if (err) throw err;
        if (result.affectedRows === 0) {
            response(res, 404, { message: `Data not found` })
        } else {
            response(res, 200, { message: 'Success get todos', data: result });
        }
    })
}

const storeTodo = (req, res) => {
    const { title, description } = req.body;

    if (!title || !description) {
        response(res, 400, { message: 'Invalid input. Please fill with the correct answer' });
    } else {
        database.query('INSERT INTO TODO (title, description) VALUES(?, ?)', [title, description], (err, result) => {
            if (err) throw err;
            response(res, 201, { message: 'Success created todos' });
        })
    }
}

const updateTodo = (req, res) => {
    const id = req.params.id;
    const { title, description } = req.body;

    database.query('UPDATE todo SET title = ?, description = ? WHERE id = ?',
        [title, description, id], (err, result) => {
            if (err) {
                throw err;
            } else {
                if (result.affectedRows === 0) {
                    response(res, 404, { message: `Todo ${id} not found` });
                } else {
                    response(res, 201, { message: `Success show todo ${id}`, /*data: {id, title, description}*/ })
                }
            }
        })
}

const deleteTodo = (req, res) => {
    const id = req.params.id;

    database.query('DELETE FROM todo WHERE id = ?', [id], (err, result) => {
        if (err) {
            throw err;
        } else {
            if (result.affectedRows === 0) {
                response(res, 404, { message: `Todo ${id} not found` });
            } else {
                response(res, 201, { message: `Success deleted todo ${id}`, data: result[0] })
            }
        }
    })
}

const getTodoById = (req, res) => {
    const id = req.params.id;
    database.query('SELECT * FROM todo WHERE id = ?', [id], (err, result) => {
        if (err) {
            throw err;
        } else {
            if (result.length === 0) {
                response(res, 404, { message: `Todo ${id} not found` });
            } else {
                response(res, 200, { message: `Success get todo ${id}`, data: result[0] })
            }
        }
    })
}


module.exports = { getAllTodo, storeTodo, updateTodo, deleteTodo, getTodoById };
