//touchStart
//touchmove
//touchend
//touchenter
//tiuchleave
//touchcancel


document.addEventListener('DOMContentLoaded', ()=> {
    const box = document.querySelector('.box');

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        // console.log('Srat!');
        // console.log(e.touches);
        // console.log(e.targetTouches);
        // console.log(e.changedTouches);
        console.log(e.targetTouches[0].pageX);
    });

    // box.addEventListener('touchmove', (e) => {
    //     e.preventDefault();

    //     console.log('Moving');
    // });

    // box.addEventListener('touchend', (e) => {
    //     e.preventDefault();

    //     console.log('Srat!');
    // });
});


//touches список всех пальцев которые соприкоснулись с экраном
// targetTouches
//changedTouches











