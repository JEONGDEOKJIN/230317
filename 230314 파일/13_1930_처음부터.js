// 가위바위보 만들기 


// 관련변수 
let 선공 = "미정"
let 최종선공 = "미정"

// let play = true;

let 유저선택 = "미정"
let 컴터선택 = "미정"
let 컴터가선택할수있는것 = ["가위", "바위", "보"]


let 지금수중에있는돈 = 2000;

let 최소배팅 = 2000;
let 최대배팅 = 20000;
let 최종배팅금액 = 0;
let 배팅금액 = 0;


// 선공결정 
    // 선공결정함수 선언
function 선공결정함수(유저선택, 컴터선택) {

    let play = true;


    while (play) {

        if (유저선택 == 컴터선택) {
            선공 = "draw";
            play = true;

        } else {

            switch (유저선택) {
                case "가위":

                    if (컴터선택 == "보") {
                        선공 = "유저";
                        play = false;

                    } else {
                        선공 = "컴터";
                        play = false;
                    }

                    break;

                case "바위":

                    if (컴터선택 == "가위") {
                        선공 = "유저";
                        play = false;
                    } else {
                        선공 = "컴터";
                        play = false;
                    }

                    break;

                case "보":

                    if (컴터선택 == "바위") {
                        선공 = "유저";
                        play = false;
                    } else {
                        선공 = "컴터";
                        play = false;
                    }

                    break;

                default:
                    유저선택 = prompt(`다시 골라라, 가위바위보~`)
                    play = true;

                    break;
                    continue;

                // 1. play = false 만 있으면?
                // 처음에 유저 선택이 나옴. 이건 95line 임. -> 이상한걸 적어 -> 그러면, default 로 떨어짐. -> 뭘 입력하건 play false 가 됨 -> while 을 나감 -> 선공없이 함수끝
                // 2. play = true + break 넣으면? 
                // 처음에 유저 선택이 나옴. 이건 95line 임. -> 이상한걸 적어 -> false 를 품고 있어 -> while 을 벗어나! -> 선공이 정해지지 않은 상태에서 함수 끝
                // 3. play = true + continue 넣으면? 
                // [예측] 처음에 유저 선택이 나옴. 이건 95line 임. -> 이상한걸 적어 -> false 를 품고 있어 -> continue 처음으로 가 -> 살아날 거같은데? -> 만약, 제대로 입력했다면 그에 따라 판단이, 그렇지 않으면 default 로
                // [실행결과] 아... continue 라고 해도, 결국, 처음으로 가고, 거기에서 play = false 를 품은걸 들키게 된다. -> (두번째로 입력한게 제대로 가위, 를 입력해도) 그래서 while 이 멈추게 된다. 

                // 4. play = false 없이 `continue` 만, 입력하면?
                // [예측] 다시 고르게 반복시키지 않을까. ⭐⭐⭐ 
                // [실행결과] 응 맞아

                // 5. play = false 없이 `break` 만 입력하면? 
                // break 를 만나서 while 을 뚫을 수 있을까? 
                // 여기서 break 는 switch 를 끊는 용도 아닌가? 
                // 여기서 while 의 시작/정지조건은 play = true, false 아닌가. 
                // [예측] 현재 play=true 이므로 - 계속 반복 플레이 될것 같다. 


                // break 되면 -> switch 밖으로 나가 -> else 문이 되어서 if 를 나가 -> while 을 도나? 


                // 이 자리에 continue + play true 넣으면 -> 이상한거 넣으면, 다시 넣으라고 함.

                // 아니면 play = true 만 넣어도 되나? 

            }

        }
    }

    console.log(`유저선택 : ${유저선택} | 컴터선택 : ${컴터선택} | 선공 : ${선공}`)
    return 선공
}

    // 함수 실행 및 변수담기 
유저선택 = prompt(`가위, 바위, 보 중 하나 골라주세요~`);
컴터선택 = 컴터가선택할수있는것[parseInt(Math.random() * 3)];

최종선공 = 선공결정함수(유저선택, 컴터선택);
alert(`최종선공은 ${최종선공}`);



// 배팅금액결정

    // 배팅함수 선언
function 배팅함수(최소배팅, 최대배팅) {

    let bet_play = true;

    while (bet_play) {

        배팅금액 = prompt(`처음인데, 얼마 넣을거야? | 최소 : ${최소배팅} | 최대 : ${최대배팅}`)

        if (배팅금액 < 최소배팅) {

            alert(`최소배팅이 ${최소배팅}임. 넘 적어, 다시배팅해`);
            bet_play = true;
        } else if (배팅금액 > 최대배팅) {

            alert(`최대배팅이 ${최대배팅}임. 넘 많아! 다시배팅해`)
            bet_play = true;

        } else {
            alert("배팅금액확정")
            bet_play = false;
        }
    }

    return 배팅금액
}

    // 함수 실행 및 변수에 담기
        // 📛📛📛 여기도 수정 여지가 있어 보이는데 
최종배팅금액 = 배팅함수(최소배팅, 최대배팅)
alert(`최종배팅금액은 ${최종배팅금액}`)



// 묵찌빠 

// 만약, 선공 = 유저 
//     1. 비기면 -> 유저 득점 -> 다시 선공결정  
//     2. 이기면 -> 선공 : 유저 -> 다시 묵찌빠 
//     3. 지면 -> 선공 컴터 -> 다시 묵찌빠



// function 묵찌빠play(선공) {

    
    
//     return 선공, 횟수, 금액, 

//     }


    // 함수 실행 및 변수담기 
    function 유저컴터선택하게하기() {
        
        유저선택 = prompt(`가위, 바위, 보 중 하나 골라주세요~`);
        컴터선택 = 컴터가선택할수있는것[parseInt(Math.random() * 3)];

        return 유저선택, 컴터선택
    }

    



switch (최종선공) {
    case "유저":
        if ("")

        break;

    default:
        break;
}