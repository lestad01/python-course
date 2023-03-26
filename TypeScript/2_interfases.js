var rect1 = {
    id: 'Hello',
    size: {
        width: 22,
        height: 30,
    },
    color: '#ccc',
};
var rect2 = {
    id: '123',
    size: {
        width: 10,
        height: 5,
    }
};
rect2.color = 'black';
var rect3 = {};
rect3.color = 'red';
var rect4 = {};
rect4.color = 'blue';
console.log(rect3.color);
console.log(rect4.color);
var rect5 = {
    id: '123',
    size: {
        width: 20,
        height: 20,
    },
    getArea: function () {
        return this.size.width * this.size.height;
    }
};
console.log(rect5.getArea());
