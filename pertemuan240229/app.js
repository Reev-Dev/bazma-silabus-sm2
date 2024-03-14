const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const database = require('./db/connection');
const response = require('./helpers/response');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 6000;

app.listen(PORT, () => {
    console.log(`Server berjalan di port: ${PORT}`);
})

// get data todos = localhost:6000/api/todos  / localhost:6000/todos

app.get('/api/todos', (req, res) => {
    database.query('SELECT * FROM todo', (err, result) => {
        if (err) throw err;
        response(res, 200, {message: 'Success get todos', data: result});
        // res.json({
        //     message: 'success',
        //     data: result,
        // }, 200);
    });
});

// [POST] menambahkan data baru ke todo = localhost:6000/api/todos / localhost:6000/todos
app.post('/api/todos', (req, res) => {
    const { title, description } = req.body;
    database.query('INSERT INTO TODO (title, description) VALUES(?, ?)', [title, description], (err, result) => {
        if (err) throw err;
        response(res, 201, {message: 'Success created todos'});
    })
})

// [PUT] mengubah data berdasarkan id = localhost:6000/api/todos/1 / localhost:6000/todos/1

app.put('/api/todos/:id', (req, res) => {
    const id = req.params.id;
    const { title, description } = req.body;

    database.query('UPDATE todo SET title = ?, description = ? WHERE id = ?',
        [title, description, id], (err, result) => {
            if (err) {
                throw err;
            } else {
                if (result.length === 0) {
                    response(res, 404, {message: `Todo ${id} not found`});
                } else {
                    response(res, 201, {message: `Success show todo ${id}`, data: result[0]})
                }
            }
        })
})

// [DELETE] menghapus data todo berdasarkan id = localhost:6000/api/todos/1 / localhost:6000/todos/1

app.delete('/api/todos/:id', (req, res) => {
    const id = req.params.id;
    

    database.query('DELETE FROM todo WHERE id = ?', [id], (err, result) => {
        if (err) {
            throw err;
        } else {
            if (result.length === 0) {
                response(res, 404, {message: `Todo ${id} not found`});
            } else {
                response(res, 201, {message: `Success deleted todo ${id}`, data: result[0]})
            }
        }
    })
})

// [SHOW] 

app.get('/api/todos/:id', (req, res) => {
    const id = req.params.id;
    database.query(`SELECT * FROM todo WHERE id = ${id}`, (err, result) => {
        if (err) {
            throw err;
        } else {
            if (result.length === 0) {
                res.json({
                    message: `Todo ${id} not found`
                }, 404)
            } else {
                res.json({
                    message: `Success get todo ${id}`,
                    data: result[0]
                }, 200)
            }
        }
    })
})