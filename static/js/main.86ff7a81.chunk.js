(this.webpackJsonpweather_app=this.webpackJsonpweather_app||[]).push([[0],{298:function(e,t,c){},299:function(e,t,c){},415:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),r=c(51),s=c.n(r),i=(c(298),c(11)),j=(c(299),c(280)),o=c(19),d=c(139),l=c.n(d),h=c(137),b=c(205),x=c(237),u=c(230),O=c(231),p=c(229),m=c(232),f=c(233),y=c(235),g=c(239),v=c(240),w=c(236),k=(c(301),c(234)),_=(c(312),c(354),c(238)),F=c(277),C=c(2),S=c(394),I=function(e){var t=Object(a.useState)(""),c=Object(i.a)(t,2),n=c[0],r=c[1],s=Object(a.useState)([]),j=Object(i.a)(s,2),o=j[0],d=j[1],I=Object(a.useState)(void 0),H=Object(i.a)(I,2),N=H[0],T=H[1],q=function(){var e=Object(b.a)(l.a.mark((function e(t){var c,a,n,r,s,i,j,o,d,b,u,I,H;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.get("https://api.weatherapi.com/v1/forecast.json?key=719118a20e3848eeb40141335212111&q="+t+"&days=3&aqi=no&alerts=no/");case 2:c=e.sent,a=c.data,n=[],r=Object(h.a)(a.forecast.forecastday);try{for(r.s();!(s=r.n()).done;)i=s.value,n=n.concat(i.hour)}catch(l){r.e(l)}finally{r.f()}j=[],a.current.time="Now",j.push(a.current),o=0,d=Object(h.a)(n),e.prev=12,d.s();case 14:if((b=d.n()).done){e.next=29;break}if(u=b.value,!(o>10)){e.next=18;break}return e.abrupt("break",29);case 18:if(!(a.current.last_updated_epoch>u.time_epoch)){e.next=20;break}return e.abrupt("continue",27);case 20:u.time=parseInt(u.time.split(" ")[1].split(":")[0]),I=u.time>11?"PM":"AM",u.time=u.time%12,u.time=0==u.time?u.time+12:u.time,u.time=u.time.toString()+I,j.push(u),o+=1;case 27:e.next=14;break;case 29:e.next=34;break;case 31:e.prev=31,e.t0=e.catch(12),d.e(e.t0);case 34:return e.prev=34,d.f(),e.finish(34);case 37:n=j,H=Object(C.jsxs)("div",{className:"currentWeather",children:[Object(C.jsx)(F.a,{children:Object(C.jsx)("script",{children:"document.body.style.backgroundImage=`url('https://wallpaperaccess.com/full/1996509.jpg')`; "})}),Object(C.jsx)(k.a,{style:{display:"flex",justifyContent:"center",opacity:.75,alignItems:"center"},children:Object(C.jsxs)(O.a,{style:{maxWidth:440,maxHeight:1200},children:[Object(C.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"div",children:a.location.name}),Object(C.jsx)(y.a,{children:Object(C.jsx)(g.a,{children:Object(C.jsxs)(v.a,{class:"heading",children:[Object(C.jsxs)(x.a,{children:[" ",Object(C.jsx)("span",{children:Object(C.jsx)(f.a,{component:"img",height:"64",weight:"64",image:a.current.condition.icon,alt:"weather icon"})}),Object(C.jsx)("span",{children:a.current.condition.text}),Object(C.jsx)("br",{}),Object(C.jsx)("span",{children:1==a.current.is_day?"Day":"Night"})]},"1"),Object(C.jsxs)(x.a,{children:[Object(C.jsxs)("span",{class:"fahrenheit",children:[a.current.temp_f," F"]}),Object(C.jsx)("br",{}),Object(C.jsxs)("span",{children:[" Feels Like ",a.current.feelslike_f," F"]})]})]})})}),Object(C.jsx)(m.a,{children:Object(C.jsx)(p.a,{variant:"body2",color:"text.secondary",children:Object(C.jsxs)(y.a,{children:[Object(C.jsx)(g.a,{children:Object(C.jsxs)(v.a,{class:"heading",children:[Object(C.jsx)(x.a,{children:"Wind"}),Object(C.jsx)(x.a,{children:"Humidity"}),Object(C.jsx)(x.a,{children:"Visibility"})]})}),Object(C.jsxs)(w.a,{children:[Object(C.jsxs)(v.a,{class:"body",children:[Object(C.jsxs)(x.a,{children:[a.current.wind_mph," m/h"]}),Object(C.jsxs)(x.a,{children:[a.current.humidity," %"]}),Object(C.jsxs)(x.a,{children:[a.current.vis_miles," miles"]})]}),Object(C.jsxs)(v.a,{class:"heading",children:[Object(C.jsx)(x.a,{}),Object(C.jsx)(x.a,{children:"Low"}),Object(C.jsx)(x.a,{children:"High"})]}),Object(C.jsxs)(v.a,{children:[" ",Object(C.jsx)(x.a,{children:"Today"}),Object(C.jsx)(x.a,{children:a.forecast.forecastday[0].day.mintemp_f+" F"}),Object(C.jsx)(x.a,{children:a.forecast.forecastday[0].day.maxtemp_f+" F"})]}),Object(C.jsxs)(v.a,{children:[Object(C.jsx)(x.a,{children:"Tomorrow"}),Object(C.jsx)(x.a,{children:a.forecast.forecastday[1].day.mintemp_f+" F"}),Object(C.jsx)(x.a,{children:a.forecast.forecastday[1].day.maxtemp_f+" F"})]}),Object(C.jsxs)(v.a,{children:[" ",Object(C.jsx)(x.a,{children:"Day After Tomorrow"}),Object(C.jsx)(x.a,{children:a.forecast.forecastday[2].day.mintemp_f+" F"}),Object(C.jsx)(x.a,{children:a.forecast.forecastday[2].day.maxtemp_f+" F"})]})]})]})})}),Object(C.jsx)(_.a,{style:{maxHeight:150},children:Object(C.jsx)(y.a,{stickyHeader:!0,children:Object(C.jsx)(v.a,{children:n.map((function(e,t){return Object(C.jsxs)(x.a,{children:[Object(C.jsx)("span",{children:e.time}),Object(C.jsx)("span",{children:Object(C.jsx)(f.a,{component:"img",height:"60",weight:"60",image:e.condition.icon,alt:"green iguana"})}),Object(C.jsxs)("span",{children:[e.temp_f,"F "]})]})}))})})})]})})]}),T(H);case 40:case"end":return e.stop()}}),e,null,[[12,31,34,37]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){function e(){return(e=Object(b.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==n){e.next=2;break}return e.abrupt("return");case 2:return console.log(n),e.next=5,S.get("https://api.weatherapi.com/v1/search.json?key=719118a20e3848eeb40141335212111&q="+n+"/");case 5:t=e.sent,c=t.data,d(c);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),Object(C.jsxs)("div",{class:"MainComponent",children:[Object(C.jsxs)("div",{class:"searchComponent",style:{opacity:.75},children:[Object(C.jsx)("input",{className:"form-control",name:"city",id:"city",type:"city",height:"100",onInput:function(e){r(e.target.value)},onChange:function(){T("")},placeholder:"Enter a minimum of three characters to search cities",value:n,required:!0}),Object(C.jsx)("br",{}),o&&o.map((function(e){return Object(C.jsxs)("div",{children:[Object(C.jsx)("br",{}),Object(C.jsx)(u.a,{onClick:function(t){q(e.name),d([]),r("")},style:{color:"black"},children:e.name})]},e.name)})),Object(C.jsx)("div",{id:"myDropdown",class:"dropdown-content"})]}),Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),N]})};var H=function(){var e=Object(a.useState)("red"),t=Object(i.a)(e,2),c=(t[0],t[1]);return Object(C.jsx)(j.a,{children:Object(C.jsxs)("div",{className:"App",children:[Object(C.jsx)("h1",{children:" Weather"}),Object(C.jsx)(I,{chanageBG:c}),Object(C.jsx)(o.c,{children:Object(C.jsx)(o.a,{exact:!0,path:"/",component:I})})]})})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,447)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),r(e),s(e)}))};s.a.render(Object(C.jsx)(n.a.StrictMode,{children:Object(C.jsx)(H,{})}),document.getElementById("root")),N()}},[[415,1,2]]]);
//# sourceMappingURL=main.86ff7a81.chunk.js.map