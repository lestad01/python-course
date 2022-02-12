"use strict";

console.log('Запрос данных...');
// создаем обещание которое помещаем в переменную
// resolve функция котороая отвечает за положительную сторону запроса(усешное выполнение)
// reject наоборот
const req = new Promise((resolve, reject) => {
    setTimeout( ()=> {
        console.log('Подготовка данных...');
    
        const product = {
            name: 'TV',
            price: 2000
        };
        
        resolve(product);
    }, 2000);
});

req.then((product) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            product.status = 'order';
            resolve(product);
            //reject();
        }, 2000);
    });
}).then(data => {
    data.modify = true;
    return data;
}).then((data) => {
    console.log(data);
}).catch(() => {
    console.error('Произошла ошибка!')
}).finally(()=> {
    console.log('Finally!')
});

const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};


// test(1000).then(()=> console.log('1000 ms'));
// test(2000).then(()=> console.log('2000 ms'));

//данный метод ожидает окончание выполнения всех промисов (функций)
Promise.all([test(3000),test(2000)]).then(()=> {
    console.log('All');
});

//race ожидает выполнение самой быстрой (первой функции) промиса
Promise.race([test(1000),test(2000)]).then(()=> {
    console.log('All');
});

