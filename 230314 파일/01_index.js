// [🟦 함수 라는 걸 사용해 보자] 

// 개념 
    // '함수는 실행할 코드들' 을 묶어서 '이름' 을 지어준다.
    // '반복 사용 기능' 을 '묶어서' 관리한다. 
    
// 문법 
    // function 함수 선언

    function 함수이름 () {
        // 실행시킬코드
        // 반복 사용할 코드
    }

    // '함수 선언⭐⭐⭐' 예시
    function fun() {
        console.log("함수 실행됨 야호👲");
        console.log("함수 실행됨 야호👲");
        console.log("함수 실행됨 야호👲");
        console.log("함수 실행됨 야호👲");
        console.log("함수 실행됨 야호👲");
    }
        // [해석]
            // 변수를 배웠었음. 
            // 변수들 원시타입 
            // 객체, 배열, 함수 모두 '레퍼런스 타입' 임. 
                // 아... 함수도 값이래 ❓❓❓❓❓❓❓ 

                
        // [시사점]
            // 1. 선언만 하면 -> 안 찍힘. 
            // 2. 사용하려면, '함수 실행' 을 해야 함. 
    
    // '함수 실행 ⭐⭐⭐' 
    fun();
        // [해석]
            // 괄호를 붙여야 함수가 실행됨. ⭐⭐⭐
            // 함수를 실행시키면 -> '스택' 이라는 곳에 함수 실행이 쌓인다. ❓❓❓❓❓ 
            // 순서대로 실행이 된다. 
            // 이건, 실행 컨텍스트 들어가면 




// [🟦 변수의 scope 개념]

    // 의의 
        // 변수에는 scope, 지역, 이라는 개념이 있음. 
        // 변수에는 '전역' 스코프, '지역' 스코프가 있음. 
        // '전역' scope 는 '접근'이 가능한 범위
        // '지역' 변수는 '특정영역' 에서만 접근 가능 ⭐⭐⭐⭐⭐

    // 주의할 것 
        // 전역 스코프에 너무 많은 변수를 선언하면, 관리하기가 힘들어진다. ⭐⭐⭐ 
        // A 라는 사람이 play 라는 변수를 만듦. B 사람이 play 를 사용하면, let 으로 관리되지만, 
            // 모든 변수를 전역 변수로 쓰면 안 좋아. 
            // ⭐⭐⭐ '전역변수 = 최소한으로' 사용할 것. 

    // '접근' 의 의미 및 예시 

        let temp = "나는 전역변수야~";
            // [해석] 이건, '전역 변수'⭐⭐ 

        function con() {
            let temp = "나는 지역 변수야~";
                // [해석] 이건 지역변수 
                    // let 은 재선언이 안 된다고 했음. 근데 재선언 했네? 
                    // 왜냐면, 이 let 은 함수의 실행이 끝나면 사라진다. - 없어짐. 
                
        }

        
        function con2() {
            let temp2 = "나 접근됨?";
            // 이건 지역변수 이기 때문에 -> 함수 밖을 뚫어서 영향을 미칠 수 없음 
            console.log(temp2);
        }
        
        con2(); // 함수 실행


        // 전역변수와 지역변수인 경우, 함수명이 동일하다고 해도, 영향범위가 다르기 때문에, 
        // 각기 다른 값을 저장하게 됨. ⭐⭐⭐⭐⭐⭐ 
        function con3() {
            let temp3 = "함수안에있음💁‍♀️💁‍♀️💁‍♀️💁‍♀️💁‍♀️💁‍♀️ "
            console.log(temp3)
        } 
        let temp3 = "함수 밖에 있음. 이게 공존할 수 있을까?👍👍👍👍👍" 

        con3()
        console.log(temp3)



    // [🟦 불꺼지는 에러, 호이스팅 에러]  
        // '호이스팅 에러' 라는게 있음. 
        // 변수가 '선언' 되기도 전에 '호출' 됐을 때 ⭐⭐⭐

        function temp2() {
            console.log(x);
            // 지역변수 
            var x = 5; // var 사용하지마, 왜냐면, 호이스팅이 일어나도 오류를 안 뱉음 ⭐⭐⭐⭐⭐ 
        }
        temp2();

        function temp2() {
            console.log(x);
            // 지역변수 
            let x = 5; // let 을 쓰면, 호이스팅 뱉음 ⭐⭐⭐⭐⭐ 
        }
        temp2();

        // 호이스팅이 발생하기 때문에, 예상치 못 한 문제가 발생할 수 있음. 
        // 전역 및 지역 변수는 코드를 작성할 때, 최상단에 작성한다. ⭐⭐⭐⭐⭐ 




// [🟦 함수 사용 더 해보기]

// 매개변수 

    // 매개변수는?
        // 함수를 사용할 때, 값을 전달,  


    // 선언
    function fun2(v) {
        // 전달받은 매개변수를 사용한다.
        console.log(v);
    }
    
    // 쓰임
        // 전달받은 매개변수에 따라, 작업을 다르게 하고 싶을 때


    // [예시 1]
        // 1. 선언
        function fun3(num) {
            console.log(`전달받은 매개변수는 : ${num} 이거임`)
        }

        let a = 1; 
        let b = 2; 

        // 2. 사용 
        fun3(a)
            // 이렇게 하면 -> a 에 들어간 1 이 -> num 에 전달된다. 
        fun3(b)
            // 이렇게 하면 -> b 에 들어간 2가 -> num 에 전달된다. 
        fun3(3)
            // 이렇게 하면 -> 그냥 3이 num 에 전달도니다. 
            // 괄호 안에 num 에 전달해줄 값을 넣는다. 

    
    // [예시 2]
        // cup 이라는 함수를 만든다. 
        // cup 은 음료수를 따를 수 있는 '기능' 이 있음. 
        // 매개 변수로 drink 음료수를 따라보자 

        // 1. 선언
        function cup(drink) {
            console.log (`컵에 ${drink} 를 따랐음 ㅎㅎ`);
            console.log(`${drink} 를 이 컵에 따라 마시니까 좋아👲👲👲`);
        }

        // 2. 사용 
            // drink 라는 매개변수에 담으면 -> 그 자리에 전달이 돼 

            // 1) 하드코딩 
            cup('홍차');
                // [해석] ⭐⭐⭐⭐⭐ (함수를 사용할 때 벌어지는 일)
                    // [순서0] 선언할 때 적은 함수 기능들이 똑같이 불려져 온다. 
                    // [순서1] drink 라는 매개변수에 '홍자' 라는 값이 들어가게 된다. 
                    // [순서2] 동일한 기능을 하게 되는데, 이때, '새롭게 들어온 값' 을 넣어서 실행하게 된다. ⭐⭐⭐

            cup('포도주스');

            // 2) 변수에 담아서 전달 
            let c = "오렌지 주스"
            cup (c);
    
    // [매개변수를 쓰는 이유 / 시사점]
        // 1. '전달되는 매개변수' 에 따라, 다른 결과물을 보여줄 수 있다. ⭐⭐⭐⭐⭐

        // 2. ⭐⭐⭐⭐⭐ (함수를 '사용' 할 때 벌어지는 일)
                    // [순서0] 선언할 때 적은 함수 기능들이 똑같이 불려져 온다. 
                    // [순서1] drink 라는 매개변수에 '홍자' 라는 값이 들어가게 된다. (할당 되는 느낌)
                    // [순서2] 동일한 기능을 하게 되는데, 이때, '새롭게 들어온 값' 을 넣어서 실행하게 된다. ⭐⭐⭐

        // 3. 매개 변수 중요해 ⭐⭐⭐⭐⭐⭐ 


    // [거스름돈 자판기 기능]
        // 자주 사용할 것 같은 기능을 함수로 만들어놓고, 함수로 재사용! 
        
        // 1. 함수 선언
        function vending(money, unit) {
            console.log(unit + "짜리" + money / unit + "개");

        }
        // [해석]
            // 매개변수는 여러개 전달 가능 ✅

        // 2. 함수 사용
        vending(1000, 500);
            // 1000원 짜리 넣고 -> 500원 단위로 거슬러줘 -> 500원 2개 줄게
        vending(1000, 100)
            // 1000원 짜리 넣고 -> 100원 단위로 거슬러워 -> 100원 10개 줄게 



    // [예시]
        // 함수를 변수에 넣는다. 
        let e = vending;
            //[해석] 함수도 값이기 때문에 -> 변수 안에 넣을 수 있음. ⭐⭐⭐⭐⭐ 
        console.log(e);

        // 이걸 실행할 때는? ⭐⭐⭐⭐⭐📛📛📛📛📛 
        e();
        e(1000,100); // 이렇게도 된다. 

        // 주의할 것 ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ 
        let f = vending();
            // [해석]
                // () 는 함수의 실행식임 
                // 실행식인데 담길까? -> 안 담김 
                // 즉, '변수에 함수를 담을 때는, 함수의 이름만! 함수의 선언만! 담는다. / 실행을 담으면 안 된다.' ⭐⭐⭐⭐⭐
                // 실행값을 담을 수 없나? ❓❓❓❓❓ 
        

        //  undefined 와 return 의 필요성
            // 함수를 사용할 때, 함수 안에서, 필요한 값을 내보낼 수 있게 도와주는 식이 있음. 이게 return 
            // return 을 쓰지 않고, 함수만 실행시키면, undefined 가 나옴 

        function ab() {
            // 함수의 실행 도중에, return 에 도달하면, 
                // 1) return 값을 내보낸다.그 
                // 2) 그리고, '함수 종료' ⭐⭐⭐⭐⭐
            return "나는 반환값이야"
            console.log("이건 안 보인다. 위 줄에서, return 시켜서, 중지되고, return 값을 내보낼거거든");
        }
        

        // [함수 전달과 return 이 있을 때, 실행값 담기 비교] ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
            // 이건 함수 전달이 아니라, 실행값을 담는 것 
            let g = ab();
            console.log(g) // 이렇게 하면, undefined 가 안 뜸. 
                            // return 이 없으면, undefined 가 뜸. 

            // 시사점 
                // 1. return 없이 변수에 있으면 - undefined 
                // 2. return 있으면 -> 1)값 나오고 2) 그 위에서 종료


// [함수 심화] - 예제들

    function sum(num1, num2) {
        return num1 + num2
    }

    console.log(sum(1,2))

    function gg (num) {
        for (let i = 1; i < 10; i++) {
            console.log(`${num} 단 ${num} x ${i} = ${num * i}`)
        }
    }
    gg(2);
    gg(3);

    // 필요한 기능을 모아둔다. 
        // 재사용할 수 있게 한다. ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐

function type(value) {
    switch (value) {
        case 1:
            
            return "분노조절 잘해"
    
        case 2:
            
            return "과묵하지만 상냥해"
            // return 이 있으면, break 는 사라짐. !⭐⭐⭐⭐⭐ 
            // break;
    
        case 3:
            
            return "조용하지만, 술마시면 각오해"
    
    }
}

type(1);
    // 이렇게 쓰면, "분노조절 잘해" 이 값만 있는거야. 왜냐면, "return 에 딱, 그것만" 있으니까 ⭐⭐⭐⭐⭐ 
    // 만약, return 이 없으면 -> undefiend 가 뜰거야. 정의는 되었는데, 값이 없는 상태 ⭐⭐⭐⭐⭐⭐⭐⭐ 
    // 그 데이터 유형이 undefined 인거지!? ❓❓❓❓❓ (변수는 선언되었는데, 값이 안 들어가있는거?)
console.log(type(1))
    // 이렇게 쓰면, 이제 보이는거지 


