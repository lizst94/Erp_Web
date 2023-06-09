$(document).ready(function () {
    var link =  document.location.href; //현재 접속한 페이지의 url을 가져옵니다.
    link = link.split("/");
    var myUrl ="";
    if(link[3] == "buys"){  //현재 접속한 url을 가공하여 구매 ,판매인지 구분합니다.
        myUrl = "/buys/check";
    }else{
        myUrl = "/sellers/check";
    }

    var token = $('meta[name="_csrf"]').attr('content');
    var header = $('meta[name="_csrf_header"]').attr('content');

    var table = $('#myTable').DataTable({
        ajax: {
            "url":myUrl,
            "type":"GET",
            "dataType":"JSON",
            "autoWidth": false,
            beforeSend:function(xhr){
                xhr.setRequestHeader(header,token);
            }
        },
        columns: [
            {"data": "acCode"},
            {"data": "acCategory"},
            {"data": "acCreateName"},
            {"data": "acName"},
            {"data": "acRegDate"}
        ],
        "language": {
             "emptyTable": "데이터가 없어요.",
             "lengthMenu": "페이지당 _MENU_ 개씩 보기",
             "info": "현재 _START_ - _END_ / _TOTAL_건",
             "infoEmpty": "데이터 없음",
             "infoFiltered": "( _MAX_건의 데이터에서 필터링됨 )",
             "search": "검색: ",
             "zeroRecords": "일치하는 데이터가 없어요.",
             "loadingRecords": "로딩중...",
             "processing":     "잠시만 기다려 주세요...",
             "paginate": {
                 "next": "다음",
                 "previous": "이전"
             }
        },
        columnDefs: [
           {
            //0번째 열에 체크 박스 넣기
             targets : 0,
             orderable: false,
             'render' : function(data, type, full, meta) {
                return '<input type="checkbox" name="checker" value="'+data+'">';
              }
           }
        ],
         initComplete: function(settings, json) {
         //all 체크 박스 누를때 동작하는 함수
               $("#checkall").prop("checked",false);
               $("#checkall").click(function(){
                 if($(this).prop("checked")){
                     $('input[name="checker"]').prop('checked',true);
                 }
                 else {
                     $('input[name="checker"]').prop('checked',false);
                 }
            });
         }
    });
    //modal 관련 설정.
    const modal = document.getElementById("modal")
    const btnModal = document.getElementById("btn-modal")
    const closeBtn = modal.querySelector(".close-area")

    btnModal.addEventListener("click", e => {
        modalOn()
    })

    //x 버튼 누를시 나가짐
    closeBtn.addEventListener("click", e => {
        modalOff()
    })

    //esc 누를시 modal 나가짐
    window.addEventListener("keyup", e => {
        if(isModalOn() && e.key === "Escape") {
            modalOff()
        }
    })

});

function modalOn() {
    modal.style.display = "flex"
}
function isModalOn() {
    return modal.style.display === "flex"
}
function modalOff() {
   modal.style.display = "none"
   $('#myTable').DataTable().ajax.reload();
   $("#tableUpdate")[0].reset();
}

function addressSh(){
    /*다음 우편번호 검색*/
    new daum.Postcode({
        oncomplete: function(data) {
        document.querySelector("#acAddress").value =  data.address
        }
    }).open();
}
//거래처 등록,수정 함수
function addAccount(){
    var token = $('meta[name="_csrf"]').attr('content');
    var header = $('meta[name="_csrf_header"]').attr('content');

    var formData = new FormData(document.forms.namedItem("tableUpdate"));

    // 초기 등록시에는 code의 값이 없을수밖에 없으니 code에 값이 없으면 배열에 저장하지 않습니다.
    var checkKey = "code";
    var array = {}
    for(var item of formData.entries()){
        if(item[0] == checkKey){
            if(item[1] != null && item[1] != ''){
                array[item[0]]=item[1];
            }
        }else{
            array[item[0]]=item[1];
        }
    }
    var paramData = JSON.stringify(array);

    $.ajax({
        url: "/accounts/addAccount",
        type: "POST",
        contentType:"application/json",
        data: paramData,
        beforeSend:function(xhr){
            xhr.setRequestHeader(header,token);
        },
        success: function () {
            $('#myTable').DataTable().ajax.reload();
            modalOff();
        },
        error: function (request, status) {
            alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n");
        }
    });
};

//데이터 베이스에 1건의 데이터를 가져옵니다.
function update(){

    var token = $('meta[name="_csrf"]').attr('content');
    var header = $('meta[name="_csrf_header"]').attr('content');

    var checkList = $('input[name=checker]:checked');

    if(checkList.length > 1 || checkList.length == 0 ){
        alert('데이터 수정은 1개씩 가능합니다.');
        return
    }
    var code = checkList.val();

    var paramData = JSON.stringify(code);

     $.ajax({
        url: "/accounts/updateAccount",
        type: "POST",
        contentType:"application/json",
        data: paramData,
        dataType: "json",
        beforeSend:function(xhr){
            xhr.setRequestHeader(header,token);
        },
        success: function (data) {
            var key = Object.keys(data);    //넘겨 받은 데이터의 키 값
            const entries = Object.entries(data);

            $("#accountCategory").val(data.category).prop("selected", true); //셀렉트 박스 체크

            for (let [key, value] of entries) {
              console.log(`${key}: ${value}`);
              $('input[name='+key+']').val(value);
            }
            modalOn();
        },
        error: function (request, status) {
            alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n");
        }
    });
}
//웹페이지 삭제 기능.
function deletePageN(){

    var token = $('meta[name="_csrf"]').attr('content');
    var header = $('meta[name="_csrf_header"]').attr('content');

    var checkList = $('input[name=checker]:checked');

    if(checkList.length == 0 ){
        alert('1개 이상 선택해주세요.');
        return
    }

    var values = [];
    checkList.each(function() {
      values.push($(this).val());
    });
    var paramData = JSON.stringify(values);

     $.ajax({
        url: "/accounts/deleteAccount",
        type: "POST",
        contentType:"application/json",
        data: paramData,
        beforeSend:function(xhr){
            xhr.setRequestHeader(header,token);
        },
        success: function () {
            alert("success");
            $('#myTable').DataTable().ajax.reload();
        },
        error: function (request, status) {
            alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n");
        }
    });
}