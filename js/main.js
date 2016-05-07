function AutoScroll(){     //自动滚动
  var li=$("#slide>ul");
  li.animate({marginLeft:"-800px"},1000,function(){
              li.css({marginLeft:0}).find("li:first").appendTo(li);
  })
}
$(function(){
  //两秒后调用
  var _scrolling=setInterval("AutoScroll()",3000);
  $("#slide>ul").hover(function(){
    //鼠标移动DIV上停止
    clearInterval(_scrolling);
  },function(){
    //离开继续调用
    _scrolling=setInterval("AutoScroll()",3000);
  });
/*左右击轮播*/
  $(".arrleft").click(function(){
     var li=$("#slide>ul");
     li.animate({marginLeft:"-880px"},500,function(){
              li.css({marginLeft:0}).find("li:first").appendTo(li);
          });
     clearInterval(_scrolling);
});
  $(".arrright").click(function(){
     var li=$("#slide>ul");
     li.animate({marginLeft:"880px"},500,function(){
              li.css({marginLeft:0}).find("li:last").prependTo(li);
          });       
});
  /*hover左右箭头时取消自动轮播*/
  $(".arrleft").hover(function(){
    clearInterval(_scrolling);
  });
  $(".arrright").hover(function(){
    clearInterval(_scrolling);
  });

/*滚动出现返回顶部按钮*/
$(window).scroll(function(){
          height = $(window).scrollTop();
          if(height > 300){
            $('.backtop').fadeIn();
          }else{
            $('.backtop').fadeOut();
          };
});
/*backtop返回顶部的平滑动画*/
$(".backtop").click(function(){
     $('body').animate({scrollTop:0},'swing');  
});
/*导航栏的平滑效果*/
$(".li-home").click(function(){
     $('body').animate({scrollTop:0},'swing');  
});
$(".li-hotmilk").click(function(){
     $('body').animate({scrollTop:510},'swing');  
});
$(".li-newmilk").click(function(){
     $('body').animate({scrollTop:980},'swing');  
});
$(".li-mymilkbox").click(function(){
     $('body').animate({scrollTop:1700},'swing');  
});

});

