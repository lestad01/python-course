const users = [
    {
        fio: 'Иванов Александр Евгеньевич',
        login: 'Ivan_228',
        age: 17,
    },
    {
        fio: 'Чернов Александр Сергеевич',
        login: 'Prosto4ep',
        age: 17,
    },
    {
        fio: 'Кузьмина Ольга Владимировна',
        login: 'KuzMina95',
        age: 15,
    },
    {
        fio: 'Колесников Ивар Валентинович',
        login: 'iWAR93',
        age: 30,
    },
];

// let newList = [];
// for (const user of users) {
//     // if (user.age == 30) newList.push(user);
//     if (user.fio.includes('Алекс') == true) newList.push(user); 
// }
// //console.log(newList);
// let newList2 = [];
// for (const user of newList) {
//     if (String(user.age).includes('27') == true) newList2.push(user); 
// }


function filter (arr,prop,value) {
    let result = [];
    let copy = [...arr];
    for (const item of arr) {
        if (String(item[prop]).includes(value) == true) result.push(item);
    }
    return result;
}

function render(arr){

    const list = document.querySelector('.users-list');
    list.innerHTML = '';

    const inputFIO = document.getElementById('input-fio').value;
    const inputAge = document.getElementById('input-age').value;

    let newArr = [...arr];
    if (inputFIO !== '') newArr = filter(newArr, 'fio', inputFIO);
    if (inputAge !== '') newArr = filter(newArr, 'age', inputAge);

    for (const user of newArr){
        const li = document.createElement('li');
        li.textContent = user.fio + ', Возраст: ' + user.age;
        list.append(li);
    }

}

document.getElementById('filter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    render(users);
});

render(users);





