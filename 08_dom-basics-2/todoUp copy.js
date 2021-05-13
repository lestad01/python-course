( function()
{
    // создаем и возвращаем заголовок приложения
    function createAppTitle(title) {
      let appTitle = document.createElement('h2');
      appTitle.innerHTML = title;
      return appTitle;
    }

    // function checkInput(value, disabled) {
    //   if (value != null) {
    //     disabled = false;
    //     }
    // }

    // создаем и возвращаем форму для создания тела
    function createTodoItemForm() {
      let form = document.createElement('form');
      let input = document.createElement('input');
      let buttonWrapper = document.createElement('div');
      let button = document.createElement('button');

      form.classList.add('input-group', 'mb-3');
      input.classList.add('form-control');
      input.placeholder = 'Введите название нового дела';
      buttonWrapper.classList.add('input-group-append');
      button.classList.add('btn', 'btn-primary');
      button.textContent = 'Добавить дело';
      button.disabled = true;

      buttonWrapper.append(button);
      form.append(input);
      form.append(buttonWrapper);

      //checkInput(input, button);

      return {
        form,
        input, 
        button
      }
    }

    // создаем и возвращаем список элементов
    function createTodoList() {
      let list = document.createElement('ul');
      list.classList.add('list-group');
      return list;
    }

    function createTodoItem(name) {
      let item = document.createElement('li');
      //кнопки помещаем в элемент, который красиво покажет их в одной группе
      let buttonGroup = document.createElement('div');
      let doneButton = document.createElement('button');
      let deleteButton = document.createElement('button');

      //устанавливаем стили для элементов списка, а также размещения кнопок
      //в его правой части с помощью flex
      item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
      item.textContent = name;

      buttonGroup.classList.add('btn-group', 'btn-group-sm');
      doneButton.classList.add('btn', 'btn-success');
      doneButton.textContent = 'Готово';
      deleteButton.classList.add('btn', 'btn-danger');
      deleteButton.textContent = 'Удалить';

      //вкладываем кнопки в отдельный элемент, чтобы они объединились в один блок
      buttonGroup.append(doneButton);
      buttonGroup.append(deleteButton);
      item.append(buttonGroup);

      //приложению нужен доступ к самому элементу и кнопкам, чтобы обрабатывать события
      return {
        item, 
        doneButton, 
        deleteButton
      }
    }

    function createTodoApp(container, title = 'Список дел', 
    arrList = [{name: 'Название дела', done: true}]) {
      let todoAppTitle = createAppTitle(title);
      let todoItemForm = createTodoItemForm();
      let todoList = createTodoList();

      container.append(todoAppTitle);
      container.append(todoItemForm.form);
      container.append(todoList);

      //checkInput(todoItemForm.input.value, todoItemForm.button.disabled);
      
      let todoItemArrList = createTodoItem(arrList[0]['name']);
      todoList.append(todoItemArrList.item);

      todoItemArrList.doneButton.addEventListener('click', function() {
       todoItemArrList.item.classList.toggle('list-group-item-success');
      });
      todoItemArrList.deleteButton.addEventListener('click', function() {
        if(confirm ('Вы уверены?'))
        {
          todoItem.item.remove();
        }
      });

      todoItemForm.input.addEventListener('input', function () {
            if (!todoItemForm.input.value) {
                todoItemForm.button.setAttribute('disabled', true);
            } else { todoItemForm.button.removeAttribute('disabled'); }
        });
      

      //браузер создает событие submit на форме по нажатию на Enter или на кнопку создания дела
      todoItemForm.form.addEventListener('submit', function(e) {
        //эта строчка необходима, чтобы предотвратить стандартное действие браузера
        //в данном случае мы не хотим, чтобы страница перезагружалась при отправке формы
        e.preventDefault();

        //игнорируем создание элемента, если пользователь ничего не ввел в поле
        if (!todoItemForm.input.value) {
          return;
        }

        let todoItem = createTodoItem(todoItemForm.input.value);

        //добавляем обработчики на кнопки
        todoItem.doneButton.addEventListener('click', function() {
          todoItem.item.classList.toggle('list-group-item-success');
        });
        todoItem.deleteButton.addEventListener('click', function() {
          if(confirm ('Вы уверены?'))
          {
            todoItem.item.remove();
          }
        });

        //создаем и добавляем в список новое дело с названием из поля для ввода
        todoList.append(todoItem.item);
        //обнуляем значение в поле, чтобы не стирать его вручную
        todoItemForm.input.value = '';
        todoItemForm.button.setAttribute('disabled', true);
      });
    
      //console.log(todoItemForm);
    }
    
    window.createTodoApp = createTodoApp;
})();