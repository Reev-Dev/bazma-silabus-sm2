const { updateById, todoQuestion } = require("./todos");

const updatedTodoId = async () => {
  const id = await todoQuestion("Input ID todo : ");
  const title = await todoQuestion("Input title todo : '");
  const description = await todoQuestion("Input desc todo : ");
  const status = await todoQuestion("Input status todo : ");

  updateTodo(id, { title, description, status });
}

updatedTodoId();