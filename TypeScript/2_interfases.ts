// интерфейсы - создаем некоторый тип который служит для объектов или для классов 
// ни во что не компилируются необходимы на этапе рахзработки
// ? - не обязательный параметр
interface Rect {
    readonly id: string,
    color?: string,
    size: {
        width: number,
        height: number,
    }
}

const rect1: Rect = {
    id: 'Hello',
    size: {
        width: 22,
        height: 30,
    },
    color: '#ccc',
}

const rect2: Rect = {
    id: '123',
    size: {
        width: 10,
        height: 5,
    }
}


rect2.color = 'black';




const rect3 = {} as Rect;
rect3.color = 'red';

const rect4 = <Rect>{}
rect4.color = 'blue';

console.log(rect3.color);
console.log(rect4.color);


///////


interface RectWithArea extends Rect {
    getArea: () => number
}

const rect5: RectWithArea = {
    id: '123',
    size: {
        width: 20,
        height: 20,
    },
    getArea(): number {
        return this.size.width * this.size.height
    }
}
console.log(rect5.getArea());
///////////////////////////////


// Интерфейсы могут быть реализованы не только объектами, но и классами. 
// Для этого используется ключевое слово implements:
interface IClock {
    time: Date,
    setTime(date: Date): void
}

class clock implements IClock {
    time: Date = new Date()
    setTime(date: Date): void {
        this.time = date
    }
}

//============================

//Подпись key определяет ключ и значение типа string.

interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px',
}




