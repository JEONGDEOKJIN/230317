
// 가위바위보play 단판 결과
let result = "미정"
let 유저선택 = "미정"
let 컴터선택 = "미정"


function 유저컴터선택() {
    let 컴터가선택할수있는것 = ["가위", "바위", "보"]

    let 유저선택 = prompt(`가위바위보! : 가위, 바위, 보 중 하나 골라주세요~`);
    let 컴터선택 = 컴터가선택할수있는것[parseInt(Math.random() * 3)];

    alert(`유저선택 : ${유저선택} | 컴터선택 : ${컴터선택}`);
    
    return 유저선택, 컴터선택
}




function 가위바위보단판play(유저선택, 컴터선택) {

    let play = true;

    while (play) {

        alert(`유저선택 : ${유저선택} | 컴터선택 : ${컴터선택} | 승부결과 : ${result} \n
                묵찌빠 시작!🙌🙌 `)

        유저컴터선택()

        if (유저선택 == 컴터선택) {
            result = "draw";
            play = true;

        } else {

            switch (유저선택) {
                case "가위":

                    if (컴터선택 == "보") {
                        result = "유저win";
                        play = false;

                    } else {
                        result = "컴터win";
                        play = false;
                    }

                    break;

                case "바위":

                    if (컴터선택 == "가위") {
                        result = "유저win";
                        play = false;
                    } else {
                        result = "컴터win";
                        play = false;
                    }

                    break;

                case "보":

                    if (컴터선택 == "바위") {
                        result = "유저win";
                        play = false;
                    } else {
                        result = "컴터win";
                        play = false;
                    }

                    break;

                default:
                    유저선택 = prompt(`다시 골라라, 가위바위보~`)
                    play = true;
                    
                    break;
                    continue;
                }
            }
        }
        
        
    return result
}




function main () {
    
    // 유저컴터선택의 return 값임
        // 유저컴터선택([0]) = 유저선택 
        // 유저컴터선택([1]) = 컴터선택  
    가위바위보단판play(유저컴터선택())

}

main()