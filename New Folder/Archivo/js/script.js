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
        if( $("#con3").val() == "" || $("#con3a").val() == "" || $("#con3b").val() == "" || $("#con3c").val() == ""){
            input1.show();
            console.log("El formulario no ha sido enviado");
        } else {
            input1.hide();
            input2.show();
            console.log("El formulario fue enviado");
        };
        if($("#con3").val() == ""){
            $("#con3").parents(".3").addClass("has-error");
            console.log("ahi vas")
        } else {
            $("#con3").parents(".3").removeClass("has-error");
        };
        if($("#con3a").val() == ""){
            $("#con3a").parents(".3a").addClass("has-error");
            console.log("ahi vas")
        } else {
            $("#con3a").parents(".3a").removeClass("has-error");
        };
        if($("#con3b").val() == ""){
            $("#con3b").parents(".3b").addClass("has-error");
            console.log("ahi vas")
        } else {
            $("#con3b").parents(".3b").removeClass("has-error");
        };
    });
    $(".form-group .clear").click(function(){
        input2.hide();
        input1.hide();
        $("#con3").parents(".3").removeClass("has-error");
        $("#con3a").parents(".3a").removeClass("has-error");
        $("#con3b").parents(".3b").removeClass("has-error");
        $(".form-group")[0].reset();
    });
    return false
});

