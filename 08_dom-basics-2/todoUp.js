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

    button.disabled = true; //блокируем кнопку

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
  function createToDoItemSucces (name) {
    let itemNew = document.createElement('li');
    itemNew.classList.add('list-group-item-success');

    // кнопки помещаем в элемент, который покажет их в одной группе
    let newButtonGroup = document.createElement('div');
    let newDoneButton = document.createElement('button');
    let newDeleteButton = document.createElement('button');
    // устанавление стилей для элемента списка, а также для размещения кнопок в правой части с помощ flex
    itemNew.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    itemNew.textContent = name;

    newButtonGroup.classList.add('btn-group', 'btn-group-sm');
    newDoneButton.classList.add('btn', 'btn-success');
    newDoneButton.textContent = 'Готово';
    newDeleteButton.classList.add('btn', 'btn-danger');
    newDeleteButton.textContent = 'Удалить';

    //вклдаываем кнопки в один элемент, чтобы они объединилсь в один блок
    newButtonGroup.append(newDoneButton);
    newButtonGroup.append(newDeleteButton);
    itemNew.append(newButtonGroup);

    //приложению нужен доступ к самому элементу и кнопкам, чтобы обрабатывать события нажатия
    return {
      itemNew,
      newDoneButton,
      newDeleteButton,
    };
  }

  function createTodoApp(container, title = 'Список дел',  objOfAffairs){

    let todoAppTitle = createAppTitle(title);
    let todoItemForm = createTodoItemForm();
    let todoList = createTodoList();

    container.append(todoAppTitle);
    container.append(todoItemForm.form);
    container.append(todoList);

    let todoItemObjAff = createToDoItemSucces(objOfAffairs[0]);
    todoList.append(todoItemObjAff.itemNew);
    let newTodoItemObjAff = createToDoItemSucces(objOfAffairs[1]);
    todoList.append(newTodoItemObjAff.itemNew);


  // //добавляем обработчики событий на новую функцию с кнопкой
  //   let todoItemNew = createToDoItemSucces(todoItemForm.input.value);
  //   todoItemNew.newDoneButton.addEventListener('click', function() {
  //     todoItemNew.itemNew.classList.remove('list-group-item-success');
  //     console.log('click');
  //   });
  //   todoItemNew.newDeleteButton.addEventListener('click', function(){
  //     if(confirm('Вы уверены?')){
  //       todoItemNew.itemNew.remove();
  //     }
  //   });

    todoItemForm.input.addEventListener('input', function () {
      if (!todoItemForm.input.value) {
          todoItemForm.button.setAttribute('disabled', true);
      } else if (todoItemForm.input.value) {
        todoItemForm.button.removeAttribute('disabled');
      }
    });

    todoItemForm.form.addEventListener('submit', function(e){
      //эта строчка необходима, чтобы предотвратить стандартное действие браузера
      //в данном случае мы не хотим, чтобы страниц перезагружалась при отправке формы
      e.preventDefault();

      //игнорируем создание элемента, если пользователь ничего не ввел в поле
      if(!todoItemForm.input.value) {
        return;
      }

      let todoItem = createToDoItem(todoItemForm.input.value);

      //добавляем обравботчики событий
      todoItem.doneButton.addEventListener('click', function() {
      todoItem.item.classList.toggle('list-group-item-success');
      });
      todoItem.deleteButton.addEventListener('click', function(){
        if(confirm('Вы уверены?')){
          todoItem.item.remove();
        }
      });

      //создаем и добавляем в список новое дело с названием из поля ввода
      todoList.append(todoItem.item);

      //обнуляем значение в поле, чтобы не пришлось стирать вручную
      todoItemForm.input.value = '';
      todoItemForm.button.setAttribute('disabled', true);
    });
  }
  let todoItemForm = createTodoItemForm();
  let todoItem = createToDoItem(todoItemForm.input.value);
  let local = localStorage.setItem('items', todoItem);

  console.log(local);
 window.createTodoApp = createTodoApp;





