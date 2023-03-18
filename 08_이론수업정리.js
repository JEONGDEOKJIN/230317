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
                // 1. result 는 '배열' 로 가져오게 된다. 
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


    
// 🟦 버튼에 기능을 넣어보기

    // 1. 함수로 넣기 
        // 1.1 버튼을 누르면 -> 함수를 실행시키기 

        function btnFn () {

            let class_div = document.querySelectorAll('.class_div2');   // 해당 클래스를 갖고 있는 태그들을 class_div 변수에 배열로 담고 
            
            // 그 배열을 foreach 로 순회하면서, 아이템을 매개변수로 받았다. 
            class_div.forEach(function(i) {
                // console.log(i); // 잘 들어오는지 확인

                i.innerHTML = "안에 있는 글자를 이걸로 통일👍, 너 버튼 누르면 -> 해당 클래스 이름을 가진 태그 배열로 가져오고 -> innerHTML 을 써서, 한꺼 번에 내용을 바꿔~~"

            })
        }

    // html 에서 '함수' 를 가져가서 사용하자.
        // 함수 이름을 복사 -> html 로 이동 -> button 에 붙여넣기 -> 이렇게 <button onclick="btnFn()">