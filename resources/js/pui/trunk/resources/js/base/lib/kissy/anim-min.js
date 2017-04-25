/*
Copyright 2011, KISSY UI Library v1.20
MIT Licensed
build time: Nov 29 11:47
*/
KISSY.add("anim/base",function(d,b,f,i,n,a,m,e){function h(g,j,c,q,o){if(g=b.get(g)){if(!(this instanceof h))return new h(g,j,c,q,o);j=d.isString(j)?d.unparam(j,";",":"):d.clone(j);for(var p in j){var w=k(d.trim(p));if(p!=w){j[w]=j[p];delete j[p]}}c=d.isPlainObject(c)?d.clone(c):{duration:parseFloat(c)||undefined,easing:q,complete:o};this.config=c=d.merge(M,c);c.duration*=1E3;this.elem=this.domEl=g;this.props=j;this._backupProps={};this._fxs={};this.on("complete",r)}}function r(g){var j=this._backupProps,
c=this.config;d.isEmptyObject(j=this._backupProps)||b.css(this.elem,j);c.complete&&c.complete.call(this,g)}function s(){var g=this.config,j=this._backupProps,c=this.elem,q,o,p,w=g.specialEasing||{},N=this._fxs,t=this.props;y(this);if(this.fire("start")===false)this.stop(0);else{if(x(c)){q=b.css(c,"display")=="none";for(p in t){o=t[p];if(o=="hide"&&q||o=="show"&&!q){this.stop(1);return}}}d.each(t,function(E,u){if(t.hasOwnProperty(u)){var v;if(d.isArray(E)){v=w[u]=E[1];t[u]=E[0]}else v=w[u]=w[u]||g.easing;
if(d.isString(v))v=w[u]=i[v];w[u]=v||i.easeNone}});d.each(K,function(E,u){var v,H,L;if(L=t[u]){H={};d.each(E,function(J){H[J]=b.css(c,J);w[J]=w[u]});b.css(c,u,L);for(v in H){t[v]=b.css(c,v);b.css(c,v,H[v])}delete t[u]}});for(p in t)if(t.hasOwnProperty(p)){o=d.trim(t[p]);var z,A,F={elem:c,prop:p,duration:g.duration,easing:w[p]},D=m.getFx(F);if(d.inArray(o,B)){j[p]=b.style(c,p);if(o=="toggle")o=q?"show":"hide";if(o=="hide"){z=0;A=D.cur();j.display="none"}else{A=0;z=D.cur();b.css(c,p,A);b.show(c)}o=
z}else{z=o;A=D.cur()}o+="";var I="",G=o.match(O);if(G){z=parseFloat(G[2]);if((I=G[3])&&I!=="px"){b.css(c,p,o);A=z/D.cur()*A;b.css(c,p,A+I)}if(G[1])z=(G[1]==="-="?-1:1)*z+A}F.from=A;F.to=z;F.unit=I;D.load(F);N[p]=D}if(x(c)&&(t.width||t.height)){d.mix(j,{overflow:b.style(c,"overflow"),"overflow-x":b.style(c,"overflowX"),"overflow-y":b.style(c,"overflowY")});b.css(c,"overflow","hidden");if(b.css(c,"display")==="inline"&&b.css(c,"float")==="none")n.ie?b.css(c,"zoom",1):b.css(c,"display","inline-block")}a.start(this)}}
function y(g){var j=g.elem,c=b.data(j,C);c||b.data(j,C,c={});c[d.stamp(g)]=g}function l(g,j,c,q){c&&q!==false&&e.removeQueue(g,q);g=b.data(g,C);g=d.merge(g);for(var o in g){c=g[o];c.config.queue==q&&c.stop(j)}}var k=b._camelCase,x=b._isElementNode,B=["hide","show","toggle"],K={border:["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth"],borderBottom:["borderBottomWidth"],borderLeft:["borderLeftWidth"],borderTop:["borderTopWidth"],borderRight:["borderRightWidth"],font:["fontSize",
"fontWeight"],margin:["marginBottom","marginLeft","marginRight","marginTop"],padding:["paddingBottom","paddingLeft","paddingRight","paddingTop"]},M={duration:1,easing:"easeNone"},O=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i;h.SHORT_HANDS=K;d.augment(h,f.Target,{isRunning:function(){var g;g=(g=b.data(this.elem,C))?!!g[d.stamp(this)]:0;return g},_runInternal:s,run:function(){this.config.queue===false?s.call(this):e.queue(this);return this},_frame:function(){var g,j=1,c=this._fxs;for(g in c)if(c.hasOwnProperty(g))j&=
c[g].frame();if(this.fire("step")===false||j)this.stop(j)},stop:function(g){var j=this.config.queue,c,q=this._fxs;if(this.isRunning()){if(g){for(c in q)q.hasOwnProperty(c)&&q[c].frame(1);this.fire("complete")}a.stop(this);g=this.elem;if(c=b.data(g,C)){delete c[d.stamp(this)];d.isEmptyObject(c)&&b.removeData(g,C)}j!==false&&e.dequeue(this);return this}else j!==false&&e.remove(this)}});var C=d.guid("ks-anim-unqueued-"+d.now()+"-");h.stop=function(g,j,c,q){if(q===null||d.isString(q)||q===false)return l.apply(undefined,
arguments);c&&e.removeQueues(g);var o=b.data(g,C);o=d.merge(o);for(var p in o)o[p].stop(j)};h.isRunning=function(g){return(g=b.data(g,C))&&!d.isEmptyObject(g)};h.Q=e;return h},{requires:["dom","event","./easing","ua","./manager","./fx","./queue"]});
KISSY.add("anim/color",function(d,b,f,i){function n(l){l+="";var k;if(k=l.match(r))return[parseInt(k[1]),parseInt(k[2]),parseInt(k[3])];else if(k=l.match(s))return[parseInt(k[1]),parseInt(k[2]),parseInt(k[3]),parseInt(k[4])];else if(k=l.match(y)){for(l=1;l<k.length;l++)if(k[l].length<2)k[l]+=k[l];return[parseInt(k[1],m),parseInt(k[2],m),parseInt(k[3],m)]}if(h[l=l.toLowerCase()])return h[l];return[255,255,255]}function a(){a.superclass.constructor.apply(this,arguments)}var m=16,e=Math.floor,h={black:[0,
0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255]},r=/^rgb\(([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\)$/i,s=/^rgba\(([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+),\s*([0-9]+)\)$/i,y=/^#?([0-9A-F]{1,2})([0-9A-F]{1,2})([0-9A-F]{1,2})$/i;b=f.SHORT_HANDS;b.background=["backgroundColor"];b.borderColor=
["borderBottomColor","borderLeftColor","borderRightColor","borderTopColor"];b.border.push("borderBottomColor","borderLeftColor","borderRightColor","borderTopColor");b.borderBottom.push("borderBottomColor");b.borderLeft.push("borderLeftColor");b.borderRight.push("borderRightColor");b.borderTop.push("borderTopColor");d.extend(a,i,{load:function(){a.superclass.load.apply(this,arguments);if(this.from)this.from=n(this.from);if(this.to)this.to=n(this.to)},interpolate:function(l,k,x){var B=a.superclass.interpolate;
if(l.length==3&&k.length==3)return"rgb("+[e(B(l[0],k[0],x)),e(B(l[1],k[1],x)),e(B(l[2],k[2],x))].join(", ")+")";else if(l.length==4||k.length==4)return"rgba("+[e(B(l[0],k[0],x)),e(B(l[1],k[1],x)),e(B(l[2],k[2],x)),e(B(l[3]||1,k[3]||1,x))].join(", ")+")"}});d.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","color","outlineColor"],function(l){i.Factories[l]=a});return a},{requires:["dom","./base","./fx"]});
KISSY.add("anim/easing",function(){var d=Math.PI,b=Math.pow,f=Math.sin,i=1.70158,n={swing:function(a){return-Math.cos(a*d)/2+0.5},easeNone:function(a){return a},easeIn:function(a){return a*a},easeOut:function(a){return(2-a)*a},easeBoth:function(a){return(a*=2)<1?0.5*a*a:0.5*(1- --a*(a-2))},easeInStrong:function(a){return a*a*a*a},easeOutStrong:function(a){return 1- --a*a*a*a},easeBothStrong:function(a){return(a*=2)<1?0.5*a*a*a*a:0.5*(2-(a-=2)*a*a*a)},elasticIn:function(a){if(a===0||a===1)return a;
return-(b(2,10*(a-=1))*f((a-0.075)*2*d/0.3))},elasticOut:function(a){if(a===0||a===1)return a;return b(2,-10*a)*f((a-0.075)*2*d/0.3)+1},elasticBoth:function(a){if(a===0||(a*=2)===2)return a;if(a<1)return-0.5*b(2,10*(a-=1))*f((a-0.1125)*2*d/0.45);return b(2,-10*(a-=1))*f((a-0.1125)*2*d/0.45)*0.5+1},backIn:function(a){if(a===1)a-=0.0010;return a*a*((i+1)*a-i)},backOut:function(a){return(a-=1)*a*((i+1)*a+i)+1},backBoth:function(a){if((a*=2)<1)return 0.5*a*a*(((i*=1.525)+1)*a-i);return 0.5*((a-=2)*a*
(((i*=1.525)+1)*a+i)+2)},bounceIn:function(a){return 1-n.bounceOut(1-a)},bounceOut:function(a){return a<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+0.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+0.9375:7.5625*(a-=2.625/2.75)*a+0.984375},bounceBoth:function(a){if(a<0.5)return n.bounceIn(a*2)*0.5;return n.bounceOut(a*2-1)*0.5+0.5}};n.NativeTimeFunction={easeNone:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeBoth:"ease-in-out",easeInStrong:"cubic-bezier(0.9, 0.0, 0.9, 0.5)",easeOutStrong:"cubic-bezier(0.1, 0.5, 0.1, 1.0)",
easeBothStrong:"cubic-bezier(0.9, 0.0, 0.1, 1.0)"};return n});
KISSY.add("anim/fx",function(d,b,f){function i(a){this.load(a)}function n(a,m){if((!a.style||a.style[m]==null)&&b.attr(a,m,f,1)!=null)return 1;return 0}d.augment(i,{load:function(a){d.mix(this,a);this.startTime=d.now();this.pos=0;this.unit=this.unit||""},frame:function(a){var m=0,e=d.now();if(a||e>=this.duration+this.startTime)m=this.pos=1;else{a=e-this.startTime;this.pos=this.easing(a/this.duration)}this.update();return m},interpolate:function(a,m,e){return d.isNumber(a)&&d.isNumber(m)?(a+(m-a)*
e).toFixed(3):f},update:function(){var a=this.prop,m=this.elem,e=this.to,h=this.interpolate(this.from,e,this.pos);if(h===f){if(!this.finished){this.finished=1;b.css(m,a,e)}}else{h+=this.unit;n(m,a)?b.attr(m,a,h,1):b.css(m,a,h)}},cur:function(){var a=this.prop,m=this.elem;if(n(m,a))return b.attr(m,a,f,1);var e;a=b.css(m,a);return isNaN(e=parseFloat(a))?!a||a==="auto"?0:a:e}});i.Factories={};i.getFx=function(a){return new (i.Factories[a.prop]||i)(a)};return i},{requires:["dom"]});
KISSY.add("anim/manager",function(d){var b=d.stamp;return{interval:15,runnings:{},timer:null,start:function(f){var i=b(f);if(!this.runnings[i]){this.runnings[i]=f;this.startTimer()}},stop:function(f){this.notRun(f)},notRun:function(f){delete this.runnings[b(f)];d.isEmptyObject(this.runnings)&&this.stopTimer()},pause:function(f){this.notRun(f)},resume:function(f){this.start(f)},startTimer:function(){var f=this;if(!f.timer)f.timer=setTimeout(function(){if(f.runFrames())f.stopTimer();else{f.timer=0;
f.startTimer()}},f.interval)},stopTimer:function(){var f=this.timer;if(f){clearTimeout(f);this.timer=0}},runFrames:function(){var f=1,i=this.runnings,n;for(n in i)if(i.hasOwnProperty(n)){f=0;i[n]._frame()}return f}}});
KISSY.add("anim/queue",function(d,b){function f(e,h,r){h=h||a;var s,y=b.data(e,n);if(!y&&!r)b.data(e,n,y={});if(y){s=y[h];if(!s&&!r)s=y[h]=[]}return s}function i(e,h){h=h||a;var r=b.data(e,n);r&&delete r[h];d.isEmptyObject(r)&&b.removeData(e,n)}var n=d.guid("ks-queue-"+d.now()+"-"),a=d.guid("ks-queue-"+d.now()+"-"),m={queueCollectionKey:n,queue:function(e){var h=f(e.elem,e.config.queue);h.push(e);h[0]!=="..."&&m.dequeue(e);return h},remove:function(e){var h=f(e.elem,e.config.queue,1);if(h){e=d.indexOf(e,
h);e>-1&&h.splice(e,1)}},removeQueues:function(e){b.removeData(e,n)},removeQueue:i,dequeue:function(e){var h=e.elem;e=e.config.queue;var r=f(h,e,1),s=r&&r.shift();if(s=="...")s=r.shift();if(s){r.unshift("...");s._runInternal()}else i(h,e)}};return m},{requires:["dom"]});KISSY.add("anim",function(d,b,f){b.Easing=f;return b},{requires:["anim/base","anim/easing","anim/color"]});