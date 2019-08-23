
//1. 준비물 목록을 위한 배열 선언
var itemList = [];                                          // 다른 선언 방법 : var itemList = new Array();

//2. html에서 id 값이 add인 버튼을 addBtn 객체로 설정
var addBtn = document.querySelector("#add");
// add 버튼이 눌렸을 때 addList 함수가 실행됨
addBtn.addEventListener("click", addList);                  // 다른 선언 방법 : addBtn.onclick = addlist;

//addList 함수 : '추가' 버튼을 눌렀을 때 배열에 준비물을 추가함
function addList(){
    // id가 item인 텍스트창에 들어온 값을 item 변수에 저장
    var item = document.querySelector("#item").value;

    console.log(item);  // 브라우저의 개발자 콘솔에서 내용 확인
    
    // 텍스트창에 내용이 없는 경우에는 추가되지 않도록 하는 조건문
    if(item != null){
        //item을 itemList 배열에 추가
        itemList.push(item);
        //텍스트창에 있는 내용 삭제
        document.querySelector("#item").value = ""; // #item의 value값을 빈 칸으로 두겠다는 뜻
        //포커스를 텍스트창에 둠
        document.querySelector("#item").focus();
    }
    // 준비물목록을 화면에 출력
    showList();
}

//showList 함수
function showList(){
    
    // 목록 만들기 : 반복문을 사용해 저장된 준비물목록을 html태그로 화면에 표시
        // close 클래스의 x버튼 생성
    var list = "<ul>";
    for(var i=0; i<itemList.length; i++){
        list += "<li>" + itemList[i] + "<span class = 'close' id = " + i + ">X<span></li>";
    }
    list += "</ul>";
    
    document.querySelector('#itemList').innerHTML = list; // innerHTML이란 HTML에 해당 항목을 끼워주라는 뜻

    var remove = document.querySelectorAll(".close");   // 클래스가 close인 요소들을 배열 형태로 remove에 저장
    
    // 화면에서 remove 할 배열의 모든 요소들을 확인하고 특정 요소를 클릭하면
    // removeList 실행
    for(var i=0; i<remove.length; i++) {
        remove[i].addEventListener("click", removeList);
    }
}

//removeList 함수
function removeList(){
    var id = this.getAttribute("id")
    itemList.splice(id, 1);
    showList();
}