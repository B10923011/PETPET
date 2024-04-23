let s1_title = document.getElementsByClassName('s1-title');
let s1_sm_title = document.getElementsByClassName('s1-sm-title');
let footer = document.getElementsByClassName('footer');
let logo = document.getElementsByClassName('logo');

// 初始化元素的顯示狀態
if (localStorage.getItem('windowWidth') < 1230) {
    s1_title[0].style.display = 'none';
    s1_sm_title[0].style.display = 'block';
    footer[0].style.display = 'none';
} else {
    s1_title[0].style.display = 'block';
    s1_sm_title[0].style.display = 'none';
    footer[0].style.display = 'block';
}

window.addEventListener('resize', function() {
    localStorage.setItem('windowWidth', window.innerWidth);
    if (window.innerWidth < 768) {
        s1_title[0].style.display = 'none';
        s1_sm_title[0].style.display = 'block';
        footer[0].style.display = 'none';
    } else {
        s1_title[0].style.display = 'block';
        s1_sm_title[0].style.display = 'none';
        footer[0].style.display = 'block';
    }
});
