//获取元素
function $(str){
		if(str.charAt(0)=="#"){
			return document.getElementById(str.substring(1));
		}else if(str.charAt(0)=="."){
			return document.getElementsByClassName(str.substring(1));
		}else{
			return document.getElementsByTagName(str);
		}
	}	
function tran(str){
		if(str.charAt(0)=="#"){
			return document.getElementById(str.substring(1));
		}else if(str.charAt(0)=="."){
			return document.getElementsByClassName(str.substring(1));
		}else{
			return document.getElementsByTagName(str);
		}
	}	
//轮播图：自动播放
function autoPlay(){
	if(time1){
		return;
	}
		time1=setInterval(function(){
			var pre=num;
			num=num+1;
			if(pre==6){
				pre=0;
				num=1;
			}
			var start=-$(".oInfo")[0].offsetWidth*pre;
			gradual(start,-$(".oInfo")[0].offsetWidth*num,$("#infoList"),7,"left");
		},3000)
	}

// 轮播图：点击按钮下一张
function nextPlay(){
			if(index<4){
				index++;
				var start=-$(".oLi")[0].offsetWidth*(index-1);
				gradual(start,-$(".oLi")[0].offsetWidth*index,oImgList,5,"left");
			}
	}
	
// 轮播图：点击按钮上一张
function previousPlay(){
		if(index>0){
			index--;
			var start=-$(".oLi")[0].offsetWidth*(index+1);
			gradual(start,-$(".oLi")[0].offsetWidth*index,oImgList,5,"left");
		}
}

//轮播图：缓入效果
function gradual(start,end,obj,value,attr){
		var current=start;
		var step=start>end?value:-value;
		var time=setInterval(function(){
			current=current-step;
			if(step>0){
				if(current<=end){
					current=end;
					clearInterval(time);
				}
			}else{
				if(current>=end){
					current=end;
					clearInterval(time);
				}
			}
			if(attr=="opacity"){
				
				obj.style[attr] = current;
			}else{
				obj.style[attr] = current+"px";
				
			}
		
		},10);
		
	}


//功能：获取dom元素的样式属性值
//参数：dom，属性名
//返回值：样式属性值

function getStyle(domObj,attr) {
	if(domObj.currentStyle){//IE
		return domObj.currentStyle[attr];
	}else{//其它主流浏览器
		var cssObj = window.getComputedStyle(domObj);
		return cssObj[attr];
	}
}

// 广告轮播图：点击按钮下一张
function nextPlaySmall(){
		var pre=num;
		num=num+1;
		if(pre==6){
			pre=0;
			num=1;
		}
		var start=-$(".oInfo")[0].offsetWidth*pre;
		gradual(start,-$(".oInfo")[0].offsetWidth*num,$("#infoList"),7,"left");
	
	}
	
// 广告轮播图：点击按钮上一张
function previousPlaySmall(){
	var pre=num;
	num=num-1;
	if(pre==0){
		pre=6;
		num=5;
	}
	var start=-$(".oInfo")[0].offsetWidth*pre;
	gradual(start,-$(".oInfo")[0].offsetWidth*num,$("#infoList"),7,"left");
}


