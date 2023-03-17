// 우리가 만들어볼 업다운 게임 
// 숫자 맞추기 


// 1. 플레이어가 있고, 컴퓨터가 있음. 
// 2. 플레이어는 '선택' 할 수 있고, 컴퓨터는 '랜덤값'
// 3. 플레이어가 선택할 수 있는 제어문 
    // 플레이어가 이상한거 못 쓰게 조절해야 겠다. 
// 4. 게임의 종료 시점을 정해야 겠다. 

// 팁 
    // 생각하는 힘이, 고민할 수록, 길러짐. ⭐⭐⭐
    // 버그가 있는게 정상. 



let playerSelect;
// 1 ~ 100 의 랜덤숫자 
    // 📛📛📛 이때 +1 을 하는게 낯설다. 
let computerSelcet = parseInt (Math.random() * 99 + 1) ;

// 지금 까지 시도한 횟수 
let count = 0;

let max = 100; // 플레이어가 계속 선택이 가능한 최대의 숫자
let min = 0; // 플레이어가 선택이 가능한 최소의 숫자
    // [역할 해석] 
        // 플레이어가 3을 입력했어 -> "작아!" 라고 함 -> 1,2 는 필요없게 돼. 이때, 1,2 를 min 으로 넣어서 입력못하게 함. 

let subText = "" ; // 컴퓨터가 알려줄 문구
let maxCount = parseInt(prompt("게임 몇 번 할래?")) // 게임 횟수 


// 반복 되어야 하니까, while 
while (playerSelect !== computerSelcet && count < maxCount) {
    // ES6 에서 문자열을 사용할 때, 편하게 사용할 수 있는 기법
        // '템플릿 리터럴' ⭐⭐⭐⭐⭐
            // 문자를 다룰 때, '줄바꿈' 등을 편하게 쓸 수 있게 해준다. ⭐⭐⭐
            // `` 백틱! 을 쓰면, 줄 내림이 편해 
            // `${변수}문자열` ⭐⭐⭐⭐⭐ 이렇게 합칠 수 있어!!!!! 
            // \n 문자 작성할 때, 줄내림을 해준다. ⭐⭐⭐

    playerSelect = prompt(`${subText}\n숫자를 입력하세요\n 최소 : ${min} | 최대 ${max} | 남은 횟수 : ${maxCount - count}`);

    // 숫자로 변환되는 부분 (이 부분 주석처리)
    // playerSelect = parseInt(playerSelect);
    // 입력된 값이 숫자인지 확인헤야. 문자쓰면 어떡해...😥

    // inNaN : 숫자가 아닌 값을 입력했는지 확인⭐⭐⭐
        // 숫자가 아니면 => true 가 됨. 
        // 숫자 인지 걸러준다.
    if (isNaN(playerSelect)) {
        subText = "숫자 입력 하셈"
        // 다시 게임을 시작해야 하는데, 밑에 작성된 코드를 읽지 않게 할 수 없나❓❓❓❓❓

        continue; // 이 continue 구문 부터( 이 줄 부터 ) 밑으로 읽지 않고, 
                    // '다시 반복문 시작' 으로 돌아간다. ⭐⭐⭐⭐⭐
                    // 여기 밑에 있는 곳에 닿지 않고, while 의 처음으로 간다 ⭐⭐⭐⭐⭐ 
    // }
    // else {
    //     // 숫자 제대로 입력하면, 멈추게
    //     break;
    }


    // 최소화 최대 값인지 확인! 
        // 범위의 값이 맞는지 확인
    if (min >= playerSelect || max <= playerSelect) {
        subText = `너 입력값 확인해 최소 : ${min} | 최대 : ${max}`

        continue ; // 다시 입력 하셈 
    }

    // 게임의 로직 시작 


    if (playerSelect > computerSelcet) {
        // max 최대값을 다시 겹치지 않게 입력해준다. 
        max = playerSelect;
        subText = "(따운!!) "
    } else if (playerSelect < computerSelcet) {
        // min 최소값을 다시 겹치지 않게 입력한다.
        min = playerSelect; 
        subText = "업! 업해!!!"
    } else {
        count = count + 1; 
        console.log ( `${count} 번 시도해서 너 맞췄어 축하! ` )
        // 게임 끝났음! 
        break;
    }

    // 게임 횟수 증가 해야 함.
    count ++ ;

    if (count >= maxCount) {
        // 너 실패함. 게임 오버. 
        console.log("게임 오버~ 메룽~");
    }


}