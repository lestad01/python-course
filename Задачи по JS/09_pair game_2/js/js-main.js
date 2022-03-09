window.addEventListener('DOMContentLoaded', function () {

    //карточки (картинки)
    const cardArr = [
    {
        name: 'css',
        img:  'img/img-1.png'
    },
    {
        name: 'css',
        img:  'img/img-1.png'
    },
    {
        name: 'html',
        img:  'img/img-2.png'
    },
    {
        name: 'html',
        img:  'img/img-2.png'
    },
    {
        name: 'js',
        img:  'img/img-3.png'
    },
    {
        name: 'js',
        img:  'img/img-3.png'
    },
    {
        name: 'php',
        img:  'img/img-4.png'
    },
    {
        name: 'php',
        img:  'img/img-4.png'
    },
    {
        name: 'python',
        img:  'img/img-5.png'
    },
    {
        name: 'python',
        img:  'img/img-5.png'
    },
    {
        name: 'sass',
        img:  'img/img-6.png'
    },
    {
        name: 'sass',
        img:  'img/img-6.png'
    },
    {
        name: 'sql',
        img:  'img/img-7.png'
    },
    {
        name: 'sql',
        img:  'img/img-7.png'
    },
    {
        name: 'typeScript',
        img:  'img/img-8.png'
    },
    {
        name: 'typeScript',
        img:  'img/img-8.png'
    }
];

cardArr.sort(() => 0.5 - Math.random());

const container = document.querySelector('.container');
const resultDisplay = document.querySelector('#result');
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];


    //создаем нашу табличку с карточками
    function createTableCard(){
        for (let i = 0; i < cardArr.length; i++){
            let card = document.createElement('img');
            card.setAttribute('src', 'question/question.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            container.appendChild(card);
        }
    }

    //находим схождения карточек
    function checkForMathc() {
        let cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if (cardsChosen[0] === cardsChosen[1]){
            alert('Вы нашли схожие карточки!');
            cards[optionOneId].setAttribute('src', 'img/rainbow-1.png');
            cards[optionTwoId].setAttribute('src', 'img/rainbow-1.png');
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute('src', 'question/question.png');
            cards[optionTwoId].setAttribute('src', 'question/question.png');
            alert('Извините, попробуйте ещё раз!');
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if (cardsWon.length === cardArr.length/2){
            resultDisplay.textContent = 'Поздравялем! Вы нашли все карточки!';
        }
    }


    //переворачиваем карточку
    function flipCard(){
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArr[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArr[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMathc, 500);
        }
    }
    createTableCard();

});