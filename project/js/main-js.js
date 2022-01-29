document.addEventListener('DOMContentLoaded', function () {
    //Map
    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(function () {
        // Создание карты.
        let myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.699844, 37.520939],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 14,
            controls: []
        });
        myPlacemark = new ymaps.Placemark([55.693213, 37.512503], {
            hintContent: 'Территория ИНТЦ МГУ'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/svg/Group_402.svg',
            // Размеры метки.
            iconImageSize: [58, 49],
        });

        myMap.geoObjects.add(myPlacemark);
    });

    //section-cluster__slider start (slider start)
    // const clusterSliders = document.querySelectorAll('.section-cluster__slide');
    // const prevSlide = document.querySelector('.section-cluster__arrow-left');
    // const nextSlide = document.querySelector('.section-cluster__arrow-right');
    // const clustersSlidesWrapper = document.querySelector('.section-cluster__slider-block');
    // const slidesField = document.querySelector('.section-cluster__slider-inner');
    // const totalEdit = document.querySelector('#total-edit');
    // const currentEdit = document.querySelector('#current-edit');
    // const width = window.getComputedStyle(clustersSlidesWrapper).width;
    // let offset = 0;
    // let slideIndexEdit = 1;
    // showSlidesEdit(slideIndexEdit);

    // if (clusterSliders.length < 3) {
    //     totalEdit.textContent = clusterSliders.length;
    // }

    // автоматическая адаптация блока section-cluster__slider-inner 
    // под ширину основного блока section-cluster__slide
    // slidesField.style.width = 100 * clusterSliders.length + '%';


    // clusterSliders.forEach(slide => {
    //     slide.style.width = width;
    // });

    // nextSlide.addEventListener('click', () => {
    //     if (offset == +width.slice(0, width.length - 2) * (clusterSliders.length - 1)) {
    //         offset = 0;
    //     } else {
    //         offset += +width.slice(0, width.length - 2);
    //     }
    //     slidesField.style.transform = `translateX(-${offset}px)`;
    // });
    // prevSlide.addEventListener('click', () => {
    //     if (offset == 0) {
    //         offset = +width.slice(0, width.length - 2) * (clusterSliders.length - 1);
    //     } else {
    //         offset -= +width.slice(0, width.length - 2);
    //     }
    //     slidesField.style.transform = `translateX(-${offset}px)`;
    // });


    // function showSlidesEdit(c) {
    //     // если счётчик (с) будет равен 2, кнопке nextSlide присваивается атрибут disabled
    //     if (c == clusterSliders.length) {
    //         slideIndexEdit = 2;
    //         nextSlide.setAttribute('disabled', 'disabled');
    //         nextSlide.classList.remove('section-cluster__arrow-right');
    //         nextSlide.classList.add('disabled-arr-right');
    //     } else {
    //         nextSlide.removeAttribute('disabled', 'disabled');
    //         nextSlide.classList.add('section-cluster__arrow-right');
    //         nextSlide.classList.remove('disabled-arr-right');
    //     }
    //     //наоборот, если счётчик равен 1 то кнопка prevSlide присваивается атрибуте disabled 
    //     if (c == 1) {
    //         slideIndexEdit = 1;
    //         prevSlide.setAttribute('disabled', 'disabled');
    //         prevSlide.classList.remove('section-cluster__arrow-left');
    //         prevSlide.classList.add('disabled-arr-left');
    //     } else {
    //         prevSlide.removeAttribute('disabled', 'disabled');
    //         prevSlide.classList.add('section-cluster__arrow-left');
    //         prevSlide.classList.remove('disabled-arr-left');
    //     }

    //     clusterSliders[slideIndexEdit - 1].style.setProperty('--animate-duration', '1s');

    //     if (clusterSliders.length < 3) {
    //         currentEdit.textContent = slideIndexEdit;
    //     }
    // }

    //Подсчет индикатора при клике
    // function plusSlidesEdit(k) {
    //     showSlidesEdit(slideIndexEdit += k);
    // }

    // prevSlide.addEventListener('click', () => {
    //     plusSlidesEdit(-1);
    // });
    // nextSlide.addEventListener('click', () => {
    //     plusSlidesEdit(+1);
    // });

    // section-cluster__slider end (slider end)

    //modal start
    const modalTriggerResident = document.querySelectorAll('[data-modal');
    const modal = document.querySelector('.modal');
    const modalCloseBtn = document.querySelector('[data-close]');


    function closeBtn() {
        modal.classList.remove('modal-resident_show');
        document.body.style.overflow = '';
    }
    modalTriggerResident.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.add('modal-resident_show');
            document.body.style.overflow = 'hidden';
        });
    });

    modalCloseBtn.addEventListener('click', closeBtn);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeBtn();
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('modal-resident_show')) {
            closeBtn();
        }
    });
    //modal end

    // anchorLinks start (плавное перемещение по ссылкам (якорям))
    const anchorFunction = function () {
        const anchors = document.querySelectorAll('a[href*="#"]');
        for (let anchor of anchors) {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const blockID = anchor.getAttribute('href');
                document.querySelector('' + blockID).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        }
    };
    anchorFunction();
    // anchorLinks end

    //validation form start
    const form = document.querySelector('.modal__form');
    const inputs = form.querySelectorAll('.modal-resident__input');
    const errorsInputs = form.querySelectorAll('.modal-resident__part-error');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        for (let i = 0; i < inputs.length; i++) {
            let prevElement = inputs[i].previousElementSibling;
            if (!inputs[i].value) {
                prevElement.style.display = 'flex';
                inputs[i].classList.add('modal-resident__input-error');
            }
        }
        // errorInput.classList.contains('modal-resident__part-error')
        errorsInputs.forEach(errorInput => {
            errorInput.addEventListener('click', function (event) {
                let err = errorInput.nextElementSibling;
                if (event.target.className == 'modal-resident__error-text') {
                    errorInput.classList.remove('modal-resident__part-error');
                    errorInput.style.display = 'none';
                    err.classList.remove('modal-resident__input-error');
                } else {
                    errorInput.classList.add('modal-resident__part-error');
                    errorInput.style.display = 'flex';
                    err.classList.add('modal-resident__input-error');
                }
            });
        });
    });
    //добавление/удаление классов error-инпутам

    //добавление при введении в инпут
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            if (input.value > 0) {
                input.classList.add('modal-resident__input-active');
            } else {
                input.classList.remove('modal-resident__input-active');
            }
        });
    });

    //validation form end

    //burger-menu and adaptive-menu start
    // document.addEventListener('touchstart', addClassBurger, {passive: true}); // установка пассивного прослушивателя событий
    const headerBurger = document.querySelector('.header__burger');
    const headerBurgerMenu = document.querySelector('.header__pull-out-menu-block');
    const closeBurger = document.querySelector('.header__top-content-burger');


    function closeBurgerMenu() {
        headerBurgerMenu.classList.remove('header__pull-out-menu-active');
        document.body.style.overflow = '';
    }
    headerBurger.addEventListener('touchstart', (e) => {
        e.preventDefault();
        headerBurgerMenu.classList.add('header__pull-out-menu-active');
        document.body.style.overflow = 'hidden';
    });

    closeBurger.addEventListener('touchstart', () => {
        closeBurgerMenu();
    });

    headerBurgerMenu.addEventListener('touchstart', (e) => {
        if (e.target === headerBurgerMenu) {
            closeBurgerMenu();
        }
    });
    //burger-menu and adaptive-menu end


});

        // slider cluster start
        const swiperCluster = new Swiper('.swiper-cluster', {
            //Стрелки
            navigation:{
                // nextEl: '.swiper-button-next',
                // prevEl: '.swiper-button-prev'
                nextEl: '.swiper-cluster-button-next',
                prevEl: '.swiper-cluster-button-prev'
            },
            pagination:{
                el: '.swiper-paginator',
                type: 'fraction',
            },

          });
        // slider cluster end

    //swiper adaptive (800px) start
    const swiperPrivAdaptive = new Swiper('.swiper', {

        // If we need pagination
        pagination: {
            el: '.swiper-paginat',
            //буллеты
          clickable: true
        }
      });
    //swiper adaptive (800px) end