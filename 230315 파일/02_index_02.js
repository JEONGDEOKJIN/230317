
// 🟦 문자열 함수 

let str = "가나다라마바사";

// 문자열 함수를 알아보자 
    // 배열에서 쓸 수 있는 함수, 문자에서 쓸 수 있는 함수가 다 다름. 



    // indexOF
        console.log(str.indexOf("다"))
            // [해석] 
                // 문자열은 배열은 아님. 다만, 인덱스로 접근이 가능 ⭐⭐⭐ 
                // 다 에 있는 인덱스 값을 가져오기 

    // length 문자열 길이 
        console.log(str.length);
            // [해석] 문자열 길이 가져오기

    
    // slice 
        // 문자열을 잘라주는 역할
        // 매개변수는 '시작점을 알려주는 숫자', '끝지점을 알려주는 숫자' 를 전달한다.  
        console.log(str.slice(1,3))
            // [해석]
                // 여기에서 3 은 포함하지 않는다. 3전! 까지를 의미 
                // '나,다' 가 옴 
        console.log(str.slice(3,6))


    // split (문자열 함수)
        console.log(str.split(""));
            // " " 안에 짤라줄 기준 을 넣어준다. 
        console.log(str.split("다"));
            // 다 기준으로 잘라준다. 
        console.log(str.split(" "));
            // 띄어쓰기마다 자를 수 있어 ⭐⭐⭐
        
        // [해석]
            // 매개변수로 전달한 값을 잘라내고, 배열의 형태로 변경해준다. 
            // 빈 문자열은 한자 한자 다 잘라서 배열의 형태로 변경



    // 문자열 함수중 대소문자 변경 함수들
    let str2 = "abcdefg";
    let str3 = "ABCDEFG";

        // 대문자로 변경하는 함수 
            // toUpperCase()
                console.log(str2.toUpperCase());

        // 소문자로 변경하는 함수 
            // toLowerCase()
                console.log(str3.toLowerCase());
        
