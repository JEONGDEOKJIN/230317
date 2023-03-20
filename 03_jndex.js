
//📚 [생성자 함수 활용]
    
    // 객체를 만들 수 있음. 이걸 활용해서 뭔가 해보자 



// 🟦 변수는 맨 위! 
    // 호이스팅!! 관련 

let objArr = [];



// 🟦 name, age, content 키 값을 가진 객체 만들기         
    function create(_name, _age, _content) { // 받고 싶은 key 를 매개변수로
        this.name = _name;  // 매개변수로 name 이 들어오면 -> this 객체에 name 이라는 key 를 만들어준다
        this.age = _age;
        this.content = _content;
    }
        // 객체를 만들 수 있음. 



// 🟦 버튼 누르면 실행되는 함수 
function divBtn() {

    console.log("눌리는지 확인~ 이게 보이면 눌린거야~");


    // 객체를 추가하는 기능을 나눠서 여기에 둠
    addArr(); 

    // 만들어지고 -> 그려준다. 
        // 화면을 업데이트 하기 위해 만든 함수 
        // 객체가 추가되면, 화면을 다시그리게!
    render();

}



// 🟦 버튼 누르면 -> li 내용 추가하게 하기 
    // 객체 생성하는 기능 


function addArr () {

    // input 을 태그명으로 queryselectorAll 메소드 매개변수로 전달해서 -> input 태그를 배열로 가져온다. 
        // 그래서 inputs 변수에 담아 놓는다. 
    let inputs = document.querySelectorAll("input");
    console.log(inputs)
        // input 태그는 value 라는 key 값이 있다. 
        // value = 우리가 입력한 값이 value 라는 key 에 담긴다. ⭐⭐⭐⭐⭐ 
        // console.log 로 입력한게 value 에 담긴건지 확인하자. 
        console.log(inputs[0].value); // 이거 뜨는지 확인 input 에 값을 입력하고 > 추가를 누르면 > 추가가 된다. ⭐⭐⭐⭐ 
        console.log(inputs[1].value);
        console.log(inputs[2].value);


    let obj = new create(inputs[0].value, inputs[1].value, inputs[2].value);
    // [해석]
        // new 키워드로 빈객체를 만들고 
            // -> 함수에서 this 를 그 객체를 참조해서 -> name key 에는 value 를 매개변수로 "이름"
            // age key 에는 value 를 매개변수로 10
            // content key 에는 value 를 매개변수로 "나 콘텐츠~" 로 전달해서 넣었음. 
        // 이렇게 만들어진 객체를 obj 라는 지역변수에 넣어준다.

    objArr.push(obj);
        // 배열 안에 객체를 넣음!!!!!!! 
    
    console.log(objArr);
        
}
    // ⭐⭐⭐⭐⭐⭐ 객체를 추가하는 기능을 '나눔!' ⭐⭐⭐⭐⭐⭐ 



// 🟦 객체와 배열은 '레퍼런스 타입' 임. -> so, 값 이 아니라, '주소' 를 들고 있음. / key 값이 주소 임. 
    // 일반 원시타입 변수는 값을 가리키는 주소
    //  레퍼런스 타입은 값을 가리키는 주소. 주소들을 가리키는 것. 
    // 여러번 찍으면 뭔가 다르게 나오는데 이걸 알아야 함.

    // 레퍼런스는 주소를 들고 있다는 개념 😥😥😥😥😥😥😥😥😥😥😥😥😥😥😥😥😥😥😥😥 
            // 그래서 주소를 콘솔에 찍기 때문에, 변화한 그 주소를 바라보면, 마지막으로 변한 값을 확인할 수 있음. ⭐⭐⭐
            // '주소' 는 '값을 가리키는 친구' 
            // '변수명' 도 '주소' = '메모리 공간의 어느 곳' 



// 🟦 무언가를 그려주는 함수 만들기 
    // 이름은 내가 정한 것 

    // 그리려면, 1) 만들고 2) 그려야 함

    function render() {

        // 렌더링 하기 전에 문자열 초기화 ⭐⭐⭐ / 지역변수니까 초기화 ⭐⭐⭐ 
        let text = "";
            // `+=` 는 원래 있는 값에 추가! 를 시키는 연산자 ⭐⭐⭐⭐⭐ 
                // += 5 : 원래 있는 값에 '덧 붙인다.' 
                // 원래 있는 문자열에 뒤로 내용을 추가

        objArr.forEach( function(i) {

            // console.log(i.name); // 클릭하면 - 이름을 가져온다. 

            text += `<li> 이름은 : ${i.name} | 나이 : ${i.age} | 내용 : ${i.content}  </li>  `
        });

        console.log(text); 
            // text 변수는 여기서 사용하고 끝낼 것 임. 
        
        document.querySelector('#tables').innerHTML = text;
            // 반환값 나온거에 바로 text 내용 추가! ⭐⭐⭐⭐⭐ 

    }