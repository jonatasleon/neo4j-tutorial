const tasklistsModel = require('./models/tasklists');

const tasklist = {
  name: 'Foda memo',
  email: 'jonatas.leon@gmail.com'
}

tasklistsModel.create(tasklist)
  .then((result) => console.log(result))
  .catch((err) => console.error(err))
