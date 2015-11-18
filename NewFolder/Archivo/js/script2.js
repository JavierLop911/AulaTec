$(document).ready(function(){
    var input=$("#submit");
    console.log(input);
    input.val("Suscribe");
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
    // Aqui cambia el boton "send" al boton "clear"
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
$(document).ready(function(){
    $(".menu-button").click(function(){
        if($(".menu").hasClass("menu-close")) {
            $(".menu").removeClass("menu-close")
            $(".menu").addClass("menu-open")
        } else {
            $(".menu").removeClass("menu-open")
            $(".menu").addClass("menu-close")
        }
    });
});
$(document).ready(function(){
    function slider() {
        setInterval(function(){
                var active = $(".slider li.active");
                if(active.length == 0) {
                    active = $(".slider li:first");
                    active.addClass("active");
                } else {
                    active.removeClass("active")
                    if(active.next("li").length > 0) {
                       active = active.next("li"); 
                    } else {
                        active = $(".slider li:first")
                    }
                        active.addClass("active");
                }
        }, 3000 ); 
    }
    
    slider();
});
// $(document).ready(function(){
//   if($(".carrousel").hasClass("move-left") ){
//       $(".arrow-right").click(function() {
//           $(".carrousel").removeClass("move-left")
//           return false
//       }) 
//   } else {
//       $(".arrow-left").click(function() {
//           $(".carrousel").addClass("move-left")
//           return false
//       })
//   }
// });
$(document).ready(function() {
    $(".arrow-left").click(function(event) {
        event.preventDefault()
         $(".arrow-right").removeClass("desactivated-right")
        $(".carrousel").animate({
            marginLeft:"-100%"
        }, 300 , function(){
            $(".arrow-left").addClass("desactivated-left")
        });
        return false
    });
});
$(document).ready(function() {
     $(".arrow-right").click(function(event) {
         event.preventDefault()
         $(".arrow-left").removeClass("desactivated-left")
        $(".carrousel").animate({
            marginLeft:"0%"
        }, 300 , function(){
            $(".arrow-right").addClass("desactivated-right")
        });
        return false
    });
});
$(document).ready(function(){
    
    
    function obtenerDatos(){
    
        $.ajax({
            url: 'http://jsonplaceholder.typicode.com/posts',
            method: 'GET'
        }).then(function(data) {
            console.log(data)
            
            var data = data;
    
        var html = "";
            for( var i = 0; i < 10 ; i++){
            console.log(data[1].title)
            html += '<div class="row new1"><div class="col-lg-5"><img src="http://placehold.it/211x132"></div><div class="lg-col-7"><p>'+data[1].body+'</p><p><a href="#" class="btn btn-primary">more</a></p></div></div>'
            $("#newAjax").html( html ) 
            }
            })
        }
    obtenerDatos();
});
