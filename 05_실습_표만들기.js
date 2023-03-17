// 📚 설명 
    // `03_2차자습.js` 파일 참고 



// 📚 전역변수 모음

    // 밑에서 생성자로 객체를 만들면 > 여기에 들어감 
    let objArr = [];




// 📚 세부 함수 기능 만들기 

    // 🟦 [조각기능] name, age, content 를 키로 갖는 객체 생성 함수 정의
    function create(_name, _age, _content) {
        this.name = _name; 
        this.age = _age;
        this.content = _content;
    }

        // [해석]
            // 1. _name, _age, _content 매개변수에 상응하는 값을 받는다. 
            // 2. 그러면, new 라는 명령어에 의해 빈 객체가 만들어져 있는 상태에서,
            // 3. 그 객체의 key 로 name, age, content 가 만들어지는데, 
            // 4. 함수가 실행되고 대입되고 나면 -> 해당 함수의 매개변수는 빈 객체의 value 가 된다. 
        
    // new 명령어를 써서, 매개변수로 넣은 것으로 value 를 채워서, obj 객체, 로 만들기  
    // ✅ let obj = new create("name 키에 들어가는 value", 100, "content 키에 들어가는 value");
    // console.log(obj)
        // [해석]
            // name, age, content 라는 key 각각에 ⭐⭐⭐⭐⭐
            // create 함수의 매개변수가 'value' 로 들어간다. ⭐⭐⭐⭐⭐
        // [결론]
            // '매개변수에 넣은 value' 로 '새로운 객체' 가 만들어졌어. ⭐⭐ 

    // '매개변수에 넣은 value 로 만든 객체' 를 '리스트' 에 담는다. 
    // ✅ objArr.push(obj);
        // console.log(objArr); 
        // [궁금]
            // 왜, 배열(리스트) 에 담지 ❓❓❓❓❓ 


    
    // 🟦 [조각기능] 생성함수 활용해서 객체 만드는 함수 만들기 (뒤에 render 함수랑 세트)
    function addArr () {
    
        let obj = new create("name 키에 들어가는 value", 100, "content 키에 들어가는 value");
        objArr.push(obj);

    }   
        // output 
            // obj라는 '객체' 가, objArr 이라는 '배열(리스트)' 에 담김 

        // 작동 확인 
            addArr()
            console.log(objArr)
            console.log("addArr 함수 사용해서, 객체 추가 완료!")




    // 🟦 [조각기능] '생성함수로 만들어진 객체' 에 querySelector,innerHTML 사용해서, 브라우저에 보이게 하기 
    function render() {

        // 렌더링 하기 전, 문자열 초기화⭐⭐⭐
            // [필요한 이유] 1) 이 render 함수는, 박스가 그려질 때 마다 실행될 것. 2) 그때, 앞의 결과물이 영향을 미치면 안 됨 -> so, 초기화! 
        let text = "";


        // objArr 리스트에 담긴 객체 하나씩 꺼내와서 -> li 태그에, 객체에 키별로 담긴 값을, text 변수에 추가한다. 
            // 예상 output : 1) list 가 하나 붙고 2) 이름, 나이, 내용은 addArr 함수에 매개변수로 담긴게 들어감 
                // 궁금한 것 : 1) li 가 있으면, ul 이 있어야 하지 않나? 
        objArr.forEach( function(i) {

            text += `<li> 이름은 : ${i.name} | 나이 : ${i.age} | 내용 : ${i.content} </li>`
                // output :  '문자열', 완전 텍스트로 나옴 
                    // <li> 이름은 : name 키에 들어가는 value | 나이 : 100 | 내용 : content 키에 들어가는 value </li><li> 이름은 : name 키에 들어가는 value | 나이 : 100 | 내용 : content 키에 들어가는 value </li>
                // console.log(text);   // 디버깅
        });


        // output 된 문자열을 html 에 넣기
            // [원리이해] 
                // 1. 특정태그.innerHTML 을 하면 > 특정 태그 사이에!!! 1) 문자열 2) HTML 태그 3) 변수 등이 들어감. 
                    // 왜냐면, ⭐템플릿 리터럴⭐ 로 넣기 때문에 ⭐<li> </li> 태그⭐ 같은 것도 들어감!!!!! (이게 중요⭐)  
                // 2. 해당 태그에는 'unique한 id' 가 들어가 있어야 함. 
        document.querySelector('#tables').innerHTML = text;
            // [해석] : 이번 실습에는 '토글'을 넣어줬는데, 이건, render 함수에서 담당! ⭐⭐


        // 디버깅용
        console.log("render 함수 실행 완료👏!")
    }

    
    // 🟦 [조각기능 모아보기] 버튼 누르면 실행되는 함수 
        // [실행 원리] 
            // 1) '버튼' 이 되는 '태그'에, 
            // 2) onclick 을 만들고, divBtn 함수를 연결하면 -> 
            // 3) 해당 버튼을 클릭하면, divBtn 함수가 실행! 된다.  
    
    function divBtn() {
        // 버튼 눌리는거 확인 
           console.log( "button-div 에 onclick 붙여서 > 해당 버튼 클릭되면, 아래 함수가 실행될거야! | 확인!")

        // 버튼 누르면 > 객체 추가하기 
            // [1차기능] 버튼 누르면 > 텍스트 객체 덩어리, 만 추가 됨. 
            // [2차기능] 버튼 눌렀을 때 > 뭔가 보이게 하기 : 이건 render() 함수 작업❓❓
        addArr();
            // ✅ result : objArr 이라는 리스트(배열) 안에, '객체' 가 들어가 있음. 

        // 만들어진 객체에 li태그랑, 텍스트를 그려주기 
        render();
    }


    

    

// 🤟 배운 것 
    // 1. 예상 output 을 적어주면서 하는 것도 중요함. 
    // 2. 조각기능을 만들어서, 모으기. 

// 📛 부족한 것 
    // 1. label, input 태그 쓰임 잘 모르겠음. 