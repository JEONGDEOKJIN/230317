

// [프로젝트 설명]
    // 로또 필수 조건 
        // 1. 로또에는 겹치는 숫자가 없어야 함. 
        // 2. 나오는 숫자는 6개 
        // 3. 나온 숫자들의 결과를 보여줄 것 

// [프로젝트 팁]
    // 1. 세부 기능들이 잘 만들어졌는지, '하나씩 체크' 하면서 만들어야 함. 
        // ex) console.log 또는 alert 의 생활화 ⭐⭐⭐ 
    // 2. '세부기능 함수화' 이 필요성 
        // 1) '단위별 기능 테스트' 가 가능 
        // 2) 한번 만들어 두면, '재사용성'을 높일 수 있다. 
        // 3) 한번 작업하고 나서, '통합으로 작업 정리하는 습관' 이 필요하다. ⭐⭐⭐ 



// 🟦 [전역변수 모음]

// 로또볼이 박스에 담기게 됨.(사전 준비)
let lottoBox = []; 
    // [해석]
        // 빈 리스트를 놓아주는 이유는 뭘까❓❓❓❓❓
        // 이게 없으면 어떻게 될까? 

// 뽑혀져 나온 결과
let result = [];




// 🟦 [세부기능] 로또통 안에 번호박스 만들기

function lottoBoxSetting() {

    // 필요한 리스트 초기화 ⭐⭐⭐ 
    lottoBox = [];

    for (let i = 1; i <= 45; i++) {
        lottoBox.push(i)
    }
    console.log(`로또 박스에 숫자 담음(셋팅완료) : ${lottoBox}`);

}





// 🟦 [세부기능] 추첨 기능 만들기

function lottoPlay() {

    // lottoPlay 반복 사용시, 결과물을 따로 담기 위해, 뽑힌 결과 초기화 필요 
        // 왜냐면, lottoPlay 를 '반복사용' 할 것 임. 
        // 그러면, result 가 여러개 나올 것 임. 
        // 여기서, 변수를 초기화 해야 -> 별도의 공간에 담김
    result = [];

    for (let i = 0; i < 6; i++) {
    
        let rndIndex = Math.floor(Math.random() * lottoBox.length + 1 );
        
        // temp 저장이니까, 지역변수로.  
        let tempNumber = lottoBox[rndIndex];
        
        // 이미 뽑인거 또 뽑히지 않는 기능 (중복방지)
        lottoBox.splice(rndIndex,1);
    
        // 지금까지 뽑힌거 넣어주기
        result.push(`${i} 번째 추첨 번호 : ${tempNumber} \n `)
    
    }
    console.log(`🎏 당첨 번호 🎏 \n ${result}`)


}    
    // [해석]
    // let result = []; ⭐⭐⭐⭐⭐ 
        // lottoPlay 반복 사용시, 결과물을 따로 담기 위해, 뽑힌 결과 초기화 필요 
            // 왜냐면, lottoPlay 를 '반복사용' 할 것 임. 
            // 그러면, result 가 여러개 나올 것 임. 
            // 여기서, 변수를 초기화 해야 -> 별도의 공간에 담김

    // 여기에서 i 는 '몇 번 하겠다.' 라는 의미. 
            // i < 6 이니까, 6번 반복하겠다. 

    // [let rndIndex = Math.floor((Math.random() * lottoBall.length) + 1 );] 해석 
        // 0 이상 1미만의 랜덤값이 뽑히고 -> 45를 곱하면 0이상 ~45미만의 값이 뽑히고 -> 1을 더하면, 1이상 46미만의 값이 뽑이고 -> 여기에서 버리면 -> 1이상, 45이하가 나옴   
   
    // let tempNumber = lottoBox[rndIndex];
        // 랜덤으로 1개의 인덱스가 뽑힐거야. -> 그래서 로또박스에서 하나를 뽑을거고 -> 이게 '임시저장' 으로 넘어가

    // lottoBox.splice(rndIndex,1);
        // 위에서 랜덤으로 고른 인덱스를, 로또박스에서 제거함. 
        // '제거할 때' 는 splice 에서 3번째, 4번째 인자값을 넣지 않는다. ⭐⭐⭐⭐⭐ 
        // 뽑힌걸, box 에서 제거해야, 중복이 방지 된다. ⭐⭐⭐⭐⭐ 
    // result.push(`${i} 번째 추첨 번호 : ${tempNumber} \n `)
        // 지금까지 뽑힌거 result 에 다 넣기 



// 🟦 main 함수 선언(정의)
function main() {
    
    result = [];

    // 로또 박스 셋팅하고 
    lottoBoxSetting();

    // 로또 추첨 
    lottoPlay();

    console.log(`로또 결과 : ${result}`)

}


// 🟦 main 함수 실행
main();
main();
main();