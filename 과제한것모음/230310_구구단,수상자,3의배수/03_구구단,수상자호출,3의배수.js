

// 🟦 구구단 

// 실행 되어야 하는 것 
// 1st 2*1
// 2nd 2*2 
// 3rd 2*3
// .등등 

// n번째면 2*n 

// 반복문으로 하면 



// console.log("1")

for (i = 2; i <= 9; i++) {
    
    for (j = 1; j <= 9; j++) {

        console.log(i, "곱하기", j, "는 : ",  i * j);
    }

}



// 🟦 수상자 호출 
// 
// 1. 학생들이 있음. - 한명씩 가져오고 
// 2. 수상자들이 있음 - 한명씩 가져오고 
// 3. 비교해서, 맞으면, 학생이름 호출, 
// 학생들 중에서, 수상자 명단에 있으면, 호출해주기


// 여기에 있음. 
let students = ["메롱", "우르릉", "쾅쾅", "아다다다", "덕진", "컴터"];
let award_list = ["오잉", "정말?", "베베토", "아자자", "덕진", "오캐이"];

// 가져와서 - 비교하게 하기
// console.log(students.length)

for (i = 0; i < students.length; i++) {
    for (j = 0; j < award_list.length; j++) {
        if(students[i] == award_list[j]) {
            console.log(students[i])
        }
    }
}



// 🟦 1 ~ 100 있는 것 중, 3의 배수 면 -> 뽑아내고, 아니면 -> 지워 

// 가지고 오라고 하면 

for (let i = 0; i < 100; i++){
    if (i % 3 == 0) {
        console.log(i, "의 배수 🔵")
    } 
    else {
        console.log(i, "3의 배수 아님")
    }
}


let students_ver2 = ["메롱", "우르릉", "쾅쾅", "아다다다", "덕진", "컴터"];
let award_list_ver2 = ["오잉", "정말?", "베베토", "아자자", "덕진", "오캐이"];

for (i = 0; i < students_ver2.length; i++ ) {
    for (j = 0; j < award_list_ver2.length; j++){
        // 가져옴
        if (students_ver2[i] == award_list_ver2[j]) {
            console.log(students_ver2[i])
        }
    }
}






