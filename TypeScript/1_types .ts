const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 42;
const float: number = 4.2;
const num: number = 3e10;

const message: string = 'Hello TypeScript';
// Массив
const numberArray: number[] = [1,2,3,4,5];
// джинерик
const numberArray2: Array<number> = [1,2,3,4];

const words: string[] = ['Hello', 'TypeScript'];

// Tuple массив из разных типов данныъ
const contact: [string,number] = ['Vladiken', 1234124];

// для присвоения переменной ЛЮБОГО типа данных используем Any
let variable: any = 42;
variable = 'New String';

// ===
function sayMyName (name: string): void {
    console.log(name);
}
sayMyName('Хайзенберг')

// never когда функция возвращает 0нам ошибку и никогда не заканчивается
// либо когда она постоянно что то выполняет

function throwError(message: string): never {
    throw new Error(message);
}

function infinite(): never {
    while (true) {

    }
}

// Type конструкция для создания собственных типов
type login = string;
//const Login: login = 'admin';

type ID = string | number;
const id1: ID = 1234;
const id2: ID = '1234';
// const id3: ID = true;

// null
type SomeType = string | null | undefined;





