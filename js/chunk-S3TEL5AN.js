import{b as L}from"./chunk-Y5PO72YU.js";import{O as H,P as A,Y as _,b as C,d as y,g as q,h as j,j as I,l as Y,o as E,q as U,s as P,u as O}from"./chunk-ET6W6GW2.js";import{c as T}from"./chunk-BDQA5RLF.js";T(),T();var g={set(t,n){localStorage.setItem(t,n)},get(t){return localStorage.getItem(t)},del(t){localStorage.removeItem(t)}},D=t=>{if(!t)return;let n=y(O,"div",{innerHTML:t,className:"tip"});setTimeout(()=>{n.addClass("hide"),setTimeout(()=>{O.removeChild(n)},300)},3e3)},W=()=>{E.auto_scroll&&g.set(A,String(U.y))},G=t=>{let n=window.location.hash,p=null;if(H){g.del(A);return}n?p=C(decodeURI(n)):p=E.auto_scroll?parseInt(g.get(A)):0,p&&(L(p),_(1)),t&&n&&!H&&(L(p),_(1))},z=(t,n)=>{navigator.clipboard&&window.isSecureContext?navigator.clipboard.writeText(t).then(()=>{n&&n(!0)},()=>{n&&n(!1)}):(console.error("Too old browser, clipborad API not supported."),n&&n(!1))};T(),T();var X=()=>{let t;C.each("div.tab",n=>{if(n.getAttribute("data-ready"))return;let p=n.getAttribute("data-id"),u=n.getAttribute("data-title"),s=C("#"+p);s?t=!1:(s=document.createElement("div"),s.className="tabs",s.id=p,s.innerHTML='<div class="show-btn"></div>',s.child(".show-btn").addEventListener("click",()=>{L(s)}),n.parentNode.insertBefore(s,n),t=!0);let h=s.child(".nav ul");h||(h=y(s,"div",{className:"nav",innerHTML:"<ul></ul>"}).child("ul"));let d=y(h,"li",{innerHTML:u});t&&(d.addClass("active"),n.addClass("active")),d.addEventListener("click",i=>{let b=i.currentTarget;s.find(".active").forEach(f=>{f.removeClass("active")}),n.addClass("active"),b.addClass("active")}),s.appendChild(n),n.setAttribute("data-ready",String(!0))})},N=null,S=/mobile/i.test(window.navigator.userAgent),K=(t,n)=>{let p={el:{},create(){t.player.options.btns&&t.player.options.btns.forEach(e=>{p.el[e]||(p.el[e]=y(t,"div",{className:e+" btn",onclick(r){t.player.fetch().then(()=>{t.player.options.events[e](r)})}}))})}},u={el:null,btns:{mode:void 0,volume:void 0},step:"next",create:()=>{if(!t.player.options.controls)return;let e=u;t.player.options.controls.forEach(r=>{if(e.btns[r])return;let a={onclick(c){e.events[r]?e.events[r](c):t.player.options.events[r](c)}};switch(r){case"volume":a.className=" "+(d.muted?"off":"on"),a.innerHTML='<div class="bar"></div>',a["on"+m.nameMap.dragStart]=e.events.volume,a.onclick=null;break;case"mode":a.className=" "+t.player.options.mode;break;default:a.className="";break}a.className=r+a.className+" btn",e.btns[r]=y(e.el,"div",a)}),e.btns.volume.bar=e.btns.volume.child(".bar")},events:{mode(e){switch(t.player.options.mode){case"loop":t.player.options.mode="random";break;case"random":t.player.options.mode="order";break;default:t.player.options.mode="loop"}u.btns.mode.className="mode "+t.player.options.mode+" btn",g.set("_PlayerMode",t.player.options.mode)},volume(e){e.preventDefault();let r=e.currentTarget,a=!1,c=o=>{o.preventDefault(),t.player.volume(u.percent(o,r)),a=!0},l=o=>{o.preventDefault(),r.removeEventListener(m.nameMap.dragEnd,l),r.removeEventListener(m.nameMap.dragMove,c),a?(t.player.muted(),t.player.volume(u.percent(o,r))):d.muted?(t.player.muted(),t.player.volume(d.volume)):(t.player.muted("muted"),u.update(0))};r.addEventListener(m.nameMap.dragMove,c),r.addEventListener(m.nameMap.dragEnd,l)},backward(e){u.step="prev",t.player.mode()},forward(e){u.step="next",t.player.mode()}},update(e){u.btns.volume.className="volume "+(!d.muted&&e>0?"on":"off")+" btn",q(u.btns.volume.bar,Math.floor(e*100)+"%")},percent(e,r){let a=((e.clientX||e.changedTouches[0].clientX)-I(r))/j(r);return a=Math.max(a,0),Math.min(a,1)}},s={el:null,bar:null,create(){let e=i.current().el;e&&(s.el&&(s.el.parentNode.removeClass("current").removeEventListener(m.nameMap.dragStart,s.drag),s.el.remove()),s.el=y(e,"div",{className:"progress"}),s.el.setAttribute("data-dtime",m.secondToTime(0)),s.bar=y(s.el,"div",{className:"bar"}),e.addClass("current"),e.addEventListener(m.nameMap.dragStart,s.drag),i.scroll())},update(e){q(s.bar,Math.floor(e*100)+"%"),s.el.setAttribute("data-ptime",m.secondToTime(e*d.duration))},seeking(e){e?s.el.addClass("seeking"):s.el.removeClass("seeking")},percent(e,r){let a=((e.clientX||e.changedTouches[0].clientX)-I(r))/j(r);return a=Math.max(a,0),Math.min(a,1)},drag(e){e.preventDefault();let r=i.current().el,a=l=>{l.preventDefault();let o=s.percent(l,r);s.update(o),k.update(o*d.duration)},c=l=>{l.preventDefault(),r.removeEventListener(m.nameMap.dragEnd,c),r.removeEventListener(m.nameMap.dragMove,a);let o=s.percent(l,r);s.update(o),t.player.seek(o*d.duration),d.disableTimeupdate=!1,s.seeking(!1)};d.disableTimeupdate=!0,s.seeking(!0),r.addEventListener(m.nameMap.dragMove,a),r.addEventListener(m.nameMap.dragEnd,c)}},h={el:null,create(){let e=i.current();h.el.innerHTML='<div class="cover"><div class="disc"><img src="'+e.cover+'" class="blur"  alt="music cover"/></div></div><div class="info"><h4 class="title">'+e.name+"</h4><span>"+e.artist+'</span><div class="lrc"></div></div>',h.el.child(".cover").addEventListener("click",t.player.options.events["play-pause"]),k.create(h.el.child(".lrc"))}},d,i={el:null,data:[],index:-1,errnum:0,add:(e,r)=>{r.forEach(a=>{a.group=e,a.name=a.name||a.title||"Meida name",a.artist=a.artist||a.author||"Anonymous",a.cover=a.cover||a.pic,a.type=a.type||"normal",i.data.push(a)})},clear(){i.data=[],i.el.innerHTML="",i.index!==-1&&(i.index=-1,t.player.fetch())},create(){let e=i.el;i.data.map((r,a)=>{if(r.el)return null;let c="list-"+t.player._id+"-"+r.group,l=C("#"+c);return l||(l=y(e,"div",{id:c,className:t.player.group?"tab":"",innerHTML:"<ol></ol>"}),t.player.group&&(l.setAttribute("data-title",t.player.options.rawList[r.group].title),l.setAttribute("data-id",t.player._id))),r.el=y(l.child("ol"),"li",{title:r.name+" - "+r.artist,innerHTML:'<span class="info"><span>'+r.name+"</span><span>"+r.artist+"</span></span>",onclick(o){let w=o.currentTarget;if(i.index===a&&s.el){d.paused?t.player.play():t.player.seek(d.duration*s.percent(o,w));return}t.player.switch(a),t.player.play()}}),r}),X()},current(){return this.data[this.index]},scroll(){let e=this.current(),r=this.el.child("li.active");r&&r.removeClass("active");let a=this.el.child(".tab.active");return a&&a.removeClass("active"),r=this.el.find(".nav li")[e.group],r&&r.addClass("active"),a=this.el.find(".tab")[e.group],a&&a.addClass("active"),L(e.el,e.el.offsetTop),this},title(){if(d.paused)return;let e=this.current();document.title="Now Playing..."+e.name+" - "+e.artist+" | "+P},error(){let e=this.current();e.el.removeClass("current").addClass("error"),e.error=!0,this.errnum++}},b={el:null,create(){this.el||(this.el=y(t,"div",{className:"player-info",innerHTML:(t.player.options.type==="audio"?'<div class="preview"></div>':"")+'<div class="controller"></div><div class="playlist"></div>'},"after"),h.el=this.el.child(".preview"),i.el=this.el.child(".playlist"),u.el=this.el.child(".controller"))},hide(){let e=this.el;e.addClass("hide"),window.setTimeout(()=>{e.removeClass("show hide")},300)}},f={type:"audio",mode:"random",btns:["play-pause","music"],controls:["mode","backward","play-pause","forward","volume"],events:{"play-pause"(e){d.paused?t.player.play():t.player.pause()},music(e){b.el.hasClass("show")?b.hide():(b.el.addClass("show"),i.scroll().title())}}},m={random(e){return Math.floor(Math.random()*e)},parse(e){let r=[];return[["music.163.com.*song.*id=(\\d+)","netease","song"],["music.163.com.*album.*id=(\\d+)","netease","album"],["music.163.com.*artist.*id=(\\d+)","netease","artist"],["music.163.com.*playlist.*id=(\\d+)","netease","playlist"],["music.163.com.*discover/toplist.*id=(\\d+)","netease","playlist"],["y.qq.com.*song/(\\w+)(.html)?","tencent","song"],["y.qq.com.*album/(\\w+)(.html)?","tencent","album"],["y.qq.com.*singer/(\\w+)(.html)?","tencent","artist"],["y.qq.com.*playsquare/(\\w+)(.html)?","tencent","playlist"],["y.qq.com.*playlist/(\\w+)(.html)?","tencent","playlist"],["xiami.com.*song/(\\w+)","xiami","song"],["xiami.com.*album/(\\w+)","xiami","album"],["xiami.com.*artist/(\\w+)","xiami","artist"],["xiami.com.*collect/(\\w+)","xiami","playlist"]].forEach(a=>{let c=new RegExp(a[0]).exec(e);c!==null&&(r=[a[1],a[2],c[1]])}),r},fetch(e){let r=[];return new Promise((a,c)=>{e.forEach(l=>{let o=m.parse(l);if(o[0]){let w=JSON.stringify(o),x=g.get(w);x?(r.push(...JSON.parse(x)),a(r)):fetch(`${E.playerAPI}/meting/?server=`+o[0]+"&type="+o[1]+"&id="+o[2]+"&r="+Math.random()).then(v=>v.json()).then(v=>{g.set(w,JSON.stringify(v)),r.push(...v),a(r)}).catch(v=>{})}else r.push(l),a(r)})})},secondToTime(e){let r=o=>isNaN(o)?"00":o<10?"0"+o:""+o,a=Math.floor(e/3600),c=Math.floor((e-a*3600)/60),l=Math.floor(e-a*3600-c*60);return(a>0?[a,c,l]:[c,l]).map(r).join(":")},nameMap:{dragStart:S?"touchstart":"mousedown",dragMove:S?"touchmove":"mousemove",dragEnd:S?"touchend":"mouseup"}};d=null,t.player={_id:m.random(999999),group:!0,load(e){let r="";e&&e.length>0?this.options.rawList!==e&&(this.options.rawList=e,i.clear(),this.fetch()):(r="none",this.pause());for(let a in p.el)Y(p.el[a],r);return this},fetch(){return new Promise((e,r)=>{if(i.data.length>0)e(!0);else if(this.options.rawList){let a=[];this.options.rawList.forEach((c,l)=>{a.push(new Promise((o,w)=>{let x=l,v;c.list?(this.group=!0,v=c.list):(x=0,this.group=!1,v=[c]),m.fetch(v).then(M=>{i.add(x,M),o(0)})}))}),Promise.all(a).then(()=>{e(!0)})}}).then(e=>{e&&(i.create(),u.create(),this.mode())})},mode(){let e=i.data.length;if(!e||i.errnum===e)return;let r=u.step==="next"?1:-1,a=()=>{let l=i.index+r;(l>e||l<0)&&(l=u.step==="next"?0:e-1),i.index=l},c=()=>{let l=m.random(e);i.index!==l?i.index=l:a()};switch(this.options.mode){case"random":c();break;case"order":a();break;case"loop":u.step&&a(),i.index===-1&&c();break}this.init()},switch(e){typeof e=="number"&&e!==i.index&&i.current()&&!i.current().error&&(i.index=e,this.init())},init(){let e=i.current();if(!e||e.error){this.mode();return}let r=!1;d.paused||(r=!0,this.stop()),d.setAttribute("src",e.url),d.setAttribute("title",e.name+" - "+e.artist),this.volume(g.get("_PlayerVolume")||"0.7"),this.muted(g.get("_PlayerMuted")),s.create(),this.options.type==="audio"&&h.create(),r===!0&&this.play()},play(){if(N&&N.player.pause(),i.current().error){this.mode();return}d.play().then(()=>{i.scroll()}).catch(e=>{})},pause(){d.pause(),document.title=P},stop(){d.pause(),d.currentTime=0,document.title=P},seek(e){e=Math.max(e,0),e=Math.min(e,d.duration),d.currentTime=e,s.update(e/d.duration)},muted(e){e==="muted"?(d.muted=e,g.set("_PlayerMuted",e),u.update(0)):(g.del("_PlayerMuted"),d.muted=!1,u.update(d.volume))},volume(e){isNaN(e)||(u.update(e),g.set("_PlayerVolume",e),d.volume=e)},mini(){b.hide()}};let k={el:null,data:null,index:0,create(e){let r=i.index,a=i.current().lrc,c=l=>{if(r!==i.index)return;this.data=this.parse(l);let o="";this.data.forEach((w,x)=>{o+="<p"+(x===0?' class="current"':"")+">"+w[1]+"</p>"}),this.el=y(e,"div",{className:"inner",innerHTML:o},"replace"),this.index=0};a.startsWith("http")?this.fetch(a,c):c(a)},update(e){if(this.data&&(this.index>this.data.length-1||e<this.data[this.index][0]||!this.data[this.index+1]||e>=this.data[this.index+1][0])){for(let r=0;r<this.data.length;r++)if(e>=this.data[r][0]&&(!this.data[r+1]||e<this.data[r+1][0])){this.index=r;let a=-(this.index-1);this.el.style.transform="translateY("+a+"rem)",this.el.getElementsByClassName("current")[0].removeClass("current"),this.el.getElementsByTagName("p")[r].addClass("current")}}},parse(e){if(e){e=e.replace(/([^\]^\n])\[/g,(l,o)=>o+`
[`);let r=e.split(`
`),a=[],c=r.length;for(let l=0;l<c;l++){let o=r[l].match(/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g),w=r[l].replace(/.*\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g,"").replace(/<(\d{2}):(\d{2})(\.(\d{2,3}))?>/g,"").trim();if(o){let x=o.length;for(let v=0;v<x;v++){let M=/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/.exec(o[v]),J=M[1]*60,F=parseInt(M[2]),R=M[4]?parseInt(M[4])/((M[4]+"").length===2?100:1e3):0,V=J+F+R;a.push([V,w])}}}return a=a.filter(l=>l[1]),a.sort((l,o)=>l[0]-o[0]),a}else return[]},fetch(e,r){fetch(e).then(a=>a.text()).then(a=>{r(a)}).catch(a=>{})}},B={onerror(){i.error(),t.player.mode()},ondurationchange(){d.duration!==1&&s.el.setAttribute("data-dtime",m.secondToTime(d.duration))},onloadedmetadata(){t.player.seek(0),s.el.setAttribute("data-dtime",m.secondToTime(d.duration))},onplay(){t.parentNode.addClass("playing"),D(this.getAttribute("title")),N=t},onpause(){t.parentNode.removeClass("playing"),N=null},ontimeupdate(){this.disableTimeupdate||(s.update(this.currentTime/this.duration),k.update(this.currentTime))},onended(e){t.player.mode(),t.player.play()}};return(e=>{t.player.created||(t.player.options=Object.assign(f,e),t.player.options.mode=g.get("_PlayerMode")||t.player.options.mode,p.create(),d=y(t,t.player.options.type,B),b.create(),t.parentNode.addClass(t.player.options.type),t.player.created=!0)})(n),t};T();function Q(){let t=!0;window.addEventListener("DOMContentLoaded",function(){t=!1}),document.readyState==="loading"&&window.addEventListener("load",function(){t&&(window.dispatchEvent(new Event("DOMContentLoaded")),console.log("%c \u2601\uFE0Fcloudflare patch %c running(rocket & minify)","color: white; background: #ff8c00; padding: 5px 3px;","padding: 4px;border:1px solid #ff8c00"))})}var Z=(t,n,p)=>{if(p)n();else{let u=document.createElement("script");u.onload=function(s,h){(h||!u.readyState)&&(console.log("abort!"),u.onload=null,u=void 0,!h&&n&&setTimeout(n,0))},u.src=t,document.head.appendChild(u)}},ee=t=>{let{text:n,parentNode:p,id:u,className:s,type:h,src:d,dataset:i}=t,b=n||t.textContent||t.innerHTML||"";p.removeChild(t);let f=document.createElement("script");u&&(f.id=u),s&&(f.className=s),h&&(f.type=h),d&&(f.src=d,f.async=!1),i.pjax!==void 0&&(f.dataset.pjax=""),b!==""&&f.appendChild(document.createTextNode(b)),p.appendChild(f)};T();var $=(t,n)=>{let p=E[t][n];return p.includes("http")?p:p.includes("gh")||p.includes("combine")?`https://cdn.jsdelivr.net/${p}`:p.includes("npm")?`https://cdn.jsdelivr.net/${p}`:`/${p}`},te=(t,n,p)=>{LOCAL[t]&&Z($("js",t),n||function(){window[t]=!0},p||window[t])},ae=(t,n)=>{window["css"+t]||LOCAL[t]&&(y(document.head,"link",{rel:"stylesheet",href:$("css",t)}),window["css"+t]=!0)};export{g as a,D as b,W as c,G as d,z as e,X as f,K as g,Q as h,ee as i,te as j,ae as k};/*! For license information please see chunk-S3TEL5AN.js.LEGAL.txt */
