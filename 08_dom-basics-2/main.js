
  //создаём и возвращаем заголовок приложения
  function createAppTitle(title) {
    let appTitle = document.createElement('h2');
    appTitle.innerHTML = title;
    return appTitle;
  }

  // создаём и возвращаем форму для создания дела
  function createTodoItemForm(){
    let form = document.createElement('form');
    let input = document.createElement('input');
    let buttonWrapp = document.createElement('div');
    let button = document.createElement('button');

    form.classList.add('input-group', 'mb-3');
    input.classList.add('form-control');
    input.placeholder = 'Введите название нового дела';
    buttonWrapp.classList.add('input-group-append');
    button.classList.add('btn', 'btn-primary');
    button.textContent = 'Добавить дело';

    buttonWrapp.append(button);
    form.append(input);
    form.append(buttonWrapp);

    return {form, input, button};
  }

  //создаем и возвращаем список элементов
  function createTodoList() {
    let list = document.createElement('ul');
    list.classList.add('list-group');
    return list;
  }
  function createToDoItem (name) {
    let item = document.createElement('li');
    // кнопки помещаем в элемент, который покажет их в одной группе
    let buttonGroup = document.createElement('div');
    let doneButton = document.createElement('button');
    let deleteButton = document.createElement('button');
    // устанавление стилей для элемента списка, а также для размещения кнопок в правой части с помощ flex
    item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    item.textContent = name;

    buttonGroup.classList.add('btn-group', 'btn-group-sm');
    doneButton.classList.add('btn', 'btn-success');
    doneButton.textContent = 'Готово';
    deleteButton.classList.add('btn', 'btn-danger');
    deleteButton.textContent = 'Удалить';

    //вклдаываем кнопки в один элемент, чтобы они объединилсь в один блок
    buttonGroup.append(doneButton);
    buttonGroup.append(deleteButton);
    item.append(buttonGroup);

    //приложению нужен доступ к самому элементу и кнопкам, чтобы обрабатывать события нажатия
    return {
      item,
      doneButton,
      deleteButton,
    };

  }

  document.addEventListener('DOMContentLoaded', function (){
    let container = document.getElementById('todo-app');

    let todoAppTitle = createAppTitle('Список дела');
    let todoItemForm = createTodoItemForm();
    let todoList = createTodoList();
    let todoItems = [createToDoItem('Сходить за молоком'),createToDoItem('Убраться в квартире')];

    container.append(todoAppTitle);
    container.append(todoItemForm.form);
    container.append(todoList);
    container.append(todoItems[0].item);
    container.append(todoItems[1].item);




  });




