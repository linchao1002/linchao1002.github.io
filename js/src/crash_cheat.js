// build time:Sun Mar 17 2019 13:01:01 GMT+0800 (GMT+08:00)
var OriginTitle=document.title;var titleTime;document.addEventListener("visibilitychange",function(){if(document.hidden){$('[rel="icon"]').attr("href","/images/favicon.ico");document.title="╭(°A°`)╮ 客官别走 ~";clearTimeout(titleTime)}else{$('[rel="icon"]').attr("href","/images/favicon.ico");document.title="(ฅ>ω<*ฅ) 欢迎大人~"+OriginTitle;titleTime=setTimeout(function(){document.title=OriginTitle},2e3)}});
//rebuild by neat 