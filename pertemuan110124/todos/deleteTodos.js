const { todoQuestion, deleteById } = require("./todos")

const deleteTodo = async () => {
  const id = await todoQuestion("Input Todo id : ")
  deleteById(id);
}

deleteTodo();