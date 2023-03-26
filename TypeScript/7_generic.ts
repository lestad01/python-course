const arraOfNumbers: Array <number> = [1,1,2,3,5];
const arrayOfString: Array<string> = ['Hello', 'Vladilen'];


function revers<T>(array: T[]): T[] {
    return array.reverse()
}

revers(arraOfNumbers);
revers(arrayOfString);


