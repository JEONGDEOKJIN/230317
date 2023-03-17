
// 🟦 전역변수는 맨 위에 모아두기 ⭐⭐⭐⭐⭐ 

    // 1. batting 함수 관련 전역변수
    let 수중에있는돈 = 20000;

    let 최소배팅금액 = 2000;

    let 배팅금액 = 0;

    let 남은돈 = 0;

    let batting_play = true;

    // 2. 묵찌빠 관련
    let subText = "" // 컴터가 알려줄 문구 ⭐⭐⭐⭐⭐ 

    let 선공 = "아직미정"

    let 묵찌빠_play = true;


    let 유저선택_묵찌빠 = "미정"; // 유저선택 으로 통일해도 될거 같음 
    let 유저선택 = "미정"


    let 묵찌빠count = 1;


    let 컴퓨터선택 = "미정";
    let 컴퓨터가선택할수있는것들 = ["가위", "바위", "보"];
    let 컴퓨터선택_묵찌빠 = "미정"; // 컴퓨터선택으로 통일해도 될거 같음
    let 컴퓨터가선택할수있는_묵찌빠들 = ["가위", "바위", "보"]; // '컴퓨터가선택할수있는것들' 로 통일해도 될거 같음




// 🟦 선공 정하는 게임 함수 선언 
function decide_whoisfirst () {
    
    // 게임결과 반복되는 함수 선언
        function 게임결과_비김() {
            // 다시 게임 시작 
            컴퓨터선택 = 컴퓨터가선택할수있는것들[parseInt(Math.random() * 3)]
            유저선택 = prompt("가위, 바위, 보, 다시 시작!");
            play = true;
            // break;        
        }

        function 게임결과_컴터이김() {
                // 컴퓨터 이김
                // 선공 = 컴퓨터
                선공 = "컴퓨터";

                // 다시 시작 안 해도 됨
                play = false;
                // break;
                // continue;
        }

        function 게임결과_유저이김() {
                    // 컴퓨터 == 보 -> 유저 이김 
                    // 선공 = 유저
                    선공 = "유저";
    
                    // 다시 시작 안 해도 됨. 
                    play = false;
                    // break;
                    // continue;
        }

        function 잘못입력했을떄() {
            유저선택 = prompt("가위, 바위, 보, 를 제대로 입력해~라고 해");
            컴퓨터선택 = 컴퓨터가선택할수있는것들[parseInt(Math.random() * 3)]
            play = true;
        }
        
    // 선공 정하는 가위바위보 
    
    let play = true;
    
    컴퓨터선택 = 컴퓨터가선택할수있는것들[parseInt(Math.random() * 3)]
    유저선택 = prompt("가위, 바위, 보, 다시 시작!");
    
    while (play) {
        
        switch (유저선택) {
    
            case "가위":
    
                if (컴퓨터선택 == "가위") {
                    게임결과_비김();
    
                } else if (컴퓨터선택 == "바위") {
                    게임결과_컴터이김();
    
                } else {
                    게임결과_유저이김();
                }
    
                // break 는 switch 밖으로 나가는 건가❓❓❓❓❓ 
                // 으응 default 가 작동하는 걸 봐바 ⭐⭐⭐⭐⭐
                break;
    
    
            case "바위":
    
                if (컴퓨터선택 == "가위") {
                    게임결과_유저이김();

                } else if (컴퓨터선택 == "바위") {
                    게임결과_비김();
    
                } else {
                    게임결과_컴터이김();
                }
    
                break;
    
    
            case "보":
    
                if (컴퓨터선택 == "가위") {
                    게임결과_컴터이김();

    
                } else if (컴퓨터선택 == "바위") {
                    게임결과_유저이김();

    
                } else {
                    게임결과_비김();

                }
    
                break;
    
    
            default:
                잘못입력했을떄();
                break;
                // continue;
        }
    
    }
    
    
    console.log(`선공 결정 : ${선공} `)
    alert(` 선공 결정! : ${선공}`)
    return 선공;
    // 선공결정에서 continue 와 break 의 관리? 
    // ------------------------------ 선공 결정 END --------------------------------------------- 

}



// 선공결정 실행 
    // return 선공
decide_whoisfirst();


// 🟦 배팅 금액 함수 선언
function batting() {

    // 유저 배팅 금액 
    
    while (batting_play) {
    
        배팅금액 = prompt (` 
        ${subText} \n
        얼마를 배팅할지 입력해 \n
        현재 갖고 있는 금액은 ${수중에있는돈} 원 이야. \n 
        배팅 금액은 최소 ${최소배팅금액} 이고, 최대 네가 갖고 있는 돈이지.`)
    
    
        if (isNaN(배팅금액)) {
            subText = "숫자입력하셈";
            continue;
        }
    
    
        if (배팅금액 < 2000 || 배팅금액 > 20000) {
            subText = "배팅금액이 좀...";
            batting_play = true;
        } else {
            batting_play = false;
        }
    
    }

    alert (`오호~ ${배팅금액} 만큼을 배팅했구만!`)
    return 배팅금액;
}


// 배팅 금액 함수 실행 
    // return 배팅금액
batting();



// 배팅하고 남은돈
남은돈 = 20000 - 배팅금액;



// 🟦 묵찌빠 함수 선언 
function mukgibba() {



// 묵찌빠 게임 시작
while (묵찌빠_play) {

    // 반복되는 함수 
        function 묵찌빠결과_선공유저_비김() {
            선공 = "유저";

            // 득점 성공 -> 배팅액 주기
            console.log("득점성공")
            남은돈 = 남은돈 + (배팅금액 * 2);

            // 다시 가위바위보 해야 함 
            // continue 면 되는지, play true 까지 필요한지. 
            묵찌빠_play = true;
            // continue;
        }

        function 묵찌빠결과_컴터이김() {
            선공 = "컴퓨터";

            묵찌빠_play = true;
            // continue;
        }
        
        function 묵찌빠결과_유저이김() {
            선공 = "유저"

            묵찌빠_play = true;
            // continue;
        }

        function 잘못입력한경우 () {
            유저선택_묵찌빠= prompt(`가위, 바위, 보 라고 정확히 입력하셔야 해요`)
            묵찌빠count = 묵찌빠count - 1;
            console.log("가위, 바위, 보 말고, 잘못 넣은 경우")
        }

        function 묵찌빠결과_선공컴터_비김() {
            선공 = "컴퓨터";

            // 득점 성공
            console.log("컴퓨터가 득점성공")
            남은돈 = 남은돈 - (배팅금액 * 2);


            // 다시 가위바위보 해야 함 
            // continue 면 되는지, play true 까지 필요한지. 
            묵찌빠_play = true;
            // continue;
        }





    // 유저 묵찌빠 고르기
    유저선택_묵찌빠 = prompt(`⭐⭐⭐ 묵찌빠 입니다. \n
    선공은 ${선공} 이네요. \n
    배팅은 ${배팅금액}을 하셨고, \n
    수중에 있는 돈은 ${남은돈} 이네요 \n 
    지금은 ${묵찌빠count} 번째 판 이구요! \n
    여기에는 가위, 바위, 보, 만, 제대로 넣어주세요~!`);

    
    
    // 컴퓨터 묵찌빠 고르기
    컴퓨터선택_묵찌빠 = 컴퓨터가선택할수있는_묵찌빠들[parseInt(Math.random() * 3)]
    // console.log(`컴퓨터선택_묵찌빠 : ${컴퓨터선택_묵찌빠}`)
    // console.log(`유저선택_묵찌빠 : ${유저선택_묵찌빠}`)


    // 종료조건
        // 종료를 여기서 혹은 while 의 괄호안에서?
    묵찌빠count ++

    if (묵찌빠count >= 21 || 남은돈 <= 0) {
        // break;

        // break 이랑, false 밑 continue 조합이랑 동일한 기능! 
        묵찌빠_play = false;
        continue;
    }


    // 게임 시작  
    switch (선공) {

        case "유저":

            switch (유저선택_묵찌빠) {
                case "가위":

                    if (컴퓨터선택_묵찌빠 == "가위") {
                        console.log("1번")
                        묵찌빠결과_선공유저_비김() 
                        
                    } else if (컴퓨터선택_묵찌빠 == "바위") {
                        console.log("2번")
                        묵찌빠결과_컴터이김() 

                    } else {
                        console.log("3번")
                        묵찌빠결과_유저이김()
                    }

                    break;


                case "바위":

                    if (컴퓨터선택_묵찌빠 == "가위") {
                        console.log("4번")
                        묵찌빠결과_유저이김()   

                    } else if (컴퓨터선택_묵찌빠 == "바위") {
                        console.log("5번")
                        묵찌빠결과_선공유저_비김() 

                    } else {
                        console.log("6번")
                        묵찌빠결과_컴터이김()
                    }

                    break;

                case "보":

                    if (컴퓨터선택_묵찌빠 == "가위") {
                        console.log("7번")
                        묵찌빠결과_컴터이김()

                    } else if (컴퓨터선택_묵찌빠 == "바위") {
                        console.log("8번")
                        묵찌빠결과_유저이김()  

                    } else {
                        console.log("9번")
                        묵찌빠결과_선공유저_비김()
                    }

                    break;

                default:
                    잘못입력한경우()
                    continue;
            }

            break;



        case "컴퓨터":

            switch (유저선택_묵찌빠) {
                case "가위":

                    if (컴퓨터선택_묵찌빠 == "가위") {
                        console.log("10번")
                        묵찌빠결과_선공컴터_비김()

                    } else if (컴퓨터선택_묵찌빠 == "바위") {
                        console.log("11번")
                        묵찌빠결과_컴터이김()

                    } else {
                        console.log("12번")
                        묵찌빠결과_유저이김()  

                    }

                    break;

                case "바위":

                    if (컴퓨터선택_묵찌빠 == "가위") {
                        console.log("13번")
                        묵찌빠결과_유저이김()  

                    } else if (컴퓨터선택_묵찌빠 == "바위") {
                        console.log("14번")
                        묵찌빠결과_선공컴터_비김()

                    } else {
                        console.log("15번")
                        묵찌빠결과_컴터이김()
                    }

                    break;

                case "보":

                    if (컴퓨터선택_묵찌빠 == "가위") {
                        console.log("16번")
                        묵찌빠결과_컴터이김()
                        
                    } else if (컴퓨터선택_묵찌빠 == "바위") {
                        console.log("17번")
                        묵찌빠결과_유저이김()  

                    } else {
                        console.log("18번")
                        묵찌빠결과_선공컴터_비김()
                    }

                    break;


                default:
                    잘못입력한경우()
                    continue;
            }

            break;



        default:
            break;
    }


}



묵찌빠(유저 or 컴터를 인풋) {

    while (20번 이하 || 다뺏김) {
        
        if (선공 == 유저) {
            유저가선공인묵찌빠()
            continue
        }
        else {
            컴터가선공인묵찌빠
            continue
        }

}
}







}

// 묵찌빠 실행
mukgibba();


