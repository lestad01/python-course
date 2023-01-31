import "../styles/reset.scss";
import "../styles/mixins.scss";
import "../styles/styles.scss";

// объект для классов часто используемых
const classes = {
    opened: "opened",
};

const header = document.querySelector(".header");
const menuLink = document.querySelectorAll(".menu-link");
const menuButton = document.querySelector(".header-menu__button");

// бургер меню
const toggleMenu = () => header.classList.toggle(classes.opened);
// скролл/навигация по странице поссылкам
const scrollToSection = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');

    if (!href && !href.startsWith("#")) return;
    // href - '#editions' с помощью slice обрезмем #
    const section = href.slice(1);
    const top = document.getElementById(section)?.offsetTop || 0;
    window.scrollTo({top, behavior: "smooth"});

};


const formatValue = (value) => value < 10 ? `0${value}` : value;
const getTimerValues = (diff) => ({
        seconds: (diff/1000) % 60, // секунды
        minutes: (diff/(1000 * 60)) % 60,  // минуты т.к. в одном часе 60 мин
        hours:  (diff/(1000 * 60 * 60)) % 24, // 24 часа в сут
        days: (diff/(1000 * 3600 * 24)) % 30
});
const setTimerValues = (values) => {
    Object.entries(values).forEach(([key, value]) =>{
        const timerValue = document.getElementById(key);
        timerValue.innerText = formatValue(Math.floor(value));
        console.log(key,value);
    });
};
const startTimer = (date) => {
    const id = setInterval(() => {    
        // разница между датой релиза
        const diff = new Date(date).getTime() - new Date().getTime(); 
        //console.log(getTimerValues(diff));
        // в случае , если разница будет меньше 0 произойдет очищение таймера будет по нолям
        if (diff < 0) {
            clearInterval(id);
            return;
        }
        setTimerValues(getTimerValues(diff));
    }, 1000);
};

startTimer("February 20, 2023 00:00:00");
menuButton.addEventListener("click", toggleMenu);
menuLink.forEach((link) => link.addEventListener("click", scrollToSection));

