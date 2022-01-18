document.addEventListener('DOMContentLoaded', function() {
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
    const clusterSliders = document.querySelectorAll('.section-cluster__slide');
    const prevSlide = document.querySelector('.section-cluster__arrow-left');
    const nextSlide = document.querySelector('.section-cluster__arrow-right');
    const clustersSlidesWrapper = document.querySelector('.section-cluster__slider-block');
    const slidesField = document.querySelector('.section-cluster__slider-inner');
    const totalEdit = document.querySelector('#total-edit');
    const currentEdit = document.querySelector('#current-edit');
    const width = window.getComputedStyle(clustersSlidesWrapper).width;
    let offset = 0;
    let slideIndexEdit = 1;
    showSlidesEdit(slideIndexEdit);

    if (clusterSliders.length < 3){
        totalEdit.textContent = clusterSliders.length;
    }

    // автоматическая адаптация блока section-cluster__slider-inner 
    // под ширину основного блока section-cluster__slide
    slidesField.style.width = 100 * clusterSliders.length + '%';


    clusterSliders.forEach(slide => {
        slide.style.width = width;
    });

    nextSlide.addEventListener('click', ()=> {
        if(offset == +width.slice(0, width.length - 2) * (clusterSliders.length - 1)){
            offset = 0;
        } else {
            offset += +width.slice(0, width.length -2);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;
    });
    prevSlide.addEventListener('click', ()=>{
    if (offset == 0) {
        offset = +width.slice(0, width.length - 2) * (clusterSliders.length - 1);
    } else {
        offset -= +width.slice(0, width.length - 2);
    }
        slidesField.style.transform = `translateX(-${offset}px)`;
    });


    function showSlidesEdit(c){
        // если счётчик (с) будет равен 2, кнопке nextSlide присваивается атрибут disabled
         if (c == clusterSliders.length) {
            slideIndexEdit = 2;
            nextSlide.setAttribute('disabled', 'disabled');
            nextSlide.classList.remove('section-cluster__arrow-right');
            nextSlide.classList.add('disabled-arr-right');
         } else {
            nextSlide.removeAttribute('disabled', 'disabled');
            nextSlide.classList.add('section-cluster__arrow-right');
            nextSlide.classList.remove('disabled-arr-right');
         }
         //наоборот, если счётчик равен 1 то кнопка prevSlide присваивается атрибуте disabled 
         if ( c == 1) {
            slideIndexEdit = 1;
            prevSlide.setAttribute('disabled', 'disabled');
            prevSlide.classList.remove('section-cluster__arrow-left');
            prevSlide.classList.add('disabled-arr-left');
         } else {
            prevSlide.removeAttribute('disabled', 'disabled');
            prevSlide.classList.add('section-cluster__arrow-left');
            prevSlide.classList.remove('disabled-arr-left');
         }

         clusterSliders[slideIndexEdit - 1].style.setProperty('--animate-duration', '1s');

         if (clusterSliders.length < 3){
            currentEdit.textContent = slideIndexEdit;
        }
      }
      
      //Подсчет индикатора при клике
      function plusSlidesEdit(k){
        showSlidesEdit(slideIndexEdit += k);
       }

      prevSlide.addEventListener('click', () => {
        plusSlidesEdit(-1);
      });
      nextSlide.addEventListener('click', () => {
       plusSlidesEdit(+1);
     });

// section-cluster__slider end (slider end)

//modal start
    const modalTriggerResident = document.querySelectorAll('[data-modal');
    const modal = document.querySelector('.modal');
    const modalCloseBtn = document.querySelector('[data-close]');
     

    function closeBtn(){
        modal.classList.add('modal-resident');
        modal.classList.remove('modal-resident_show');
        document.body.style.overflow = '';
    }

    modalTriggerResident.forEach(btn => {
        btn.addEventListener('click', ()=> {
            modal.classList.add('modal-resident_show');
            modal.classList.remove('modal-resident');
            document.body.style.overflow = 'hidden';
        });
    });

    modalCloseBtn.addEventListener('click', closeBtn);

    modal.addEventListener('click', (e)=> {
        if(e.target === modal) {
            closeBtn();
        }
    });

    document.addEventListener('keydown', (e) => {
        if(e.code === 'Escape' && modal.classList.contains('modal-resident_show')){
            closeBtn();
        }
    });
//modal end



});





