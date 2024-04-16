let s1_title = document.getElementsByClassName('s1-title');
let s1_sm_title = document.getElementsByClassName('s1-sm-title');

window.addEventListener('resize', function() {
    if (window.innerWidth < 768) {
        s1_title[0].style.display = 'none';
        s1_sm_title[0].style.display = 'block';
    } else {
        s1_title[0].style.display = 'block';
        s1_sm_title[0].style.display = 'none';
    }
});
