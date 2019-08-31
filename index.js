var url,name,organisation,position,objective,email,mobile,address,linkedin;
var workOrganisation,workPosition,workStartdate,workEnddate,workAbout1,workAbout2;
$("#resume").css("visibility", "hidden");
  $(".save-position").click(function(){
    position=$(".position-box").val();
    $(".save-position").attr("class","btn btn-success");
  });

  $(".save-name").click(function(){
      name=$(".name-box").val();
      $(".save-name").attr("class","btn btn-success");
  });

  $(".save-organisation").click(function(){
      $(".save-organisation").attr("class","btn btn-success");
    organisation=$(".organisation-box").val();
  });


  $(".save-objective").click(function(){
      $(".save-objective").attr("class","btn btn-success");
    objective=$(".objective-box").val();
  });

  $(".save-image").click(function(){
      $(".save-image").attr("class","btn btn-success");
    url=$(".image-box").val();
  });


  $(".save-email").click(function(){
      $(".save-email").attr("class","btn btn-success");
    email=$(".email-box").val();
  });

  $(".save-mobile").click(function(){
      $(".save-mobile").attr("class","btn btn-success");
    mobile=$(".mobile-box").val();
  });


  $(".save-address").click(function(){
    $(".save-address").attr("class","btn btn-success");
    address=$(".address-box").val();
  });

  $(".save-linkedin").click(function(){
      $(".save-linkedin").attr("class","btn btn-success");
    linkedin=$(".linkedin-box").val();
  });


  $(".save-work-position").click(function(){
      $(".save-work-position").attr("class","btn btn-success");
    workPosition=$(".work-position-box").val();
  });


  $(".save-work-organisation").click(function(){
      $(".save-work-organisation").attr("class","btn btn-success");
    workOrganisation=$(".work-organisation-box").val();
  });



  $(".save-startdate").click(function(){
      $(".save-startdate").attr("class","btn btn-success");
    workStartdate=$(".startdate-box").val();
  });

  $(".save-enddate").click(function(){
      $(".save-enddate").attr("class","btn btn-success");
    workEnddate=$(".enddate-box").val();
  });


  $(".save-about-work-1").click(function(){
      $(".save-about-work-1").attr("class","btn btn-success");
    workAbout1=$(".about-work-1-box").val();
  });

  $(".save-about-work-2").click(function(){
      $(".save-about-work-2").attr("class","btn btn-success");
    workAbout2=$(".about-work-2-box").val();
  });


$(".generate-button").click(function(){
  $("#form").css("visibility", "hidden");
  $("#form").css("display", "none");
  $("#resume").css("visibility", "visible");
  $(".name").html(name);
  $(".position").html(position);
  $(".objective").html(objective);
  $(".email").html(email);
  $(".mobile").html(mobile);
  $(".address").html(address);
  $(".linkedin").html(linkedin);
  $(".work-experience-organisation").html(workOrganisation);
  $(".work-experience-position").html(workPosition);
  $(".work-experience-startdate").html(workStartdate);
  $(".work-experience-enddate").html(workEnddate);
  $(".work-about-1").html(workAbout1);
  $(".work-about-2").html(workAbout2);
  $(".profile-img").attr("src",url);


});
