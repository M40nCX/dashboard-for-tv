(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){},21:function(e,t,a){e.exports=a(37)},26:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(18),c=a.n(i),o=(a(26),a(3)),s=a(2),l=a(6),u=a(4),f=a(5),h=a(1),d=a.n(h),m=a(7),p=(a(11),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={aqi:"",color:"",series:[0]},a}return Object(f.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/aqi").then(function(e){return e.json()}).then(function(t){return e.setState({aqi:t.aqi.aqivalue,color:t.aqi.color})}),this.aqiTimer()}},{key:"aqiTimer",value:function(){var e=this;setInterval(Object(m.a)(d.a.mark(function t(){return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:fetch("/api/aqi").then(function(e){return e.json()}).then(function(t){return e.setState({aqi:t.aqi.aqivalue,color:t.aqi.color})});case 1:case"end":return t.stop()}},t)})),108e5)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"aqi__text-relative"},r.a.createElement("div",{className:"icon-aqi"},r.a.createElement("i",{className:"wi wi-smog wi-color--"+this.state.color})),r.a.createElement("div",{className:"aqi__text-position"},"AQI: ",this.state.aqi)))}}]),t}(n.Component)),b=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={forecast:[],loaded:!1},a}return Object(f.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("api/weather").then(function(e){return e.json()}).then(function(t){return e.setState({forecast:t.forecast,loaded:!0})}),this.weatherTimer()}},{key:"weatherTimer",value:function(){var e=this;setInterval(Object(m.a)(d.a.mark(function t(){return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:fetch("api/weather").then(function(e){return e.json()}).then(function(t){return e.setState({forecast:t.forecast,loaded:!0})});case 1:case"end":return t.stop()}},t)})),18e5)}},{key:"changeIcon",value:function(e){return"partly-cloudy-day"===e||"partly-cloudy-night"===e?"cloudy":" wind"===e?"windy":"clear-day"===e||"clear-night"===e?"sunny":e}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.loaded?r.a.createElement("div",{className:"box bus-box--height"},r.a.createElement("div",{className:"current-weather"},r.a.createElement("div",{className:"icon-weather"},r.a.createElement("i",{className:"wi wi-day-"+this.changeIcon(this.state.forecast.icon)})),r.a.createElement("div",{className:"temperature__current"},this.state.forecast.temperature,"\xb0C")),r.a.createElement("div",{className:"temperature__details"},r.a.createElement("div",{className:"temperature__high"},r.a.createElement("i",{className:"wi wi-thermometer"})," ",this.state.forecast.highTemp,"\xb0C"),r.a.createElement("div",{className:"temperature__low"},r.a.createElement("i",{className:"wi wi-thermometer"})," ",this.state.forecast.lowTemp,"\xb0C"),r.a.createElement("div",{className:"temperature__rain"},r.a.createElement("i",{className:"wi wi-raindrop"})," ",parseInt(this.state.forecast.rainProb),"%")),r.a.createElement("div",null,r.a.createElement(p,null)),r.a.createElement("div",{className:"clearfix"})):"nothing")}}]),t}(n.Component),v=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={loaded:!1,news:[]},a}return Object(f.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/news").then(function(e){return e.json()}).then(function(t){return e.setState({news:t.news,loaded:!0})}),this.newsTimer()}},{key:"newsTimer",value:function(){var e=this;setInterval(Object(m.a)(d.a.mark(function t(){return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:fetch("/api/news").then(function(e){return e.json()}).then(function(t){return e.setState({news:t.news,loaded:!0})});case 1:case"end":return t.stop()}},t)})),18e5)}},{key:"render",value:function(){return r.a.createElement("div",{className:"box box__text"},this.state.loaded?r.a.createElement("div",null,r.a.createElement("div",{className:"ticker-wrap"},r.a.createElement("div",{className:"ticker"},this.state.news.map(function(e,t){return r.a.createElement("div",{key:t,className:"ticker__item"},r.a.createElement("div",null,r.a.createElement("div",null,e.title)))})))):"nothing")}}]),t}(n.Component),g=a(8),y=a(47),E=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={loaded:!1,gas:[],gasPodlaskie:[]},a}return Object(f.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/gas").then(function(e){return e.json()}).then(function(t){return e.setState({gas:t.gas,loaded:!0})}),this.gasTimer()}},{key:"gasTimer",value:function(){var e=this;setInterval(Object(m.a)(d.a.mark(function t(){return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:fetch("/api/news").then(function(e){return e.json()}).then(function(t){return e.setState({news:t.news,loaded:!0})});case 1:case"end":return t.stop()}},t)})),864e5)}},{key:"changeToIcon",value:function(e){return"+"===e?"keyboard_arrow_up":"keyboard_arrow_down"}},{key:"changeColor",value:function(e){return"+"===e?"incerease":"decreases"}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"box"},this.state.loaded?r.a.createElement("div",null,this.state.gas.map(function(t,a){return r.a.createElement("div",{className:"box__text fuel-prices__main-box",key:a},r.a.createElement("div",{className:"fuel-prices--display-inline first-block-element-gas"},r.a.createElement("div",{className:"fuel-prices__text"},"DIE: ",t.diePrice),r.a.createElement("div",{className:"fuel-prices__text-diff "},r.a.createElement(y.a,{className:"icon_large--"+e.changeColor(t.diePriceDiff),style:{fontSize:42}},e.changeToIcon(t.diePriceDiff)))),r.a.createElement("div",{className:"fuel-prices--display-inline "},r.a.createElement("div",{className:"fuel-prices__text"},"E95: ",t.e95Price),r.a.createElement("div",{className:"fuel-prices__text-diff"},r.a.createElement(y.a,{className:"icon_large--"+e.changeColor(t.e95PriceDiff),style:{fontSize:42}},e.changeToIcon(t.e95PriceDiff)))),r.a.createElement("div",{className:"fuel-prices--display-inline"},r.a.createElement("div",{className:"fuel-prices__text"},"S98: ",t.s98Price),r.a.createElement("div",{className:"fuel-prices__text-diff"},r.a.createElement(y.a,{className:"icon_large--"+e.changeColor(t.s98PriceDiff),style:{fontSize:42}},e.changeToIcon(t.s98PriceDiff)))),r.a.createElement("div",{className:"fuel-prices--display-inline"},r.a.createElement("div",{className:"fuel-prices__text"},"LPG: ",t.lpgPrice),r.a.createElement("div",{className:"fuel-prices__text-diff"},r.a.createElement(y.a,{className:"icon_large--"+e.changeColor(t.lpgPriceDiff),style:{fontSize:42}},e.changeToIcon(t.lpgPriceDiff)))))})):"nothing")}}]),t}(n.Component),k=a(13),w=a.n(k),_=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={currency:[]},a}return Object(f.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/currency").then(function(e){return e.json()}).then(function(t){return e.setState({currency:t.currency[0].rates})}),this.currencyTimer()}},{key:"currencyTimer",value:function(){var e=this;setInterval(Object(m.a)(d.a.mark(function t(){return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:fetch("/api/currency").then(function(e){return e.json()}).then(function(t){return e.setState({currency:t.currency[0].rates})});case 1:case"end":return t.stop()}},t)})),18e5)}},{key:"renderFlag",value:function(e,t){return r.a.createElement(w.a,{basePath:"img/flags",name:e,format:"png",pngSize:32,alt:t})}},{key:"render",value:function(){return r.a.createElement("div",{className:"box box__text"},r.a.createElement("div",{className:"first-block-element"},r.a.createElement(w.a,{code:"EU",height:"42"})," ",r.a.createElement("span",{className:"flag-position"},this.state.currency.EUR," PLN")),r.a.createElement("div",null,r.a.createElement(w.a,{code:"usa",height:"32"})," ",r.a.createElement("span",{className:"flag-position"},this.state.currency.USD," PLN")),r.a.createElement("div",null,r.a.createElement(w.a,{code:"gb",height:"32"})," ",r.a.createElement("span",{className:"flag-position"},this.state.currency.GBP," PLN")),r.a.createElement("div",null,r.a.createElement(w.a,{className:"flag-position--square",code:"ch",height:"42"})," ",r.a.createElement("span",{className:"flag-text-position--square"},this.state.currency.CHF," PLN")))}}]),t}(n.Component),j=a(9),O=a.n(j),x=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={loaded:!1,higherthan2:!1,bitcoin:[],options:{chart:{animations:{enabled:!0,easing:"linear",dynamicAnimation:{speed:1e3}},toolbar:{show:!1},zoom:{enabled:!1}},stroke:{curve:"smooth"},colors:["#ffb84d"],yaxis:{title:{text:"",style:{color:"#fff",fontSize:"20px",fontFamily:"Helvetica, Arial, sans-serif"}},labels:{show:!0,style:{color:"#d3d3d3",fontFamily:"Helvetica, Arial, sans-serif"}}},xaxis:{labels:{style:{colors:"#d3d3d3"}}}},series:[]},a.checkBitcoinLength=a.checkBitcoinLength.bind(Object(g.a)(Object(g.a)(a))),a}return Object(f.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/bitcoin").then(function(e){return e.json()}).then(function(t){return e.setState(function(e){e.bitcoin.push(t.bitcoin[0].rates)})}).then(function(t){return e.setState({bitcoinString:t})}).then(this.setState({loaded:!0})).then(this.checkBitcoinLength()),this.getBitcoin()}},{key:"getBitcoin",value:function(){var e=this;setInterval(Object(m.a)(d.a.mark(function t(){return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:fetch("/api/bitcoin").then(function(e){return e.json()}).then(function(t){return e.setState(function(e){e.bitcoin.push(t.bitcoin[0].rates)})}).then(e.setState({loaded:!0})).then(e.checkBitcoinLength());case 1:case"end":return t.stop()}},t)})),6e4)}},{key:"checkBitcoinLength",value:function(){var e=[],t=[];if(void 0===this.state.bitcoin[0])return"nothing";if(!(this.state.bitcoin.length>1))return"Cena bitcoin: "+this.state.bitcoin[0].BTC+" USD";this.setState({higherthan2:!0});for(var a=0;a<this.state.bitcoin.length;a++)e.push(this.state.bitcoin[a].BTC);t=e.slice(Math.max(e.length-10,0)),console.log(e.slice(Math.max(e.length-10,0))),this.setState({series:[{name:"BTC",data:t}]})}},{key:"render",value:function(){return r.a.createElement("div",{className:"box"},this.state.loaded?r.a.createElement("div",null,r.a.createElement("div",{className:"bitcoin box__text floating-left"},this.state.higherthan2?r.a.createElement("div",null,r.a.createElement(O.a,{options:this.state.options,series:this.state.series,type:"line",width:"950",height:"250"})):r.a.createElement("div",null,this.checkBitcoinLength())),r.a.createElement("div",{className:"currency floating-left"},r.a.createElement(_,null)),r.a.createElement("div",{className:"gas floating-left"},r.a.createElement(E,null)),r.a.createElement("div",{className:"clearfix"})):"nothing")}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={x:[],percents:[],minutes:[],series:[0]},a.colorFill=a.colorFill.bind(Object(g.a)(Object(g.a)(a))),a}return Object(f.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/bus_to_chart6").then(function(e){return e.json()}).then(function(t){void 0!==t&&void 0!==t.bus_to_chart6&&e.setState({percents:t.bus_to_chart6[0]})}),this.busToChartTimer()}},{key:"busToChartTimer",value:function(){var e=this;setInterval(Object(m.a)(d.a.mark(function t(){return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:fetch("/api/bus_to_chart6").then(function(e){return e.json()}).then(function(t){void 0!==t&&void 0!==t.bus_to_chart6&&e.setState({percents:t.bus_to_chart6[0]})});case 1:case"end":return t.stop()}},t)})),6e4)}},{key:"colorFill",value:function(e){var t=parseInt(e.percent),a=parseInt(e.minute);if(void 0!==a)return a<10?r.a.createElement(O.a,{options:{colors:["#C72230"],labels:["6"],plotOptions:{radialBar:{startAngle:-90,endAngle:90,track:{background:"#e7e7e7",strokeWidth:"97%",shadow:{enabled:!0,top:2,left:0,color:"#999",opacity:1,blur:2}},dataLabels:{name:{fontSize:"76px",color:"#fff",offsetY:-40},value:{fontSize:"22px",color:"#fff",offsetY:-26,formatter:function(e){return 0!==e?"00:0"+parseInt(.01*e*60):"00:00"}}}}}},series:[t],labels:this.state.labels,type:"radialBar",width:600}):a>=10&&a<15?r.a.createElement(O.a,{options:{colors:["#E8DB6B"],labels:["6"],plotOptions:{radialBar:{startAngle:-90,endAngle:90,track:{background:"#e7e7e7",strokeWidth:"97%",shadow:{enabled:!0,top:2,left:0,color:"#999",opacity:1,blur:2}},dataLabels:{name:{fontSize:"76px",color:"#fff",offsetY:-40},value:{fontSize:"22px",color:"#fff",offsetY:-26,formatter:function(e){return"00:"+parseInt(.01*e*60)}}}}}},series:[t],labels:this.state.labels,type:"radialBar",width:600}):r.a.createElement(O.a,{options:{colors:["#92D001"],labels:["6"],plotOptions:{radialBar:{startAngle:-90,endAngle:90,track:{background:"#e7e7e7",strokeWidth:"97%",shadow:{enabled:!0,top:2,left:0,color:"#999",opacity:1,blur:2}},dataLabels:{name:{fontSize:"76px",color:"#fff",offsetY:-40},value:{fontSize:"22px",color:"#fff",offsetY:-26,formatter:function(e){return"00:"+parseInt(.01*e*60)}}}}}},series:[t],labels:this.state.labels,type:"radialBar",width:600})}},{key:"render",value:function(){return r.a.createElement("div",null,this.colorFill(this.state.percents))}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={x:[],percents:[],minutes:[],series:[0]},a.colorFill=a.colorFill.bind(Object(g.a)(Object(g.a)(a))),a}return Object(f.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/bus_to_chart13").then(function(e){return e.json()}).then(function(t){console.log(t),void 0!==t&&void 0!==t.bus_to_chart13&&e.setState({percents:t.bus_to_chart13[0]})}),this.busToChartTimer()}},{key:"busToChartTimer",value:function(){var e=this;setInterval(Object(m.a)(d.a.mark(function t(){return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:fetch("/api/bus_to_chart13").then(function(e){return e.json()}).then(function(t){void 0!==t&&void 0!==t.bus_to_chart6&&e.setState({percents:t.bus_to_chart13[0]})});case 1:case"end":return t.stop()}},t)})),6e4)}},{key:"colorFill",value:function(e){var t=parseInt(e.percent);if(void 0!==e.minute)return e.minute<10?r.a.createElement(O.a,{options:{colors:["#C72230"],labels:["13"],plotOptions:{radialBar:{startAngle:-90,endAngle:90,track:{background:"#e7e7e7",strokeWidth:"97%",shadow:{enabled:!0,top:2,left:0,color:"#999",opacity:1,blur:2}},dataLabels:{name:{fontSize:"76px",color:"#fff",offsetY:-40},value:{fontSize:"22px",color:"#fff",offsetY:-26,formatter:function(e){return 0!==e?"00:0"+parseInt(.01*e*60):"00:00"}}}}}},series:[t],labels:this.state.labels,type:"radialBar",width:600}):e.minute>=10&&e.minute<15?r.a.createElement(O.a,{options:{colors:["#E8DB6B"],labels:["13"],plotOptions:{radialBar:{startAngle:-90,endAngle:90,track:{background:"#e7e7e7",strokeWidth:"97%",shadow:{enabled:!0,top:2,left:0,color:"#999",opacity:1,blur:2}},dataLabels:{name:{fontSize:"76px",color:"#fff",offsetY:-40},value:{fontSize:"22px",color:"#fff",offsetY:-26,formatter:function(e){return"00:"+parseInt(.01*e*60)}}}}}},series:[t],labels:this.state.labels,type:"radialBar",width:600}):r.a.createElement(O.a,{options:{colors:["#92D001"],labels:["13"],plotOptions:{radialBar:{startAngle:-90,endAngle:90,track:{background:"#e7e7e7",strokeWidth:"97%",shadow:{enabled:!0,top:2,left:0,color:"#999",opacity:1,blur:2}},dataLabels:{name:{fontSize:"76px",color:"#fff",offsetY:-40},value:{fontSize:"22px",color:"#fff",offsetY:-26,formatter:function(e){return"00:"+parseInt(.01*e*60)}}}}}},series:[t],labels:this.state.labels,type:"radialBar",width:600})}},{key:"render",value:function(){return r.a.createElement("div",null,this.colorFill(this.state.percents))}}]),t}(n.Component),B=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={x:[],percents:[],minutes:[],series:[0]},a.colorFill=a.colorFill.bind(Object(g.a)(Object(g.a)(a))),a}return Object(f.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/bus_to_chart18").then(function(e){return e.json()}).then(function(t){void 0!==t&&void 0!==t.bus_to_chart18&&e.setState({percents:t.bus_to_chart6[0]})}),this.busToChartTimer()}},{key:"busToChartTimer",value:function(){var e=this;setInterval(Object(m.a)(d.a.mark(function t(){return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:fetch("/api/bus_to_chart18").then(function(e){return e.json()}).then(function(t){void 0!==t&&void 0!==t.bus_to_chart6&&e.setState({percents:t.bus_to_chart18[0]})});case 1:case"end":return t.stop()}},t)})),6e4)}},{key:"colorFill",value:function(e){var t=parseInt(e.percent);if(void 0!==e.minute)return e.minute<10?r.a.createElement(O.a,{options:{colors:["#C72230"],labels:["18"],plotOptions:{radialBar:{startAngle:-90,endAngle:90,track:{background:"#e7e7e7",strokeWidth:"97%",shadow:{enabled:!0,top:2,left:0,color:"#999",opacity:1,blur:2}},dataLabels:{name:{fontSize:"76px",color:"#fff",offsetY:-40},value:{fontSize:"22px",color:"#fff",offsetY:-26,formatter:function(e){return 0!==e?"00:0"+parseInt(.01*e*60):"00:00"}}}}}},series:[t],labels:this.state.labels,type:"radialBar",width:600}):e.minute>=10&&e.minute<15?r.a.createElement(O.a,{options:{colors:["#E8DB6B"],labels:["18"],plotOptions:{radialBar:{startAngle:-90,endAngle:90,track:{background:"#e7e7e7",strokeWidth:"97%",shadow:{enabled:!0,top:2,left:0,color:"#999",opacity:1,blur:2}},dataLabels:{name:{fontSize:"76px",color:"#fff",offsetY:-40},value:{fontSize:"22px",color:"#fff",offsetY:-26,formatter:function(e){return"00:"+parseInt(.01*e*60)}}}}}},series:[t],labels:this.state.labels,type:"radialBar",width:600}):r.a.createElement(O.a,{options:{colors:["#92D001"],labels:["18"],plotOptions:{radialBar:{startAngle:-90,endAngle:90,track:{background:"#e7e7e7",strokeWidth:"97%",shadow:{enabled:!0,top:2,left:0,color:"#999",opacity:1,blur:2}},dataLabels:{name:{fontSize:"76px",color:"#fff",offsetY:-40},value:{fontSize:"22px",color:"#fff",offsetY:-26,formatter:function(e){return"00:"+parseInt(.01*e*60)}}}}}},series:[t],labels:this.state.labels,type:"radialBar",width:600})}},{key:"render",value:function(){return r.a.createElement("div",null,this.colorFill(this.state.percents))}}]),t}(n.Component),C=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"bus-box--height"},r.a.createElement("div",{className:"ApexCharts--margin-30"}),r.a.createElement("div",{className:"ApexCharts__mixed--chart"},r.a.createElement(N,null)),r.a.createElement("div",{className:"ApexCharts__mixed--chart"},r.a.createElement(S,null)),r.a.createElement("div",{className:"ApexCharts__mixed--chart"},r.a.createElement(B,null)))}}]),t}(n.Component),I=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"main-font"},r.a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/icon?family=Material+Icons"}),r.a.createElement(b,null),r.a.createElement(x,null),r.a.createElement(C,null),r.a.createElement(v,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,1,2]]]);
//# sourceMappingURL=main.7affb583.chunk.js.map