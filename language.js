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
      console.log(data['en'])
      datas = data[language];
      for(let key in datas) {
        let keys = Object.keys(datas[key]);
        $("#"+keys).html(datas[key][keys]);
      }
    },
    error : (request, stats, error) => {
      if(localStorage.getItem("language") == "ko") {
        document.body.innerHTML = `
        <h1>${stats}, ${error}, ${request}</h1>
        <span id="errorMessage">언어 정보 로딩중 에러가 발생했습니다. 나중에 다시 시도해주세요</span>
        `
      }else {
        document.body.innerHTML = `
        <h1>${stats}, ${error}, ${request}</h1>
        <span id="errorMessage">Error loading language information. Please try again later</span>
        `
      }
    }
  });
}

function changeLang() {
  if(localStorage.getItem("language") == 'ko') {
    localStorage.removeItem("language");
    localStorage.setItem("language", 'en');
  }else {
    localStorage.removeItem("language");
    localStorage.setItem("language", 'ko');
  }
  location.reload();
}