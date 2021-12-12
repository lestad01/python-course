const myModule = (function() {
  
  const privateVariable = 'Hello World';
  
  function privateMethod() {
    console.log(privateVariable);
  }
  return {
    publicMethod: function() {
      privateMethod();
    }
  };
})();
myModule.publicMethod();
// Так как перед нами IIFE, код выполняется немедленно и возвращаемый выражением объект назначается константе myModule. Благодаря тому, 
//что тут имеется замыкание, у возвращённого объекта есть доступ к функциям и переменным, объявленных внутри IIFE, даже после завершения работы IIFE.
// В результате переменные и функции, объявленные внутри IIFE, скрыты от механизмов, находящихся во внешней по отношению к ним области видимости. 
//Они оказываются приватными сущностями константы myModule.

//Паттерн «Открытый модуль»
const myRevealingModule = (function() {
  
  let privateVar = 'Peter';
  const publicVar  = 'Hello World';
  function privateFunction() {
    console.log('Name: '+ privateVar);
  }
  
  function publicSetName(name) {
    privateVar = name;
  }
  function publicGetName() {
    privateFunction();
  }
  /** открываем функции и переменные, назначая их свойствам объекта */
return {
    setName: publicSetName,
    greeting: publicVar,
    getName: publicGetName
  };
})();
myRevealingModule.setName('Mark');
// Выводит Name: Mark
myRevealingModule.getName();
























