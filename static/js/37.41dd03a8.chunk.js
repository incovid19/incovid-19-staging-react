(this.webpackJsonpincovid19=this.webpackJsonpincovid19||[]).push([[37],{115:function(t,e,i){"use strict";var n=i(46),a=i(2),c={root:null,rootMargin:"0px 0px 0px 0px",threshold:0};e.a=function(t){var e=Object(a.useState)(!1),i=Object(n.a)(e,2),l=i[0],o=i[1];return Object(a.useEffect)((function(){t.current&&new IntersectionObserver((function(e,i){e.forEach((function(e){e.isIntersecting&&(o(!0),i.unobserve(t.current))}))}),c).observe(t.current)}),[t]),l}},252:function(t,e,i){"use strict";i.r(e);var n=i(100),a=i(46),c=i(11),l=i(115),o=i(24),s=i(97),r=i(94),d=i.n(r),u=i(67),v=i(250),j=i(2),b=i(116),f=i(293),O=i(5),h=i(249),p=i(130),m=i(19),x=Object(j.lazy)((function(){return Object(o.l)((function(){return Promise.all([i.e(1),i.e(19)]).then(i.bind(null,212))}))})),g=Object(j.lazy)((function(){return Object(o.l)((function(){return i.e(8).then(i.bind(null,112))}))})),y=Object(j.lazy)((function(){return Object(o.l)((function(){return i.e(34).then(i.bind(null,159))}))})),N=Object(j.lazy)((function(){return Object(o.l)((function(){return i.e(40).then(i.bind(null,160))}))})),V=Object(j.lazy)((function(){return Object(o.l)((function(){return Promise.all([i.e(2),i.e(7),i.e(5)]).then(i.bind(null,229))}))})),k=Object(j.lazy)((function(){return Object(o.l)((function(){return i.e(35).then(i.bind(null,161))}))})),D=Object(j.lazy)((function(){return Object(o.l)((function(){return Promise.all([i.e(1),i.e(4),i.e(26)]).then(i.bind(null,162))}))})),w=Object(j.lazy)((function(){return Object(o.l)((function(){return i.e(9).then(i.bind(null,231))}))})),C=Object(j.lazy)((function(){return Object(o.l)((function(){return Promise.all([i.e(2),i.e(38)]).then(i.bind(null,230))}))})),M=Object(j.lazy)((function(){return Object(o.l)((function(){return i.e(24).then(i.bind(null,177))}))}));function S(){var t,e,i,r,S,z=Object(f.a)().t,F=Object(O.i)().stateCode.toUpperCase(),H=Object(h.a)("mapStatistic","active"),I=Object(a.a)(H,2),R=I[0],E=I[1],U=Object(j.useState)(!1),A=Object(a.a)(U,2),P=A[0],L=A[1],B=Object(j.useState)({stateCode:F,districtName:null}),T=Object(a.a)(B,2),J=T[0],W=T[1],X=Object(j.useState)(!1),Y=Object(a.a)(X,2),q=Y[0],G=Y[1],K=Object(p.a)("".concat(c.e,"/timeseries-").concat(F,".min.json"),o.b,{revalidateOnMount:!0,refreshInterval:1e5}),Q=K.data,Z=K.error,$=Object(p.a)("".concat(c.e,"/data.min.json"),o.b,{revalidateOnMount:!0,refreshInterval:1e5}).data,_=null===$||void 0===$?void 0:$[F],tt=function(t){var e;console.log(t);var i=60,n=35,a=40,c=50;console.log("json",t);var l=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ";console.log("lastUpdate",t);var i=new Date(t),n=i.toLocaleString("default",{month:"long"}),a=i.getDate();return"".concat(a<10?"0".concat(a):"".concat(a)).concat(e).concat(n)}(null===(e=t[0])||void 0===e?void 0:e.Date);d3.selectAll("#scatterplot-stats").selectAll("svg").remove(),d3.selectAll("#scatterplot-stats").selectAll("#date").remove(),d3.select("#scatterplot-stats").append("div").attr("id","date").attr("class","graphtext").html("".concat(l));var o=d3.select("#scatterplot-stats").append("svg").attr("viewBox","0 0 ".concat(600," ").concat(300)),s=600-n-c-3,r=300-i-a,d=d3.scale.linear().range([r,0]),u=d3.scale.linear().range([0,s]),v=d3.svg.axis().scale(u).ticks(6).tickFormat((function(t){var e=d3.formatPrefix(t);return e.scale(t)+e.symbol})).orient("bottom"),j=d3.svg.axis().scale(d).orient("right").ticks(6).tickFormat((function(t){var e=d3.formatPrefix(t);return e.scale(t)+e.symbol}));o.append("rect").attr("width",s+n+c).attr("height",r+i+a).attr("x",0).attr("y",0).attr("fill","#E3E2F3").attr("rx",4).attr("fill-opacity",1),o=o.append("g").attr("transform","translate("+n+","+i+")");var b=d3.select("#scatterplot-stats").append("div").attr("class","tooltip");var f=t;if(!f)throw new Error("d3.json error");u.domain([0,100]),d.domain([0,100]),o.append("g").attr("class","x axis").attr("transform","translate(0,"+r+")").call(v).append("text").attr("fill","red").attr("transform","translate("+s+",-30)").attr("dy","4.5em").attr("text-anchor","end").text("Vaccine Dose 1 %"),o.append("g").attr("class","y axis").attr("transform","translate("+s+", 0)").call(j).append("text").attr("transform","rotate(0)").attr("dy","-0.8em").attr("text-anchor","end").text("Vaccine Dose 2 %"),o.selectAll(".cyclist").data(f).enter().append("g").attr("class","cyclist").attr("x",(function(t){return u(t.Vaccine1)})).attr("y",(function(t){return d(t.Vaccine2)})).append("circle").attr("cx",(function(t){return u(t.Vaccine1)})).attr("cy",(function(t){return d(t.Vaccine2)})).attr("r",5).attr("fill",(function(t){var e=function(){for(var t="#",e=0;e<6;e++)t+="0123456789ABCDEF"[Math.floor(16*Math.random())];return t}();return t.color=e,e})).on("mouseover",(function(t,e){console.log("tooltip",t),b.style({display:"block",height:"80px",width:"200px",padding:"5px",opacity:1,"background-color":t.color});var i=parseInt(b.style("width")),n=parseInt(b.style("height"));b.style({top:d3.event.pageY-n-5+"px",left:d3.event.pageX-i+100+"px"}).html("<span><b>"+t.Name+"<br/>Vaccine Dose 1: "+t.Vaccine1+"% <br/>Vaccine Dose 2: "+t.Vaccine2+"%<br/>Total Vaccinations: "+(t.count1+t.count2))})).on("mouseout",(function(t,e){console.log("tooltip",t),b.style({display:"none"})}))};Object(j.useEffect)((function(){if(J.stateCode!==F&&(W({stateCode:F,districtName:null}),L(!1)),console.log("json",$),null===$||void 0===$?void 0:$[F]){console.log("state",$[F].districts);var t=[];if(["DL","LA"].includes(F)){var e,i,n,a,l,o,s,r,d,u,v,j,b,f,O,h,p,m,x,g={};if((null===(e=$[F])||void 0===e||null===(i=e.meta)||void 0===i?void 0:i.population)&&(null===(n=$[F])||void 0===n||null===(a=n.total)||void 0===a?void 0:a.vaccinated1)&&(null===(l=$[F])||void 0===l||null===(o=l.total)||void 0===o?void 0:o.vaccinated2))g.Name=c.y[F],g.Vaccine1=((null===(s=$[F])||void 0===s||null===(r=s.total)||void 0===r?void 0:r.vaccinated1)/(null===(d=$[F])||void 0===d?void 0:d.meta.population)*100).toFixed(2),g.Vaccine2=((null===(u=$[F])||void 0===u||null===(v=u.total)||void 0===v?void 0:v.vaccinated2)/(null===(j=$[F])||void 0===j?void 0:j.meta.population)*100).toFixed(2),g.count1=null===(b=$[F])||void 0===b||null===(f=b.total)||void 0===f?void 0:f.vaccinated1,g.count2=null===(O=$[F])||void 0===O||null===(h=O.total)||void 0===h?void 0:h.vaccinated2,g.Date=null!==(p=null===(m=$[F])||void 0===m||null===(x=m.meta)||void 0===x?void 0:x.date)&&void 0!==p?p:"",g.Vaccine1>100&&(g.Vaccine1=100,console.log("greater",g)),g.Vaccine2>100&&(g.Vaccine2=100),g.Vaccine1&&g.Vaccine2&&g.Vaccine1<=100&&g.Vaccine2<=100&&t.push(g)}else Object.keys($[F].districts).forEach((function(e){var i,n,a,c,l,o,s,r,d;if((null===(i=$[F].districts)||void 0===i||null===(n=i[e])||void 0===n||null===(a=n.total)||void 0===a?void 0:a.vaccinated1)&&(null===(c=$[F].districts)||void 0===c||null===(l=c[e])||void 0===l||null===(o=l.total)||void 0===o?void 0:o.vaccinated2)&&(null===(s=$[F].districts)||void 0===s||null===(r=s[e])||void 0===r||null===(d=r.meta)||void 0===d?void 0:d.population)){var u,v,j,b,f,O,h,p,m,x,g,y,N,V,k,D,w,C,M,S,z,H,I,R=((null===(u=$[F].districts)||void 0===u||null===(v=u[e])||void 0===v||null===(j=v.total)||void 0===j?void 0:j.vaccinated1)/(null===(b=$[F].districts)||void 0===b||null===(f=b[e])||void 0===f||null===(O=f.meta)||void 0===O?void 0:O.population)*100).toFixed(2),E=((null===(h=$[F].districts)||void 0===h||null===(p=h[e])||void 0===p||null===(m=p.total)||void 0===m?void 0:m.vaccinated2)/(null===(x=$[F].districts)||void 0===x||null===(g=x[e])||void 0===g||null===(y=g.meta)||void 0===y?void 0:y.population)*100).toFixed(2);if(R>100&&(R=100),E>100&&(E=100),R&&E&&R<=100&&E<=100)t.push({Vaccine1:null!==(N=R)&&void 0!==N?N:0,Vaccine2:null!==(V=E)&&void 0!==V?V:0,count1:null===(k=$[F].districts)||void 0===k||null===(D=k[e])||void 0===D||null===(w=D.total)||void 0===w?void 0:w.vaccinated1,count2:null===(C=$[F].districts)||void 0===C||null===(M=C[e])||void 0===M||null===(S=M.total)||void 0===S?void 0:S.vaccinated2,Name:e,Date:null!==(z=null===(H=$[F])||void 0===H||null===(I=H.meta)||void 0===I?void 0:I.date)&&void 0!==z?z:""})}}));tt(t)}}),[J.stateCode,F,_,$]);var et=Object(j.useMemo)((function(){if(_){var t=window.innerWidth>=540?3:2,e=(null===_||void 0===_?void 0:_.districts)?Object.keys(_.districts).filter((function(t){return"Unknown"!==t})).length:0;return Math.ceil(e/t)}}),[_]),it=Object(j.useRef)(),nt=Object(l.a)(it),at=Object(j.useMemo)((function(){var t=[];return[0,0,0,0].map((function(e,i){return t.push({animationDelay:"".concat(250*i,"ms")}),null})),t}),[]),ct=P?window.innerWidth>=540?10:8:6,lt=Object(j.useMemo)((function(){var t,e,i,n,a,c=[null===_||void 0===_||null===(t=_.meta)||void 0===t?void 0:t.date,null===_||void 0===_||null===(e=_.meta)||void 0===e||null===(i=e.tested)||void 0===i?void 0:i.date,null===_||void 0===_||null===(n=_.meta)||void 0===n||null===(a=n.vaccinated)||void 0===a?void 0:a.date].filter((function(t){return t}));return c.length>0?Object(u.a)(Object(v.a)(c.map((function(t){return Object(o.k)(t)}))),{representation:"date"}):null}),[_]),ot=c.p.includes(R)?R:"confirmed",st=Object(j.useMemo)((function(){var t;return!!((null===_||void 0===_?void 0:_.districts)&&(null===(t=_.districts)||void 0===t?void 0:t[c.H])&&c.u.every((function(t){return Object(o.i)(_,"total",t)===Object(o.i)(_.districts[c.H],"total",t)})))}),[_]),rt=c.z[ot],dt=(null===J||void 0===J?void 0:J.districtName)&&J.districtName!==c.H&&st,ut=Object.keys((!st||!rt.hasPrimary)&&(null===_||void 0===_?void 0:_.districts)||{});return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(b.a,{children:[Object(m.jsxs)("title",{children:["Coronavirus Outbreak in ",c.y[F]," - incovid19.org"]}),Object(m.jsx)("meta",{name:"title",content:"Coronavirus Outbreak in ".concat(c.y[F],": Latest Map and Case Count")})]}),Object(m.jsxs)("div",{className:"State",children:[Object(m.jsxs)("div",{className:"state-left",children:[Object(m.jsx)(w,{data:_,stateCode:F}),Object(m.jsxs)("div",{style:{position:"relative"},children:[Object(m.jsx)(k,{mapStatistic:R,setMapStatistic:E}),Object(m.jsx)(y,{data:_}),Object(m.jsx)(D,{timeseries:null===Q||void 0===Q||null===(t=Q[F])||void 0===t?void 0:t.dates,stateCode:F,forceRender:!!Z})]}),(null===_||void 0===_||null===(e=_.total)||void 0===e?void 0:e.vaccinated1)&&Object(m.jsx)(N,{data:_}),$&&Object(m.jsx)(j.Suspense,{fallback:Object(m.jsx)("div",{style:{minHeight:"50rem"}}),children:Object(m.jsx)(V,{stateCode:F,data:$,regionHighlighted:J,setRegionHighlighted:W,mapStatistic:R,setMapStatistic:E,lastDataDate:lt,delta7Mode:q,setDelta7Mode:G,noRegionHighlightedDistrictData:dt,noDistrictData:st})}),Object(m.jsx)("span",{ref:it}),nt&&$&&Object(m.jsx)(j.Suspense,{fallback:Object(m.jsx)("div",{}),children:Object(m.jsx)(C,{stateCode:F,data:$,timeseries:null===Q||void 0===Q||null===(i=Q[F])||void 0===i?void 0:i.dates})})]}),Object(m.jsx)("div",{className:"state-right",children:Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"district-bar",children:[Object(m.jsxs)("div",{className:d()("district-bar-top",{expanded:P}),children:[Object(m.jsxs)("div",{className:"district-bar-left",children:[Object(m.jsx)("h2",{className:d()(ot,"fadeInUp"),style:at[0],children:z("Top districts")}),Object(m.jsx)("div",{className:"districts fadeInUp ".concat(P?"is-grid":""),style:P?Object(n.a)({gridTemplateRows:"repeat(".concat(et,", 2rem)")},at[1]):at[1],children:ut.filter((function(t){return"Unknown"!==t})).sort((function(t,e){return function(t,e){var i=_.districts[t],n=_.districts[e];return Object(o.i)(n,"total",R)-Object(o.i)(i,"total",R)}(t,e)})).slice(0,P?void 0:5).map((function(t){var e=Object(o.i)(_.districts[t],"total",ot),i=Object(o.i)(_.districts[t],"delta",ot);return Object(m.jsxs)("div",{className:"district",children:[Object(m.jsx)("h2",{children:Object(o.f)(e)}),Object(m.jsx)("h5",{children:z(t)}),"active"!==ot&&Object(m.jsx)("div",{className:"delta",children:Object(m.jsx)("h6",{className:ot,children:i>0?"\u2191"+Object(o.f)(i):""})})]},t)}))})]}),Object(m.jsxs)("div",{className:"district-bar-right fadeInUp",style:at[2],children:[Q&&("confirmed"===ot||"deceased"===ot)&&Object(m.jsx)("div",{className:"happy-sign",children:Object.keys((null===(r=Q[F])||void 0===r?void 0:r.dates)||{}).slice(-ct).every((function(t){return 0===Object(o.i)(Q[F].dates[t],"delta",ot)}))&&Object(m.jsxs)("div",{className:"alert ".concat("confirmed"===ot?"is-green":""),children:[Object(m.jsx)(s.v,{}),Object(m.jsxs)("div",{className:"alert-right",children:["No new ",ot," cases in the past five days"]})]})}),Object(m.jsx)(x,{timeseries:null===Q||void 0===Q||null===(S=Q[F])||void 0===S?void 0:S.dates,statistic:ot,stateCode:F,lookback:ct,forceRender:!!Z})]})]}),Object(m.jsx)("div",{className:"district-bar-bottom",children:ut.length>5?Object(m.jsx)("button",{className:"button fadeInUp",onClick:function(){L(!P)},style:at[3],children:Object(m.jsx)("span",{children:z(P?"View less":"View all")})}):Object(m.jsx)("div",{style:{height:"3.75rem",flexBasis:"15%"}})})]}),Object(m.jsxs)(j.Suspense,{fallback:Object(m.jsx)("div",{}),children:[Object(m.jsx)(M,{stateCode:F,timeseries:Q,regionHighlighted:J,setRegionHighlighted:W,noRegionHighlightedDistrictData:dt,forceRender:!!Z}),Object(m.jsx)("div",{id:"scatterplot-stats",children:Object(m.jsx)("h1",{lassName:"text-center ",children:z("Vaccination Coverage")})})]})]})})]}),Object(m.jsx)("div",{}),Object(m.jsx)(g,{})]})}e.default=Object(j.memo)(S)}}]);
//# sourceMappingURL=37.41dd03a8.chunk.js.map