webpackJsonp([0],{"+yHm":function(t,e,n){n("QEfS").register({squares:{width:16,height:16,viewBox:"0 0 22 22",data:'<path pid="0" _stroke="#f1f2f2" _fill="none" d="M1 5h16v16H1z"/><path pid="1" _stroke="#f1f2f2" _fill="none" d="M3 3h16v16H3z"/><path pid="2" _stroke="#f1f2f2" _fill="none" d="M5 1h16v16H5z"/>'}})},"4paE":function(t,e,n){n("QEfS").register({triangle:{width:16,height:16,viewBox:"0 0 23.3 21.2",data:'<path pid="0" _fill="none" _stroke="#d1d3d4" stroke-miterlimit="10" d="M11.6 1L.8 20.7h21.6L11.6 1z"/>'}})},B6z3:function(t,e){},BE6o:function(t,e,n){n("QEfS").register({square:{width:16,height:16,viewBox:"0 0 22 22",data:'<path pid="0" _stroke="#f1f2f2" _fill="none" d="M3 3h16v16H3z"/>'}})},EKXP:function(t,e){},"LO3/":function(t,e,n){n("QEfS").register({"line-curve":{width:16,height:16,viewBox:"0 0 22 22",data:'<path pid="0" d="M4.5 18.5s-1-8 3-12 12-3 12-3" _fill="none" _stroke="#f1f2f2" stroke-miterlimit="10"/>'}})},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),a=n("vwbq"),o={name:"ClosedPolyline",props:{lineData:{type:Array,default:function(){return[]}},roundness:{type:Number,default:.8}},computed:{line:function(){return Object(a.b)().x(function(t){return t[0]}).y(function(t){return t[1]}).curve(a.a.tension(this.roundness))(this.lineData)}}},r={render:function(){var t=this.$createElement;return(this._self._c||t)("path",{attrs:{stroke:"#000000","stroke-width":"0.4mm",fill:"none",d:this.line}})},staticRenderFns:[]},s={name:"Polygons",components:{ClosedPolyline:n("VU/8")(o,r,!1,null,null,null).exports},props:{scaleFormula:{type:String,default:"i*i/2"},rotationFormula:{type:String,default:"10 * Math.sin(i * Math.PI / 9)"},width:{type:Number,default:400},height:{type:Number,default:400},quantity:{type:Number,default:10},sides:{type:Number,default:5},roundness:{type:Number,default:.8},radius:{type:Number,default:20},startAngle:{type:Number,default:0},x:{type:Number,default:200},y:{type:Number,default:200}},data:function(){return{polygons:[]}},created:function(){var t=this;w.$on("download",function(){t.downloadSVG()})},watch:{x:function(){this.generatePolygonData()},y:function(){this.generatePolygonData()},startAngle:function(){this.generatePolygonData()},radius:function(){this.generatePolygonData()},roundness:function(){this.generatePolygonData()},sides:function(){this.generatePolygonData()},quantity:function(){this.generatePolygonData()},width:function(){this.generatePolygonData()},height:function(){this.generatePolygonData()},scaleFormula:function(){this.generatePolygonData()},rotationFormula:function(){this.generatePolygonData()}},methods:{createPolygon:function(t,e,n,i,a){for(var o=[],r=void 0,s=void 0,l=0;l<n;l++){var u=2*Math.PI/n*l+a*(Math.PI/180);r=t+i*Math.sin(u),s=e+i*Math.cos(u),o.push([r,s])}return o},scaleFunc:function(t){try{return function(t){try{return new Function(t+"\n return sizeEquation")()}catch(t){}}("function sizeEquation(i) {  return "+this.scaleFormula+"}")(t)}catch(t){}},rotationFunc:function(t){try{return function(t){try{return new Function(t+"\n return rotationEquation")()}catch(t){}}("function rotationEquation(i) {  return "+this.rotationFormula+"}")(t)}catch(t){}},generatePolygonData:function(){this.polygons=[];for(var t=0;t<this.quantity;t++)this.polygons.push(this.createPolygon(this.x,this.y,this.sides,this.radius+this.scaleFunc(t),this.startAngle+this.rotationFunc(t)))},downloadSVG:function(){var t=(new XMLSerializer).serializeToString(this.$refs.renderedPolygons);t=(t=t.replace(/([+]?\d+\.\d{3,}([eE][+]?\d+)?)/g,function(t){return(+t).toFixed(1)})).replace(/ data-v-([0-9a-z]){8}=""/g,function(){return""});var e=new Blob(['<?xml version="1.0" standalone="no"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">'+t],{type:"image/svg+xml;charset=utf-8"}),n=URL.createObjectURL(e),i=document.createElement("a");i.href=n,i.download="polygons"+Date.now()+".svg",document.body.appendChild(i),i.click(),document.body.removeChild(i)}},mounted:function(){this.generatePolygonData()}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"paper"},[n("svg",{ref:"renderedPolygons",attrs:{width:"400",height:"400",title:"polygons",version:"1.1",viewBox:"0 0 400 400",xmlns:"http://www.w3.org/2000/svg"}},[n("g",[n("desc",[t._v("sf:"+t._s(t.scaleFormula)+";rf:"+t._s(t.rotationFormula)+";qt:"+t._s(t.quantity)+";sd:"+t._s(t.sides)+";rn:"+t._s(t.roundness)+";rd:"+t._s(t.radius)+";sa:"+t._s(t.startAngle)+";")]),t._v(" "),t._l(t.polygons,function(e,i){return n("closed-polyline",{key:i,attrs:{roundness:t.roundness,lineData:e}})})],2)])])},staticRenderFns:[]};var u=n("VU/8")(s,l,!1,function(t){n("EKXP")},"data-v-074cc5f6",null).exports,c=(n("Q7M0"),{name:"Slider",props:{leftIcon:{type:Object},rightIcon:{type:Object},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},label:{type:String,default:"Label"},value:{type:Number,default:50}},methods:{onInput:function(t){t.target.value>this.min?this.$emit("input",t.target.value):this.$emit("input",this.min),t.target.value<this.min&&this.$emit("input",this.min)}}}),d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-control"},[n("div",{staticClass:"control-header"},[n("div",[t.leftIcon?n("svgicon",{attrs:{name:t.leftIcon.icon,width:t.leftIcon.width,height:t.leftIcon.height,color:"#FFFFFF",fill:!1}}):t._e()],1),t._v(" "),n("div",{staticClass:"control-label"},[n("div",{staticClass:"control-output"},[n("input",{attrs:{type:"text"},domProps:{value:t.value},on:{change:t.onInput}})]),t._v(t._s(t.label)+"\n    ")]),t._v(" "),n("div",[t.rightIcon?n("svgicon",{attrs:{name:t.rightIcon.icon,width:t.rightIcon.width,height:t.rightIcon.height,color:"#FFFFFF",fill:!1}}):t._e()],1)]),t._v(" "),n("input",{staticClass:"custom-range",attrs:{type:"range",min:t.min,max:t.max,step:t.step},domProps:{value:t.value},on:{input:t.onInput}})])},staticRenderFns:[]},h=n("VU/8")(c,d,!1,null,null,null).exports,f={name:"TextInput",props:{leftIcon:{type:Object},rightIcon:{type:Object},label:{type:String,default:"Label"},value:{type:String,default:""}},methods:{onInput:function(t){this.$emit("input",t.target.value)}}},g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-control"},[n("div",{staticClass:"control-header"},[n("div",[t.leftIcon?n("svgicon",{attrs:{name:t.leftIcon.icon,width:t.leftIcon.width,height:t.leftIcon.height,color:"#FFFFFF",fill:!1}}):t._e()],1),t._v(" "),n("div",{staticClass:"control-label"},[t._v("\n      "+t._s(t.label)+"\n    ")]),t._v(" "),n("div",[t.rightIcon?n("svgicon",{attrs:{name:t.rightIcon.icon,width:t.rightIcon.width,height:t.rightIcon.height,color:"#FFFFFF",fill:!1}}):t._e()],1)]),t._v(" "),n("div",{staticClass:"control-header"},[n("input",{staticClass:"control-text-input",attrs:{type:"text"},domProps:{value:t.value},on:{change:t.onInput}}),t._v(" "),n("a",{staticClass:"btn",on:{click:function(e){return t.$emit("reset")}}},[t._v("reset")])])])},staticRenderFns:[]};var p={name:"App",components:{Polygons:u,Slider:h,TextInput:n("VU/8")(f,g,!1,null,null,null).exports},data:function(){return{scaleFormula:"i+i*7",rotationFormula:"10*Math.sin(i/2)",startAngle:{leftIcon:{icon:"angle-short",width:"22",height:"22"},rightIcon:{icon:"angle-wide",width:"22",height:"22"},value:0},sides:{leftIcon:{icon:"triangle-large",width:"22",height:"22"},rightIcon:{icon:"hexagon",width:"22",height:"22"},value:5},quantity:{leftIcon:{icon:"square",width:"22",height:"22"},rightIcon:{icon:"squares",width:"22",height:"22"},value:10},roundness:{leftIcon:{icon:"line-sharp",width:"22",height:"22"},rightIcon:{icon:"line-curve",width:"22",height:"22"},value:.8},radius:{leftIcon:{icon:"triangle",width:"12",height:"12"},rightIcon:{icon:"triangle-large",width:"22",height:"22"},value:20}}},methods:{resetScaleFormula:function(){this.scaleFormula="i+i*7"},resetRotationFormula:function(){this.rotationFormula="10*Math.sin(i/2)"},download:function(){w.$emit("download","Mom said do your homework!")}}},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex",attrs:{id:"wrapper"}},[n("div",{attrs:{id:"sidebar-wrapper"}},[t._m(0),t._v(" "),n("slider",{attrs:{"left-icon":t.radius.leftIcon,"right-icon":t.radius.rightIcon,step:.1,min:0,max:100,label:"Radius"},model:{value:t.radius.value,callback:function(e){t.$set(t.radius,"value",t._n(e))},expression:"radius.value"}}),t._v(" "),n("slider",{attrs:{"left-icon":t.sides.leftIcon,"right-icon":t.sides.rightIcon,min:3,max:12,label:"Sides"},model:{value:t.sides.value,callback:function(e){t.$set(t.sides,"value",t._n(e))},expression:"sides.value"}}),t._v(" "),n("slider",{attrs:{"left-icon":t.quantity.leftIcon,"right-icon":t.quantity.rightIcon,min:1,max:100,label:"Quantity"},model:{value:t.quantity.value,callback:function(e){t.$set(t.quantity,"value",t._n(e))},expression:"quantity.value"}}),t._v(" "),n("slider",{attrs:{"left-icon":t.roundness.leftIcon,"right-icon":t.roundness.rightIcon,step:.1,min:-2,max:2,label:"Roundness"},model:{value:t.roundness.value,callback:function(e){t.$set(t.roundness,"value",t._n(e))},expression:"roundness.value"}}),t._v(" "),n("slider",{attrs:{"left-icon":t.startAngle.leftIcon,"right-icon":t.startAngle.rightIcon,step:1,min:0,max:360,label:"Starting Angle"},model:{value:t.startAngle.value,callback:function(e){t.$set(t.startAngle,"value",t._n(e))},expression:"startAngle.value"}}),t._v(" "),n("text-input",{attrs:{label:"Scale Formula"},on:{reset:t.resetScaleFormula},model:{value:t.scaleFormula,callback:function(e){t.scaleFormula=e},expression:"scaleFormula"}}),t._v(" "),n("text-input",{attrs:{label:"Rotation Formula"},on:{reset:t.resetRotationFormula},model:{value:t.rotationFormula,callback:function(e){t.rotationFormula=e},expression:"rotationFormula"}}),t._v(" "),n("div",{staticClass:"container mt-3"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("button",{staticClass:"btn btn-primary btn-block",on:{click:function(e){return e.preventDefault(),t.download(e)}}},[t._v("\n            Download SVG\n          ")])])]),t._v(" "),t._m(1)])],1),t._v(" "),n("div",{attrs:{id:"page-content-wrapper"}},[n("div",{staticClass:"container-fluid"},[n("div",{attrs:{id:"paper"}},[n("Polygons",{attrs:{"scale-formula":t.scaleFormula,rotationFormula:t.rotationFormula,"start-angle":t.startAngle.value,radius:t.radius.value,sides:t.sides.value,roundness:t.roundness.value,quantity:t.quantity.value}})],1)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sidebar-heading text-center mt-3 mb-3"},[e("h2",[this._v("Twisted Polygons")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row mt-5"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"credits text-center"},[e("p",[this._v("\n            Project by "),e("a",{attrs:{target:"_blank",href:"http://twitter.com/msurguy"}},[this._v("@msurguy")]),this._v(" ("),e("span",{staticClass:"fa fa-github"}),e("a",{attrs:{target:"_blank",href:"http://github.com/msurguy/polygon-tool"}},[this._v("Source")]),this._v(")")])])])])}]};var m=n("VU/8")(p,v,!1,function(t){n("Uwm5")},null,null).exports,y=(n("B6z3"),n("QEfS")),_=n.n(y);n.d(e,"eventBus",function(){return w});var w=new i.a;i.a.config.productionTip=!1,i.a.use(_.a,{tagName:"svgicon"}),new i.a({el:"#app",components:{App:m},template:"<App/>"})},Q7M0:function(t,e,n){n("riUR"),n("lW6J"),n("rrTR"),n("LO3/"),n("QSBo"),n("BE6o"),n("+yHm"),n("oolf"),n("4paE")},QSBo:function(t,e,n){n("QEfS").register({"line-sharp":{width:16,height:16,viewBox:"0 0 22 22",data:'<path pid="0" _fill="none" _stroke="#f1f2f2" stroke-miterlimit="10" d="M4.5 18.5l4-11 11-4"/>'}})},Uwm5:function(t,e){},lW6J:function(t,e,n){n("QEfS").register({"angle-wide":{width:16,height:16,viewBox:"0 0 22 22",data:'<circle pid="0" cx="10.5" cy="11" r="9.5" _fill="#fff" _stroke="#f1f2f2" stroke-linecap="round" stroke-miterlimit="10" opacity=".2"/><path pid="1" d="M12.4 20.3l-1.9-7.8v-11" _fill="none" _stroke="#f1f2f2" stroke-linecap="round" stroke-miterlimit="10"/><path pid="2" d="M20 11a9.6 9.6 0 0 0-9.5-9.5v11l1.9 7.8A9.4 9.4 0 0 0 20 11z" _fill="none" _stroke="#f1f2f2" stroke-linecap="round" stroke-miterlimit="10"/>'}})},oolf:function(t,e,n){n("QEfS").register({"triangle-large":{width:16,height:16,viewBox:"0 0 22 22",data:'<path pid="0" _stroke="#f1f2f2" _fill="none" d="M21 21L10 3 1 21z"/>'}})},riUR:function(t,e,n){n("QEfS").register({"angle-short":{width:16,height:16,viewBox:"0 0 22 22",data:'<circle pid="0" cx="10.5" cy="10.5" r="9.5" _fill="#fff" _stroke="#f1f2f2" stroke-linecap="round" stroke-miterlimit="10" opacity=".2"/><path pid="1" _fill="none" _stroke="#f1f2f2" stroke-miterlimit="10" d="M10.5.5V1M17.5 3.5l-7 8V1M17.2 3.8A9.5 9.5 0 0 0 10.5 1"/>'}})},rrTR:function(t,e,n){n("QEfS").register({hexagon:{width:16,height:16,viewBox:"0 0 22 22",data:'<path pid="0" _fill="none" _stroke="#f1f2f2" stroke-miterlimit="10" d="M16 2.3H6L1 11l5 8.7h10l5-8.7-5-8.7z"/>'}})}},["NHnr"]);
//# sourceMappingURL=app.7c63ba46b39ee68b5b2f.js.map