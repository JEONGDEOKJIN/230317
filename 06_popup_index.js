// 팝업 여는 함수 
function openPopup() {
    let popup = document.querySelector(".popup-wrap"); 
    
    // 디버깅 확인 습관 ⭐⭐⭐⭐⭐ 
    console.log(popup);


    console.log(popup.classList) 
        // 리스트로 돈다. 
        // 리스트는 내부 메소드가 있고 
        // classList 는 메소드를 사용하면 된다. 
    
    
        console.log(popup.className)   
        // 문자열로 
        // 문자열 자체를 넣어서 바꿀 수 있어 
    
        // popup.className 을 사용하면, 문자열을 그대로 대입하면 된다. 


    // 1. className 먼저 써보기 
        // " is-active" 에서 한칸 띄어야 햄 ⭐⭐⭐ 
        // 왜냐면, 붙여서 써지면 -> 하나의 클래스로 인식 되기 때문 ⭐⭐⭐⭐⭐
        // class 구분을 줘야 하기 때문에, ' is-active' 앞에 한칸 띄었다!!! 
    // popup.className = popup.className + " is-active";


    // 2. classlist 의 메소드 쓰기
    // popup.classList.add("is-active");
        // 편함. 


    // 3. className 을 조건문으로 한번 해보기 
        // 클래스가 있는지 확인하고 -> 1) 있으면 붙이지 말고 2) 없으면, 붙이자

        // popup.classList.contains("is-active") : is-active 가 있는지 확인하기 
    
    if (popup.classList.contains("is-active")) {
        // class 가 있으면 

    } else {
        // class 가 없으면! 

        popup.className = popup.className + " is-active";

    }


    // 문자열 버전 
    // let strArr = popup.className.split("");
    // console.log()

    // if (strArr.indexOf("is-active") != -1 ) {
        // class 가 있으면 
        // 문자열 제거해서 클래스를 지울 수 있음. 

    // } else {
        // class 가 없으면! 
        // popup.className = popup.className + " is-active";
    // }



    // 음.... 이거 불편하고 어려우면 -> 메소드 사용 add 같은거 
    // 메소드 사용해서 조건 추가 
    if(popup.classList.contains("is-active")) {
        // is-active 있으면 -> 제거 
            // remove : class 제거 메소드
        popup.classList.remove("is-active");

    } else {
        // is-active 없으면 -> 추가
            // add = 추가 메소드
        popup.classList.add("is-active")
    }
}

// 어렵고 힘든거 정상 😌
