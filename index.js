var name,url,organisation,position,objective,email,mobile,address,linkedin;
var workOrganisation,workPosition,workStartdate,workEnddate,workAbout1,workAbout2;

$(".save-name").click(function(){
  name=$(".name-box").val();
});

$(".save-position").click(function(){
  position=$(".position-box").val();
});


$(".save-orgainsation").click(function(){
  organistation=$(".orgainsation-box").val();
});


$(".save-objective").click(function(){
  objective=$(".objective-box").val();
});

$(".save-image").click(function(){
  url=$(".image-box").val();
});


$(".save-email").click(function(){
  email=$(".email-box").val();
});

$(".save-mobile").click(function(){
  mobile=$(".mobile-box").val();
});


$(".save-address").click(function(){
  address=$(".address-box").val();
});

$(".save-linkedin").click(function(){
  linkedin=$(".linkedin-box").val();
});


$(".save-work-position").click(function(){
  workPosition=$(".work-position-box").val();
});


$(".save-work-orgainsation").click(function(){
  workOrganisation=$(".work-organisation-box").val();
});



$(".save-startdate").click(function(){
  workStartdate=$(".startdate-box").val();
});

$(".save-enddate").click(function(){
  workEnddate=$(".enddate-box").val();
});


$(".save-about-work-1").click(function(){
  workAbout1=$(".about-work-1-box").val();
});

$(".save-about-work-2").click(function(){
  workAbout2=$(".about-work-2-box").val();
});
