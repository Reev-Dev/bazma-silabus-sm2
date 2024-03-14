const { storeTodo, todoQuestion } = require('./todos');

const addTodo = async () => {
    const title = await todoQuestion('Input title todo : ');
    const description = await todoQuestion('Input desc todo : ');
    const status = await todoQuestion('Input status todo : ');

    storeTodo(title, description, status);

}

addTodo();