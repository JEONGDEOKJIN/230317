

// 🟦 배열심화 

    // 배열 특징 
        // 1. '순서' 로 배열 안에 있는 '값' 에 접근할 수 있다. 
        // 2. 이중배열
            // 배열 안에 배열이 있을 수 있다.
            // 삼중배열까지 가능하지만, 보통, 2중배열까지만 쓴다. 
        // 3. 자바스크립트 배열은 '객체' 임. (😥😥😥 무슨 의미가 있는지 아직 잘 모르겠음)
            // key 값이 0,1,2 일 뿐 이다.
            // 자바스크립트 배열은 '객체 배열' 이다. (📛📛📛 잘 모르겠음.)  
        
        let a = [[1,2,3], [4,5,6], [7,8,9]];
        console.log(a[0])   
        console.log(a[0][0])



// 🟦 배열 프로퍼티(속성) 📛📛📛 
    // 의의 
        // 프로퍼티, 속성, 이라는게 뭐지? 밑에서는 또 다른이야기를 하는거 같은데  


    // length 프로퍼티
        // 의의
            // 이건, 함수가 아니라 '배열' 의 프로퍼티(property)' 라고 함.
        // 기능 
            // 해당 배열의 '길이' 를 알려줌. 
        // 설명해보기
            // '배열의 끝값' 은 왜 항상 '길이의 -1' 일까? ⭐⭐⭐  
                // 배열이 있으면 -> 해당 배열의 '길이' 와 해당 배열의 '인덱스' 가 있음. 
                // '인덱스' 는 항상 0 부터 시작.
                // 동일한 배열의 '길이' 와 '인덱스' 를 '맵핑' 시켜보면, 인덱스의 시작은 항상 0 이므로, 끝값의 인덱스는 항상 '길이 - 1' 의 값을 갖는다.  


// 🟦 배열 안의 요소 값이 변할 수 있는 상황에서, 동적으로, 반복문을 돌리기 
    // 상황 
        // 배열 안의 값이 수시로 변경되는 경우가 있음. 
            // 수시로가 아니어도, '변경가능성' 이 있는 경우, 모두 해당. 
        // 배열 요소를 다 돌면서 '반복문'을 돌려야 하는 경우. 

    // 옵션 
        // 1. '비교' 항목을 '하드코딩' 할 수 있음. 
        let b = [1,2,3,4,5,6,7];
        for (let i = 0; i < 7; i++) {
            // 적용되는 인덱스인 i 는 0,1,2,3,4,5,6
            console.log(b[i])
            // 콘솔값은 1,2,3,4,5,6,7 이 뜬다. 
        }

        // 2. '비교' 항목에 length 를 사용 
        for (let i = 0; i < b.length; i++) {
            console.log(b[i]);}
            // [해석]
                // 하드코딩하지 않고, 프로퍼티를 사용하면, 배열의 원본 데이터가 변화해도, 곧바로 대응할 수 있음. ⭐⭐⭐  
    
    // 예시 
        let c = [1,2,3,4,5,6,7];
        c.push(8);
        c.push(9);
        for (let i = 0; i < c.length; i++) {
            console.log(c[i]);}
            // [해석]
                // push 로 값을 추가해도, length 로 확인해줄 수 있음. 
    

    // 시사점
        // 1. '동일한 목표 ex) 배열의 길이만큼 다 돌거야!'를 달성할 때, '프로퍼티 or 함수'로 대체하면, '다양한 상황 변화에 대응' 할 수 있음. 
            // 즉, '하드코딩' 하지 않고, '프로퍼티, 함수 등' 을 사용하면 -> 배열에 값이 추가되는 등의 '추가 상황' 이 발생해도 '대응' 이 가능 
            // 더 '폭 넓은 대응' 을 할 수 있음.  



// 🟦 배열 메소드
    // 의의 
        // 쉽게 생각하자. 메소드는 '함수' 임. 
        // 그냥, 함수랑 다른 건 
            // 1) '배열 타입' 에 쓸 수 있는 '함수' 임. 
            // 2) 선언된 함수를 ⭐사용(접근)⭐할 때, '.' 로 접근한다는 것 (일반적으로는 num(); 이렇게 치잖아.)
                // 왜냐면, ⭐'그 함수가 객체 안에 선언'⭐되어 있기 때문에
                // '함수가 객체 안에 선언' 되어 있을 수 있는 이유는, 함수도 '값' 이기 때문. 
                    // 즉, 함수도 '값' 임. -> '객체(dict) 안에 들어갈 수 있고' -> 객체(dict) 안에 함수를 불러오려면 . 을 써야 한다.   

        // 객체에는 키(key)와 값(value)이 있다. 
            // 값을 가져오려면, key 값으로 접근해서 가져온다. 
            // 내가 갖고 오고 싶은 함수의 기능은 value 에 구현되어 있음. 해당 key 를 적으면 value 가 들어가게 된다. ⭐⭐⭐⭐⭐  
    
        
    // 예시 

        const obj = {

            a : "나는 객체 안에 있는 value 야", 

            push : function(num) {
                console.log("나는 obj 라는 객체 안에, push 라는 key 에 대응하는 value 에 있는 익명함수야!");
                console.log(`${num} 을 매개변수로 받았어!`);
            }
        }

        console.log(obj.a)
        console.log(obj.push(2))
            
        // [해석]
            // - const 는 한번 선언하면
                // 1) 변수 재선언 불가 (같은 이름을 못 씀) 
                // 2) 그 안에 들어간 값 변경 불가 (재할당 불가)

            // - 'a' 는 key 값임. 
                // key 가 담고 있는 값(value)에 접근하려면, '객체특성상' . 을 쓴다. 
                // 지금은 '불라불라 정의된 함수' 를 불러와야 함. 그래서 key 를 입력하고, value 를 받아온다.

            // - 메소드로서, 객체(dict) 안의 value 에 선언되려면, '익명함수' 여야 한다. 
            // - '익명함수' 란 '이름이 없는' 함수 
                // 어쩌면, '이름' 은 key 에 있다고 생각하면 될 것 같음. 
            // - 익명함수에 '매개변수' 를 전달할 수 있음. 


    // b.push(8); 읽어보기 
        // 1. 배열에 쓸 수 있는 메소드인 push 를 썼어 
        // 2. input 으로 8 이 들어갔어
        // 3. 결과는 b 에 9 이 값으로 들어갔어. 




// 🟦 [배열 메소드] indexOf
    // 기능 
        // '해당 배열' 에서 'input 값'의 'index' 를 구해줌. 
    
    // 예제 
        let ex_indexOf = [1,2,3,4,5];
        let result_index_1 = ex_indexOf.indexOf(2);
        console.log(result_index_1);    
            // [해석] value 2 의 index 인 1 이 나옴 

        let ex_idexOf_2 = ["메롱", "커피", "혹시👲"];
        let result_index_2 = ex_idexOf_2.indexOf("커피");
        console.log(result_index_2)
            // [해석] "커피" 의 '인덱스' 인 1 이 나옴 


// 🟦 [배열 메소드] find 
    // 기능 
        // 검색할 때, 사용할 함수 

    // 알게된 점 
        // 배열은 매개변수에 하나씩 담겨온다. 
        // 담겨져 온거랑 물어본거랑 비교한다. 
        // 물어본게 있으면 -> stop ⭐⭐⭐⭐⭐ 
    
    // 주의할 부분 
        // 함수 반환값이 true 나오는 함수를 넣어준다. 
    
    // 예제 : 있는 값 넣어보기
        let arr_find = ["사과", "딸기", "포도", "커피", "메롱"];
        
        let result_find = arr_find.find(function(item){
            console.log("item✅" + item);

            return item === "메롱"
        })
        console.log(result_find)    

        // [해석]
            // '메롱' 을 물어봤으니가 -> 그 전까지 item 에 담겨와서 비교 -> 메롱에서 발견되니까 stop ⭐
            // arr 배열의 값이 '순서' 대로 들어오고, 이 '순서' 는 item 매개변수에 들어온다.
            // === 에 해당하는 걸 찾으면 '멈춘다.' 
                // 만약, 그 다음에도 계속 찾고 싶으면❓❓❓ 
            // 내가 물어본 값이 있으면 -> true 가 되고 -> 그리고 뱉는 건 '사과' 
    
    // 예제 : 없는 값 넣어보기 
        let arr_find_2 = ["사과🔵", "딸기", "포도", "커피", "메롱"];

        let arr_result_2 = arr_find_2.find(function(i) {
            return i === "저기에없는값을넣으면?"
        })
        console.log(arr_result_2)   // undefined 가 나옴. 

    // 예제 : true만 넣어보기 
        let arr_result_3 = arr_find_2.find(function(i) {
            return true
        })
        console.log(arr_result_3) // 첫 번째 값이 나옴. 

    
    // 예제 : 'cherries 가 들어간 항목이 있는지 여부' 알고 싶어 
    let inventory = [
        {name: 'apples', quantity: 2},
        {name: 'bananas', quantity: 0},
        {name: 'cherries', quantity: 5}
    ];

    result_2 = inventory.find(function(item) {

        return item.name === 'cherries';
    })
    console.log(result_2)   // [결과값] {name: 'cherries', quantity: 5}

    

// 🟦 [배열 메소드] findIndex
    // 기능 
        // '해당 배열' 안에서, '내가 넣은 value'의 'index' 를 찾아줌. 

    // 예시 : fruits 배열에서, "딸기" 가 있다는 건 알겠음. 이때, 딸기의 index 는? 

    let fruits = ["사과🔵", "딸기", "포도", "커피", "메롱"];
    let index_return = fruits.findIndex(function(item) {
        return item === "딸기"
    })
    console.log(index_return)

    // 예시 : 이 값이 배열에 있는지 여부가 가물가물. 만약, 없으면 어케 되나? 
    result_1 = fruits.findIndex(function(item) {

        return item === "가물가물"
    })

    console.log(result_1)   
        // [결과값] -1 이 나옴. / 넣은 값이 없으면, -1 이 나옴. 

    


// 🟦 [배열 메소드] filter
    // 기능 
        // 주어진 배열 중 '맞는 조건'을 사용해서 '배열' 을 만든다. 
        // return 되는 건 '배열' 


    // 비슷한 기능 
        // str[0] 을 활용해서 -> 맞으면, 가져올 수 있음. 
        // '문자열 하나하나' 에 대해서도, '인덱스' 로 접근 가능
        let str ='가나다';
        console.log(str[0]) // '가' 가 반환
        console.log(str[1]) // '나' 가 반환
    

    // 쓰임 
        // 검색창 알고리즘을 구현할 때 


    // 예시 : 배열중, 첫번째가 '이' 인 것만, 가져오고 싶을 때. 
        let arr2 = ['이이사과', '김딸기', '이무슨포도'];

        let return6 = arr2.filter(function(item) {
            return item[0] === "이"
        })
        console.log(return6)
    

    // 예시 : 여기 덩어리 중에서 'age 가 30 이하'인 사람들만 보고 싶음. ⭐⭐⭐  
        let people =  [
        { name: "Alice", age: 25 },
        { name: "Bob", age: 30 },
        { name: "Charlie", age: 35 }
        ];

        let young = people.filter(function(item) {
            return item.age < 30
        })
        console.log(young)
            // [해석]
                // {name: 'Alice', age: 25} 이게 담겨 


// 🟦 [함수 메소드] map

        // 예제 : 이건 살짝 이상해 😥😥😥 
        let arr3 = ['이이사과', '김딸기', '이무슨포도', '세번째array'];

        let return7 = arr3.map(function(item) {
            console.log(item + '👍👍')

            return item[0] === '이';
        })
        console.log(return7)


        // 예제 : 여기 있는 값들, 하나하나에 곱하기 2를 해서, 새롭게 배열로 만들고 싶을때  
        let numbers = [1, 2, 3, 4, 5];
        
        let double = numbers.map(function(item){
            return item * 2
        })
        console.log(double) // [2, 4, 6, 8, 10]


        // 예제 : 각 값을 2씩 더해봐 
        let plus2 = numbers.map(function(item) {
            return item + 2
        })
        console.log(plus2)


// 🟦 [배열 메소드] forEach
        // 기능 
            // '배열 안에 있는 요소'를 '하나씩 빼서' '뭔가를!!⭐' 하고 싶을 때 
            // for 로도 구현할 수 있음. 근데, 이게 좀 더 간편 ⭐⭐⭐
            // 하나씩, '어떤 행동을 해줄 수 있냐.' 에 따라서 다른 모양이 나오게 됨. 
        
        // 예제 : '하나씩 빼서, 찍어보기!!⭐' 를 for 로 구현해보기 
        let numbers_2 = [1, 2, 3, 4, 5];
        for (let i = 0; i < numbers_2.length; i++) {
            console.log(numbers_2[i]);
        }

        // 예제 : '하나씩 빼서, 찍어보기!!⭐' 를 forEach 로 구현해보기
        let numbers_3 = ["1🎈", "2⚡", "3👲", "4👍", "5👍"];
        numbers_3.forEach(function(item) {
            console.log(item)
        });

        // 예제 : 2의 배수만 모아서 -> 리스트에 담기 (📛📛 아직 혼자 완전히 못 해)
        let numbers_5 = [1, 2, 3, 4, 5];
        let evenNumbers = [];

        numbers_5.forEach(function(item) {
            if(item % 2 == 0) {
                evenNumbers.push(item);
            }
        })
        console.log(evenNumbers);    




// 🟦 [배열 메소드] join
        // 기능 
            // '주어진 배열'에 'seperator'를 이용해서, 배열에 담긴 값을 '하나의 문자열' 로 만들어준다. 
            // seperator 는 (" ") 에 넣어준다. 
            // return 되는 건 '하나의 문자열' 임. 

        // 예제 : 각 배열에 담긴 값을 합쳐서, 하나의 문자열로 만들고 싶음. 
            let arr_1 = ["오늘","2","매우","화이팅","입니다.",6,7,8,"👏👏👏👏👏"];
            console.log(arr_1.join("🤟"));
            // [해석] 
                // '오늘🤟2🤟매우🤟화이팅🤟입니다.🤟6🤟7🤟8🤟👏👏👏👏👏' 이렇게 결과가 나옴. 


        // 예제 : 모아진 과일 데이터를, 구분 기호를 붙여서, 하나의 문자열로 만들기 
        let fruits_1 = ['사과', '바나나', '딸기', '메론', '감', '배'];

        console.log(fruits_1.join());
            // [해석] 구분자가 없으면, '사과,바나나,딸기,메론,감,배' 이렇게 , 콤마로 나옴 
        
        console.log(fruits_1.join('🙌'));
            // [해석] '사과🙌바나나🙌딸기🙌메론🙌감🙌배' 이 나옴



// 🟦 [배열 메소드] split 
        // 기능 
            // '문자열' 을, 문자열 안에 있는 '구분자(seperator)'를 기준으로, 각각의 배열값으로 나눠준다. 
            // return 은?❓❓  

        // 예제 : '문자열'로 저장된 '한덩어리'로 있는 글자를, '특정 구분자(seperator)'를 기준으로, 배열로 저장하기 
        let sentence = '맑은 하늘을 날아, 오오오, 닿을 수 있는 곳 까지, 아아아, 저는 정덕진 입니다. 👍 ';
        
        let words = sentence.split(' ');
        console.log(words);



// 🟦 [문자열 함수] 
        // 의의 
            // 문자열 함수는 배열에서 쓸 수 있는 함수 
        
        // 특징 
            // 음... 살짝 애매함 📛📛 



// 🟦 [문자열 함수] indexOf

        // 예시 : 해당 문자열 안에서 '다' 문자가 몇 번째 인지(인덱스)를 알고 싶을 때
        let str_a = "가나다라마바사";
        console.log(str.indexOf("다"))
            // [해석] index 로 2 를 반환



// 🟦 [문자열 함수] length
        // 예시 
        let str_b = "아다다다다아다다다다👍";
        console.log(str_b.length);
            // [해석] 길이값으로 12 를 반환 



// 🟦 [문자열 함수] slice 
        // 기능 
            // '자르고 가져오기 시작할 부분'과 '자르고 가져오기 끝낼 부분' 을 입력하면 -> 그만큼 잘라서 문자열을 만들어준다. 
            // return 은 '문자열' 

        // 예시 
        let str_c = '자를부분slice를🕵️‍♂️어딘가에서해줘야하는🔮데읍읍읍✍✍✍'

        console.log(str_c.slice(4,9));
            // [결과물] `slice` 이게 나옴 
        console.log(str_c.slice(10,20));
            // [결과물] `🕵️‍♂️어딘가에` 이게 나옴 (이모티콘이 좀 글자가 길지 않나 싶음)


// 🟦 [문자열 함수] split 
        // 기능
            // seperator 를 기준으로 자르고, 각각 다른 배열로 넣는다. 
            // return 은 '배열' 
        
        // 예시 
        let str_d = '자아를부분, slice아를, 🕵️‍♂️,어딘가아에서, 해줘야아하는🔮데, 읍읍읍아, ✍✍아오✍'

        console.log(str_d.split(","))
        console.log(str_d.split("아"))
        console.log(str_d.split(" "))  // 이건 '띄어쓰기' 를 기준으로 나누는 것
        console.log(str_d.split(""))   // seperator 를 안 주면 -> 문자 하나 하나를 자른다. 



// 🟦 [문자열 함수] 대소문자 변경 (toUpperCase, toLowerCase)
        // 기능 
            // 'input 문자열'을 대문자 또는 소문자 '문자열 output' 으로 변환 
        
        // 예시 
        let str_g = 'abcdefg';
        let str_h = 'ABCDEFG';

        // 대문자로 변환
        console.log(str_g.toUpperCase())
            // [결과 해석] ABCDEFG 이렇게 나옴 

        // 소문자로 변환 
        console.log(str_h.toLocaleLowerCase())
            // [결과 해석] abcdefg 이렇게 나옴 


// 🟦 [함수] splice 📛📛📛 
        // 기능 
            // '배열' 에서 '특정 요소'를 '추가' 하거나, '제거' 하는데 사용
        
        // 순서 
            // 1. '변화하고 싶은 부분' 을 찝는다. 
            // 2. '변화주고 싶은 값'을 넣는다.
            // 3. '원본 배열'의 경우, '변화주고 싶은 값이 딱 그자리에!' 들어간다. 
            // 4. '원본 배열에서 튀어져 나온 애들' 은 '새로운 배열' 을 형성한다. 
            
            
        // 예제 
        let numbers_7 = [1, 2, "3💁‍♀️", "4💁‍♀️", 5];

        let spliceNumber = numbers_7.splice(2,2,10,22222);

        console.log(numbers_7); // [해석] 기존 배열은, 딱 그 부분만 업데이트 된다. 
        console.log(spliceNumber);  // [해석] 딱 그 부분 만 잘려나온 건, 새로운 배열을 형성한다. 

        // 관련 프로젝트 
            // 1. '로또 만들기' 에서 '추첨하는 기능' 구현 




// 🤟 WIL
    // '000 해보고 싶을 때?'로 정리하면 좋음 
    // chatGPT 예시도 있음. 
    // input 이 무엇이고, return 이 무엇인지 체크하는것도 중요할 것. 


// ✅ 하면 좋은거 
    // 프로젝트도 올리면, 거기서 검색하면 좋을거 같음 
    // '이 프로젝트' 와 '이 기능, 이 문법' 이 어떻게 연결되는지를 적으면 좋을거 같아 
    // '이 참고지식' 과 '어떤 프로젝트' 가 연결되는지 


// 📛 질문 모음
    // 레퍼런스 타입이라는게 뭘 말하는거지?
        // [배운것] 일반 타입은 '값' 을 저장. 
        // [배운것] 레퍼런스 타입은 '주소' 를 저장.  

    //  자바스크립트 배열은 객체 배열? 
        // 3. 자바스크립트 배열은 '객체' 임. (😥😥😥 무슨 의미가 있는지 아직 잘 모르겠음)
            // key 값이 0,1,2 일 뿐 이다.
            // 자바스크립트 배열은 '객체 배열' 이다. (📛📛📛 잘 모르겠음.)  
        
