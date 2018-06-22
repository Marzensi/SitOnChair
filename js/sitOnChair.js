document.addEventListener('DOMContentLoaded', function() {

    var informationImg = document.querySelectorAll('.box-img');
    var title = document.querySelectorAll('.box-title-container');

    for (var i = 0; i < informationImg.length; i++) {
        informationImg[0].addEventListener('mouseover', function () {
            title[0].classList.add('hide');
        })
    }

    for (var i = 0; i < informationImg.length; i++) {
        informationImg[0].addEventListener('mouseout', function () {
            title[0].classList.remove('hide');
        })
    }

    for (var i = 0; i < informationImg.length; i++) {
        informationImg[1].addEventListener('mouseover', function () {
            title[1].classList.add('hide');
        })
    }
    for (var i = 0; i < informationImg.length; i++) {
        informationImg[1].addEventListener('mouseout', function () {
            title[1].classList.remove('hide');
        })
    }

    var currentIndex = 0;
    var banners = document.querySelectorAll('.banner-slide-active');
    var buttonNext = document.querySelector('.banner-next');
    var secondSlide = banners[1].classList.add('hide');

    buttonNext.addEventListener('click', function (e) {
        banners[currentIndex].classList.add('hide');
        currentIndex++;
        if (currentIndex > banners.length - 1) {
            currentIndex = 0;
        }
        banners[currentIndex].classList.remove('hide');
    });

    var buttonPrev = document.querySelector('.banner-prev');
    buttonPrev.addEventListener('click', function (e) {
        banners[currentIndex].classList.add('hide');
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = 2;
        }
        banners[currentIndex].classList.remove('hide');
    });

    // show/hide drop down list

    var listArrows = document.querySelectorAll('.calc_list_arrow')
    console.log(listArrows)
    var dropDownList = document.querySelectorAll('.calc_list_panel');
    var allLi = document.querySelectorAll('.calc');

    listArrows[0].addEventListener('click', function () {
        dropDownList[0].classList.toggle('visible');
    });

    listArrows[1].addEventListener('click', function () {
        dropDownList[1].classList.toggle('visible')
    });


    listArrows[2].addEventListener('click', function () {
        dropDownList[2].classList.toggle('visible')
    });


    var yourChair = document.querySelector('.calc_panel_left .title');

    for (var i = 0; i < 3; i++){
        allLi[i].addEventListener('click', function(){
            yourChair.innerText = 'Chair ' + this.innerText;
        })
    }

//changing innerText of sumPanel

    var yourChair = document.querySelector('.calc_panel_left .calc_title');
    var yourChairPrice = document.querySelector('.calc_panel_right .calc_title');

    for (var i = 0; i <= 3; i++){
        allLi[i].addEventListener('click', function(){
            yourChair.innerText = 'Chair ' + this.innerText;
            yourChairPrice.innerText = this.dataset.price;
            dropDownList[0].classList.remove('visible');
            sumCheck();
        })
    }

    var yourColor = document.querySelector('.calc_panel_left .color');
    var yourColorPrice = document.querySelector('.calc_panel_right .color');

    for (var i = 4; i <= 6; i++){
        allLi[i].addEventListener('click', function(){
            yourColor.innerText = this.innerText;
            yourColorPrice.innerText = this.dataset.price;
            dropDownList[1].classList.remove('visible');
            sumCheck();
        })
    }

    var yourPattern = document.querySelector('.calc_panel_left .pattern');
    var yourPatternPrice = document.querySelector('.calc_panel_right .pattern');

    for (var i = 7; i <= 8; i++){
        allLi[i].addEventListener('click', function(){
            yourPattern.innerText = this.innerText;
            yourPatternPrice.innerText = this.dataset.price;
            dropDownList[2].classList.remove('visible');
            sumCheck();
        })
    }

    var transport = document.querySelector('.calc_panel_left .transport');
    var transportPrice = document.querySelector('.calc_panel_right .transport');
    var checkbox = document.querySelector('#transport');

    checkbox.addEventListener('change', function(event) {
        if (checkbox.checked) {
            transport.innerText = 'Transport';
            transportPrice.innerText = this.dataset.transportPrice;
        } else {
            transportPrice.innerText = ' ';
            transport.innerText = ' ';
        }
        sumCheck();
    });

    //kalkulator

    var sum =document.querySelector('.sum');
    function sumCheck () {
        var currentSum = Number(yourChairPrice.innerText) + Number(yourColorPrice.innerText) + Number(yourPatternPrice.innerText) + Number(transportPrice.innerText);
        sum.innerText = currentSum;
    }
});