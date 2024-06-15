let url = "https://yhsdev.me/data/component.json";

console.log(localStorage.getItem("language"));
if(!localStorage.getItem("language")) {
  localStorage.setItem("language", "ko");
  setComponets(localStorage.getItem("language"));
}else {
  setComponets(localStorage.getItem("language"));
}


function setComponets(language) {
  let datas = "";
  $.ajax({
    url : url,
    type : "GET",
    dataType : "json",
    success: (data) => {
      datas = data[language];
      console.log(datas);
      console.log(Object.keys(datas))
      Object.keys(datas).forEach((element) => {
        console.log(element)
        $('#'+element).html(datas[element]);
      });
    },
    error : (request, stats, error) => {
      document.body.innerHTML = `
      <h1>${stats}, ${error}, ${request}</h1>
      언어설정 로딩중 오류가 발생했습니다 잠시후 다시 시도해주세요
      `
    }
  });
}

function changeLang(language) {
  localStorage.removeItem("language");
  localStorage.setItem("language", language);
  location.reload();
}