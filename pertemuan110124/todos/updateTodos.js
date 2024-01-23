const { updateById, todoQuestion } = require("./todos");

const update = async () => {
  const id = await todoQuestion("Input ID todo : ");
  const title = await todoQuestion("Input title todo : ");
  const description = await todoQuestion("Input desc todo : ");
  const status = await todoQuestion("Input status todo : ");

  const update = {};
  if (id) {
    update.id = id;
  } else if (title) {
    update.title = title;
  } 




  // updateById(id, { title, description, status });
}

update();
