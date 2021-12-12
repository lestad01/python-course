document.addEventListener('DOMContentLoaded', ()=> {
  //Tabs
  const tabs = document.querySelectorAll('.tabheader__item');
  const tabsContent = document.querySelectorAll('.tabcontent');
  const tabsParent = document.querySelector('.tabheader__items');

  function hideTabContent() {
    tabsContent.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });
    tabs.forEach(item => {
      item.classList.remove('tabheader__item_active');
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
  }

  tabsParent.addEventListener('click', (event) => {
    const target = event.target;

    if (target && target.classList.contains('tabheader__item')){
      tabs.forEach((item, i) =>{
        if (target == item){
          hideTabContent();
          showTabContent(i);
        }
      });
    }

  });


  hideTabContent();
  showTabContent();

  //Timer

  const deadline = '2021-12-30';

  //вычисляем разницу между дедлайном и текущем временем
  function getTimeRemainig (endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date());
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    const hours = Math.floor((t / (1000 * 60 * 60) % 24));
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const seconds = Math.floor((t / 1000) % 60);

    return {
      'total' : t,
      'days'  : days,
      'hours' : hours,
      'minutes' : minutes,
      'seconds' : seconds
    }
  }

  function getZero(num) {
    if(num >= 0 && num < 10){
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock (selector, endtime) {
    const timer = document.querySelector(selector);
    const days = timer.querySelector('#days');
    const hours = timer.querySelector('#hours');
    const minutes = timer.querySelector('#minutes');
    const seconds = timer.querySelector('#seconds');
    const timeInterval = setInterval(updateClock, 1000);

    updateClock();

      function updateClock () {
        const t = getTimeRemainig(endtime);
        
        days.innerHTML = getZero(t.days);
        hours.innerHTML = getZero(t.hours);
        minutes.innerHTML = getZero(t.minutes);
        seconds.innerHTML = getZero(t.seconds);

        if (t.total <= 0) {
          clearInterval(timeInterval);
        }

      }
  }

  setClock('.timer', deadline);

  //Modal
  const modalTrigger = document.querySelectorAll('[data-modal');
  const modal = document.querySelector('.modal');
  const modalCloseBtn = document.querySelector('[data-close]');

  function openModal(){
    modal.classList.toggle('show');
    document.body.style.overflow = 'hidden';
    clearInterval(modalTimeId);
  }

  modalTrigger.forEach(btn => {
    btn.addEventListener('click', openModal);
  });

  function closeModal(){
    modal.classList.toggle('show');
    document.body.style.overflow = '';
  }
  modalCloseBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (event) => {
    if(event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (event)=> {
    if (event.code === 'Escape' && modal.classList.contains('show')){
      closeModal();
    }
  });

  //устанавливаем таймер для modal
  const modalTimeId = setTimeout(openModal, 7000);

  function showModalByScroll (){
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
      openModal();
      window.removeEventListener('scroll', showModalByScroll);// удаляем событие для того чтобы при скролле до конца сайта модалка вызывалась только один раз
    }
  }

  window.addEventListener('scroll', showModalByScroll);
//{once: true}

});









