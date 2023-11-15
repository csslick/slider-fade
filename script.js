
// img에 adClass, removeClass로 표시 상태 제어
let img = document.querySelectorAll('.slider .sliders img');
let num = 0; // 이미지 번호

// 자동 재생
setInterval(function(){
    // 이미지들을 비표시 
    for(let i = 0; i < img.length; i++) {
        img[i].classList.remove('show');
    }

    // 다음 이미지 표시
    num = num + 1;
    if(num > 2) { num = 0; }
    console.log(num);
    img[num].classList.add('show');

}, 5000);