// 🟦 생성 함수 

    // 의의
        // 객체를 함수로 만들 때 많이 사용!! 
        // 뭔가를 '생성' 
        // '객체' 를 생성할 때 사용하는 함수
    

    // 생성자 함수의 모양 (문법)
        // 이건 createObj 생성자 함수다. 
        // 객체를 만들 때 사용
    function createObj (_name, _atk, _def, _speed) {
        this.name = _name;  // 매개 변수로 받은걸 key 값으로 전달
        this.atk = _atk;
        this.def = _def;
        this.speed = _speed;
    }
    // [해석]
        // 실행된 객체를 참조
        // 객체에 내가 넣고 싶은 값을 -> '매개변수' 로 준다. 


    // 이 함수로 객체를 생성하는 법
        // new 라는 키워드를 사용
        // new 는 어떤 기능을 해? 
            // 메모리 공간을 주고, '동적으로 공간을 만들 때' 사용 
            // '동적 할당' 
            // 메모리 공간을 동적으로 할당 해 준다.
            // 새로운 객체를 생성하기 위한 메모리 공간을 
        // new 키워드를 사용하면, 
            // 1)빈 객체를 만들고, 2) 생성자 함수를 실행 시켜서 3) this 는 빈 객체를 가리키게 됨
            // 4) 그 빈 객체에 key 값을 추가 한다. -> 그래서 새로운 객체를 만들어준다.  

    // 객체를 뭐라고 보면 될까? ⭐⭐⭐
        // 컴퓨터, 물건, 컴퓨터 같은 물건 
        // '하나의 객체 = 사람' 이라고 봤을 때, 
        let person = {

            name : '이름',
            age : 24,
        }

        // 한 사람에 대한 정보를 객체로 만들어 놓고, -> 사람을 생성⭐⭐⭐⭐⭐⭐ 
        // 물건을 생성할 때도, 객체에 그 물건의 정보를 'key 와 value' 값으로 만들어서 -> 하나의 오브젝트화 시킨다. ⭐⭐⭐⭐⭐ 
        // 이렇게 하나의 존재를, key - value 로 만들어서, 오브젝트화를 하면 뭐가 좋아? ⭐⭐⭐ 


        let obj = new createObj("고블린", 100, 100, 10);
            // [해석]   
                // 나는 이런 객체를 만들고 싶어! 
                // ⭐⭐⭐⭐⭐⭐⭐⭐ new 로 빈 객체를 만들고 -> 함수를 실행 -> this 로 빈 객체를 잡고 -> 빈 객체에 key 를 잡아주고 -> 매개변수로 value 를 넣어 
        console.log(obj);

        
        let obj2 = new createObj("트롤", 200, 100, 10);
        console.log(obj2);


        // 만약 이걸 직접 만들었으면 -> 번거로움 😥😥😥
            let obj3 = {
                name : "고블링",
            }

            let obj1_atk1 = 100; 
            let obj1_atk2 = 100; 
            let obj1_atk3 = 100; 

        // 이렇게 '객체화' 를 시키는 이유는? 
            // 위에 처럼 하나 하나 다 해야 함 
                // 😥⭐⭐⭐ 즉, '전역 변수' 만으로 관리하기엔 힘들기 대문에 '객체화' 시킨다. ⭐⭐⭐ 
                // 하나의 값을 다루는게 아니라, 정보를 하나에 넣어놓고, 관리 
                // 개발자는 객체를 잘 다뤄야 한다. ⭐⭐⭐ 

            // new 함수화 시키면, 관리가 편해 
                // 값을 가져오는게 쉬워 
                    obj.name // 만든 객체의 이름이구나! 
                    console.log(obj.name)   // 만든 객체에서 name 키값을 가져온다. 
                    //console.log(obj.['name'])   // 만든 객체에서 name 키값을 가져온다. 
                    

        // 객체의 값에 접근하는 법 
            // 1. obj.name 
            // 2. obj["name"]
                // 배열처럼 가져올 수 있음. ⭐⭐⭐⭐⭐❓❓❓❓❓❓❓

            let arr = [1,2,3,4]
            arr.forEach( () => {
                // console.log(i);
            });

            for (i = 0; i < arr.length; i++) {
                console.log(arr[i]);
            } 

        // 객체에 있는 key 값을 어케 다 가져오지? 
            // for in 사용 ⭐⭐⭐⭐⭐ 
                // 1. 자동완성 하기 
                // 2. object 항목 = 순회하고 싶은 오브젝트를 넣어주기 
                // 3. key 값이 key 변수에 순서대로 담긴다. 

            for (const key in obj) {

                // console.log(key); // 객체 안에 만든 key 값을 순회한다. 이름으로 돈다.  

                //console.log(obj)    // key 값 개수 만큼 obj 가 뜬다. 

                console.log(obj[key])   // 🔵 이렇게 작성 
                
                //console.log(obj.key)    // 이렇게 하면 안 돼 📛📛📛
                                        // 이건, obj 안에 있는 key 중 key 라는 이름을 찾는 것
                
                // 😥😥😥😥😥 모르겠어......... 📛📛📛📛📛📛📛📛📛
            }



// 🟦 페이지도 같이 사용 
    // 자바스크립트를 이용해서, 동적인 기능을 넣어보자 


    // BOM, 브라우저 객체 
    // 브라우저의 '기능'들을 '객체'로 사용할 수 있게 해줌
        // EX) alert
        // alert("시스템창에서 뜨는거야")
        console.log(window);    // 전역 공간이니까, 윈도우 객체 


        // onload 메소드
            // 브라우저의 랜딩이 끝나고, 보여줄 준비가 되었을 때! 실행되는 함수
            // html 다 그리고, 보여줄 준비가 되었을 때! 실행되는 함수 
            // html 렌더링 끝나고! ⭐⭐⭐ 실행되는 함수 

            //onload 라는 키 값에, '함수값' 을 전달! ⭐⭐⭐⭐⭐⭐ 

        window.onload = function() {
            console.log("나 html 렌더링 다 그랬어~ 보여줄 준비 끝~");
        }


// 🟦 DOM, Document Object Model, 문서 객체 모델 
        // 문서를 객체 모양으로 만든 것. 
        // 문서에 접근하는 것을 가능하게 해준다. 

        // DOM 은 '페이지에 있는 태그들' 을 객체로 표현한 것 

        // document 객체에서 태그를 가져오는 방법. 이 안에서 태그를 가져올 수 있음. 
            // 객체를 이용해서 태그를 가져와보기. 
            // 객체를 이용해서, 찾고 싶은 태그를, 자바스크립트로 가져와서, 사용할 수 있음. 
        console.log(document)



// 🟦 태그 선택자들

    // 🟦 ID 선택
            // getElementById 이 메소드로 태그 아이디를 찾아서, 태그를 가져올 수 있다. 
            let div2 = document.getElementById("div1");
            console.log(div2)
                // [해석]
                    // 자바스크립트에서, 태그를 찾아서, 참조한 것 임. 
                    // 가져와지는 건, `<div id = "div1"> 나 태그임 </div>` 요 라인 통째로 -> 그리구 console 에 찍힘

            // 아이디 값이 있는 태그는, 그냥 변수처럼 써도 된다.
                // 그래서 아이디 태그는 한개만 만들기! 
                // id 는 중복되면 안 돼! 
            let div3 = div1
            console.log(div3)

            // 만능임 ⭐⭐⭐⭐⭐ / 예를 많이 씀 / 예만 써도 됨. 
            let div4 = document.querySelector('#div1')
            console.log(div4)
                // [해석] id 에서 div1 을 찾아줘 라는 말       
                // # 을 붙여서 id ㄹ고 알려죽 - div1 아이디를 찾아줘
            

    // 🟦 CLASS 선택

        // 변수처럼 쓸 수 있는 건 id 만        
            // 혹시, id 처럼 가져왔는데, 변수처럼 쓸 수 있나?
            // console.log(class_div2)

            // 안 되네. 왜 그렇지? 
                // 클래스는 중복될 수 있게 만들었으니까 -> 안되게 함 
                // id 는 하나만 줄 수 있는 용도로 만들었어. 
                // 클래스는 중복될 수 있는 용도로 했으니까, 안 돼
                // 여러갠데 뭔지 내가 어케 아니 
        
        
        // 그러면, 클래스 가져올 때는?
        let div5 = document.querySelector('.class_div2')
        console.log(div5) 
            // 문서를 읽다가, 동일 class 면, 첫 번째로 발견된 태그! 를 가져온다. 


        // 해당하는 전체 태그들을 가져온다.
            // 여러개 값 가져오기 
        let divArr = document.querySelectorAll(".class_div2");
        console.log(divArr[3])
            // [해석] class 준 태그를 '리스트(배열)' 로 전부! 가져온다. 
            // 그러면, 이 '인덱스' 를 넣어서 -> 원하는 것만 취할 수 이써 ⭐⭐⭐⭐⭐⭐ 
            // 혹은, 태그 이름 선택자를 쓰면 돼!!!!! 


    // 🟦 태그 이름 선택자 
        // queryselector 변수의 이름은 'css 선택자를 문자열로' 넣어주면 된다. 
            // 그러면, 태그를 가져올 수 있다. 
        let div6 = document.querySelector('div');


    // 대단한 능력이 생겼어!!! 



    // 🟦 텍스트를 태그에 넣어주고 싶으면? 
        // 1. 태그를 가져오기 
            // div1
            // div1.innerHTML = "gg";
                // div1 태그의 내용을 추가할 수 있다. 
                // <div> 이 사이에 "gg" 가 추가 된다. <div>
                // innerHTML 은 저 사이에 추가 된다는 말 
            console.log(div1.innerHTML)

        // 2. 
        // 만약, div 가 이중 으로 있어도 -> div 태그가 표시된채 뜬다. 
        //div1.innerHTML = "<div>나 태그임</div>"; //⭐⭐⭐⭐⭐ 가운데에 넣은게 삭제 📛📛📛📛📛📛
        div1.innerHTML = "<ul><li>나 태그임</ul></li>"; //⭐⭐⭐⭐⭐ 가운데에 넣은게 삭제 📛📛📛📛📛📛
        
            // 텍스트로 태그를 추가 ⭐⭐⭐⭐⭐⭐ 
            // 문서파일을 브라우저가 해석해서 -> 태그로 만든다. 


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