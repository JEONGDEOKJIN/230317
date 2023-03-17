// 교수님 가이드 
// 1. 컴퓨터 랜덤값이 있어야 겠네 뭘 쓰지? -> Math.random() 을 사용해야 겠다 
// 2. 사용자의 입력값을 변수에 저장해놓아야 할거 같다. 
// 3. 다른 값을 입력하면 다시 반복 시켜야 겠다. 
// 4. 조건문은 오늘 배운 switch 를 써봐야지. 


// 해보기 
// - 컴퓨터가 랜덤하게 값을 만들어놔
// - 가위바위보를 입력하세요 창을 띄우고 -> 값을 받아 
// - 값이 들어온거랑, 컴퓨터가 랜덤하게 만든 값이랑 비교해 
    // - 가위 고, 컴터가 가위면 -> 비김. 을 띄우고 
    // - 내가 가위고 , 컴터가 바위면 -> 졌어. 를 띄우고 

// ✅ 배열에 넣어서 수정할 수도 있구나 



// ✅ 컴터가 랜덤하게 값 만들게 하기 
// console.log(parseInt(Math.random() * 3));
    // [해석]
        // Math.random() 로 랜덤값을 갖게 함 
        // *3 으로 1~3의 범위를 갖게 함 
        // parseInt 로 소수점을 떼어냄 
        // 결국 1~3 사이의 랜덤값을 만듦 

// let computer_choice = []
let computer_number = parseInt(Math.random() * 3);
// console.log(computer_choice, "📘")

// 아 뭔가를 넣어주는걸 리스트로 넣어주면 된다는 걸 생각 못 했어 😥😥😥😥😥 ⭐⭐⭐⭐⭐ 
let computer_choice = ["임시값"];



// ✅ 0 이 가위, 1이 바위, 2가 보 가 되게 하기 
switch (computer_number) {
    case 0:
        computer_choice[0] = "가위";
    break;

    case 1:
        computer_choice[0] = "바위";
    break;

    case 2:
        computer_choice[0] = "보";
    break;  

    default:
        break;
}
console.log(computer_choice[0], "컴터가 이걸 냈어~~~~~~ 그럼 결과는❓❓");
    // [해석]
        // case 2 : 라고 썼을 때, 2 를 문자열이 아니라, 숫자로 넣었어야 하는데, 그걸 못 했었어. 



// ✅ 사용자가 가위바위보입력하게 하기 
let user_choice = prompt ("가위(0), 바위(1), 보(0) 입력해봐 ");
let play = true;

while(play)
switch(user_choice) {
    case "가위": 
        play = false;
        break;

    case "바위":
        play = false;
        break;

    case "보":
        play = false;
        break;

    default :
        user_choice = prompt("🙌자, 정확히, '가위', '바위', '보' 만 넣어주세요~");
        break;
}



// ✅ 들어온 값들 비교하기 

switch (user_choice) {
    
    // 사용자가 가위를 낸 경우
    case "가위":

        if (computer_choice == '가위') {
            console.log("당신은", user_choice, "를 냈고", "컴터는", computer_choice[0], "를 냈군!", "결과는, 비겼쇼😌");
        } else if (computer_choice == '바위') {
            console.log("당신은", user_choice, "를 냈고", "컴터는", computer_choice[0], "를 냈군!", "결과는, 졌소😥");
        } else {
            console.log("당신은", user_choice, "를 냈고", "컴터는", computer_choice[0], "를 냈군!", "결과는, 이겼소👍");
        }
        
        break;
    
    // 사용자가 바위를 낸 경우
    case "바위":

        if (computer_choice == '가위') {
            console.log("당신은", user_choice, "를 냈고", "컴터는", computer_choice[0], "를 냈군!", "결과는, 이겼소👍");
        } else if (computer_choice == '바위') {
            console.log("당신은", user_choice, "를 냈고", "컴터는", computer_choice[0], "를 냈군!", "결과는, 비겼소😌");
        } else {
            console.log("당신은", user_choice, "를 냈고", "컴터는", computer_choice[0], "를 냈군!", "결과는, 졌소😥");
        }
        
        break;
        
        // 사용자가 보를 낸 경우
        case "보":
    
            if (computer_choice == '가위') {
                console.log("당신은", user_choice, "를 냈고", "컴터는", computer_choice[0], "를 냈군!", "결과는, 졌소😥");
            } else if (computer_choice == '바위') {
                console.log("당신은", user_choice, "를 냈고", "컴터는", computer_choice[0], "를 냈군!", "결과는, 이겼소👍");
            } else {
                console.log("당신은", user_choice, "를 냈고", "컴터는", computer_choice[0], "를 냈군!", "결과는, 비겼소😌");
            }
            
            break;

}
    // [질문 및 해석]
        // switch 자동완성 왜 안 되지❓❓❓❓❓ 
