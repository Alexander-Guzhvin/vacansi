function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
});

function ibg(){
    let ibg=document.querySelectorAll(".ibg");
   for (var i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
      ibg[i].style.backgroundImage = 
      'url('+ibg[i].querySelector('img').getAttribute('src')+')';
    }
   }
  }    
ibg();


function ibg(){
    let ibg=document.querySelectorAll(".ibg");
   for (var i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
      ibg[i].style.backgroundImage = 
      'url('+ibg[i].querySelector('img').getAttribute('src')+')';
    }
   }
  }    
ibg();

    let position = 0;
    const slidesToScroll = 4;
    const slidesToShow = 2;
    const container = document.querySelector('._slider-container');
    const track =document.querySelector('._slider-track');
    //const item = document.querySelector('._slider-item');
    const btnNext = document.querySelector('.btn-next');
    const btnPrev = document.querySelector('.btn-prev');
    const items = document.querySelector('._slider-item');
    const itemsCount = items.length;
    const itemWidth = container.clientWidth / slidesToShow;
    const movePosition = slidesToScroll * itemWidth;

    Array.prototype.forEach.call( items, item => {
        item.style.minWidth = `${itemWidth}px`;
    });

    btnPrev.addEventListener('click', () => {
        const itemsLeft = Math.abs(position) / itemWidth;
        
        position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
        
        setPosition();
        checkBtns();
    }); 

    btnNext.addEventListener('click', () => {
        const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

        position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

        setPosition();
        checkBtns();
    }); 

    const setPosition = () => {
        track.style.transform = `translateX(${position}px)`;
    };

    const checkBtns = () => {
        btnPrev.disabled = position === 0;
        btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
    };
    
    checkBtns();

