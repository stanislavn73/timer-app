(this.webpackJsonptimer=this.webpackJsonptimer||[]).push([[0],{13:function(t,i,e){},16:function(t,i,e){"use strict";e.r(i);var s=e(0),n=e.n(s),c=e(4),r=e.n(c),o=(e(13),e(8)),a=e(2),u=Object(o.a)((function(t){var i=t.timerStore;return Object(a.jsxs)("div",{className:"app_container",children:[Object(a.jsx)("p",{children:"Timer App"}),Object(a.jsx)("p",{children:i.display}),Object(a.jsx)("button",{onClick:function(){return i.startStopTimer()},children:"Start/Stop"}),Object(a.jsx)("button",{onClick:function(){return i.wait()},children:"Wait"}),Object(a.jsx)("button",{onClick:function(){return i.reset()},children:"Reset"})]})})),h=e(6),d=e(7),l=e(3),m=e.n(l),b=e(1);function f(t){return t>=10?t:"0".concat(t)}var k=new(function(){function t(){Object(h.a)(this,t),this.startTime=m()(),this.isTicking=!1,this.seconds=0,this.waiting=!1,this.doubleClick=!1,Object(b.d)(this)}return Object(d.a)(t,[{key:"startStopTimer",value:function(){this.isTicking?this.stopTimer():(this.waiting?(this.waiting=!1,this.startTime=m()().subtract(this.seconds,"second")):this.startTime=m()(),this.isTicking=!0,this.measure())}},{key:"wait",value:function(){var t=this;this.doubleClick?(this.waiting=!0,this.isTicking=!1):this.doubleClick=setTimeout((function(){t.doubleClick=!1}),300)}},{key:"reset",value:function(){this.startTime=m()()}},{key:"stopTimer",value:function(){this.isTicking=!1,this.startTime=m()(),this.seconds=0}},{key:"measure",value:function(){var t=this;this.isTicking&&(this.seconds=m()().diff(this.startTime,"second"),setTimeout((function(){return t.measure()}),1e3))}},{key:"display",get:function(){var t=Math.floor(this.seconds/3600),i=Math.floor(this.seconds/60),e=this.seconds%60;return"".concat(f(t),":").concat(f(i),":").concat(f(e))}}]),t}());r.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(u,{timerStore:k})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.6207b2af.chunk.js.map