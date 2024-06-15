
$.ajax({
  url : 'https://yhsdev.me/data/component.json',
  type : "GET",
  dataType : "json",
  success: (data) => {
    console.log(data);
  }
});