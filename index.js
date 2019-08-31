var name;
$(".save-button").click(function(){
  name =$(".name-box").val();
  if(name==''){
    alert("Name field is empty")
  }
});
$(".name-head").html(name);
