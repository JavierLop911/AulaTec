$(document).ready(function(){
    var input=$("#submit");
    console.log(input);
    input.val("nememe@gmail.com");
});
$(".form-group .btn-primary").click(function(){
     var input=$('#submit');
     if(input.val() != "" && input.val().length > 3){
         console.log("ya chingaste");
     } else {
         console.log("pelas puto");
     }
     return false;
});
$(document).ready(function(){
    
});
