const generateRandomId = require('./generateRandomId');
const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const directory = './database';
if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
}

const checkFile = './database/todos.json';
if (!fs.existsSync(checkFile)) {
    fs.writeFileSync(checkFile, '[]', 'utf8');
}

const todoQuestion = (question) => {
    return new Promise((resolve, reject) => {
        rl.question(question, (answer) => {
            resolve(answer)
        });
    });
};

const todos = () => {
    const fileTodos = fs.readFileSync(checkFile, 'utf8');
    const data = JSON.parse(fileTodos);
    console.log(data);

    rl.close();
}

const storeTodo = (title, description, status) => {
    const id = generateRandomId(10)
    const todo = { id, title, description, status }
    const file = fs.readFileSync(checkFile, 'utf8');
    const dataTodos = JSON.parse(file)

    dataTodos.push(todo);
    fs.writeFileSync(checkFile, JSON.stringify(dataTodos));
    console.log("-- Success --");
    rl.close();
}

const getById = (id) => {
    const file = fs.readFileSync(checkFile, 'utf8');
    const data = JSON.parse(file);
    const findTodoId = data.find(todo => todo.id === id);

    if (findTodoId) {
        console.log(id);
    } else {
        console.log(`Todo dengan Id ini ${id} tidak ditemukan`);
    }

    rl.close();
}

const updateById = (id, updateTodo) => {
    const file = fs.readFileSync(checkFile, 'utf8');
    let data = JSON.parse(file);

    const index = data.findIndex(todo => todo.id === id);

    if (index !== -1) {
        data[index] = { ...data[index], ...updateTodo };
        fs.writeFileSync(checkFile, JSON.stringify(data));
        console.log(`--- Succes updated todo with id ${id} ---`);
    } else {
        console.log(`Todo with id ${id} not detected`);
    }
}


module.exports = {
    todoQuestion,
    todos,
    storeTodo,
    getById,
    updateById
};