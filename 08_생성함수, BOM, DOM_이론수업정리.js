



// 🟦 생성함수 

    // 이건 직접 만들어보면서, 느낄 수 있음. 



// 📘 자바스크립트를 사용해서 '동적인 기능' 을 만들어보기 

    // [생각해보기]
        // 그냥, 직관적으로 생각해서, '사람' 을 글로 표현한다고 할 때, '머리' 는 이렇고, '눈' 은 이렇고, '코' 는 이렇고 라고 말할 수 있음. 
        // 이때, '눈', '키', '코' 같은 것을 Key 로 잡고, 180cm 를 value 로 잡을 수 있다. 

    // [시사점]
        // 1. '모든 존재' 를 '객체, dictionary' 관점에서 정의할 수 있다. ⭐⭐⭐⭐⭐ 
        // 2. '객체에 접근' 해서 -> '수정' 할 수 있다. ⭐⭐⭐⭐⭐
        // 3. "버튼을 클릭했을 때(사용자반응) -> 수정해!" 라고 '수정 조건' 을 설정하면 -> 사용자 반응에 따라서 움직이는 페이지가 된다. 



// 🟦 BOM, 브라우저 객체

    // [의의]
        // '브라우저' 를 '객체 모양' 으로 만든 것 
        // '브라우저' 에 접근하는 것이 가능 
        // 어떤 객체로 되어있는지 보려면, `console.log(window)` 으로 확인 

    
    // [예시] alert 
        // '브라우저' 객체 중 'alert' 를 가져와서, 사용할 수 있음. 
        // console.log(window);    // 전역 공간이니까, 윈도우 객체 

    
    // [예시] onload 활용 : 브라우저가 HTML 렌더링 다 하면, 알려주기 ⭐⭐⭐
       
        // onload 란? 
            // 브라우저의 랜딩이 끝나고, 보여줄 준비가 되었을 때! 실행되는 함수
            // html 다 그리고, 보여줄 준비가 되었을 때! 실행되는 함수 
            // html 렌더링 끝나고! ⭐⭐⭐ 실행되는 함수 

        // 브라우저에서 html 다 그리고, 렌더링이 끝나면 > onload 키의 값에 있는 함수가 실행됨. 
        // 이 onload 라는 키 값에 '함수값' 을 전달하면, 브라우저가 html 렌더링을 다 했을 때 알림 받을 수 있음. 

        console.log(window)

        window.onload = function() {
            console.log("window.onload : 브라우저가 HTML 렌더링 다 했데~👏")
            alert("window.onload : 브라우저가 HTML 렌더링 다 했데~👏")
        }



// 🟦 DOM, Document Object Model, 문서 객체 모델 

    // [의의]
        // '문서'를 '객체 모양으로' 만든 것. ⭐⭐⭐⭐⭐  
        // 문서에 접근하는 것을 가능하게 해준다. 

        // DOM 은 '페이지에 있는 태그들' 을 객체로 표현한 것 

        // document 객체에서 태그를 가져오는 방법. 이 안에서 태그를 가져올 수 있음. 
            // 객체를 이용해서 태그를 가져와보기. 
            // 객체를 이용해서, 찾고 싶은 태그를, 자바스크립트로 가져와서, 사용할 수 있음. 

        // '객체 모양으로 만들어진' '문서' 확인하는 법 
            console.log(document)
                // [결과해석]
                    // 이렇게 하니까, '내가 HTML 파일 에 작성한 모든 것' 이 보인다. ⭐⭐⭐⭐⭐
                    // 그게 document 라는 '객체' 안에 담겨 있음. 
                    // 그 객체 안으로 들어가서 1) 선택 2) 수정 하면, 3) HTML 파일이 변화하고 4) 브라우저가 그걸 그려준다. 
                    // 그러면, 굳이, HTML 파일에서 수정할 필요가 없는거다! 

    // [이어서 생각해볼 것] 
        // 그러면, document 객체를 통해, 1) 원하는 태그를 어떻게 선택 2) 수정 할 수 있을까? 




// 📘 태그 선택자들 

// 🟦 [ID 선택] getElementById 로 id 선택
    // [기능] 
        // getElementById 이 메소드로 태그 아이디를 찾아서, 태그를 가져올 수 있다. 

    // [예시]
    let div2 = document.getElementById("div1")
        // [해석]
            // 1. document 객체 를 가져오고 > id 를 기준으로 선택한다. 
            // 2. id 태그 밑에 있는 모든 자식 태그를 가져온다. ⭐⭐⭐
            // 3. 가져온 결과를 div2 라는 하나의 변수에 담는다. ⭐⭐
        console.log(div2)
            // [결과물 해석]
                // 자바스크립트에서, 태그를 찾아서, 참조한 것 임. 
                // 가져와지는 건, `<div id = "div1"> 나 태그임 </div>` 요 라인 통째로 -> 그리구 console 에 찍힘

    // [주의할 점]
        // 'id 값이 있는 태그'는 '그냥 변수' 처럼 써도 된다. 
            // 이렇게 쓸 수 있는 이유는, id 값이, 태그 하나에, 고유하게 붙어서 ⭐⭐⭐⭐⭐
            // id 는 중복되면 안 된다! 
            let div3 = div1
            console.log(div3)


// 🟦 [ID 선택] querySelector 로 id 선택 (⭐⭐⭐ 이 방법을 많이 사용)
    // [사용법]
        let div4 = document.querySelector("div1")
    


// 🟦 [Class 선택]

    // [class 선택자의 결과를 변수처럼 쓸 수 있나?]
        // 혹시, id 처럼 가져왔는데, 변수처럼 쓸 수 있나?
        // console.log(class_div2)

        // 안 되네. 왜 그렇지? 
            // 클래스는 중복될 수 있게 만들었으니까 -> 안되게 함 
            // id 는 하나만 줄 수 있는 용도로 만들었어. 
            // 클래스는 중복될 수 있는 용도로 했으니까, 안 돼
            // 여러갠데 뭔지 내가 어케 아니 


    // [class 가져오는 방법]

        // 1. querySelector 사용 : 동일 class 중 첫 번째 태그! 만 가져온다. 
        let div5 = document.querySelector('.class_div2')
        console.log(`${div5} : 이게 첫 번째 태그인지 봐바`)
            // [결과물] '동일 클래스 중 첫 번째 태그' 만 가져온다.❓❓❓
            // [궁금증] '해당 클래스명을 가진 모든 태그' 를 가져오는 것 같은데
                // 🤟 아, console 에는 그렇게 나와있구나. 


        // 2. querySelectorAll 사용 : 해당 class 를 가진 모든 태그를 '배열' 로 가져온다.
        let divArr = document.querySelectorAll(".class_div2")
        console.log(divArr)     // [div.class_div2, ... , div.class_div2] 이렇게 배열로 가져옴.
        console.log(divArr[3])      // '배열' 중 index 로 하나를 선택

            // [시사점] 
                // 1. result 는 ⭐'배열'⭐ 로 가져오게 된다. 
                // 2. '배열' 중 'index' 를 넣어서, 원하는 태그만 취할 수 있다. 
                // 3. '⭐해당 class를 가진 모든 태그⭐' 중 '⭐index⭐' 를 이용해서, '하나의 태그만 선택' 할 수 있다는 점 ⭐⭐⭐⭐⭐⭐ 



// 🟦 '태그 이름' 으로 선택하기 

    // queryselector 변수의 이름은 'css 선택자를 문자열로' 넣어주면 된다. 
        // 그러면, 태그를 가져올 수 있다. 
        let div6 = document.querySelector('div');



// 📘 태그를 선택하고 할 수 있는 것들 

// 🟦 innerHTML 활용해서, '텍스트'를 넣어주기

    // 1. 태그 가져오기 
    div1
        // [해석] id = div1 으로 되어 있음 
        // id 는 유니크 하기 때문에, 변수명으로 쓸 수 있음 

    // 2. 해당 태그 사이에 '원하는 텍스트' 넣기 
    div1.innerHTML = 'div1 사이에 들어갈 텍스트야. 예전에 썼던게 overwrite 되네'
        // [결과물]
            // <div> 'div1 사이에 들어갈 텍스트야' </div> 이렇게 나오겠지
    console.log(div1.innerHTML)
        // [결과물]
            // div1 id 아래 부분에 ' ' 이게 들어가서, 이전에 썼던게 사라진다. 


// 🟦 innerHTML 활용해서, '태그' 넣어주기 ⭐⭐⭐⭐⭐
    // [원리]
        // ⭐텍스트⭐ 사이에 ⭐태그⭐를 넣어도, 문서파일을, ⭐브라우저가 해석⭐해서, 태그로 만든다. 
    
    // [예제]
        div1.innerHTML = '<ul> <li> 텍스트 콤마 안에 추가한 ul, li 태그야! </li> </ul>'

    // [시사점]
        // 원하는 태그들을 넣어주면, 해당 태그 사이에 추가 된다. 
        // 태그를 텍스트 형식에 넣어서 어색하다.
        // 어떤 태그에 넣을지! 선택을 잘 해야 한다. 


// 🟦 예시들 
    // 태그 안에 내용 추가
    let div7 = document.querySelector('.class_div2');
    div7.innerHTML = "나 이 클래스 가진 태그 중 첫 번째야";

    let div8 = document.querySelectorAll('.class_div2');
    div8[3].innerHTML = "난 class_div2 클래스를 가진 4번째 태그야. 지금 innerHTML 로 수정했어";



// 🟦 [조각기능] '버튼' 을 누르면 -> 'div2 class' 가 있는 태그, 전부에, '텍스트' 를 넣기

    // 1. '버튼' 만들기 
        // ✅ html 로 이동
        // button 태그에서, onclick 이벤트가 발생하면 -> btnFn() 함수 실행되게 셋팅 
            // <button onclick="btnFn()"> 글자 입력하기 </button>

    // 2. '버튼' 태그에 'onclick' 이벤트가 일어나면 실행되는 btnFn() 함수 만들기 
    function btnFn() {

        let class_div = document.querySelectorAll('.class_div2');
            // [해석] 'class_div2'클래스를 갖는 태그를 모두 찾고 -> 배열로 만들어서 -> class_div 변수에 담기
        
        class_div.forEach(function(i) {
            
            // 디버깅
                // console.log(i) 

            // 배열에 담겨져 있는, class 를 하나씩 꺼내서, innerHTML 로 텍스트 넣어주기 ⭐⭐⭐
                i.innerHTML = `버튼이 눌려지면, -> 이 글씨가 나올거야. 
                        class 명이 class_div2 인 곳에 모두 기재될거야.`
            
            // [느낀점] 
                // 배열을 순회하면서 가져오니까, index 를 다르게 부여하면, 다른게 만들어질 수도 있을 것 같아. 
        })
    }




// 📘 [조각기능] script 태그 위치를 body 밑이 아니라, 다른 곳에 두어야 할 경우 

// 🟦 scrpit 태그의 위치와 로드 순서, onload 의 활용 

        // scrpt 를 body 위에 있는 경우
            // let a = document.querySelector(".aaa")
            // console.log(a);
                // aaa 클래스를 가진 태그를 가져온다 -> 그걸 보자 
                // 응? null 뜨네? 
                // 내려오다가 > 스크립트 만나면 스크립트 읽는다. 
                // 스크립트 가면 -> js 를 본다 -> aaa? 없네? -> null 이 나온다. -> so, html 에서 scipt 는 body 아래 



        // 근데 꼭, script 를 위에 써야 하면? ⭐⭐⭐⭐⭐ 
            // onload 하면 - html 다 읽고 나서 - 여기를 실행하게 됨. ⭐⭐⭐⭐⭐ 
            // window.onload = function()  {
            //     let a = document.querySelector(".aaa")
            //     console.log(a);
                
            //         }

        // 음...............📛📛📛📛📛📛📛📛📛 

                // console.log(a) // 지역 변수 임!!!!! -> 추가 작업이 필요하면 저 안에서 다 하면 됨. 


    // 태그가 다 만들어지지도 않았는데, 가져오라고 하니까 발생하는 문제 ⭐⭐⭐⭐⭐⭐ 




    

// 📘 [조각기능] 이름, 나이, 내용 input 에 기재하고 -> 버튼을 누르면 -> list 로 보이게 하기 [게시판 기능]


// 🟦 전역변수 
let objArr = [];


// 🟦 input 태그에 이름, 나이, 내용 기재할 수 있게 만들기 
    // ✅ HTML 로 이동 


// 🟦 객체 만들기 위해서 '생성자 함수' 선언 
    function create(_name, _age, _content) {
        this.name = _name;
            // [해석] 1) new 키워드로 만들어진 '빈 객체' 에 name 이라는 키 값을 만들고 ⭐⭐⭐
                    // 2) 그 value 로 매개변수를 통해 입력받은걸 넣는다. 
        this.age = _age;
        this._content = _content;
    }
    // [해석] ⭐⭐⭐⭐⭐⭐⭐⭐⭐
        // 매개변수로 name 이 들어오면 -> this 객체에 name 이라는 key 를 만들어준다
        // 밑에서 new 생성자로 빈 객체를 만들건데, this 는 new 로 만들어진 빈객체를 가리킨다. 
        // 빈객체의 key를 만들려면, 여기에서, this 다음의 워딩을 바꿔준다.



// 🟦 queryselectorAll 로 HTML 에서 적은 걸 '배열'로 가져오고 -> '생성자함수' 써서, 이걸 '객체' 로 만들기
    // [궁금한점] '객체' 로 만드는 이유는❓❓❓❓❓❓
        // 배열을 쓰건, 뭘 쓰건 상관은 없을 것. 다만, 객체를 쓰면, 다루기가 좀 쉬워서 그러려나? 
    
    function addArr () {

        // queryselectorAll로 inputs 태그에 적은 텍스트 가져오기
        let inputs = document.querySelectorAll('input');
            // [배운점] 
                // 1.⭐⭐⭐ input 태그에 뭔가를 쓰면, 그 뭔가를 적은게 input 으로 들어오는 구나 ⭐⭐⭐
                // 2. 그러면, label 은 input 이 뭔지를 설명하는 기능을 하는 거 겠구나. 
            // 디버깅 
                console.log(inputs)
        
            // [배운점] ⭐⭐⭐ 
                // inputs 아래에 있는 값에 접근하려면, 어떻게 해야 할까? ⭐⭐⭐⭐⭐
                // 예제 코드를 보고 했는데, 이걸 외울게 아니라, '개발자 도구' 에서 'inputs' 객체 안을 탐구! 해보면 된다. ⭐⭐⭐⭐⭐ 
                // 즉, '객체' 를 활용하게 되면, 콘솔창에 찍어보고, 가져올 수 있는 것들을 확인! ⭐⭐⭐⭐⭐ 

        // inputs의 데이터 구조를 확인하고, 입력한 값에 접근하기 ⭐⭐⭐ 
        console.log(inputs[0].value);
        console.log(inputs[1].value);
        console.log(inputs[2].value);
            // [더 알아볼 것]
                // '배열' 혹은 '객체' 데이터에 접근하는 방식 
                // inputs[0].value 뿐 아니라 inputs[0]['value'] 이것도 되나?
            // [부족한점📛]
                // 이 순간, addArr(); 를 실행해서, value 가 잘 찍히는지 보고 싶었음. 
                // 근데, 버튼을 달아야 확인이 되었음. 

        // 뽑아낸 값으로 '객체' 만들기 (생성자 함수 '실행')
        let obj = new create(inputs[0].value, inputs[1].value, inputs[2].value)
            // [해석]
                // new 키워드로 빈객체를 만들고 
                    // -> 함수에서 this 를 그 객체를 참조해서 -> name key 에는 value 를 매개변수로 "이름"
                    // age key 에는 value 를 매개변수로 10
                    // content key 에는 value 를 매개변수로 "나 콘텐츠~" 로 전달해서 넣었음. 
                // 이렇게 만들어진 객체를 obj 라는 지역변수에 넣어준다.


        // '객체' 를 '배열(리스트)' 안에 넣는다. 
        objArr.push(obj);
            // 디버깅
            console.log(objArr)

    }



// 🟦 render 기능 만들기 
    // [세부설명] 결과물로 나온 '배열' 에 forEach를 써서, `innerHTML` 에 넣어줄 텍스트 만들고 -> innerHTML 사이에 넣어주기

    function render(){

        // 렌더링 하기 전 값 초기화 ⭐⭐⭐ 
        let text = ""
        
        // push 된 배열에 있는 모든 값(첫 번째 입력, 두 번째 입력 모두)을 가져와서 -> text 에 담는다. 
        objArr.forEach(function(i) {
          
            text = text + `<li> 이름 : ${i.name} | 나이 : ${i.age} | 내용 : ${_content} </li>`
            // += 을 쓰면 -> 왜 누르는 만큼, 늘어나지❓❓❓❓❓❓❓❓❓❓❓❓❓❓ 

                // `+=` 는 원래 있는 값에 추가! 를 시키는 연산자 ⭐⭐⭐⭐⭐ 
                // += 5 : 원래 있는 값에 '덧 붙인다.' 
                // 원래 있는 문자열에 뒤로 내용을 추가 
                // i.name 여기에 중복되어서 들어가는 거야 ⭐⭐⭐⭐⭐ 
                    // console.log(i.name)
                    // 왜냐면, 두 번째 누르면 -> push 되어서 다시 리스트에 들어가니까. ⭐⭐⭐
   
        })
    
        console.log(text)

        // 위에서 만든 text 를 inner HTML 에 넣어준다. 
        document.querySelector('#tables').innerHTML = text;

    }    



// 🟦 위의 기능 모아서 divBtn 함수 만들기 
function divBtn () {

    addArr();

    render();

}


// [부족한 점📛]
    // 레퍼런스 타입 관련해서 좀 더 공부해야 할거 같음