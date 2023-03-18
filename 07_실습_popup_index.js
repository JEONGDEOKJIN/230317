

// 🟦 팝업 여는 함수 
    // [기능 해석] 
        // 1. popup wrap 클래스가 붙은 태그를 가져와서 -> popup 변수에 담는다.
function openPopup() { 
    
    // 1) 팝업 창 배경 2) 팝업창 디자인 3) x 자 표시 모두 popup 에 담기
    let popup = document.querySelector(".popup-wrap");
        //console.log(popup)  // [결과물] <div class="popup-wrap"> ... </div> 이렇게 나옴 

    console.log(popup.classList)
        // popup 이라는 변수에는 popup-wrap 클래스 이름을 가진 태그가 들어가 있음. 
        // popup 안에, popupwrap 과 동일한 레벨에 있는 클래스를 알려줘? 

}




