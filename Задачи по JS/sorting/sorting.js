// сортировка массива
let arr = ['Олеся', 'Яна', 'Аня', 'Ира'];

let result = arr.sort(function (a, b) {
    if (a > b) return -1;
});

console.log(result);


// сортировка объекта
let obj = [{
        name: 'Оля',
        age: 23,
    },
    {
        name: 'Александр',
        age: 27,
    },
    {
        name: 'Евгения',
        age: 21,
    },
];

function sortUsers(arr, prop, dir = false) {

    let res = arr.sort(function (a,b) {
        // dir - направление сортировки (возрастание/убывание)
        //let dirIf = a[prop] > b[prop];
        // условие с помощью тернарного оператора
        //let dirIf = dir == false ? a[prop] < b[prop] : a[prop] > b[prop];
        // более сокращенный вариант кода
        if ((dir == false ? a[prop] < b[prop] : a[prop] > b[prop]) == true) return -1;


        // if (dir == true) dirIf = a[prop] < b[prop];

        //if (dirIf == true) return -1;
    });
    return res;
}


console.log(sortUsers(obj,'name', true));

