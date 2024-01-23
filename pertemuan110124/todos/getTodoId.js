const { getById, todoQuestion } = require('./todos');

const todoId = async () => {
    const id = await todoQuestion('Input your id : ');
    getById(id);
}

todoId();