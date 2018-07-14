
$(function(){
	//鼠标经过右侧导航项，显示下拉列表对应的内容。
	$('.mutao').hover(function(){
		$('.mutao').addClass('xianshi');
		$('.mutao .none').css({
			'display':'block'
		});
		$('hr').width(1200);
	},function(){
		$('.mutao').removeClass('xianshi');
		$('.mutao .none').css({
			'display':'none'
		})
	})
	$('.shoucang').hover(function(){
		$('.shoucang').addClass('xianshi');
		$('.shoucang .none').css({
			'display':'block'
		});
		$('hr').width(1200);
	},function(){
		$('.shoucang').removeClass('xianshi');
		$('.shoucang .none').css({
			'display':'none'
		})
	})
	$('.maijia').hover(function(){
		$('.maijia').addClass('xianshi');
		$('.maijia .none').css({
			'display':'block'
		});
		$('hr').width(1200);
	},function(){
		$('.maijia').removeClass('xianshi');
		$('.maijia .none').css({
			'display':'none'
		})
	})
	$('.kefu').hover(function(){
		$('.kefu').addClass('xianshi');
		$('.kefu .none').css({
			'display':'block'
		});
		$('hr').width(1200);
	},function(){
		$('.kefu').removeClass('xianshi');
		$('.kefu .none').css({
			'display':'none'
		})
	})
	//点击登录，弹出窗口
	var dlHtml=$('.logins').html();
	var zcHtml=$('.loginBefores').html();
	$('#denl').click(function(){
        showDl(dlHtml);
	});
	//点击注册字体
	$('#dl .two').click(function(){
		//登录字体变成黑色
        $('#dl .one').css({'color':'black'});
        //清除登录字体有红色下划线
        $('#dl .oneHr').hide();
        //注册字体变成红色
        $('#dl .two').css({'color':'red'});
        //注册字体有红色下划线
        $('#dl .twoHr').show();
        //调用注册页面函数
        showZc(zcHtml);
	});
	//点击登录字体
    $('#dl .one').click(function(){
    	//登录字体变成红色
        $('#dl .one').css({'color':'red'});
        //登录字体有红色下划线
        $('#dl .oneHr').show();
        //注册字体变成黑色
        $('#dl .two').css({'color':'black'});
        //清除注册字体有红色下划线
        $('#dl .twoHr').hide()
        //调用登录页面函数
        showDl(dlHtml);
	});
	//点击关闭按钮，登录页面关闭
	$('#cha').click(function(){
	    $('#boxes').hide();
        $('#dl').hide();
        $('#dl .two').add('#dl .one').css({'color':'black'});
        $('#dl .twoHr').add('#dl .oneHr').hide();
    });

    
})

//显示登录信息函数
function showDl(dlHtml){
	$('#boxes').show();
    $('#dl').show();
    $('#dl .one').css({'color':'red'});
    $('#dl .oneHr').show();
    $('#content').html(dlHtml);
    $('#dl').height(400);
    //表单验证
    //登录页面
    $('.login .user').blur(function(){
        var usname=$(this).val();
        if (usname.length!=11 || isNaN(usname)) {
        	$('.login .error1').show();
        }
    })
    //验证密码
    $('.login .psw').blur(function(){
    	var pw=$(this).val();
    	if(pw.length!=11 || isNaN(pw)){
            $('.login .error2').show();
    	}
    })
}
//显示注册信息函数
function showZc(zcHtml){
	$('#content').html("");
	$('#content').html(zcHtml);
	//表单验证
    //注册页面
	$('.loginBefore .user').blur(function(){
        var usname=$(this).val();
        if (usname.length!=11 || isNaN(usname)) {
        	$('.loginBefore .error1').show();
        }
    })
    //验证验证码
    $('.loginBefore .yzm').blur(function(){
        var usname=$(this).val();
        if (usname.length!=11 || isNaN(usname)) {
        	$('.loginBefore .error2').show();
        }
    })  
}



//楼层区
$('#mz').mouseover(function(){
	$(this).css({'color':'red'});
    $('#floor .img').hide();
    $('#floor .img3').hide();
    $('#floor .img2').show();
    $('#dp').css({'color':'rgba(7,17,27,0.5)'});
    $('#gz').css({'color':'rgba(7,17,27,0.5)'});
    $('#floor .word img').css({'right':'110px'});
});
$('#dp').mouseover(function(){
	$(this).css({'color':'red'});
    $('#floor .img2').hide();
    $('#floor .img3').hide();
    $('#floor .img').show();
    $('#mz').css({'color':'rgba(7,17,27,0.5)'});
    $('#gz').css({'color':'rgba(7,17,27,0.5)'});
    $('#floor .word img').css({'right':'178px'});
});
$('#gz').mouseover(function(){
	$(this).css({'color':'red'});
    $('#floor .img2').hide();
    $('#floor .img').hide();
    $('#floor .img3').show();
    $('#mz').css({'color':'rgba(7,17,27,0.5)'});
    $('#dp').css({'color':'rgba(7,17,27,0.5)'});
    $('#floor .word img').css({'right':'45px'});
});

//二楼
$('#mz2').mouseover(function(){
	$(this).css({'color':'red'});
    $('#floor2 .img').hide();
    $('#floor2 .img3').hide();
    $('#floor2 .img2').show();
    $('#dp2').css({'color':'rgba(7,17,27,0.5)'});
    $('#gz2').css({'color':'rgba(7,17,27,0.5)'});
    $('#floor2 .word img').css({'right':'145px'});
});
$('#dp2').mouseover(function(){
	$(this).css({'color':'red'});
    $('#floor2 .img2').hide();
    $('#floor2 .img3').hide();
    $('#floor2 .img').show();
    $('#mz2').css({'color':'rgba(7,17,27,0.5)'});
    $('#gz2').css({'color':'rgba(7,17,27,0.5)'});
    $('#floor2 .word img').css({'right':'228px'});
});
$('#gz2').mouseover(function(){
	$(this).css({'color':'red'});
    $('#floor2 .img2').hide();
    $('#floor2 .img').hide();
    $('#floor2 .img3').show();
    $('#mz2').css({'color':'rgba(7,17,27,0.5)'});
    $('#dp2').css({'color':'rgba(7,17,27,0.5)'});
    $('#floor2 .word img').css({'right':'50px'});
});

//三楼
$('#mz3').mouseover(function(){
	$(this).css({'color':'red'});
    $('#floor3 .img').hide();
    $('#floor3 .img3').hide();
    $('#floor3 .img2').show();
    $('#dp3').css({'color':'rgba(7,17,27,0.5)'});
    $('#gz3').css({'color':'rgba(7,17,27,0.5)'});
    $('#floor3 .word img').css({'right':'145px'});
});
$('#dp3').mouseover(function(){
	$(this).css({'color':'red'});
    $('#floor3 .img2').hide();
    $('#floor3 .img3').hide();
    $('#floor3 .img').show();
    $('#mz3').css({'color':'rgba(7,17,27,0.5)'});
    $('#gz3').css({'color':'rgba(7,17,27,0.5)'});
    $('#floor3 .word img').css({'right':'228px'});
});
$('#gz3').mouseover(function(){
	$(this).css({'color':'red'});
    $('#floor3 .img2').hide();
    $('#floor3 .img').hide();
    $('#floor3 .img3').show();
    $('#mz3').css({'color':'rgba(7,17,27,0.5)'});
    $('#dp3').css({'color':'rgba(7,17,27,0.5)'});
    $('#floor3 .word img').css({'right':'50px'});
});

//四楼
$('#mz4').mouseover(function(){
	$(this).css({'color':'red'});
    $('#floor4 .img').hide();
    $('#floor4 .img3').hide();
    $('#floor4 .img2').show();
    $('#dp4').css({'color':'rgba(7,17,27,0.5)'});
    $('#gz4').css({'color':'rgba(7,17,27,0.5)'});
    $('#floor4 .word img').css({'right':'155px'});
});
$('#dp4').mouseover(function(){
	$(this).css({'color':'red'});
    $('#floor4 .img2').hide();
    $('#floor4 .img3').hide();
    $('#floor4 .img').show();
    $('#mz4').css({'color':'rgba(7,17,27,0.5)'});
    $('#gz4').css({'color':'rgba(7,17,27,0.5)'});
    $('#floor4 .word img').css({'right':'228px'});
});
$('#gz4').mouseover(function(){
	$(this).css({'color':'red'});
    $('#floor4 .img2').hide();
    $('#floor4 .img').hide();
    $('#floor4 .img3').show();
    $('#mz4').css({'color':'rgba(7,17,27,0.5)'});
    $('#dp4').css({'color':'rgba(7,17,27,0.5)'});
    $('#floor4 .word img').css({'right':'64px'});
});

//五楼
$('#mz5').mouseover(function(){
	$(this).css({'color':'red'});
    $('#floor5 .img').hide();
    $('#floor5 .img3').hide();
    $('#floor5 .img2').show();
    $('#dp5').css({'color':'rgba(7,17,27,0.5)'});
    $('#gz5').css({'color':'rgba(7,17,27,0.5)'});
    $('#floor5 .word img').css({'right':'145px'});
});
$('#dp5').mouseover(function(){
	$(this).css({'color':'red'});
    $('#floor5 .img2').hide();
    $('#floor5 .img3').hide();
    $('#floor5 .img').show();
    $('#mz5').css({'color':'rgba(7,17,27,0.5)'});
    $('#gz5').css({'color':'rgba(7,17,27,0.5)'});
    $('#floor5 .word img').css({'right':'228px'});
});
$('#gz5').mouseover(function(){
	$(this).css({'color':'red'});
    $('#floor5 .img2').hide();
    $('#floor5 .img').hide();
    $('#floor5 .img3').show();
    $('#mz5').css({'color':'rgba(7,17,27,0.5)'});
    $('#dp5').css({'color':'rgba(7,17,27,0.5)'});
    $('#floor5 .word img').css({'right':'50px'});
});

//购物车

$('.main-head .logo #right').hover(function(){
	$('.main-head .logo .right').hide();
	$('.main-head .logo .right2').show();
	$('.shop').show();
},function(){

	$('.main-head .logo .right2').hide();
	$('.main-head .logo .right').show();
	$('.shop').hide();
})
$('.shop').hover(function(){
	$('.main-head .logo .right').hide();
	$('.main-head .logo .right2').show();
	$('.shop').show();
},function(){
	$('.main-head .logo .right2').hide();
	$('.main-head .logo .right').show();
	$('.shop').hide();
})

//banner区
//图片轮播
var timer=null,
    slides=$('#slide .slide div'),
    dots=$('#dot span'),
    index=0;
$('#slide').mouseout(function(){
	timer=setInterval(function(){
        index++;
        if (index==slides.length) {
        	index=0;
        }       
        changeImg(index);
	},1000);
});
$('#slide').mouseout();

$('#slide').mouseover(function(){
	if (timer) {
		clearInterval(timer);
	}
})

/*小圆点*/
for(var d=0;d<slides.length;d++){
	dots.eq(d).attr({'id':d});
    dots.eq(d).click(function(){
        index=$(this).attr('id');
        changeImg(index);
    })
}
/*上一张 下一张*/
$('#next').click(function(){
	index++;
	if (index>=slides.length) {
		index=0;
	}
	changeImg(index);
})
$('#prev').click(function(){
	index--;
	if (index<0) {
		index=slides.length-1;
	}
	changeImg(index);
})


function changeImg(index){
	for(var i=0;i<slides.length;i++){
		slides.eq(i).hide();
		dots.eq(i).removeClass('actives');
	}
    slides.eq(index).show();
    dots.eq(index).addClass('actives');
}

/*导航菜单*/
var daohang=$('#lleft .dhleft');
for(var w=0;w<daohang.length;w++){
	if (w%2==0) {
		daohang.eq(w).hover(function(){
			$(this).addClass('daohangs');
			$('#small-dh1').show();
		},function(){
			$('#small-dh1').hover(function(){
				$(this).show();
			},function(){
				$(this).hide();
			})
			$(this).removeClass('daohangs');
			$('#small-dh1').hide();
		})
		
	}else{
		daohang.eq(w).hover(function(){
			$(this).addClass('daohangs');
			$('#small-dh2').show();
		},function(){
			$('#small-dh2').hover(function(){
				$(this).show();
			},function(){
				$(this).hide();
			})
			$(this).removeClass('daohangs');
			$('#small-dh2').hide();
		})
	}
}

/*右侧导航*/
var bboxx=$('.bbox1').next();
for(var e=0;e<bboxx.length;e++){
	bboxx.eq(e).hover(function(){
		$(this).prev().removeClass('bbox1').addClass('bbox2');
		$(this).removeClass('img').addClass('img2');
	},function(){
		$(this).prev().removeClass('bbox2').addClass('bbox1');
		$(this).removeClass('img2').addClass('img');
	})
}

$('#ttop').click(function(){
	$(window).scrollTop(0);
})


/*左侧楼层导航*/
var floor=$('.floordh span a');
var arr=['服装','美妆','手机','电器','电脑'];
for(var r=0;r<floor.length;r++){
	floor.eq(r).attr({'id':r});
	floor.eq(r).click(function(){
		for(var c=0;c<floor.length;c++){
			var arr1=['F1','F2','F3','F4','F5'];
			floor.eq(c).text(arr1[c]).css({'color':'rgba(7,17,27,0.3)'});
		}
		$(this).text(arr[$(this).attr('id')]).addClass('z').css({'color':'red'});
	});
	floor.eq(r).mouseover(function(){
		for(var c=0;c<floor.length;c++){
			var arr1=['F1','F2','F3','F4','F5'];
			floor.eq(c).text(arr1[c]).css({'color':'rgba(7,17,27,0.3)'});
		}
		$(this).text(arr[$(this).attr('id')]).addClass('z').css({'color':'red'});
	}); 
	$(document).scroll(function(){
    if ($(window).scrollTop()>616){
    	$('.floordh').show();
    }

	if ($(window).scrollTop()>=660 && $(window).scrollTop()<=1160) {
		for(var c=0;c<floor.length;c++){
			var arr1=['F1','F2','F3','F4','F5'];
			floor.eq(c).text(arr1[c]).css({'color':'rgba(7,17,27,0.3)'});
		}
		floor.eq(0).text('服装').addClass('z').css({'color':'red'});
	}
	if ($(window).scrollTop()>=1161 && $(window).scrollTop()<=1700) {
		for(var c=0;c<floor.length;c++){
			var arr1=['F1','F2','F3','F4','F5'];
			floor.eq(c).text(arr1[c]).css({'color':'rgba(7,17,27,0.3)'});
		}
		floor.eq(1).text('美妆').addClass('z').css({'color':'red'});
	}
	if ($(window).scrollTop()>=1701 && $(window).scrollTop()<=2230) {
		for(var c=0;c<floor.length;c++){
			var arr1=['F1','F2','F3','F4','F5'];
			floor.eq(c).text(arr1[c]).css({'color':'rgba(7,17,27,0.3)'});
		}
		floor.eq(2).text('手机').addClass('z').css({'color':'red'});
	}
	if ($(window).scrollTop()>=2231 && $(window).scrollTop()<=2759) {
		for(var c=0;c<floor.length;c++){
			var arr1=['F1','F2','F3','F4','F5'];
			floor.eq(c).text(arr1[c]).css({'color':'rgba(7,17,27,0.3)'});
		}
		floor.eq(3).text('电器').addClass('z').css({'color':'red'});
	}
	if ($(window).scrollTop()>=2760 && $(window).scrollTop()<=3326) {
		for(var c=0;c<floor.length;c++){
			var arr1=['F1','F2','F3','F4','F5'];
			floor.eq(c).text(arr1[c]).css({'color':'rgba(7,17,27,0.3)'});
		}
		floor.eq(4).text('电脑').addClass('z').css({'color':'red'});
	}
	console.log($(window).scrollTop());
    })
}
