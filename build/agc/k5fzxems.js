/*! Built with http://stenciljs.com */
agc.loadComponents("k5fzxems",function(t,o,n,e,r){var i=function(){function t(){}return t.prototype.componentWillLoad=function(){console.log("ag-debug ld",this.value)},t.prototype.componentWillUpdate=function(){console.log("ag-debug up",this.value)},t.prototype.processData=function(){if(Array.isArray(this.value)){var t=[];return this.value.forEach(function(n){t.push(o("div",null,JSON.stringify(n)))}),t}return JSON.stringify(this.value)},t.prototype.render=function(){return this.processData()},t}();t["AG-DEBUG"]=i},["AG-DEBUG",[["hostElem",7],["value",1]],{}]);