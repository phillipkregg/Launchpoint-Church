// Camera slideshow v1.0.4 - a jQuery slideshow with many effects, transitions, easy to customize, using canvas and mobile ready, based on jQuery 1.4+
// Copyright (c) 2012 by Manuel Masia - www.pixedelic.com
(function(a){a.fn.camera=function(b,c){function d(c){q.addClass("camerasliding"),V=!1;var g=parseFloat(a("div.cameraSlide.cameracurrent",r).index());if(c>0)var j=c-1;else if(g==I-1)var j=0;else var j=g+1;var l=a(".cameraSlide:eq("+j+")",r);a(".cameraContent",n).fadeOut(600),a(".camera_caption",n).show(),a(".camerarelative",l).append(a("> div ",q).eq(j).find("> div.camera_effected")),D[j]!=""&&a(".camera_target_content .cameraContent:eq("+j+")",m).append('<a class="camera_link" href="'+D[j]+'" target="'+E[j]+'"></a>'),a(".camera_target_content .cameraContent:eq("+j+")",m).append(a("> div ",q).eq(j).find("> div"));if(!a(".imgLoaded",l).length){var s=C[j],t=new Image;t.src=s,l.css("visibility","hidden"),l.prepend(a(t).attr("class","imgLoaded").css("visibility","hidden"));var u,v;if(!a(t).get(0).complete||u=="0"||v=="0"||typeof u=="undefined"||u===!1||typeof v=="undefined"||v===!1)a(".camera_loader",m).delay(500).fadeIn(400),t.onload=function(){var b=a(t).width(),c=a(t).height();a(t).attr("width",b).attr("height",c).attr("data-alignment",G[j]).attr("data-portrait",F[j]),r.find(".cameraSlide_"+j).hide().css("visibility","visible"),i(),d(j+1)};else{var u=a(t).width(),v=a(t).height();a(t).attr("width",u).attr("height",v).attr("data-alignment",G[j]).attr("data-portrait",F[j]),r.find(".cameraSlide_"+j).hide().css("visibility","visible"),i(),t.onload=function(){d(j+1)}}}else{b.onLoaded.call(this),a(".camera_loader",m).is(":visible")?a(".camera_loader",m).fadeOut(400):(a(".camera_loader",m).css({visibility:"hidden"}),a(".camera_loader",m).fadeOut(400,function(){a(".camera_loader",m).css({visibility:"visible"})}));var w=b.rows,x=b.cols,H=1,J=0,L,M,N,O,R,S=new Array("simpleFade","curtainTopLeft","curtainTopRight","curtainBottomLeft","curtainBottomRight","curtainSliceLeft","curtainSliceRight","blindCurtainTopLeft","blindCurtainTopRight","blindCurtainBottomLeft","blindCurtainBottomRight","blindCurtainSliceBottom","blindCurtainSliceTop","stampede","mosaic","mosaicReverse","mosaicRandom","mosaicSpiral","mosaicSpiralReverse","topLeftBottomRight","bottomRightTopLeft","bottomLeftTopRight","topRightBottomLeft","scrollLeft","scrollRight","scrollTop","scrollBottom","scrollHorz");marginLeft=0,marginTop=0,opacityOnGrid=0,b.opacityOnGrid==1?opacityOnGrid=0:opacityOnGrid=1;var T=a(" > div",q).eq(j).attr("data-fx");k()&&b.mobileFx!=""&&b.mobileFx!="default"?O=b.mobileFx:typeof T!="undefined"&&T!==!1&&T!=="default"?O=T:O=b.fx,O=="random"?(O=h(S),O=O[0]):(O=O,O.indexOf(",")>0&&(O=O.replace(/ /g,""),O=O.split(","),O=h(O),O=O[0])),dataEasing=a(" > div",q).eq(j).attr("data-easing"),mobileEasing=a(" > div",q).eq(j).attr("data-mobileEasing"),k()&&b.mobileEasing!=""&&b.mobileEasing!="default"?typeof mobileEasing!="undefined"&&mobileEasing!==!1&&mobileEasing!=="default"?R=mobileEasing:R=b.mobileEasing:typeof dataEasing!="undefined"&&dataEasing!==!1&&dataEasing!=="default"?R=dataEasing:R=b.easing,L=a(" > div",q).eq(j).attr("data-slideOn");if(typeof L!="undefined"&&L!==!1)U=L;else if(b.slideOn=="random"){var U=new Array("next","prev");U=h(U),U=U[0]}else U=b.slideOn;var X=a(" > div",q).eq(j).attr("data-time");typeof X!="undefined"&&X!==!1&&X!==""?M=parseFloat(X):M=b.time;var _=a(" > div",q).eq(j).attr("data-transPeriod");typeof _!="undefined"&&_!==!1&&_!==""?N=parseFloat(_):N=b.transPeriod,a(q).hasClass("camerastarted")||(O="simpleFade",U="next",R="",N=400,a(q).addClass("camerastarted"));switch(O){case"simpleFade":x=1,w=1;break;case"curtainTopLeft":b.slicedCols==0?x=b.cols:x=b.slicedCols,w=1;break;case"curtainTopRight":b.slicedCols==0?x=b.cols:x=b.slicedCols,w=1;break;case"curtainBottomLeft":b.slicedCols==0?x=b.cols:x=b.slicedCols,w=1;break;case"curtainBottomRight":b.slicedCols==0?x=b.cols:x=b.slicedCols,w=1;break;case"curtainSliceLeft":b.slicedCols==0?x=b.cols:x=b.slicedCols,w=1;break;case"curtainSliceRight":b.slicedCols==0?x=b.cols:x=b.slicedCols,w=1;break;case"blindCurtainTopLeft":b.slicedRows==0?w=b.rows:w=b.slicedRows,x=1;break;case"blindCurtainTopRight":b.slicedRows==0?w=b.rows:w=b.slicedRows,x=1;break;case"blindCurtainBottomLeft":b.slicedRows==0?w=b.rows:w=b.slicedRows,x=1;break;case"blindCurtainBottomRight":b.slicedRows==0?w=b.rows:w=b.slicedRows,x=1;break;case"blindCurtainSliceTop":b.slicedRows==0?w=b.rows:w=b.slicedRows,x=1;break;case"blindCurtainSliceBottom":b.slicedRows==0?w=b.rows:w=b.slicedRows,x=1;break;case"stampede":J="-"+N;break;case"mosaic":J=b.gridDifference;break;case"mosaicReverse":J=b.gridDifference;break;case"mosaicRandom":break;case"mosaicSpiral":J=b.gridDifference,H=1.7;break;case"mosaicSpiralReverse":J=b.gridDifference,H=1.7;break;case"topLeftBottomRight":J=b.gridDifference,H=6;break;case"bottomRightTopLeft":J=b.gridDifference,H=6;break;case"bottomLeftTopRight":J=b.gridDifference,H=6;break;case"topRightBottomLeft":J=b.gridDifference,H=6;break;case"scrollLeft":x=1,w=1;break;case"scrollRight":x=1,w=1;break;case"scrollTop":x=1,w=1;break;case"scrollBottom":x=1,w=1;break;case"scrollHorz":x=1,w=1}var ba=0,bb=w*x,bf=A-Math.floor(A/x)*x,bg=B-Math.floor(B/w)*w,bh,bj,bk=0,bl=0,bm=new Array,bn=new Array,bo=new Array;while(ba<bb){bm.push(ba),bn.push(ba),K.append('<div class="cameraappended" style="display:none; overflow:hidden; position:absolute; z-index:1000" />');var bp=a(".cameraappended:eq("+ba+")",r);O=="scrollLeft"||O=="scrollRight"||O=="scrollTop"||O=="scrollBottom"||O=="scrollHorz"?W.eq(j).clone().show().appendTo(bp):U=="next"?W.eq(j).clone().show().appendTo(bp):W.eq(g).clone().show().appendTo(bp),ba%x<bf?bh=1:bh=0,ba%x==0&&(bk=0),Math.floor(ba/x)<bg?bj=1:bj=0,bp.css({height:Math.floor(B/w+bj+1),left:bk,top:bl,width:Math.floor(A/x+bh+1)}),a("> .cameraSlide",bp).css({height:B,"margin-left":"-"+bk+"px","margin-top":"-"+bl+"px",width:A}),bk=bk+bp.width()-1,ba%x==x-1&&(bl=bl+bp.height()-1),ba++}switch(O){case"curtainTopLeft":break;case"curtainBottomLeft":break;case"curtainSliceLeft":break;case"curtainTopRight":bm=bm.reverse();break;case"curtainBottomRight":bm=bm.reverse();break;case"curtainSliceRight":bm=bm.reverse();break;case"blindCurtainTopLeft":break;case"blindCurtainBottomLeft":bm=bm.reverse();break;case"blindCurtainSliceTop":break;case"blindCurtainTopRight":break;case"blindCurtainBottomRight":bm=bm.reverse();break;case"blindCurtainSliceBottom":bm=bm.reverse();break;case"stampede":bm=h(bm);break;case"mosaic":break;case"mosaicReverse":bm=bm.reverse();break;case"mosaicRandom":bm=h(bm);break;case"mosaicSpiral":var bq=w/2,br,bs,bt,bu=0;for(bt=0;bt<bq;bt++){bs=bt;for(br=bt;br<x-bt-1;br++)bo[bu++]=bs*x+br;br=x-bt-1;for(bs=bt;bs<w-bt-1;bs++)bo[bu++]=bs*x+br;bs=w-bt-1;for(br=x-bt-1;br>bt;br--)bo[bu++]=bs*x+br;br=bt;for(bs=w-bt-1;bs>bt;bs--)bo[bu++]=bs*x+br}bm=bo;break;case"mosaicSpiralReverse":var bq=w/2,br,bs,bt,bu=bb-1;for(bt=0;bt<bq;bt++){bs=bt;for(br=bt;br<x-bt-1;br++)bo[bu--]=bs*x+br;br=x-bt-1;for(bs=bt;bs<w-bt-1;bs++)bo[bu--]=bs*x+br;bs=w-bt-1;for(br=x-bt-1;br>bt;br--)bo[bu--]=bs*x+br;br=bt;for(bs=w-bt-1;bs>bt;bs--)bo[bu--]=bs*x+br}bm=bo;break;case"topLeftBottomRight":for(var bs=0;bs<w;bs++)for(var br=0;br<x;br++)bo.push(br+bs);bn=bo;break;case"bottomRightTopLeft":for(var bs=0;bs<w;bs++)for(var br=0;br<x;br++)bo.push(br+bs);bn=bo.reverse();break;case"bottomLeftTopRight":for(var bs=w;bs>0;bs--)for(var br=0;br<x;br++)bo.push(br+bs);bn=bo;break;case"topRightBottomLeft":for(var bs=0;bs<w;bs++)for(var br=x;br>0;br--)bo.push(br+bs);bn=bo}a.each(bm,function(c,h){function i(){b.onEndTransition.call(this),a(this).addClass("cameraeased"),a(".cameraeased",r).length>=0&&a(z).css({visibility:"visible"});if(a(".cameraeased",r).length==bb){f(),a(".moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom",n).each(function(){a(this).css("visibility","hidden")}),W.eq(j).show().css("z-index","999").addClass("cameracurrent"),W.eq(g).css("z-index","1").removeClass("cameracurrent"),a(".cameraContent",n).eq(j).addClass("cameracurrent"),a(".cameraContent",n).eq(g).removeClass("cameracurrent"),a("> div",q).eq(j).attr("data-video")!="hide"&&a(".cameraContent.cameracurrent .imgFake",n).length&&a(".cameraContent.cameracurrent .imgFake",n).click();var c=W.eq(j).find(".fadeIn").length,h=a(".cameraContent",n).eq(j).find(".moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom").length;c!=0&&a(".cameraSlide.cameracurrent .fadeIn",n).each(function(){if(a(this).attr("data-easing")!="")var b=a(this).attr("data-easing");else var b=R;var d=a(this);if(typeof d.attr("data-outerWidth")=="undefined"||d.attr("data-outerWidth")===!1||d.attr("data-outerWidth")===""){var e=d.outerWidth();d.attr("data-outerWidth",e)}else var e=d.attr("data-outerWidth");if(typeof d.attr("data-outerHeight")=="undefined"||d.attr("data-outerHeight")===!1||d.attr("data-outerHeight")===""){var f=d.outerHeight();d.attr("data-outerHeight",f)}else var f=d.attr("data-outerHeight");var g=d.position(),h=g.left,i=g.top,j=d.attr("class"),k=d.index(),l=d.parents(".camerarelative").outerHeight(),m=d.parents(".camerarelative").outerWidth();j.indexOf("fadeIn")!=-1?d.animate({opacity:0},0).css("visibility","visible").delay(M/c*.1*(k-1)).animate({opacity:1},M/c*.15,b):d.css("visibility","visible")}),a(".cameraContent.cameracurrent",n).show(),h!=0&&a(".cameraContent.cameracurrent .moveFromLeft, .cameraContent.cameracurrent .moveFromRight, .cameraContent.cameracurrent .moveFromTop, .cameraContent.cameracurrent .moveFromBottom, .cameraContent.cameracurrent .fadeIn, .cameraContent.cameracurrent .fadeFromLeft, .cameraContent.cameracurrent .fadeFromRight, .cameraContent.cameracurrent .fadeFromTop, .cameraContent.cameracurrent .fadeFromBottom",n).each(function(){if(a(this).attr("data-easing")!="")var b=a(this).attr("data-easing");else var b=R;var c=a(this),d=c.position(),e=d.left,f=d.top,g=c.attr("class"),i=c.index(),j=c.outerHeight();g.indexOf("moveFromLeft")!=-1?(c.css({left:"-"+A+"px",right:"auto"}),c.css("visibility","visible").delay(M/h*.1*(i-1)).animate({left:d.left},M/h*.15,b)):g.indexOf("moveFromRight")!=-1?(c.css({left:A+"px",right:"auto"}),c.css("visibility","visible").delay(M/h*.1*(i-1)).animate({left:d.left},M/h*.15,b)):g.indexOf("moveFromTop")!=-1?(c.css({top:"-"+B+"px",bottom:"auto"}),c.css("visibility","visible").delay(M/h*.1*(i-1)).animate({top:d.top},M/h*.15,b,function(){c.css({top:"auto",bottom:0})})):g.indexOf("moveFromBottom")!=-1?(c.css({top:B+"px",bottom:"auto"}),c.css("visibility","visible").delay(M/h*.1*(i-1)).animate({top:d.top},M/h*.15,b)):g.indexOf("fadeFromLeft")!=-1?(c.animate({opacity:0},0).css({left:"-"+A+"px",right:"auto"}),c.css("visibility","visible").delay(M/h*.1*(i-1)).animate({left:d.left,opacity:1},M/h*.15,b)):g.indexOf("fadeFromRight")!=-1?(c.animate({opacity:0},0).css({left:A+"px",right:"auto"}),c.css("visibility","visible").delay(M/h*.1*(i-1)).animate({left:d.left,opacity:1},M/h*.15,b)):g.indexOf("fadeFromTop")!=-1?(c.animate({opacity:0},0).css({top:"-"+B+"px",bottom:"auto"}),c.css("visibility","visible").delay(M/h*.1*(i-1)).animate({top:d.top,opacity:1},M/h*.15,b,function(){c.css({top:"auto",bottom:0})})):g.indexOf("fadeFromBottom")!=-1?(c.animate({opacity:0},0).css({bottom:"-"+j+"px"}),c.css("visibility","visible").delay(M/h*.1*(i-1)).animate({bottom:"0",opacity:1},M/h*.15,b)):g.indexOf("fadeIn")!=-1?c.animate({opacity:0},0).css("visibility","visible").delay(M/h*.1*(i-1)).animate({opacity:1},M/h*.15,b):c.css("visibility","visible")}),a(".cameraappended",r).remove(),q.removeClass("camerasliding"),W.eq(g).hide(),a("#"+p).animate({opacity:b.loaderOpacity},200),P=setInterval(function(){if(o!="pie"){bc<=1.002&&!q.hasClass("stopped")&&!q.hasClass("paused")?bc+=.005:bc<=1&&(q.hasClass("stopped")||q.hasClass("paused"))?bc=bc:!q.hasClass("stopped")&&!q.hasClass("paused")&&(clearInterval(P),$(),a("#"+p).animate({opacity:0},200,function(){clearTimeout(Q),Q=setTimeout(e,l),d(),b.onStartLoading.call(this)}));switch(Y){case"leftToRight":a("#"+p).css({right:a(".camera_bar_cont",Z).width()-a(".camera_bar_cont",Z).width()*bc});break;case"rightToLeft":a("#"+p).css({left:a(".camera_bar_cont",Z).width()-a(".camera_bar_cont",Z).width()*bc});break;case"topToBottom":a("#"+p).css({bottom:a(".camera_bar_cont",Z).height()-a(".camera_bar_cont",Z).height()*bc});break;case"bottomToTop":a("#"+p).css({top:a(".camera_bar_cont",Z).height()-a(".camera_bar_cont",Z).height()*bc})}}else bd=bc,be.clearRect(0,0,b.pieDiameter,b.pieDiameter),be.globalCompositeOperation="destination-over",be.beginPath(),be.arc(b.pieDiameter/2,b.pieDiameter/2,b.pieDiameter/2-b.loaderStroke,0,Math.PI*2,!1),be.lineWidth=b.loaderStroke,be.strokeStyle=b.loaderBgColor,be.stroke(),be.closePath(),be.globalCompositeOperation="source-over",be.beginPath(),be.arc(b.pieDiameter/2,b.pieDiameter/2,b.pieDiameter/2-b.loaderStroke,0,Math.PI*2*bd,!1),be.lineWidth=b.loaderStroke-b.loaderPadding*2,be.strokeStyle=b.loaderColor,be.stroke(),be.closePath(),bc<=1.002&&!q.hasClass("stopped")&&!q.hasClass("paused")?bc+=.005:bc<=1&&(q.hasClass("stopped")||q.hasClass("paused"))?bc=bc:!q.hasClass("stopped")&&!q.hasClass("paused")&&(clearInterval(P),$(),a("#"+p+", .camera_canvas_wrap",Z).animate({opacity:0},200,function(){clearTimeout(Q),Q=setTimeout(e,l),d(),b.onStartLoading.call(this)}))},M*.005)}}h%x<bf?bh=1:bh=0,h%x==0&&(bk=0),Math.floor(h/x)<bg?bj=1:bj=0;switch(O){case"simpleFade":height=B,width=A,opacityOnGrid=0;break;case"curtainTopLeft":height=0,width=Math.floor(A/x+bh+1),marginTop="-"+Math.floor(B/w+bj+1)+"px";break;case"curtainTopRight":height=0,width=Math.floor(A/x+bh+1),marginTop="-"+Math.floor(B/w+bj+1)+"px";break;case"curtainBottomLeft":height=0,width=Math.floor(A/x+bh+1),marginTop=Math.floor(B/w+bj+1)+"px";break;case"curtainBottomRight":height=0,width=Math.floor(A/x+bh+1),marginTop=Math.floor(B/w+bj+1)+"px";break;case"curtainSliceLeft":height=0,width=Math.floor(A/x+bh+1),h%2==0?marginTop=Math.floor(B/w+bj+1)+"px":marginTop="-"+Math.floor(B/w+bj+1)+"px";break;case"curtainSliceRight":height=0,width=Math.floor(A/x+bh+1),h%2==0?marginTop=Math.floor(B/w+bj+1)+"px":marginTop="-"+Math.floor(B/w+bj+1)+"px";break;case"blindCurtainTopLeft":height=Math.floor(B/w+bj+1),width=0,marginLeft="-"+Math.floor(A/x+bh+1)+"px";break;case"blindCurtainTopRight":height=Math.floor(B/w+bj+1),width=0,marginLeft=Math.floor(A/x+bh+1)+"px";break;case"blindCurtainBottomLeft":height=Math.floor(B/w+bj+1),width=0,marginLeft="-"+Math.floor(A/x+bh+1)+"px";break;case"blindCurtainBottomRight":height=Math.floor(B/w+bj+1),width=0,marginLeft=Math.floor(A/x+bh+1)+"px";break;case"blindCurtainSliceBottom":height=Math.floor(B/w+bj+1),width=0,h%2==0?marginLeft="-"+Math.floor(A/x+bh+1)+"px":marginLeft=Math.floor(A/x+bh+1)+"px";break;case"blindCurtainSliceTop":height=Math.floor(B/w+bj+1),width=0,h%2==0?marginLeft="-"+Math.floor(A/x+bh+1)+"px":marginLeft=Math.floor(A/x+bh+1)+"px";break;case"stampede":height=0,width=0,marginLeft=A*.2*(c%x-(x-Math.floor(x/2)))+"px",marginTop=B*.2*(Math.floor(c/x)+1-(w-Math.floor(w/2)))+"px";break;case"mosaic":height=0,width=0;break;case"mosaicReverse":height=0,width=0,marginLeft=Math.floor(A/x+bh+1)+"px",marginTop=Math.floor(B/w+bj+1)+"px";break;case"mosaicRandom":height=0,width=0,marginLeft=Math.floor(A/x+bh+1)*.5+"px",marginTop=Math.floor(B/w+bj+1)*.5+"px";break;case"mosaicSpiral":height=0,width=0,marginLeft=Math.floor(A/x+bh+1)*.5+"px",marginTop=Math.floor(B/w+bj+1)*.5+"px";break;case"mosaicSpiralReverse":height=0,width=0,marginLeft=Math.floor(A/x+bh+1)*.5+"px",marginTop=Math.floor(B/w+bj+1)*.5+"px";break;case"topLeftBottomRight":height=0,width=0;break;case"bottomRightTopLeft":height=0,width=0,marginLeft=Math.floor(A/x+bh+1)+"px",marginTop=Math.floor(B/w+bj+1)+"px";break;case"bottomLeftTopRight":height=0,width=0,marginLeft=0,marginTop=Math.floor(B/w+bj+1)+"px";break;case"topRightBottomLeft":height=0,width=0,marginLeft=Math.floor(A/x+bh+1)+"px",marginTop=0;break;case"scrollRight":height=B,width=A,marginLeft=-A;break;case"scrollLeft":height=B,width=A,marginLeft=A;break;case"scrollTop":height=B,width=A,marginTop=B;break;case"scrollBottom":height=B,width=A,marginTop=-B;break;case"scrollHorz":height=B,width=A,g==0&&j==I-1?marginLeft=-A:g<j||g==I-1&&j==0?marginLeft=A:marginLeft=-A}var k=a(".cameraappended:eq("+h+")",r);typeof P!="undefined"&&(clearInterval(P),clearTimeout(Q),Q=setTimeout(e,N+J)),a(y).length&&(a(".camera_pag li",m).removeClass("cameracurrent"),a(".camera_pag li",m).eq(j).addClass("cameracurrent")),a(z).length&&(a("li",z).removeClass("cameracurrent"),a("li",z).eq(j).addClass("cameracurrent"),a("li",z).not(".cameracurrent").find("img").animate({opacity:.5},0),a("li.cameracurrent img",z).animate({opacity:1},0),a("li",z).hover(function(){a("img",this).stop(!0,!1).animate({opacity:1},150)},function(){a(this).hasClass("cameracurrent")||a("img",this).stop(!0,!1).animate({opacity:.5},150)}));var l=parseFloat(N)+parseFloat(J);O=="scrollLeft"||O=="scrollRight"||O=="scrollTop"||O=="scrollBottom"||O=="scrollHorz"?(l=0,k.delay((N+J)/bb*bn[c]*H*.5).css({display:"block",height:height,"margin-left":marginLeft,"margin-top":marginTop,width:width}).animate({height:Math.floor(B/w+bj+1),"margin-top":0,"margin-left":0,width:Math.floor(A/x+bh+1)},N-J,R,i),W.eq(g).delay((N+J)/bb*bn[c]*H*.5).animate({"margin-left":marginLeft*-1,"margin-top":marginTop*-1},N-J,R,function(){a(this).css({"margin-top":0,"margin-left":0})})):(l=parseFloat(N)+parseFloat(J),U=="next"?k.delay((N+J)/bb*bn[c]*H*.5).css({display:"block",height:height,"margin-left":marginLeft,"margin-top":marginTop,width:width,opacity:opacityOnGrid}).animate({height:Math.floor(B/w+bj+1),"margin-top":0,"margin-left":0,opacity:1,width:Math.floor(A/x+bh+1)},N-J,R,i):(W.eq(j).show().css("z-index","999").addClass("cameracurrent"),W.eq(g).css("z-index","1").removeClass("cameracurrent"),a(".cameraContent",n).eq(j).addClass("cameracurrent"),a(".cameraContent",n).eq(g).removeClass("cameracurrent"),k.delay((N+J)/bb*bn[c]*H*.5).css({display:"block",height:Math.floor(B/w+bj+1),"margin-top":0,"margin-left":0,opacity:1,width:Math.floor(A/x+bh+1)}).animate({height:height,"margin-left":marginLeft,"margin-top":marginTop,width:width,opacity:opacityOnGrid},N-J,R,i)))})}}function e(){bc=0;if(o!="pie")switch(Y){case"leftToRight":a("#"+p).css({right:"auto"});break;case"rightToLeft":a("#"+p).css({left:"auto"});break;case"topToBottom":a("#"+p).css({bottom:"auto"});break;case"bottomToTop":a("#"+p).css({top:"auto"})}else be.clearRect(0,0,b.pieDiameter,b.pieDiameter)}function f(){if(a(z).length&&!a(y).length){var b=a(z).outerWidth(),c=a("ul > li",z).outerWidth(),d=a("li.cameracurrent",z).position(),e=a("ul > li",z).length*a("ul > li",z).outerWidth(),f=a("ul",z).offset().left,g=a("> div",z).offset().left,h;f<0?h="-"+(g-f):h=g-f,bh==1&&(a("ul",z).width(a("ul > li",z).length*a("ul > li",z).outerWidth()),a(z).length&&!a(y).lenght&&m.css({marginBottom:a(z).outerHeight()}),j(),a("ul",z).width(a("ul > li",z).length*a("ul > li",z).outerWidth()),a(z).length&&!a(y).lenght&&m.css({marginBottom:a(z).outerHeight()})),bh=!1,a(".camera_prevThumbs",Z).css("visibility","visible"),a(".camera_nextThumbs",Z).css("visibility","visible");var i=d.left,k=d.left+a("li.cameracurrent",z).outerWidth();i<a("li.cameracurrent",z).outerWidth()&&(i=0),k-h>b?i+b<e?a("ul",z).animate({"margin-left":"-"+i+"px"},500,j):a("ul",z).animate({"margin-left":"-"+(a("ul",z).outerWidth()-b)+"px"},500,j):i-h<0?a("ul",z).animate({"margin-left":"-"+i+"px"},500,j):(a("ul",z).css({"margin-left":"auto","margin-right":"auto"}),setTimeout(j,100))}}function g(a){return Math.ceil(a)==Math.floor(a)}function h(a){for(var b,c,d=a.length;d;b=parseInt(Math.random()*d),c=a[--d],a[d]=a[b],a[b]=c);return a}function i(){function c(){A=m.width();if(b.height.indexOf("%")!=-1){var c=Math.round(A/(100/parseFloat(b.height)));b.minHeight!=""&&c<parseFloat(b.minHeight)?B=parseFloat(b.minHeight):B=c,m.css({height:B})}else b.height=="auto"?B=m.height():(B=parseFloat(b.height),m.css({height:B}));a(".camerarelative",r).css({width:A,height:B}),a(".imgLoaded",r).each(function(){var c=a(this),d=c.attr("width"),e=c.attr("height"),f=c.index(),g,h,i=c.attr("data-alignment"),j=c.attr("data-portrait");if(typeof i=="undefined"||i===!1||i==="")i=b.alignment;if(typeof j=="undefined"||j===!1||j==="")j=b.portrait;if(j==0||j=="false")if(d/e<A/B){var k=A/d,l=Math.abs(B-e*k)*.5;switch(i){case"topLeft":g=0;break;case"topCenter":g=0;break;case"topRight":g=0;break;case"centerLeft":g="-"+l+"px";break;case"center":g="-"+l+"px";break;case"centerRight":g="-"+l+"px";break;case"bottomLeft":g="-"+l*2+"px";break;case"bottomCenter":g="-"+l*2+"px";break;case"bottomRight":g="-"+l*2+"px"}c.css({height:e*k,"margin-left":0,"margin-top":g,position:"absolute",visibility:"visible",width:A})}else{var k=B/e,l=Math.abs(A-d*k)*.5;switch(i){case"topLeft":h=0;break;case"topCenter":h="-"+l+"px";break;case"topRight":h="-"+l*2+"px";break;case"centerLeft":h=0;break;case"center":h="-"+l+"px";break;case"centerRight":h="-"+l*2+"px";break;case"bottomLeft":h=0;break;case"bottomCenter":h="-"+l+"px";break;case"bottomRight":h="-"+l*2+"px"}c.css({height:B,"margin-left":h,"margin-top":0,position:"absolute",visibility:"visible",width:d*k})}else if(d/e<A/B){var k=B/e,l=Math.abs(A-d*k)*.5;switch(i){case"topLeft":h=0;break;case"topCenter":h=l+"px";break;case"topRight":h=l*2+"px";break;case"centerLeft":h=0;break;case"center":h=l+"px";break;case"centerRight":h=l*2+"px";break;case"bottomLeft":h=0;break;case"bottomCenter":h=l+"px";break;case"bottomRight":h=l*2+"px"}c.css({height:B,"margin-left":h,"margin-top":0,position:"absolute",visibility:"visible",width:d*k})}else{var k=A/d,l=Math.abs(B-e*k)*.5;switch(i){case"topLeft":g=0;break;case"topCenter":g=0;break;case"topRight":g=0;break;case"centerLeft":g=l+"px";break;case"center":g=l+"px";break;case"centerRight":g=l+"px";break;case"bottomLeft":g=l*2+"px";break;case"bottomCenter":g=l*2+"px";break;case"bottomRight":g=l*2+"px"}c.css({height:e*k,"margin-left":0,"margin-top":g,position:"absolute",visibility:"visible",width:A})}})}var d;N==1?(clearTimeout(d),d=setTimeout(c,200)):c(),N=!0}function j(){var b=a(z).width();a("li",z).removeClass("camera_visThumb"),a("li",z).each(function(){var c=a(this).position(),d=a("ul",z).outerWidth(),e=a("ul",z).offset().left,f=a("> div",z).offset().left,g=f-e;g>0?a(".camera_prevThumbs",Z).removeClass("hideNav"):a(".camera_prevThumbs",Z).addClass("hideNav"),d-g>b?a(".camera_nextThumbs",Z).removeClass("hideNav"):a(".camera_nextThumbs",Z).addClass("hideNav");var h=c.left,i=c.left+a(this).width();i-g<=b&&h-g>=0&&a(this).addClass("camera_visThumb")})}function k(){if(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i))return!0}var l={alignment:"center",autoAdvance:!0,mobileAutoAdvance:!0,barDirection:"leftToRight",barPosition:"bottom",cols:6,easing:"easeInOutExpo",mobileEasing:"",fx:"random",mobileFx:"",gridDifference:250,height:"50%",imagePath:"images/",hover:!0,loader:"pie",loaderColor:"#eeeeee",loaderBgColor:"#222222",loaderOpacity:.8,loaderPadding:2,loaderStroke:7,minHeight:"200px",navigation:!0,navigationHover:!0,mobileNavHover:!0,opacityOnGrid:!1,overlayer:!0,pagination:!0,playPause:!0,pauseOnClick:!0,pieDiameter:38,piePosition:"rightTop",portrait:!1,rows:4,slicedCols:12,slicedRows:8,slideOn:"random",thumbnails:!1,time:7e3,transPeriod:1500,onEndTransition:function(){},onLoaded:function(){},onStartLoading:function(){},onStartTransition:function(){}},b=a.extend({},l,b),m=a(this).addClass("camera_wrap");m.wrapInner('<div class="camera_src" />').wrapInner('<div class="camera_fakehover" />');var n=a(".camera_fakehover",m);n.append('<div class="camera_target"></div>'),b.overlayer==1&&n.append('<div class="camera_overlayer"></div>'),n.append('<div class="camera_target_content"></div>');var o;b.loader=="pie"&&a.browser.msie&&a.browser.version<9?o="bar":o=b.loader,o=="pie"?n.append('<div class="camera_pie"></div>'):o=="bar"?n.append('<div class="camera_bar"></div>'):n.append('<div class="camera_bar" style="display:none"></div>'),b.playPause==1&&n.append('<div class="camera_commands"></div>'),b.navigation==1&&n.append('<div class="camera_prev"><span></span></div>').append('<div class="camera_next"><span></span></div>'),b.thumbnails==1&&m.append('<div class="camera_thumbs_cont" />'),b.thumbnails==1&&b.pagination!=1&&a(".camera_thumbs_cont",m).wrap("<div />").wrap('<div class="camera_thumbs" />').wrap("<div />").wrap('<div class="camera_command_wrap" />'),b.pagination==1&&m.append('<div class="camera_pag"></div>'),m.append('<div class="camera_loader"></div>'),a(".camera_caption",m).each(function(){a(this).wrapInner("<div />")});var p="pie_"+m.index(),q=a(".camera_src",m),r=a(".camera_target",m),s=a(".camera_target_content",m),t=a(".camera_pie",m),u=a(".camera_bar",m),v=a(".camera_prev",m),w=a(".camera_next",m),x=a(".camera_commands",m),y=a(".camera_pag",m),z=a(".camera_thumbs_cont",m),A,B,C=new Array;a("> div",q).each(function(){C.push(a(this).attr("data-src"))});var D=new Array;a("> div",q).each(function(){a(this).attr("data-link")?D.push(a(this).attr("data-link")):D.push("")});var E=new Array;a("> div",q).each(function(){a(this).attr("data-target")?E.push(a(this).attr("data-target")):E.push("")});var F=new Array;a("> div",q).each(function(){a(this).attr("data-portrait")?F.push(a(this).attr("data-portrait")):F.push("")});var G=new Array;a("> div",q).each(function(){a(this).attr("data-alignment")?G.push(a(this).attr("data-alignment")):G.push("")});var H=new Array;a("> div",q).each(function(){a(this).attr("data-thumb")?H.push(a(this).attr("data-thumb")):H.push("")});var I=C.length;a(s).append('<div class="cameraContents" />');var J;for(J=0;J<I;J++)a(".cameraContents",s).append('<div class="cameraContent" />');a(".camera_caption",m).each(function(){var b=a(this).parent().index(),c=m.find(".cameraContent").eq(b);a(this).appendTo(c)}),r.append('<div class="cameraCont" />');var K=a(".cameraCont",m),L;for(L=0;L<I;L++){K.append('<div class="cameraSlide cameraSlide_'+L+'" />');var M=a("> div:eq("+L+")",q);r.find(".cameraSlide_"+L).clone(M)}a(window).bind("load resize",function(){f(),j()}),K.append('<div class="cameraSlide cameraSlide_'+L+'" />');var N;m.show();var A=r.width(),B=r.height(),O;a(window).bind("resize",function(){N==1&&i(),a("ul",z).animate({"margin-top":0},0,f),q.hasClass("stopped")||(q.addClass("stopped"),a(".camera_stop",Z).length?(a(".camera_stop",Z).hide(),a(".camera_play",Z).show(),o!="none"&&a("#"+p).hide()):o!="none"&&a("#"+p).hide(),clearTimeout(O),O=setTimeout(function(){q.removeClass("stopped"),a(".camera_play",Z).length?(a(".camera_play",Z).hide(),a(".camera_stop",Z).show(),o!="none"&&a("#"+p).fadeIn()):o!="none"&&a("#"+p).fadeIn()},1500))});var P,Q,R,S,T,x,y,U,V;k()&&b.mobileAutoAdvance!=""?S=b.mobileAutoAdvance:S=b.autoAdvance,S==0&&q.addClass("stopped"),k()&&b.mobileNavHover!=""?T=b.mobileNavHover:T=b.navigationHover;if(q.length!=0){var W=a(".cameraSlide",r);W.wrapInner('<div class="camerarelative" />');var X,Y=b.barDirection,Z=m;a("iframe",n).each(function(){var b=a(this),c=b.attr("src");b.attr("data-src",c);var d=b.parent().index(".camera_src > div");a(".camera_target_content .cameraContent:eq("+d+")",m).append(b)});function $(){a("iframe",n).each(function(){a(".camera_caption",n).show();var c=a(this),d=c.attr("data-src");c.attr("src",d);var e=b.imagePath+"blank.gif",f=new Image;f.src=e;if(b.height.indexOf("%")!=-1){var g=Math.round(A/(100/parseFloat(b.height)));b.minHeight!=""&&g<parseFloat(b.minHeight)?B=parseFloat(b.minHeight):B=g}else b.height=="auto"?B=m.height():B=parseFloat(b.height);c.after(a(f).attr({"class":"imgFake",width:A,height:B}));var h=c.clone();c.remove(),a(f).bind("click",function(){a(this).css("position")=="absolute"?(a(this).remove(),d.indexOf("vimeo")!=-1||d.indexOf("youtube")!=-1?d.indexOf("?")!=-1?autoplay="&autoplay=1":autoplay="?autoplay=1":d.indexOf("dailymotion")!=-1&&(d.indexOf("?")!=-1?autoplay="&autoPlay=1":autoplay="?autoPlay=1"),h.attr("src",d+autoplay),V=!0):a(this).css({position:"absolute",top:0,left:0,zIndex:10}).after(h)})})}$(),b.hover==1&&(k()||n.hover(function(){q.addClass("paused")},function(){q.removeClass("paused")})),T==1&&(a(v,m).animate({opacity:0},0),a(w,m).animate({opacity:0},0),a(x,m).animate({opacity:0},0),k()?(n.live("vmouseover",function(){a(v,m).animate({opacity:1},200),a(w,m).animate({opacity:1},200),a(x,m).animate({opacity:1},200)}),n.live("vmouseout",function(){a(v,m).delay(500).animate({opacity:0},200),a(w,m).delay(500).animate({opacity:0},200),a(x,m).delay(500).animate({opacity:0},200)})):n.hover(function(){a(v,m).animate({opacity:1},200),a(w,m).animate({opacity:1},200),a(x,m).animate({opacity:1},200)},function(){a(v,m).animate({opacity:0},200),a(w,m).animate({opacity:0},200),a(x,m).animate({opacity:0},200)})),a(".camera_stop",Z).live("click",function(){S=!1,q.addClass("stopped"),a(".camera_stop",Z).length?(a(".camera_stop",Z).hide(),a(".camera_play",Z).show(),o!="none"&&a("#"+p).hide()):o!="none"&&a("#"+p).hide()}),a(".camera_play",Z).live("click",function(){S=!0,q.removeClass("stopped"),a(".camera_play",Z).length?(a(".camera_play",Z).hide(),a(".camera_stop",Z).show(),o!="none"&&a("#"+p).show()):o!="none"&&a("#"+p).show()}),b.pauseOnClick==1&&a(".camera_target_content",n).mouseup(function(){S=!1,q.addClass("stopped"),a(".camera_stop",Z).hide(),a(".camera_play",Z).show(),a("#"+p).hide()}),a(".cameraContent, .imgFake",n).hover(function(){U=!0},function(){U=!1}),a(".cameraContent, .imgFake",n).bind("click",function(){V==1&&U==1&&(S=!1,a(".camera_caption",n).hide(),q.addClass("stopped"),a(".camera_stop",Z).hide(),a(".camera_play",Z).show(),a("#"+p).hide())})}if(o!="pie"){u.append('<span class="camera_bar_cont" />'),a(".camera_bar_cont",u).animate({opacity:b.loaderOpacity},0).css({position:"absolute",left:0,right:0,top:0,bottom:0,"background-color":b.loaderBgColor}).append('<span id="'+p+'" />'),a("#"+p).animate({opacity:0},0);var _=a("#"+p);_.css({position:"absolute","background-color":b.loaderColor});switch(b.barPosition){case"left":u.css({right:"auto",width:b.loaderStroke});break;case"right":u.css({left:"auto",width:b.loaderStroke});break;case"top":u.css({bottom:"auto",height:b.loaderStroke});break;case"bottom":u.css({top:"auto",height:b.loaderStroke})}switch(Y){case"leftToRight":_.css({left:0,right:0,top:b.loaderPadding,bottom:b.loaderPadding});break;case"rightToLeft":_.css({left:0,right:0,top:b.loaderPadding,bottom:b.loaderPadding});break;case"topToBottom":_.css({left:b.loaderPadding,right:b.loaderPadding,top:0,bottom:0});break;case"bottomToTop":_.css({left:b.loaderPadding,right:b.loaderPadding,top:0,bottom:0})}}else{t.append('<canvas id="'+p+'"></canvas>');var ba,_=document.getElementById(p);_.setAttribute("width",b.pieDiameter),_.setAttribute("height",b.pieDiameter);var bb;switch(b.piePosition){case"leftTop":bb="left:0; top:0;";break;case"rightTop":bb="right:0; top:0;";break;case"leftBottom":bb="left:0; bottom:0;";break;case"rightBottom":bb="right:0; bottom:0;"}_.setAttribute("style","position:absolute; z-index:1002; "+bb);var bc,bd;if(_&&_.getContext){var be=_.getContext("2d");be.rotate(Math.PI*1.5),be.translate(-b.pieDiameter,0)}}if(o=="none"||S==0)a("#"+p).hide(),a(".camera_canvas_wrap",Z).hide();if(a(y).length){a(y).append('<ul class="camera_pag_ul" />');var bf;for(bf=0;bf<I;bf++)a(".camera_pag_ul",m).append('<li class="pag_nav_'+bf+'" style="position:relative; z-index:1002"><span><span>'+bf+"</span></span></li>");a(".camera_pag_ul li",m).hover(function(){a(this).addClass("camera_hover");if(a(".camera_thumb",this).length){var b=a(".camera_thumb",this).outerWidth(),c=a(".camera_thumb",this).outerHeight(),d=a(this).outerWidth();a(".camera_thumb",this).show().css({top:"-"+c+"px",left:"-"+(b-d)/2+"px"}).animate({opacity:1,"margin-top":"-3px"},200),a(".thumb_arrow",this).show().animate({opacity:1,"margin-top":"-3px"},200)}},function(){a(this).removeClass("camera_hover"),a(".camera_thumb",this).animate({"margin-top":"-20px",opacity:0},200,function(){a(this).css({marginTop:"5px"}).hide()}),a(".thumb_arrow",this).animate({"margin-top":"-20px",opacity:0},200,function(){a(this).css({marginTop:"5px"}).hide()})})}if(a(z).length){var bg;a(y).length?(a.each(H,function(b,c){if(a("> div",q).eq(b).attr("data-thumb")!=""){var d=a("> div",q).eq(b).attr("data-thumb"),e=new Image;e.src=d,a("li.pag_nav_"+b,y).append(a(e).attr("class","camera_thumb").css({position:"absolute"}).animate({opacity:0},0)),a("li.pag_nav_"+b+" > img",y).after('<div class="thumb_arrow" />'),a("li.pag_nav_"+b+" > .thumb_arrow",y
).animate({opacity:0},0)}}),m.css({marginBottom:a(y).outerHeight()})):(a(z).append("<div />"),a(z).before('<div class="camera_prevThumbs hideNav"><div></div></div>').before('<div class="camera_nextThumbs hideNav"><div></div></div>'),a("> div",z).append("<ul />"),a.each(H,function(b,c){if(a("> div",q).eq(b).attr("data-thumb")!=""){var d=a("> div",q).eq(b).attr("data-thumb"),e=new Image;e.src=d,a("ul",z).append('<li class="pix_thumb pix_thumb_'+b+'" />'),a("li.pix_thumb_"+b,z).append(a(e).attr("class","camera_thumb"))}}))}else!a(z).length&&a(y).length&&m.css({marginBottom:a(y).outerHeight()});var bh=!0;a(x).length&&(a(x).append('<div class="camera_play"> </div>').append('<div class="camera_stop"> </div>'),S==1?(a(".camera_play",Z).hide(),a(".camera_stop",Z).show()):(a(".camera_stop",Z).hide(),a(".camera_play",Z).show())),e(),a(".moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom",n).each(function(){a(this).css("visibility","hidden")}),b.onStartLoading.call(this),d(),a(v).length&&a(v).click(function(){if(!q.hasClass("camerasliding")){var c=parseFloat(a(".cameraSlide.cameracurrent",r).index());clearInterval(P),$(),a("#"+p+", .camera_canvas_wrap",m).animate({opacity:0},0),e(),c!=0?d(c):d(I),b.onStartLoading.call(this)}}),a(w).length&&a(w).click(function(){if(!q.hasClass("camerasliding")){var c=parseFloat(a(".cameraSlide.cameracurrent",r).index());clearInterval(P),$(),a("#"+p+", .camera_canvas_wrap",Z).animate({opacity:0},0),e(),c==I-1?d(1):d(c+2),b.onStartLoading.call(this)}}),k()&&(n.bind("swipeleft",function(c){if(!q.hasClass("camerasliding")){var f=parseFloat(a(".cameraSlide.cameracurrent",r).index());clearInterval(P),$(),a("#"+p+", .camera_canvas_wrap",Z).animate({opacity:0},0),e(),f==I-1?d(1):d(f+2),b.onStartLoading.call(this)}}),n.bind("swiperight",function(c){if(!q.hasClass("camerasliding")){var f=parseFloat(a(".cameraSlide.cameracurrent",r).index());clearInterval(P),$(),a("#"+p+", .camera_canvas_wrap",Z).animate({opacity:0},0),e(),f!=0?d(f):d(I),b.onStartLoading.call(this)}})),a(y).length&&a(".camera_pag li",m).click(function(){if(!q.hasClass("camerasliding")){var c=parseFloat(a(this).index()),f=parseFloat(a(".cameraSlide.cameracurrent",r).index());c!=f&&(clearInterval(P),$(),a("#"+p+", .camera_canvas_wrap",Z).animate({opacity:0},0),e(),d(c+1),b.onStartLoading.call(this))}}),a(z).length&&(a(".pix_thumb img",z).click(function(){if(!q.hasClass("camerasliding")){var c=parseFloat(a(this).parents("li").index()),g=parseFloat(a(".cameracurrent",r).index());c!=g&&(clearInterval(P),$(),a("#"+p+", .camera_canvas_wrap",Z).animate({opacity:0},0),a(".pix_thumb",z).removeClass("cameracurrent"),a(this).parents("li").addClass("cameracurrent"),e(),d(c+1),f(),b.onStartLoading.call(this))}}),a(".camera_thumbs_cont .camera_prevThumbs",Z).hover(function(){a(this).stop(!0,!1).animate({opacity:1},250)},function(){a(this).stop(!0,!1).animate({opacity:.7},250)}),a(".camera_prevThumbs",Z).click(function(){var b=0,c=a(z).outerWidth(),d=a("ul",z).offset().left,e=a("> div",z).offset().left,f=e-d;a(".camera_visThumb",z).each(function(){var c=a(this).outerWidth();b+=c}),f-b>0?a("ul",z).animate({"margin-left":"-"+(f-b)+"px"},500,j):a("ul",z).animate({"margin-left":0},500,j)}),a(".camera_thumbs_cont .camera_nextThumbs",Z).hover(function(){a(this).stop(!0,!1).animate({opacity:1},250)},function(){a(this).stop(!0,!1).animate({opacity:.7},250)}),a(".camera_nextThumbs",Z).click(function(){var b=0,c=a(z).outerWidth(),d=a("ul",z).outerWidth(),e=a("ul",z).offset().left,f=a("> div",z).offset().left,g=f-e;a(".camera_visThumb",z).each(function(){var c=a(this).outerWidth();b+=c}),g+b+b<d?a("ul",z).animate({"margin-left":"-"+(g+b)+"px"},500,j):a("ul",z).animate({"margin-left":"-"+(d-c)+"px"},500,j)}))}})(jQuery),function(a){a.fn.cameraStop=function(){var b=a(this),c=a(".camera_src",b),d="pie_"+b.index();c.addClass("stopped");if(a(".camera_showcommands").length)var e=a(".camera_thumbs_wrap",b);else var e=b;a(".camera_stop",e).length?(a(".camera_stop",e).hide(),a(".camera_play",e).show(),a("#"+d).length&&a("#"+d).hide()):a("#"+d).length&&a("#"+d).hide()}}(jQuery),function(a){a.fn.cameraPlay=function(){var b=a(this),c=a(".camera_src",b),d="pie_"+b.index();c.removeClass("stopped");if(a(".camera_showcommands").length)var e=a(".camera_thumbs_wrap",b);else var e=b;a(".camera_play",e).length?(a(".camera_play",e).hide(),a(".camera_stop",e).show(),a("#"+d).length&&a("#"+d).show()):a("#"+d).length&&a("#"+d).show()}}(jQuery),function(a){a.fn.cameraPause=function(){var b=a(this),c=a(".camera_src",b);c.addClass("paused")}}(jQuery),function(a){a.fn.cameraResume=function(){var b=a(this),c=a(".camera_src",b);(typeof autoAdv=="undefined"||autoAdv!==!0)&&c.removeClass("paused")}}(jQuery);