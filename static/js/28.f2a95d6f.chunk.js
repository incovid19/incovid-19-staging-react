(this.webpackJsonpincovid19=this.webpackJsonpincovid19||[]).push([[28],{101:function(e,t,n){"use strict";var a=n(100),c=n(129),s=n(2),r=(n(119),n(120),n(19));t.a=function(e){var t=e.children,n=e.message,i=e.hold,o=void 0!==i&&i,l=e.childProps,d=void 0===l?{}:l,u=Object(s.useCallback)((function(e){return e.stopPropagation()}),[]);return Object(r.jsx)(c.a,{className:"Tooltip",content:"string"===typeof n?Object(r.jsx)("p",{className:"message",dangerouslySetInnerHTML:{__html:n.trim().split("\n").map((function(e){return"<div>".concat(e,"</div>")})).join("")}}):n,arrow:!1,animation:"shift-away",touch:!o||["hold",300],children:Object(r.jsx)("div",Object(a.a)(Object(a.a)({onClick:u},d),{},{children:t}))})}},292:function(e,t,n){"use strict";n.r(t);var a=n(46),c=n(101),s=n(24),r=n(97),i=n(2),o=n(291),l=n(19),d=Object(i.lazy)((function(){return Object(s.l)((function(){return n.e(20).then(n.bind(null,286))}))})),u=function(e){var t=e.lastUpdatedDate,n=(e.newUpdate,e.isTimelineMode),a=e.setIsTimelineMode,u=e.showUpdates,j=e.date,b=e.setDate,f=e.dates,p=(e.setNewUpdate,e.setShowUpdates),O=Object(o.a)().t,h=Object(i.useMemo)((function(){var e=[];return[0,0,0].map((function(t,n){return e.push({animationDelay:"".concat(500+250*n,"ms")}),null})),e}),[]),m=Object(i.useCallback)((function(){a(!0),u&&p(!u)}),[a,p,u]);return Object(l.jsxs)("div",{className:"ActionsPanel",children:[Object(l.jsxs)("div",{className:"actions",style:{opacity:n?0:1,transform:"perspective(600px) rotateX(".concat(n?90:0,"deg)"),pointerEvents:n?"none":""},children:[Object(l.jsxs)("h5",{className:"fadeInUp",style:h[0],children:["Updated on ","".concat(Object(s.c)(t,"dd MMM, p")," ").concat(O("IST"))]}),Object(l.jsx)(c.a,{message:"Timeline",hold:!0,children:Object(l.jsx)("div",{className:"timeline-icon fadeInUp",onClick:m,style:h[2],children:Object(l.jsx)(r.k,{})})})]}),n&&Object(l.jsx)(i.Suspense,{fallback:Object(l.jsx)("div",{}),children:Object(l.jsx)(d,{date:j,setDate:b,dates:f,isTimelineMode:n,setIsTimelineMode:a})})]})},j=n(11),b=n(249),f=n(93),p=n.n(f),O=n(200),h=n(130),m=Object(i.lazy)((function(){return Object(s.l)((function(){return n.e(46).then(n.bind(null,260))}))})),v=function(e){var t=e.date,n=e.setDate,c=e.dates,r=e.lastUpdatedDate;console.log(t);var o=Object(i.useState)(!1),d=Object(a.a)(o,2),f=d[0],p=d[1],v=Object(O.a)("newUpdate",!1),g=Object(a.a)(v,2),x=g[0],y=g[1],U=Object(O.a)("lastViewedLog",0),w=Object(a.a)(U,2),k=w[0],M=w[1],S=Object(i.useState)(!1),D=Object(a.a)(S,2),T=D[0],I=D[1],N=Object(h.a)("".concat(j.a,"/updatelog/log.json"),s.b,{refreshInterval:j.b}).data;Object(i.useEffect)((function(){if(void 0!==N){var e=1e3*N.slice().reverse()[0].timestamp;e!==k&&(y(!0),M(e))}}),[k,N,M,y]);var C=Object(i.useMemo)((function(){return Object(s.d)(Object(b.a)([k,r].filter((function(e){return e})).map((function(e){return Object(s.k)(e)}))))}),[k,r]);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(u,{lastUpdatedDate:C,newUpdate:x,isTimelineMode:T,setIsTimelineMode:I,showUpdates:f,date:t,setDate:n,dates:c,setNewUpdate:y,setShowUpdates:p}),f&&Object(l.jsx)(i.Suspense,{fallback:Object(l.jsx)("div",{}),children:Object(l.jsx)(m,{updates:N})})]})},g=function(e,t){return!!p()(t.date,e.date)&&(!!p()(t.lastUpdatedDate,e.lastUpdatedDate)&&!!p()(t.dates,e.dates))};t.default=Object(i.memo)(v,g)},93:function(e,t,n){"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var a,c,s;if(Array.isArray(t)){if((a=t.length)!=n.length)return!1;for(c=a;0!==c--;)if(!e(t[c],n[c]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((a=(s=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(c=a;0!==c--;)if(!Object.prototype.hasOwnProperty.call(n,s[c]))return!1;for(c=a;0!==c--;){var r=s[c];if(!e(t[r],n[r]))return!1}return!0}return t!==t&&n!==n}}}]);
//# sourceMappingURL=28.f2a95d6f.chunk.js.map