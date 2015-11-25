// $(document).ready(function(){
//     $(".boton").click(function(){
//         if($(".element").hasClass("show") ){
//             $(".element").addClass("hidden")
//             $(".element").removeClass("show")
//         } else {
//             $(".element").addClass("show")
//             $(".element").removeClass("hidden")
//         }
//     })
//     return false
// })
// $(document).ready(function(){
//     $(".boton1").click(function(event){
//         event.preventDefault
//         if($(".element1").hasClass("show") ){
//             $(".element1").addClass("hidden")
//             $(".element1").removeClass("show")
//             $(".arrow1").addClass("fa-arrow-circle-down")
//             $(".arrow1").removeClass("fa-arrow-circle-up")
            
//         } else {
//             $(".element1").addClass("show")
//             $(".element1").removeClass("hidden")
//             $(".arrow1").addClass("fa-arrow-circle-up")
//             $(".arrow1").removeClass("fa-arrow-circle-down")
//         } 
//     })
//     $(".boton2").click(function(){
//         if($(".element2").hasClass("show") ){
//             $(".element2").addClass("hide")
//             $(".element2").removeClass("show")
//             $(".arrow2").addClass("fa-arrow-circle-down")
//             $(".arrow2").removeClass("fa-arrow-circle-up")
//         } else {
//             $(".element2").addClass("show")
//             $(".element2").removeClass("hide")
//             $(".arrow2").addClass("fa-arrow-circle-up")
//             $(".arrow2").removeClass("fa-arrow-circle-down")
//         }
//     })
//     $(".boton3").click(function(){
//         if($(".element3").hasClass("show") ){
//             $(".element3").addClass("hidden")
//             $(".element3").removeClass("show")
//             $(".arrow3").addClass("fa-arrow-circle-down")
//             $(".arrow3").removeClass("fa-arrow-circle-up")
//         } else {
//             $(".element3").addClass("show")
//             $(".element3").removeClass("hidden")
//             $(".arrow3").addClass("fa-arrow-circle-up")
//             $(".arrow3").removeClass("fa-arrow-circle-down")
//         }
//     })
//     $(".boton4").click(function(){
//         if($(".element4").hasClass("show") ){
//             $(".element4").addClass("hidden")
//             $(".element4").removeClass("show")
//             $(".arrow4").addClass("fa-arrow-circle-down")
//             $(".arrow4").removeClass("fa-arrow-circle-up")
//         } else {
//             $(".element4").addClass("show")
//             $(".element4").removeClass("hidden")
//             $(".arrow4").addClass("fa-arrow-circle-up")
//             $(".arrow4").removeClass("fa-arrow-circle-down")
//         }
//     })
//     $(".boton5").click(function(){
//         if($(".element5").hasClass("show") ){
//             $(".element5").addClass("hidden")
//             $(".element5").removeClass("show")
//             $(".arrow5").addClass("fa-arrow-circle-down")
//             $(".arrow5").removeClass("fa-arrow-circle-up")
//         } else {
//             $(".element5").addClass("show")
//             $(".element5").removeClass("hidden")
//             $(".arrow5").addClass("fa-arrow-circle-up")
//             $(".arrow5").removeClass("fa-arrow-circle-down")
//         }
//     })
// })
$(document).ready(function(){
    $.ajax({
        url : 'https://aulatec01-javierlop911.c9.io/Curriculum/biografia.html' ,
        method: 'GET'
    }).then(function(data){
        var data = data
        $(".element1").html(data)
    })
    $.ajax({
        url : 'https://aulatec01-javierlop911.c9.io/Curriculum/educacion.html' ,
        method: 'GET'
    }).then(function(data){
        var data = data
        $(".element2").html(data)
    })
    $.ajax({
        url : 'https://aulatec01-javierlop911.c9.io/Curriculum/experiencia.html' ,
        method: 'GET'
    }).then(function(data){
        var data = data
        $(".element3").html(data)
    })
    $.ajax({
        url : 'https://aulatec01-javierlop911.c9.io/Curriculum/perfil.html' ,
        method: 'GET'
    }).then(function(data){
        var data = data
        $(".element4").html(data)
    })
    $.ajax({
        url : 'https://aulatec01-javierlop911.c9.io/Curriculum/habilidades.html' ,
        method: 'GET'
    }).then(function(data){
        var data = data
        $(".element5").html(data)
    })
})
$(document).ready(function(){
    $(".boton1").click(function(){
       $(".element1").fadeToggle(function(){
           if($(".arrow1").hasClass("fa-toggle-on")){
               $(".arrow1").removeClass("fa-toggle-on")
               $(".arrow1").addClass("fa-toggle-off")
          } else {
              $(".arrow1").removeClass("fa-toggle-off")
              $(".arrow1").addClass("fa-toggle-on")
          }
       })
    });
});
$(document).ready(function(){
    $(".boton2").click(function(){
       $(".element2").fadeToggle(function(){
           if($(".arrow2").hasClass("fa-toggle-on")){
               $(".arrow2").removeClass("fa-toggle-on")
               $(".arrow2").addClass("fa-toggle-off")
          } else {
              $(".arrow2").removeClass("fa-toggle-off")
              $(".arrow2").addClass("fa-toggle-on")
          }
       })
    });
});
$(document).ready(function(){
    $(".boton3").click(function(){
       $(".element3").fadeToggle(function(){
           if($(".arrow3").hasClass("fa-toggle-on")){
               $(".arrow3").removeClass("fa-toggle-on")
               $(".arrow3").addClass("fa-toggle-off")
          } else {
              $(".arrow3").removeClass("fa-toggle-off")
              $(".arrow3").addClass("fa-toggle-on")
          }
       })
    });
});
$(document).ready(function(){
    $(".boton4").click(function(){
       $(".element4").fadeToggle(function(){
           if($(".arrow4").hasClass("fa-toggle-on")){
               $(".arrow4").removeClass("fa-toggle-on")
               $(".arrow4").addClass("fa-toggle-off")
          } else {
              $(".arrow4").removeClass("fa-toggle-off")
              $(".arrow4").addClass("fa-toggle-on")
          }
       })
    });
});
$(document).ready(function(){
    $(".boton5").click(function(){
       $(".element5").fadeToggle(function(){
           if($(".arrow5").hasClass("fa-toggle-on")){
               $(".arrow5").removeClass("fa-toggle-on")
               $(".arrow5").addClass("fa-toggle-off")
          } else {
              $(".arrow5").removeClass("fa-toggle-off")
              $(".arrow5").addClass("fa-toggle-on")
          }
       })
    });
});