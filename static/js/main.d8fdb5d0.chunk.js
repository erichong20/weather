(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/013-wind.0832cf0c.png"},function(e,t,a){e.exports=a.p+"static/media/014-drop.45d3c6aa.png"},function(e,t,a){e.exports=a.p+"static/media/015-cloud.835c892d.png"},function(e,t,a){e.exports=a(23)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/Roboto-Regular.11eabca2.ttf"},function(e,t,a){e.exports=a.p+"static/media/Roboto-Bold.e07df86c.ttf"},function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(7),c=a(3),i=a(4),o=a(2),u=a(6),l=a(5),d=a(0),h=a.n(d),p=a(9),m=a.n(p),f=(a(19),a(20),a(21),a(22),function(){function e(){return(e=Object(s.a)(r.a.mark((function e(t){var a,n,s,c,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://us1.locationiq.com/v1/search.php?key=".concat("e5b25352c0f62a","&q=").concat(t,"&format=json"),{mode:"cors"});case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,s=n[0].display_name.split(","),c="".concat(s[0],", ").concat(s[s.length-1]),i=[Math.round(100*n[0].lat)/100,Math.round(100*n[0].lon)/100,c],e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return{getCoords:function(t){return e.apply(this,arguments)}}}()),v=function(){var e="bcdf233ba619e03521c7d75e5c2349d4",t="";function a(){return(a=Object(s.a)(r.a.mark((function a(s){var c,i,o,u;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,f.getCoords(s);case 2:return c=a.sent,t=c[2],a.next=6,fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(c[0],"&lon=").concat(c[1],"&exclude={minutely}&appid=").concat(e),{mode:"cors"});case 6:return i=a.sent,a.next=9,i.json();case 9:return o=a.sent,u=new n(o),a.abrupt("return",u);case 12:case"end":return a.stop()}}),a)})))).apply(this,arguments)}function n(e){this.currentWeather=e.current.weather[0].main,this.currentDescription=e.current.weather[0].description,this.currentTemp=e.current.temp,this.windSpeed=e.current.wind_speed,this.windDirection=function(e){var t=Math.floor(e/45)%16;return["N","NE","E","SE","S","SW","W","NW"][t]}(e.current.wind_deg),this.clouds=e.hourly[0].clouds,this.rainForecast=e.daily[0].pop,this.forecast=e.daily,this.icon=e.current.weather[0].icon,this.address=t}return{fetchWeather:function(e){return a.apply(this,arguments)}}}(),b=a(10),E=a.n(b),g=a(11),y=a.n(g),w=a(12),j=a.n(w),O=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){return Object(c.a)(this,a),t.call(this,e)}return Object(i.a)(a,[{key:"toCelsius",value:function(e){return Math.round(100*(e-273.15))/100}},{key:"toFahrenheit",value:function(e){return Math.round(100*(1.8*(e-273.15)+32))/100}},{key:"toMph",value:function(e){return Math.round(2.237*e*100)/100}},{key:"toKph",value:function(e){return Math.round(3.6*e*100)/100}},{key:"render",value:function(){var e,t;return e=this.props.isMetric?this.toCelsius(this.props.data.currentTemp)+" \xb0C":this.toFahrenheit(this.props.data.currentTemp)+" \xb0F",t=this.props.isMetric?this.toKph(this.props.data.windSpeed)+"kph":this.toMph(this.props.data.windSpeed)+"mph",h.a.createElement("div",{className:"cardContainer"},h.a.createElement("div",{className:"primaryContainer"},h.a.createElement("div",{className:"weatherIconContainer"},h.a.createElement("img",{className:"weatherIcon",src:"http://openweathermap.org/img/wn/".concat(this.props.data.icon,"@2x.png")})),h.a.createElement("div",{className:"primaryWeather"},h.a.createElement("div",{className:"currentTemp"},e),h.a.createElement("div",{className:"currentDescription"},this.props.data.currentDescription)),h.a.createElement("div",null,h.a.createElement("div",{className:"unitsContainer"},h.a.createElement("button",{name:"metric",className:(this.props.isMetric?"unitSelected":"unitNotSelected")+" unitButton",onClick:this.props.changeUnits},"Metric"),h.a.createElement("button",{name:"imperial",className:(this.props.isMetric?"unitNotSelected":"unitSelected")+" unitButton",onClick:this.props.changeUnits},"Imperial")))),h.a.createElement("div",{className:"secondaryContainer"},h.a.createElement("div",{className:"secondaryDisplay"},h.a.createElement("img",{src:E.a,alt:"wind"}),t," ",this.props.data.windDirection),h.a.createElement("div",{className:"secondaryDisplay"},h.a.createElement("img",{src:y.a,alt:"Rain"}),100*this.props.data.rainForecast,"%"),h.a.createElement("div",{className:"secondaryDisplay"},h.a.createElement("img",{src:j.a,alt:"cloud"}),this.props.data.clouds,"%")),h.a.createElement("div",{className:"forecast"}))}}]),a}(h.a.Component),N=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={isMetric:!0},n.changeUnits=n.changeUnits.bind(Object(o.a)(n)),n}return Object(i.a)(a,[{key:"changeUnits",value:function(e){"metric"===e.target.name?this.setState({isMetric:!0}):this.setState({isMetric:!1})}},{key:"render",value:function(){return null===this.props.weather?h.a.createElement("div",{className:"loadingContainer"},h.a.createElement("div",{className:"loading"},"Loading"),h.a.createElement("div",{className:"lds-ring"},h.a.createElement("div",null),h.a.createElement("div",null),h.a.createElement("div",null),h.a.createElement("div",null))):h.a.createElement("div",{className:"content"},h.a.createElement(O,{data:this.props.weather,isMetric:this.state.isMetric,changeUnits:this.changeUnits}))}}]),a}(h.a.Component),C=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={displayAddress:"",address:"Issaquah",weather:null},n.initializeContent=n.initializeContent.bind(Object(o.a)(n)),n.changeAddress=n.changeAddress.bind(Object(o.a)(n)),n.handleUnload=n.handleUnload.bind(Object(o.a)(n)),n.initializeContent(),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("beforeunload",this.handleUnload)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("beforeunload",this.handleUnload)}},{key:"initializeContent",value:function(){var e=Object(s.a)(r.a.mark((function e(){var t,a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=localStorage.getItem("currentAddress"))){e.next=8;break}return e.t0=this,e.next=5,t;case 5:e.t1=e.sent,e.t2={address:e.t1},e.t0.setState.call(e.t0,e.t2);case 8:return e.next=10,v.fetchWeather(this.state.address);case 10:return a=e.sent,this.setState({weather:a}),n=a.address,e.next=15,this.setState({displayAddress:n});case 15:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleUnload",value:function(){localStorage.setItem("currentAddress",this.state.address)}},{key:"changeAddress",value:function(){var e=Object(s.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState({address:t});case 2:return e.next=4,v.fetchWeather(this.state.address);case 4:return a=e.sent,n=a.address,e.next=8,this.setState({displayAddress:n});case 8:return e.next=10,this.setState({weather:a});case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return h.a.createElement("div",{className:"pageContainer"},h.a.createElement("div",{className:"main"},h.a.createElement(k,{address:this.state.displayAddress}),h.a.createElement(N,{weather:this.state.weather}),h.a.createElement(S,{newAddress:this.changeAddress})),h.a.createElement(x,null))}}]),a}(h.a.Component),k=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){return Object(c.a)(this,a),t.call(this,e)}return Object(i.a)(a,[{key:"render",value:function(){return h.a.createElement("div",{className:"headerContainer"},h.a.createElement("h1",{className:"header"},"Weather in ",h.a.createElement("span",{className:"headerLocation"},this.props.address)))}}]),a}(h.a.Component),S=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={value:""},n.handleChange=n.handleChange.bind(Object(o.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(o.a)(n)),n}return Object(i.a)(a,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){this.setState({value:""}),this.props.newAddress(this.state.value),e.preventDefault()}},{key:"render",value:function(){return h.a.createElement("form",{className:"newAddress",onSubmit:this.handleSubmit},h.a.createElement("input",{className:"newAddressInput",type:"text",name:"search",value:this.state.value,onChange:this.handleChange,placeholder:"New Location",required:!0}),h.a.createElement("button",{className:"newAddressSubmit",type:"submit",value:"submit"},"Update"))}}]),a}(h.a.Component),x=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return h.a.createElement("footer",null,h.a.createElement("p",null,"made by ",h.a.createElement("a",{href:"https://github.com/erichong20"},"eric hong")," using"," ",h.a.createElement("a",{href:"https://reactjs.org/"},"React")))}}]),a}(h.a.Component);m.a.render(h.a.createElement(C,null),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.d8fdb5d0.chunk.js.map