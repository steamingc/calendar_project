// 레퍼 : https://velog.io/@1_doyeon/JavaScript-%EB%8B%AC%EB%A0%A5-%EB%A7%8C%EB%93%A4%EA%B8%B0-%EB%8B%A8%EA%B3%84%EB%B3%84
// 1. 콘솔 창에 1부터 30까지 띄어쓰기로 구분해서 한 줄로 출력하기
// var arr = '';
// for(var i=1; i<=30; i++) {
//     arr += " " + i;
// }
// console.log(arr);

// 2. 이 달의 마지막 날짜 구해서 그 수까지 출력
// var arr = '';
// var date = new Date();  //현재 날짜 및 시간
// var days = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();  //getDate : 날짜 출력 함수. 다음 달 0일의 날짜 즉, 이번 달 총 날짜 구하는 법

// //해당 월 getFullYear : 해당 연도 구하는 함수
// var month = date.getFullYear() + "년 " + (date.getMonth() + 1) + "월 입니다.";
// console.log(month);

// //이번 달 일수 나열
// for (var i=1; i<= days; i++) {
//     arr += " " + i;
// }
// console.log(arr);

// 3. 7칸 출력할 때마다 줄바꿈
// var arr = '';
// var date = new Date();  //현재 날짜 및 시간
// var days = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();  //getDate : 날짜 출력 함수. 다음 달 0일의 날짜 즉, 이번 달 총 날짜 구하는 법

// //해당 월 getFullYear : 해당 연도 구하는 함수
// var month = date.getFullYear() + "년 " + (date.getMonth() + 1) + "월 입니다.";
// console.log(month);

// //이번 달 일수 나열
// for (var i=1; i<= days; i++) {    
//     arr += " " + i;
//     if (i % 7 == 0) {
//         arr += '\n';
//     }
// }
// console.log(arr);


// 5. 이 달의 1일 요일 구해서 그 요일만큼 빈 칸 출력하기
// var arr = '';
// var date = new Date();
// var year = date.getFullYear();
// var month = date.getMonth();
// firstDay = new Date(year, month, 1).getDay();   //1일의 요일 (getDay : 요일 함수 0-6)
// lastDate = new Date(year, month + 1, 0).getDate();  //이달 마지막 날

// //해당 월
// var info = year + "년 " + (month + 1) + "월 입니다.";
// console.log(info);

// //1) 첫번째 줄 빈 칸 띄우기
// //2) 빈칸 뒤에 날짜 출력
// //3) 날짜를 요일에 
// for (var i=1; i<= lastDate; i++) {  
//     for(var j=0; j<firstDay; j++) {
//         arr += "[ ]";
//     }  
//     arr += " " + i;
//     if (i % 7 == 0) {
//         arr += '\n';
//     }
// }
// console.log(arr);