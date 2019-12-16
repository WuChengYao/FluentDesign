// 漢堡條
var oNavBurger = document.querySelector('.navbar_burger')
var oAddClass_1 = document.querySelector('.burger_1')
var oAddClass_2 = document.querySelector('.burger_2')
var oAddClass_3 = document.querySelector('.burger_3')
var oAddClass_BurgerMenu = document.querySelector('.navbar_burger_menu')
//點擊事件涵式
oNavBurger.addEventListener('click', navBtnHandler)

function navBtnHandler() {
    oAddClass_1.classList.toggle('navbar_burger_1a')
    oAddClass_2.classList.toggle('navbar_burger_2a')
    oAddClass_3.classList.toggle('navbar_burger_3a')

    if (oAddClass_BurgerMenu.classList.contains('burger_menu_2') == true) {

        oAddClass_BurgerMenu.classList.remove('burger_menu_2');
    } else {

        oAddClass_BurgerMenu.classList.add('burger_menu_2');
    }
}
// section_3_text
var mytop = document.querySelector('#myBtn');
var mywindow = window;

//視窗滾動事件涵式
mywindow.addEventListener('scroll', scrollBlock);
mytop.addEventListener('click', topup);

function scrollBlock() {
    if (document.documentElement.scrollTop > 20) {
        mytop.style.display = "block";
    } else {
        mytop.style.display = "none";
    }
    var oTextBlock_1 = document.querySelector('.section_3_text_title');
    var oTextBlock_2 = document.querySelector('.section_3_text_main');
    var oScroll = document.documentElement.scrollTop;
    // console.log(oScroll);
    if (oScroll > 755) {
        oTextBlock_1.classList.add('visible');
    } else {
        oTextBlock_1.classList.remove('visible');
    }
    if (oScroll > 1120) {
        oTextBlock_2.classList.add('visible');
    } else {
        oTextBlock_2.classList.remove('visible');
    }
    ////////// section_4_odiv
    var oDivBlock = document.querySelector('.section_4_odiv');
    var oLineBlock = document.querySelector('.section_4_oline');
    var oBallBlock = document.querySelector('.section_4_ball');

    if (oScroll > 1525) {
        oDivBlock.classList.add('visible');
    } else {
        oDivBlock.classList.remove('visible');
    }
    if (oScroll > 1770) {
        oBallBlock.classList.add('visible');
    } else {
        oBallBlock.classList.remove('visible');
    }
    if (oScroll > 2655) {
        oLineBlock.classList.add('visible');
    } else {
        oLineBlock.classList.remove('visible');
    }
    ////////// section_5背景transform變化
    var oTranslateImg = document.querySelector('.noname_img');
    if (oScroll > 2400 & oScroll <= 3840) {
        var opacity = 0;
        opacity = oScroll / 1900 - 1;
        if (opacity >= 0.3) {
            opacity = oScroll / 1800 - 1;
        }
        if (opacity >= 0.5) {
            opacity = oScroll / 1600 - 1;
        }
        var opacity_2 = 0;
        var opacity_3 = 0;
        opacity_2 = oScroll / 25 - oScroll / 300;
        opacity_3 = oScroll / 1350 - 1;
        
        oTranslateImg.style.transform = 'translate3d(0,' + opacity_2 + 'px, 0) scale(' + opacity_3 + ',' + opacity_3 + ')';
        if (opacity >= 1 || opacity_3 >= 1.2) {
            opacity = 1;
            oTranslateImg.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
        }
        oTranslateImg.style.opacity = opacity;
    }

    ////////// section_6 transform變化
    var oImgUp = document.querySelector('.blackimgup');
    var oImgUp_1 = document.querySelector('.section_6_container .section_6_h2:nth-child(2) h2');
    var oImgUp_2 = document.querySelector('.section_6_container .section_6_h2:nth-child(3) h2');
    var oImageUpGo = 0;
    oImageUpGo = oScroll / 300 - oScroll / 300;
    if (oScroll < 2960) {
        oImgUp.style.transform = 'matrix(1, 0, 0, 1, 0, 122)';
        oImgUp_1.style.transform = 'matrix(1, 0, 0, 1, 0, 200)';
        oImgUp_2.style.transform = 'matrix(1, 0, 0, 1, 0, 200)';
    } else {
        oImgUp.style.transform = 'translate3d(0,' + oImageUpGo + 'px, 0)';
        if (oScroll > 3200) {
            opacity = oScroll / 1600 - 1;
            oImgUp_1.style.transform = 'translate3d(0,' + oImageUpGo + 'px, 0)';
            oImgUp_1.style.opacity = opacity;
            oImgUp_2.style.transform = 'translate3d(0,' + oImageUpGo + 'px, 0)';
            oImgUp_2.style.opacity = opacity;
        }
    }



    ////////// section_8
    var oS8Img_1 = document.querySelector('.section_8_img_1');
    var oS8Img_2 = document.querySelector('.section_8_img_2');
    var oS8Img_3 = document.querySelector('.section_8_img_3');
    var oS8Img_4 = document.querySelector('.section_8_img_4');
    var oS8Img_5 = document.querySelector('.section_8_img_5');

    if (oScroll > 4475) {
        oS8Img_1.classList.add('visible');
        oS8Img_2.classList.add('visible');
        oS8Img_3.classList.add('visible');
    } else {
        oS8Img_1.classList.remove('visible');
        oS8Img_2.classList.remove('visible');
        oS8Img_3.classList.remove('visible');
    }
    if (oScroll > 5020) {
        oS8Img_4.classList.add('visible');
        oS8Img_5.classList.add('visible');
    } else {
        oS8Img_4.classList.remove('visible');
        oS8Img_5.classList.remove('visible');
    }
}

function topup() {
    document.documentElement.scrollTop = 0;
}