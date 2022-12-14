//------- 오늘 날짜 구하기
let date = new Date();

//------- 캘린더 함수 생성 (화살표 함수 형태)
const Calendar = () => {
  const year = date.getFullYear();  //올해
  const month = date.getMonth();    //이번 달

  //------- querySelector를 통해서 year & month 태그에 접근하여 연도와 달을 입력해줌
  //Document.querySelector()는 css 선택자 또는 선택자 뭉치와 일치하는 문서 내 첫 번째 Element를 반환한다(없으면 null) (jQuery와 동일한 방식)
  //textContent vs innerText
  document.querySelector('.year').innerText = `${year}`;
  document.querySelector('.month').innerText = `${month + 1}`;

  //------- 이번달 및 지난달의 마지막 Date
  const prevLast = new Date(year, month, 0);
  const thisLast = new Date(year, month + 1, 0);

  const PLDate = prevLast.getDate();    //지난 달 마지막 날짜
  const PLDay = prevLast.getDay();      //지난 달 마지막 요일

  const TLDate = thisLast.getDate();    //이번 달 마지막 날짜
  const TLDay = thisLast.getDay();      //이번 달 마지막 요일

  //------- Dates 기본 배열들
  //1. 지난 달과 다음 달은 그릴 수도, 안 그릴 수도 있기 때문에 일단 빈 배열로 둠
  //2. ...스프레드 연산자 (ES6 이후)
  //3. 길이가 TLDate+1인 어레이 생성
  //4. keys()를 통해 0~TLDate 이터레이터 생성
  //5. slice하여 가장 앞 이터레이터 0 삭제
  //6. 1 ~ TLDate까지의 이터레이터만 남게 된다.
  const prevDates = [];
  const thisDates = [...Array(TLDate + 1).keys()].slice(1); 
  const nextDates = [];

  //------- prevDates 계산 (이번달에 희미하게 표시되는 지난 달 날짜들)
  //1. 마지막 요일이 토요일(6)이면 굳이 그릴 필요 x
  //2. unshift를 통해 마지막 날부터 배열 맨 앞에 추가(배열의 새로운 길이 반환)
  if (PLDay !== 6) {
    for (let i = 0; i < PLDay + 1; i++) {
      prevDates.unshift(PLDate - i);
    }
  }

  //------- nextDates 계산 (달력에 표시되는 다음 달 날짜들)
  //1. 이번달 마지막 요일을 기준으로 필요한 개수만큼 반복
  //2. push를 통해 배열 끝에 요소 추가 (배열의 새로운 길이 반환)
  for (let i = 1; i < 7 - TLDay; i++) { 
    nextDates.push(i);
  }

  //------- Dates 합치기
  const dates = prevDates.concat(thisDates, nextDates);

  //------- Dates 정리
  //이번 달의 날짜와 구분 짓기 위해 다른 달의 날짜들을 투명하게 표시하기 위함
  //이번 달 1일의 인덱스와 이번달 마지막 날(TLDate)의 인덱스를 찾고 그것을 기준으로 함.
  const firstDateIndex = dates.indexOf(1);
  const lastDateIndex = dates.lastIndexOf(TLDate);

  //forEach메서드로 전체 요소들을 돌면서 html 코드로 데이터를 하나씩 수정한다.
  dates.forEach((date, i) => {
    const condition = ( i >= firstDateIndex && i < lastDateIndex + 1 )
      ? 'this'
      : 'other';
    dates[i] = `<td class="date"><span class=${condition}><h1>${date}</h1></span></td>`;
  });

  //------- Dates 그리기
  //.dates 태그의 innerHTML 프로퍼티에다 dates 배열에 join 메서드를 호출한 결과를 할당
  document.querySelector('.dates').innerHTML = dates.join('');

  //------- 오늘 날짜 그리기
  //1. 오늘 날짜에 맞는 date 객체 생성
  //2. month와 year가 오늘 날짜와 맞는지 비교
  //3. this 클래스를 가진 태그를 찾아서 반복문 실행
  //4. 해당 태그가 가지고 있는 날짜는 문자열이기에 +단항 연산자를 통해 숫자로 변경 후 오늘 날짜와 비교
  //5. 해당 태그에 today 클래스 추가. 오늘을 찾았기 때문에 break.
  const today = new Date();
  if (month === today.getMonth() && year === today.getFullYear()) { 
    for (let date of document.querySelectorAll('.this')) {  
      if (+date.innerText === today.getDate()) {    
        date.classList.add('today');    
        break;
      }
    }
  }
};

Calendar();

//------- 달력 이동 함수
//매달 1일로 설정하고 월 별 이동해야 월말일 때 달력 이동 시 2개월씩 이동하는 일이 없다. (1월 30일에 달력 이동 시 2월 30일은 없기 때문에 3월로 넘어가는 일을 방지해줌)

//------- 이전 달
const prevMonth = () => {
  date.setDate(1); 
  date.setMonth(date.getMonth() - 1);
  Calendar();
};

//------- 다음 달
const nextMonth = () => {
  date.setDate(1);
  date.setMonth(date.getMonth() + 1);
  Calendar();
};

//------- 작년
const prevYear = () => {
  date.setDate(1);
  date.setFullYear(date.getFullYear() - 1);
  Calendar();
};

//------- 내년
const nextYear = () => {
  date.setDate(1);
  date.setFullYear(date.getFullYear() + 1);
  Calendar();
};

//------- 오늘
const goToday = () => {
  date = new Date();
  Calendar();
};
