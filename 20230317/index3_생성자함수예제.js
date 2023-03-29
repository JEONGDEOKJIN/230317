// 생성자 함수를 만들고
let objArr = [];

function create(name, age, content){
    this.name = name;
    this.age = age;
    this.content = content;
}

// 객체를 만들수 있다.

function divBtn(){
    // 버튼 누르면 실행시킬 기능
    console.log("나 눌렸어?");
    addArr();
    // 화면을 업데이트 하기 위해 만든 함수
    render();
}

function addArr(){
    // new 키워드로 빈객체를 만들고
    // 함수에서 this로 그 객체를 참조해서
    // name 키에는 값을 매개변수로 "이름"
    // age 키에는 값을 매개변수로 10
    // content 키에는 값을 매개변수로 "나 컨텐츠"
    // 매개변수로 전달해서 키값을 추가해준다 빈 객체에
    // obj라는 변수에 만들어진 객체를 넣어준다.

    // input 태그명을 querySelectorAll 메소드 매개변수로 전달해서
    // input 태그들을 배열로 가져와서 inputs 변수에 담아놓고.
    let inputs = document.querySelectorAll("input");
    console.log(inputs);
    // input 태그는 value라는 키값이 있다.
    // input에 입력한 값이 value키에 값으로 담긴다.
    console.log(inputs[0].value);
    console.log(inputs[1].value);
    console.log(inputs[2].value);

    let obj = new create(inputs[0].value,inputs[1].value, inputs[2].value);
    objArr.push(obj);
    console.log(objArr);
    // 객체와 배열은 레퍼런스 타입이기때문에 값이아니라
    // 주소를 들고있다.
    // 원시타입
    // 저렇게 보이는 현상은 일반 변수는 값을 가르키는 주소
    // 물어보고 찾아보고 공부 하셔야합니다
    // 주소를 들고있는 개념...
    // 주소를 console에 찍기 때문에 주소를 바라보면 마지막으로
    // 변한 값을 확인 할수있다.
    // 값을 가르키는 친구 주소
    // 변수명 
}

// 무언가를 그려주는 함수
// render이름 내맘데로 정한거.
function render(){
    // 랜더링 하기전에 문자열 초기화
    let text = "";
    // += 원래 있는 값에 추가를 시켜준다. (값을 덧붙힌다)
    // += 5
    objArr.forEach(function(i){
        text += `<li> 이름 : ${i.name} 나이 : ${i.age} 내용 : ${i.content}</li>`
    });
    console.log(text);
    // 여기서 사용하고 끝낼거임 text 지역변수
    document.querySelector('#tables').innerHTML = text;
}