$(window).scroll(function(e){
  if ($(window).scrollTop()<=0)
    $(".explore,.navbar").addClass("at_top")
  else
    $(".explore,.navbar").removeClass("at_top")
                 })

$(document).on('click', 'a', function(event){
  event.preventDefault()
  var target= $(this).attr("href")
  $('html,body').animate({
    scrollTop: $(target).offset().top
  },500)
  
})


$(function(){
  for(var i=0;i<7*7;i++){
    $("#board").append($("<li>"))
    $("#board2").append($("<li>"))
    // $("#board li").text(function(index){return index})
  }
  
})
 
// 奇偶數   
var time1=1
function changeColor(){
  time1 += 1
  if (time1 > 0){
    setTimeout(changeColor,200)
  }
  if (time1 % 18 == 0){
    $("#board li:even").css("background-color" ,"LightSkyblue")
    $("#board li:odd").css("background-color" ,"#555")}
  if (time1 % 18 == 8){
    $("#board li:even").css("background-color" ,"#79a1b5")
    $("#board li:odd").css("background-color" ,"#555")}
  if (time1 % 18 == 9){
    $("#board li:odd").css("background-color" ,"LightSkyblue")
    $("#board li:even").css("background-color" ,"#555")}
  if (time1 % 18 == 17){
    $("#board li:odd").css("background-color" ,"#79a1b5")
    $("#board li:even").css("background-color" ,"#555")}
    
  if (time1 > 18){
    time1 = 1
    }
    
}

changeColor()


var time2=1
function changeColor2(){
  time2 += 1
  if (time2 > 0){
    setTimeout(changeColor2,300)
  }
  if (time2 % 7 == 0){
    $("#board2 li:nth-child(7n)").css("background-color" ,"purple")
    $("#board2 li:nth-child(7n+6)").css("background-color" ,"#555")
  }

  if (time2 % 7 == 1){
    $("#board2 li:nth-child(7n+1)").css("background-color" ,"red")
    $("#board2 li:nth-child(7n)").css("background-color" ,"#555")
  }

  if (time2 % 7 == 2){
    $("#board2 li:nth-child(7n+2)").css("background-color" ,"orange")
    $("#board2 li:nth-child(7n+1)").css("background-color" ,"#555")
  }

  if (time2 % 7 == 3){
    $("#board2 li:nth-child(7n+3)").css("background-color" ,"yellow")
    $("#board2 li:nth-child(7n+2)").css("background-color" ,"#555")
  }

  if (time2 % 7 == 4){
    $("#board2 li:nth-child(7n+4)").css("background-color" ,"lime")
    $("#board2 li:nth-child(7n+3)").css("background-color" ,"#555")
  }

  if (time2 % 7 == 5){
    $("#board2 li:nth-child(7n+5)").css("background-color" ,"cyan")
    $("#board2 li:nth-child(7n+4)").css("background-color" ,"#555")
  }
    
  if (time2 % 7 == 6){
    $("#board2 li:nth-child(7n+6)").css("background-color" ,"blue")
    $("#board2 li:nth-child(7n+5)").css("background-color" ,"#555")
  }

    
  if (time2 > 6){
    time2 = 0
    }
    
}

changeColor2() 
