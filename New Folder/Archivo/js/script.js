// $(document).ready(function(){
//     var input=$("#submit");
//     console.log(input);
//     input.val("nememe@gmail.com");
// });
// $(".form-group .btn-primary").click(function(){
//      var input=$('#submit');
//      if(input.val() != "" && input.val().length > 3){
//          console.log("ya chingaste");
//      } else {
//          console.log("pelas puto");
//      }
//      return false;
// });
$(document).ready(function(){
    var input1=$('#con1');
    input1.hide();
    var input2=$('#con2');
    input2.hide();
    var input3=$('.has-error')
    input3.removeClass('has-error');
    $(".btncon").click(function(event){
    event.preventDefault()
        if($("#con3").val() == ""){
            $("#con3").parents(".3").addClass("has-error");
        } else {
            $("#con3").parents(".3").removeClass("has-error");
        };
        if($("#con3a").val() == ""){
            $("#con3a").parents(".3a").addClass("has-error");
        } else {
            $("#con3a").parents(".3a").removeClass("has-error");
        };
        if($("#con3b").val() == ""){
            $("#con3b").parents(".3b").addClass("has-error");
        } else {
            $("#con3b").parents(".3b").removeClass("has-error");
        };
        if($("#con3c").val() == ""){
            $("#con3c").parents(".3c").addClass("has-error");
        } else {
            $("#con3c").parents(".3c").removeClass("has-error");
        };
        if( $("#con3").val() == "" || $("#con3a").val() == "" || $("#con3b").val() == "" || $("#con3c").val() == ""){
            input1.show();
        } else {
            input2.show();
            input1.hide();
            $(".form-group")[0].reset();
            $("#con3").parents(".3").removeClass("has-error");
            $("#con3a").parents(".3a").removeClass("has-error");
            $("#con3b").parents(".3b").removeClass("has-error");
            $("#con3c").parents(".3c").removeClass("has-error");
        };
    });
    $(".form-group .clear").click(function(){
        input2.hide();
        input1.hide();
        $("#con3").parents(".3").removeClass("has-error");
        $("#con3a").parents(".3a").removeClass("has-error");
        $("#con3b").parents(".3b").removeClass("has-error");
        $("#con3c").parents(".3c").removeClass("has-error");
        $(".form-group")[0].reset();
    });
    $('#con3').focusout(function() {
        if($('#con3').val() == ""){
           $("#con3").parents(".3").addClass("has-error"); 
        }
    });
    $('#con3a').focusout(function(){
        if($('#con3a').val() == ""){
           $("#con3a").parents(".3a").addClass("has-error"); 
        }
    });
    $('#con3b').focusout(function(){
        if($('#con3b').val() == ""){
            $("#con3b").parents(".3b").addClass("has-error");
        }
    });
    $('#con3c').focusout(function(){
        if($('#con3c').val() == ""){
            $("#con3c").parents(".3c").addClass("has-error");
        }
    });
    $('#con3').focusin(function() {
        if($('#con3').val() == ""){
           $("#con3").parents(".3").removeClass("has-error"); 
        }
    });
    $('#con3a').focusin(function(){
        if($('#con3a').val() == ""){
           $("#con3a").parents(".3a").removeClass("has-error"); 
        }
    });
    $('#con3b').focusin(function(){
        if($('#con3b').val() == ""){
           $("#con3b").parents(".3b").removeClass("has-error");
        }
    });
    $('#con3c').focusin(function(){
        if($('#con3c').val() == ""){
           $("#con3c").parents(".3c").removeClass("has-error");
        }
        console.log("algo aqui")
    });
    return false
});

