(this.webpackJsonpincovid19=this.webpackJsonpincovid19||[]).push([[23],{112:function(e,t,n){"use strict";var i=n(47),a=n(2),r={root:null,rootMargin:"0px 0px 0px 0px",threshold:0};t.a=function(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),c=n[0],l=n[1];return Object(a.useEffect)((function(){e.current&&new IntersectionObserver((function(t,n){t.forEach((function(t){t.isIntersecting&&(l(!0),n.unobserve(e.current))}))}),r).observe(e.current)}),[e]),c}},144:function(e,t,n){"use strict";var i=n(2);t.a=function(e,t){var n=function(){var e=Object(i.useRef)(!0);return e.current?(e.current=!1,!0):e.current}();Object(i.useEffect)((function(){if(!n)return e()}),t)}},154:function(e,t,n){"use strict";var i=n(103),a=n(47),r=n(105),c=n(115),l=n(19);t.a=function(){var e=Object(c.a)(),t=Object(a.a)(e,2),n=t[0],s=t[1].width,o=window.innerWidth;s=s||(o>=769?528:o),o<769&&(s-=30);return Object(l.jsx)("div",{ref:n,className:"TableLoader",children:Object(l.jsx)(r.a,{viewBox:"0 0 ".concat(s," ").concat(900),height:900,width:s,speed:2,animate:!1,children:Object(i.a)(Array(20).keys()).map((function(e){return Object(l.jsx)("rect",{x:"0",y:45*e,rx:"3",ry:"3",width:s,height:40},e)}))})})}},195:function(e,t,n){"use strict";var i=n(2),a=n(93);t.a=function(e,t,n){if(!a.a)return[t,a.b,a.b];if(!e)throw new Error("useLocalStorage key may not be falsy");var r=n?n.raw?function(e){return e}:n.deserializer:JSON.parse,c=Object(i.useRef)((function(e){try{var i=n?n.raw?String:n.serializer:JSON.stringify,a=localStorage.getItem(e);return null!==a?r(a):(t&&localStorage.setItem(e,i(t)),t)}catch(l){return t}})),l=Object(i.useState)((function(){return c.current(e)})),s=l[0],o=l[1];Object(i.useLayoutEffect)((function(){return o(c.current(e))}),[e]);var u=Object(i.useCallback)((function(t){try{var i="function"===typeof t?t(s):t;if("undefined"===typeof i)return;var a=void 0;a=n?n.raw?"string"===typeof i?i:JSON.stringify(i):n.serializer?n.serializer(i):JSON.stringify(i):JSON.stringify(i),localStorage.setItem(e,a),o(r(a))}catch(l){}}),[e,o]),d=Object(i.useCallback)((function(){try{localStorage.removeItem(e),o(void 0)}catch(l){}}),[e,o]);return[s,u,d]}},278:function(e,t,n){"use strict";n.r(t);var i=n(47),a=n(154),r=n(10),c=n(112),l=n(98);function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=n(106),u=n(2),d=n(144),j=n(125),b=["data","isValidating","error"];var O=function(e,t,n){for(var a=Object(u.useState)(n),r=Object(i.a)(a,2),c=r[0],O=r[1],h=arguments.length,f=new Array(h>3?h-3:0),v=3;v<h;v++)f[v-3]=arguments[v];var x=j.a.apply(void 0,[e,t,c].concat(f)),m=x.data,g=x.isValidating,p=x.error,y=s(x,b);return Object(d.a)((function(){O(Object(o.a)(c,(function(e){e.initialData=m})))}),[m]),Object(l.a)(Object(l.a)({},y),{},{isValidating:g,error:p,data:m})},h=n(24),f=n(92),v=n.n(f),x=n(68),m=n(57),g=n(244),p=n(116),y=n(5),T=n(195),S=n(243),k=n(279),D=n(19),w=Object(u.lazy)((function(){return Object(h.l)((function(){return n.e(31).then(n.bind(null,285))}))})),z=Object(u.lazy)((function(){return Object(h.l)((function(){return n.e(8).then(n.bind(null,114))}))})),H=Object(u.lazy)((function(){return Object(h.l)((function(){return Promise.all([n.e(0),n.e(32)]).then(n.bind(null,157))}))})),C=Object(u.lazy)((function(){return Object(h.l)((function(){return Promise.all([n.e(0),n.e(38)]).then(n.bind(null,158))}))})),N=Object(u.lazy)((function(){return Object(h.l)((function(){return Promise.all([n.e(0),n.e(3),n.e(5)]).then(n.bind(null,224))}))})),I=Object(u.lazy)((function(){return Object(h.l)((function(){return n.e(41).then(n.bind(null,159))}))})),M=Object(u.lazy)((function(){return Object(h.l)((function(){return Promise.all([n.e(1),n.e(2),n.e(29)]).then(n.bind(null,160))}))})),R=Object(u.lazy)((function(){return Object(h.l)((function(){return n.e(35).then(n.bind(null,275))}))})),V=Object(u.lazy)((function(){return Object(h.l)((function(){return n.e(9).then(n.bind(null,226))}))})),P=Object(u.lazy)((function(){return Object(h.l)((function(){return Promise.all([n.e(0),n.e(3),n.e(15)]).then(n.bind(null,286))}))})),E=Object(u.lazy)((function(){return Object(h.l)((function(){return Promise.all([n.e(0),n.e(30)]).then(n.bind(null,175))}))}));t.default=function(){var e,t,n=Object(u.useState)({stateCode:"TT",districtName:null}),l=Object(i.a)(n,2),s=l[0],o=l[1],d=Object(T.a)("anchor",null),j=Object(i.a)(d,2),b=j[0],f=j[1],J=Object(T.a)("expandTable",!1),A=Object(i.a)(J,2),F=A[0],L=A[1],B=Object(S.a)("mapStatistic","active"),U=Object(i.a)(B,2),W=U[0],_=U[1],q=Object(T.a)("mapView",r.r.DISTRICTS),G=Object(i.a)(q,2),K=G[0],Q=G[1],X=Object(u.useState)(""),Y=Object(i.a)(X,2),Z=Y[0],$=Y[1],ee=Object(y.h)(),te=O("".concat(r.e,"/timeseries.min.json"),h.b,{revalidateOnMount:!0,refreshInterval:r.b}).data,ne=O("".concat(r.e,"/data").concat(Z?"-".concat(Z):"",".min.json"),h.b,{revalidateOnMount:!0,refreshInterval:r.b}).data,ie=Object(u.useRef)(),ae=Object(c.a)(ie),re=Object(k.a)().width,ce=""!==Z&&Z<r.f,le=""===Z||Z>Object(x.a)(Object(m.a)(Object(h.k)(r.h),r.C),{representation:"date"}),se=0===Object(h.i)(null===ne||void 0===ne?void 0:ne.TT,"total","vaccinated"),oe=Object(u.useMemo)((function(){var e,t,n,i,a,r,c,l,s=[null===ne||void 0===ne||null===(e=ne.TT)||void 0===e||null===(t=e.meta)||void 0===t?void 0:t.date,null===ne||void 0===ne||null===(n=ne.TT)||void 0===n||null===(i=n.meta)||void 0===i||null===(a=i.tested)||void 0===a?void 0:a.date,null===ne||void 0===ne||null===(r=ne.TT)||void 0===r||null===(c=r.meta)||void 0===c||null===(l=c.vaccinated)||void 0===l?void 0:l.date].filter((function(e){return e}));return s.length>0?Object(x.a)(Object(g.a)(s.map((function(e){return Object(h.k)(e)}))),{representation:"date"}):null}),[ne]),ue=Object(u.useMemo)((function(){var e=Object.keys(ne||{}).map((function(e){var t,n;return null===ne||void 0===ne||null===(t=ne[e])||void 0===t||null===(n=t.meta)||void 0===n?void 0:n.last_updated})).filter((function(e){return e}));return e.length>0?Object(h.d)(Object(g.a)(e.map((function(e){return Object(h.k)(e)})))):null}),[ne]),de=Object(u.useMemo)((function(){return Object.entries(ne||{}).reduce((function(e,t){var n,a=Object(i.a)(t,2),c=a[0],l=a[1];return e[c]=!!((null===l||void 0===l?void 0:l.districts)&&(null===(n=l.districts)||void 0===n?void 0:n[r.H])&&r.u.every((function(e){return Object(h.i)(l,"total",e)===Object(h.i)(l.districts[r.H],"total",e)}))),e}),{})}),[ne]),je=(null===s||void 0===s?void 0:s.stateCode)&&(null===s||void 0===s?void 0:s.districtName)&&s.districtName!==r.H&&de[s.stateCode];return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)(p.a,{children:[Object(D.jsx)("title",{children:"Coronavirus Outbreak in India - incovid19.org"}),Object(D.jsx)("meta",{name:"title",content:"Coronavirus Outbreak in India: Latest Map and Case Count"})]}),Object(D.jsxs)("div",{className:"Home",children:[Object(D.jsxs)("div",{className:v()("home-left",{expanded:F}),children:[Object(D.jsxs)("div",{className:"header",children:[Object(D.jsx)(u.Suspense,{fallback:Object(D.jsx)("div",{}),children:Object(D.jsx)(R,{})}),!ne&&!te&&Object(D.jsx)("div",{style:{height:"60rem"}}),Object(D.jsxs)(D.Fragment,{children:[!te&&Object(D.jsx)("div",{style:{minHeight:"61px"}}),te&&Object(D.jsx)(u.Suspense,{fallback:Object(D.jsx)("div",{style:{minHeight:"61px"}}),children:Object(D.jsx)(w,{date:Z,setDate:$,dates:Object.keys(null===(e=te.TT)||void 0===e?void 0:e.dates),lastUpdatedDate:ue})})]})]}),Object(D.jsxs)("div",{style:{position:"relative",marginTop:"1rem"},children:[ne&&Object(D.jsxs)(u.Suspense,{fallback:Object(D.jsx)("div",{style:{height:"50rem"}}),children:[re>=769&&!F&&Object(D.jsx)(I,{mapStatistic:W,setMapStatistic:_}),Object(D.jsx)(H,{data:ne.TT})]}),Object(D.jsxs)(D.Fragment,{children:[!te&&Object(D.jsx)("div",{style:{height:"123px"}}),te&&Object(D.jsx)(u.Suspense,{fallback:Object(D.jsx)("div",{style:{height:"123px"}}),children:Object(D.jsx)(M,{timeseries:null===(t=te.TT)||void 0===t?void 0:t.dates,date:Z})})]})]}),!se&&Object(D.jsx)(C,{data:ne.TT}),ne&&Object(D.jsx)(u.Suspense,{fallback:Object(D.jsx)(a.a,{}),children:Object(D.jsx)(P,{data:ne,regionHighlighted:s,setRegionHighlighted:o,expandTable:F,setExpandTable:L,hideDistrictData:ce,hideDistrictTestData:le,hideVaccinated:se,lastDataDate:oe,noDistrictDataStates:de})})]}),Object(D.jsx)("div",{className:v()("home-right",{expanded:F}),ref:ie,style:{minHeight:"4rem"},children:(ae||ee.hash)&&Object(D.jsxs)(D.Fragment,{children:[ne&&Object(D.jsx)("div",{className:v()("map-container",{expanded:F,stickied:"mapexplorer"===b||F&&re>=769}),children:Object(D.jsxs)(u.Suspense,{fallback:Object(D.jsx)("div",{style:{height:"50rem"}}),children:[Object(D.jsx)(V,{data:ne.TT,stateCode:"TT"}),Object(D.jsx)(N,{stateCode:"TT",data:ne,mapStatistic:W,setMapStatistic:_,mapView:K,setMapView:Q,regionHighlighted:s,setRegionHighlighted:o,anchor:b,setAnchor:f,expandTable:F,lastDataDate:oe,hideDistrictData:ce,hideDistrictTestData:le,hideVaccinated:se,noRegionHighlightedDistrictData:je})]})}),te&&Object(D.jsx)(u.Suspense,{fallback:Object(D.jsx)("div",{style:{height:"50rem"}}),children:Object(D.jsx)(E,{stateCode:"TT",timeseries:te,date:Z,regionHighlighted:s,setRegionHighlighted:o,anchor:b,setAnchor:f,expandTable:F,hideVaccinated:se,noRegionHighlightedDistrictData:je})})]})})]}),ae&&Object(D.jsx)(u.Suspense,{fallback:Object(D.jsx)("div",{}),children:Object(D.jsx)(z,{})})]})}}}]);
//# sourceMappingURL=23.b11facc6.chunk.js.map