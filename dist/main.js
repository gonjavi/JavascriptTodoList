!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=4)}([function(e,t,o){"use strict";t.decode=t.parse=o(2),t.encode=t.stringify=o(3)},function(e,t){},function(e,t,o){"use strict";function n(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,o,c){t=t||"&",o=o||"=";var d={};if("string"!=typeof e||0===e.length)return d;var i=/\+/g;e=e.split(t);var l=1e3;c&&"number"==typeof c.maxKeys&&(l=c.maxKeys);var a=e.length;l>0&&a>l&&(a=l);for(var u=0;u<a;++u){var p,s,m,f,y=e[u].replace(i,"%20"),h=y.indexOf(o);h>=0?(p=y.substr(0,h),s=y.substr(h+1)):(p=y,s=""),m=decodeURIComponent(p),f=decodeURIComponent(s),n(d,m)?r(d[m])?d[m].push(f):d[m]=[d[m],f]:d[m]=f}return d};var r=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},function(e,t,o){"use strict";var n=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,o,i){return t=t||"&",o=o||"=",null===e&&(e=void 0),"object"==typeof e?c(d(e),(function(d){var i=encodeURIComponent(n(d))+o;return r(e[d])?c(e[d],(function(e){return i+encodeURIComponent(n(e))})).join(t):i+encodeURIComponent(n(e[d]))})).join(t):i?encodeURIComponent(n(i))+o+encodeURIComponent(n(e)):""};var r=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function c(e,t){if(e.map)return e.map(t);for(var o=[],n=0;n<e.length;n++)o.push(t(e[n],n));return o}var d=Object.keys||function(e){var t=[];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.push(o);return t}},function(e,t,o){"use strict";o.r(t);o(1),o(0);let n,r,c=function(){let e=JSON.parse(localStorage.getItem("proyectos"))||[{name:"Project1",todos:[{title:"next week",description:"First todo project 1",duedate:"Mar 19, 2020",priority:"Important but not urgent"},{title:"Next month",description:"Second todo project 1",duedate:"Apr 19, 2020",priority:"Important and urgent"},{title:"Next year",description:"Third todo project 1",duedate:"Mar 19, 2021",priority:"Important"}]},{name:"Project2",todos:[{title:"Todo 1 P2",description:"First todo Project 2",duedate:"Mar 22, 2020",priority:"Important"}]},{name:"Project3",todos:[{title:"Todo 1 P3",description:"First todo Project 3",duedate:"Mar 31, 2020",priority:"Important and urgent"}]}];return{showProjects:function(){return e},addNewProject:function(){var t=0;e=JSON.parse(localStorage.getItem("proyectos")),t=e.length,t+=1;var o={};o.name="Project"+t,o.todos={},e.push(o),localStorage.setItem("proyectos",JSON.stringify(e)),console.log(e)},showTodos:function(t){return e[t].todos},addNewTodo:function(t,o,n,r,c){var d={};d.title=o,d.description=n,d.duedate=r,d.priority=c,e[t],e[t].todos.push(d),console.log(e)}}}(),d=c.showProjects();localStorage.setItem("proyectos",JSON.stringify(d)),d=JSON.parse(localStorage.getItem("proyectos")),document.addEventListener("DOMContentLoaded",(function(){n=document.querySelector(".datepicker");M.Datepicker.init(n,{})})),document.addEventListener("DOMContentLoaded",(function(){r=document.querySelectorAll(".dropdown-trigger");M.Dropdown.init(r,[])})),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll("select");M.FormSelect.init(e,{})})),p(),document.getElementById("addpro").onclick=()=>{c.addNewProject(),function(){d=JSON.parse(localStorage.getItem("proyectos"));var e=0;e=d.length-1,e++;var t=document.createElement("a");t.innerHTML="Project"+[e];let o=document.createElement("li");o.appendChild(t),o.id=e,o.style.color=" black",i.appendChild(o),i.removeChild(i.childNodes[0])}(),location.reload(),p()};const i=document.getElementById("showprojects").getElementsByTagName("ul")[0];!function(){let e=c.showProjects();for(let t=0;t<e.length;t++){let o=document.createElement("a");o.innerHTML=e[t].name;let n=document.createElement("li");n.appendChild(o),n.id=t,n.style.color=" black",i.appendChild(n)}}();for(let e=0;e<d.length;e++)document.getElementById(e).onclick=()=>{if(a.hasChildNodes())for(;a.hasChildNodes();)a.removeChild(a.childNodes[0]);u(e)};const l=document.getElementById("todos");let a=document.createElement("div");function u(e){let t=c.showTodos(e);document.getElementById("protitle").innerHTML="Project"+[e+1];for(let e=0;e<t.length;e++){let o=document.createElement("h5");o.innerHTML=t[e].title;let n=document.createElement("p"),r=document.createElement("p"),c=document.createElement("p");n.innerHTML=t[e].description,r.innerHTML=t[e].duedate,c.innerHTML=t[e].priority,a.appendChild(o),a.appendChild(n),a.appendChild(r),a.appendChild(c),l.appendChild(a)}}function p(){let e=document.getElementById("dropdown1");if(d=JSON.parse(localStorage.getItem("proyectos")),e.hasChildNodes())for(;e.hasChildNodes();)e.removeChild(e.childNodes[0]);for(let t=0;t<d.length;t++){let o=document.createElement("option"),n=t+1;document.createElement("a");o.innerHTML="Project"+n,o.value="Project"+n,e.appendChild(o)}}document.getElementById("submit").onclick=()=>{let e=r.value,t=document.getElementById("title").value,o=document.getElementById("description").value,d=n.value,i=document.querySelector(".priority:checked").value;var l=!0;if(""!==e&&""!==t&&""!==o&&""!==d||(l=!1),0==l)return alert("Please enter all the information for the Todo:\n"),l;c.addNewTodo(e,t,o,d,i)}}]);