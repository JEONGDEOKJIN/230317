

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
                window.onload = function()  {
                    let a = document.querySelector(".aaa")
                    console.log(a);
                    
                        }

            // 음...............📛📛📛📛📛📛📛📛📛 

                    console.log(a) // 지역 변수 임!!!!! -> 추가 작업이 필요하면 저 안에서 다 하면 됨. 


        // 태그가 다 만들어지지도 않았는데, 가져오라고 하니까 발생하는 문제 ⭐⭐⭐⭐⭐⭐ 

        