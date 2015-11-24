$(document).ready(function(){
    $(".boton").click(function(){
        if($(".element").hasClass("show") ){
            $(".element").addClass("hidden")
            $(".element").removeClass("show")
        } else {
            $(".element").addClass("show")
            $(".element").removeClass("hidden")
        }
    })
    return false
})
$(document).ready(function(){
    $(".boton1").click(function(){
        if($(".element1").hasClass("show") ){
            $(".element1").addClass("hidden")
            $(".element1").removeClass("show")
        } else {
            $(".element1").addClass("show")
            $(".element1").removeClass("hidden")
        }
    })
    $(".boton2").click(function(){
        if($(".element2").hasClass("show") ){
            $(".element2").addClass("hide")
            $(".element2").removeClass("show")
        } else {
            $(".element2").addClass("show")
            $(".element2").removeClass("hide")
        }
    })
    $(".boton3").click(function(){
        if($(".element3").hasClass("show") ){
            $(".element3").addClass("hidden")
            $(".element3").removeClass("show")
        } else {
            $(".element3").addClass("show")
            $(".element3").removeClass("hidden")
        }
    })
    $(".boton4").click(function(){
        if($(".element4").hasClass("show") ){
            $(".element4").addClass("hidden")
            $(".element4").removeClass("show")
        } else {
            $(".element4").addClass("show")
            $(".element4").removeClass("hidden")
        }
    })
    $(".boton5").click(function(){
        if($(".element5").hasClass("show") ){
            $(".element5").addClass("hidden")
            $(".element5").removeClass("show")
        } else {
            $(".element5").addClass("show")
            $(".element5").removeClass("hidden")
        }
    })
})