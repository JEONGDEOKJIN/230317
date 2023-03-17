



// 선공 정하는 가위바위보 

let play = true;
let 선공 = "아직미정"


let 컴퓨터가선택할수있는것들 = ["가위", "바위", "보"];


let 컴퓨터선택 = 컴퓨터가선택할수있는것들[parseInt(Math.random() * 3)]
let 유저선택 = prompt("가위, 바위, 보, 다시 시작!");


while (play) {
    
    switch (유저선택) {

        case "가위":

            if (컴퓨터선택 == "가위") {
                // 다시 게임 시작 
                컴퓨터선택 = 컴퓨터가선택할수있는것들[parseInt(Math.random() * 3)]
                유저선택 = prompt("가위, 바위, 보, 다시 시작!");
                play = true;
                // break;

            } else if (컴퓨터선택 == "바위") {
                // 컴퓨터 이김
                // 선공 = 컴퓨터
                선공 = "컴퓨터";

                // 다시 시작 안 해도 됨
                play = false;
                // break;
                // continue;

            } else {
                // 컴퓨터 == 보 -> 유저 이김 
                // 선공 = 유저
                선공 = "유저";

                // 다시 시작 안 해도 됨. 
                play = false;
                // break;
                // continue;
            }

            // break 는 switch 밖으로 나가는 건가❓❓❓❓❓ 
            // 으응 default 가 작동하는 걸 봐바 ⭐⭐⭐⭐⭐
            break;


        case "바위":

            if (컴퓨터선택 == "가위") {
                // 유저 win = 유저 선공 
                선공 = "유저";

                // 다시 시작 안 해도 됨. 
                play = false;
                // break;
                // continue;

            } else if (컴퓨터선택 == "바위") {
                // 비김 
                // 다시 게임
                컴퓨터선택 = 컴퓨터가선택할수있는것들[parseInt(Math.random() * 3)]
                유저선택 = prompt("가위, 바위, 보, 다시 시작!"); 
                play = true;
                // continue;

            } else {
                // 컴퓨터 == 보
                // 컴퓨터 win = 컴퓨터 선공
                선공 = "컴퓨터";

                // 다시 시작 안 해도 됨. 
                play = false;
                // break;
                // continue;

            }

            break;


        case "보":

            if (컴퓨터선택 == "가위") {
                // 컴퓨터 win = 컴퓨터 선공 
                선공 = "컴퓨터"
                // 다시 선공 가위바위보 안 해도 됨. 
                play = false;
                // break;
                // continue;

            } else if (컴퓨터선택 == "바위") {
                // 유저 이김  
                선공 = "유저"
                // 다시 안 해도 됨.  
                play = false;
                // break;
                // continue;

            } else {
                // 컴퓨터 == 보
                // 다시 선공 가위바위보 해야 함. 
                컴퓨터선택 = 컴퓨터가선택할수있는것들[parseInt(Math.random() * 3)]
                유저선택 = prompt("가위, 바위, 보, 다시 시작!");

                play = true;
                // continue;

            }

            break;


        default:
            유저선택 = prompt("가위, 바위, 보, 를 제대로 입력해~라고 해");
            컴퓨터선택 = 컴퓨터가선택할수있는것들[parseInt(Math.random() * 3)]
            play = true;
            break;
            // continue;
    }

}


console.log(`선공 결정 : ${선공} `)
// 선공결정에서 continue 와 break 의 관리? 
// ------------------------------ 선공 결정 END --------------------------------------------- 



// 묵찌빠 START
let 묵찌빠count = 1

let 묵찌빠_play = true;

let 컴퓨터가선택할수있는_묵찌빠들 = ["가위", "바위", "보"];
let 컴퓨터선택_묵찌빠 = 컴퓨터가선택할수있는_묵찌빠들[parseInt(Math.random() * 3)]

let 유저선택_묵찌빠 = "미정"

let 수중에있는돈 = 20000;

let 최소배팅금액 = 2000;

let 배팅금액 = 0;

let 남은돈 = 0;

let batting_play = true;

let subText = "" // 컴터가 알려줄 문구 ⭐⭐⭐⭐⭐ 



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


// 배팅하고 남은돈
남은돈 = 20000 - 배팅금액





// 묵찌빠 게임 시작
while (묵찌빠_play) {

    let 몇번째경우의수인지 = 0;

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
                        
                        선공 = "유저";

                        // 득점 성공 -> 배팅액 주기
                        console.log("득점성공")
                        남은돈 = 남은돈 + (배팅금액 * 2);

                        // 다시 가위바위보 해야 함 
                        // continue 면 되는지, play true 까지 필요한지. 
                        묵찌빠_play = true;
                        continue;

                    } else if (컴퓨터선택_묵찌빠 == "바위") {
                        console.log("2번")

                        선공 = "컴퓨터";

                        묵찌빠_play = true;
                        continue;
                    } else {
                        console.log("3번")

                        선공 = "유저"

                        묵찌빠_play = true;
                        continue;
                    }

                    break;

                case "바위":

                    if (컴퓨터선택_묵찌빠 == "가위") {
                        console.log("4번")

                        선공 = "유저";

                        // 다시 가위바위보 해야 함 
                        // continue 면 되는지, play true 까지 필요한지. 
                        묵찌빠_play = true;
                        continue;

                    } else if (컴퓨터선택_묵찌빠 == "바위") {
                        console.log("5번")

                        // 득점!
                        console.log("득점!");
                        남은돈 = 남은돈 + (배팅금액 * 2);


                        // 선공 
                        선공 = "유저";

                        묵찌빠_play = true;
                        continue;
                    } else {
                        console.log("6번")

                        선공 = "컴퓨터";

                        묵찌빠_play = true;
                        continue;
                    }

                    break;

                case "보":

                    if (컴퓨터선택_묵찌빠 == "가위") {
                        console.log("7번")

                        선공 = "컴퓨터";

                        // 다시 가위바위보 해야 함 
                        // continue 면 되는지, play true 까지 필요한지. 
                        묵찌빠_play = true;
                        continue;
                    } else if (컴퓨터선택_묵찌빠 == "바위") {
                        console.log("8번")

                        // 선공 
                        선공 = "유저";

                        묵찌빠_play = true;
                        continue;
                    } else {
                        console.log("9번")

                        console.log("득점")
                        남은돈 = 남은돈 + (배팅금액 * 2);

                        선공 = "유저";

                        묵찌빠_play = true;
                        continue;
                    }

                    break;

                default:

                    유저선택_묵찌빠= prompt(`가위, 바위, 보 라고 정확히 입력하셔야 해요`)
                    console.log("가위, 바위, 보 말고, 잘못 넣은 경우")

                    continue;
            }

            break;



        case "컴퓨터":

            switch (유저선택_묵찌빠) {
                case "가위":

                    if (컴퓨터선택_묵찌빠 == "가위") {
                        console.log("10번")

                        선공 = "컴퓨터";


                        // 득점 성공
                        console.log("컴퓨터가 득점성공")
                        남은돈 = 남은돈 - (배팅금액 * 2);


                        // 다시 가위바위보 해야 함 
                        // continue 면 되는지, play true 까지 필요한지. 
                        묵찌빠_play = true;
                        continue;

                    } else if (컴퓨터선택_묵찌빠 == "바위") {
                        console.log("11번")

                        선공 = "컴퓨터";

                        묵찌빠_play = true;
                        continue;
                    } else {
                        console.log("12번")

                        선공 = "유저"

                        묵찌빠_play = true;
                        continue;
                    }

                    break;

                case "바위":

                    if (컴퓨터선택_묵찌빠 == "가위") {
                        console.log("13번")

                        선공 = "유저";

                        // 다시 가위바위보 해야 함 
                        // continue 면 되는지, play true 까지 필요한지. 
                        묵찌빠_play = true;
                        continue;
                    } else if (컴퓨터선택_묵찌빠 == "바위") {
                        console.log("14번")

                        // 득점!
                        console.log("컴퓨터 득점! / 유저 실점");
                        남은돈 = 남은돈 - (배팅금액 * 2);


                        // 선공 
                        선공 = "컴퓨터";

                        묵찌빠_play = true;
                        continue;
                    } else {
                        console.log("15번")

                        선공 = "컴퓨터";

                        묵찌빠_play = true;
                        continue;
                    }

                    break;

                case "보":

                    if (컴퓨터선택_묵찌빠 == "가위") {
                        console.log("16번")

                        선공 = "컴퓨터";

                        // 다시 가위바위보 해야 함 
                        // continue 면 되는지, play true 까지 필요한지. 
                        묵찌빠_play = true;
                        continue;
                    } else if (컴퓨터선택_묵찌빠 == "바위") {
                        console.log("17번")

                        // 선공 
                        선공 = "유저";

                        묵찌빠_play = true;
                        continue;
                    } else {
                        console.log("18번")

                        console.log("유저 실점 / 컴퓨터 득점")
                        남은돈 = 남은돈 - (배팅금액 * 2);

                        선공 = "컴퓨터";

                        묵찌빠_play = true;
                        continue;
                    }

                    break;


                default:
                    유저선택_묵찌빠= prompt(`가위, 바위, 보 라고 정확히 입력하셔야 해요`)
                    console.log("가위, 바위, 보 말고, 잘못 넣은 경우")
                    continue;
            }

            break;



        default:
            break;
    }


}
