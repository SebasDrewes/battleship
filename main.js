(()=>{"use strict";var e=function(e,t,i){var n={},a=t,r=i;if("horizontal"===r)for(var o=0;o<t;o+=1)n[e+o]="noHit";else if("vertical"===r)for(var l=0;l<11*t;l+=11)n[e+l]="noHit";return{hitPoints:n,hit:function(e){n[e]="hit"},isSunk:function(){return!!Object.values(n).every((function(e){return"hit"===e}))},shipLength:a}};var t="",i=document.querySelector("#playerBoard"),n=document.querySelector("#enemyBoard"),a=document.querySelector("#tuRadar"),r=document.querySelector("#enemyRadar"),o=document.querySelector("#enemyRadarMobile"),l=document.querySelector("#text"),s=document.querySelector("#change"),d=document.querySelector("#title");function c(e,t){return e.some((function(e){return t.includes(e)}))}var u=function e(a,r){for(s.style.display="none",n.style.display="grid";i.firstChild;)i.removeChild(i.firstChild);for(;n.firstChild;)n.removeChild(n.firstChild);for(var o=function(o,l,s){var c=document.createElement("div");c.textContent=o,c.classList.add("cellHittable"),c.classList.add("cellHidden"),c.setAttribute("data",[l]),!1===[10,21,32,43,54,65,76,87,98,109].includes(l)&&(c.classList.remove("cellHidden"),s?(n.appendChild(c),c.addEventListener("click",(function(){if(function(e,i,n){function a(e,t){return e.some((function(e){return t===e}))}if("hit"!==i.gameBoard[n]&&"noHit"!==i.gameBoard[n]){i.receiveAttack(n);for(var r=[10,21,32,43,54,65,76,87,98,109],o=[],l=0;l<e.gameBoard.length;l+=1)"hit"!==e.gameBoard[l]&&"noHit"!==e.gameBoard[l]&&!1===a(r,e.gameBoard[l])&&o.push(l);if("hit"===e.gameBoard[t])if(o=[],"hit"!==e.gameBoard[t-1]&&"noHit"!==e.gameBoard[t-1]&&!1===a(r,e.gameBoard[t-1]))o.push(t-1);else if("hit"!==e.gameBoard[t+1]&&"noHit"!==e.gameBoard[t+1]&&!1===a(r,e.gameBoard[t+1]))o.push(t+1);else if("hit"!==e.gameBoard[t+11]&&"noHit"!==e.gameBoard[t-1]&&!1===a(r,e.gameBoard[t+11]))o.push(t+11);else if("hit"!==e.gameBoard[t-11]&&"noHit"!==e.gameBoard[t-1]&&!1===a(r,e.gameBoard[t-11]))o.push(t-11);else for(var s=0;s<e.gameBoard.length;s+=1)"hit"!==e.gameBoard[s]&&"noHit"!==e.gameBoard[s]&&!1===a(r,e.gameBoard[s])&&o.push(s);var d=o[Math.floor(Math.random()*o.length)];t=d,e.receiveAttack(d)}}(a,r,l),e(a,r),null!==c.textContent.match(/^[0-9]+$/))for(var i=0;i<r.shipList.length;i+=1){if(c.textContent===r.shipList[i].shipNumber.toString()&&!0===r.shipList[i].isSunk()){d.textContent="¡Hundiste un barco enemigo!";break}d.textContent="¡Le diste a un barco enemigo!"}else""===c.textContent&&(d.textContent="¡Fallaste el tiro!");r.allShipsSunked()?console.log("ganaste*placeholder*"):a.allShipsSunked()&&console.log("perdiste*placeholder*")})),c.addEventListener("mouseover",(function(){c.classList.add("hoverCell")})),c.addEventListener("mouseleave",(function(){c.classList.remove("hoverCell")})),"hit"===c.textContent?c.classList.add("cellShipHitted"):"noHit"===c.textContent&&c.classList.add("cellMiss")):(i.appendChild(c),c.classList.remove("cellHittable"),c.classList.add("cellFriendly"),null!==c.textContent.match(/^[0-9]+$/)?c.classList.add("cellShip"):"hit"===c.textContent?c.classList.add("cellShipHittedFriendly"):"noHit"===c.textContent&&c.classList.add("cellMissFriendly")))},l=0;l<a.gameBoard.length;l+=1)o(a.gameBoard[l],l,!1);for(var c=0;c<r.gameBoard.length;c+=1)o(r.gameBoard[c],c,!0)},h="horizontal",f=window.matchMedia("(max-width: 1050px)");s.addEventListener("click",(function(){h="horizontal"===h?"vertical":"horizontal"})),document.querySelector("#github").addEventListener("click",(function(){window.open("https://github.com/SebasDrewes/","_blank")}));var v=function(){var t=[],i=["","","","","","","","","","",10,"","","","","","","","","","",21,"","","","","","","","","","",32,"","","","","","","","","","",43,"","","","","","","","","","",54,"","","","","","","","","","",65,"","","","","","","","","","",76,"","","","","","","","","","",87,"","","","","","","","","","",98,"","","","","","","","","","",109],n=[10,21,32,43,54,65,76,87,98,109];return{placeShip:function(a,r,o){var l=[];function s(e,t){return e.some((function(e){return t.includes(e)}))}if("horizontal"===o){for(var d=a;d<a+r;d+=1)!1===l.includes(d)&&l.push(d);if(!1===s(n,l)){if(a+r<120){var c=e(a,r,o);t.push(c);for(var u=a;u<a+r;u+=1)!1===n.includes(u)&&n.push(u);for(var h=0;h<c.shipLength;h+=1)i[a+h]=a;c.shipNumber=a}console.log(t)}}else if("vertical"===o){for(var f=a;f<a+11*r;f+=11)!1===l.includes(f)&&l.push(f);if(!1===s(n,l)&&a+11*r<120){var v=e(a,r,o);t.push(v);for(var m=a;m<a+11*r;m+=11)!1===n.includes(m)&&n.push(m);for(var p=0;p<11*v.shipLength;p+=11)i[a+p]=a;v.shipNumber=a}}},receiveAttack:function(e){if(""!==i[e])for(var n=0;n<t.length;n+=1)t[n].shipNumber===i[e]&&(i[e]="hit",t[n].hit(e));else i[e]="noHit"},gameBoard:i,shipList:t,allShipsSunked:function(){return!!t.every((function(e){return!0===e.isSunk()}))}}},m=v(),p=v();p.placeShip(0,5,"horizontal"),p.placeShip(44,3,"vertical"),p.placeShip(7,3,"horizontal"),p.placeShip(36,3,"vertical"),p.placeShip(96,2,"horizontal"),function e(t,n,s){for(;i.firstChild;)i.removeChild(i.firstChild);for(var v=function(v,m){var p=document.createElement("div"),g=[10,21,32,43,54,65,76,87,98,109];p.setAttribute("data",[m]),p.classList.add("cellHidden"),p.classList.add("cell"),p.textContent=v,i.appendChild(p),!1===g.includes(m)&&(p.classList.remove("cellHidden"),p.addEventListener("click",(function(){switch(t.placeShip(m,s,h),t.shipList.length){case 1:e(t,n,4);break;case 2:case 3:e(t,n,3);break;case 4:e(t,n,2);break;case 5:u(t,n),d.textContent="Esperando instrucciones...",l.style.display="none",function(e){e.matches?(o.style.display="block",d.style.fontSize="2.5em",a.style.display="block"):(a.style.display="block",r.style.display="block")}(f);break;default:e(t,n,4)}for(var i=m;i<m+s;i+=1)g.push(i);for(var c=document.querySelectorAll(".cell"),v=0;v<c.length;v+=1)""!==c[v].textContent&&c[v].classList.add("cellShip")})),p.addEventListener("mouseover",(function(){var e=document.querySelectorAll(".cell"),t=[];if("horizontal"===h){for(var i=0;i<e.length;i+=1)if(e[i].getAttribute("data")===m.toString()){for(var n=0;n<s;n+=1)!1===t.includes(i+n)&&t.push(i+n);for(var a=0;a<s;a+=1){var r=t.every((function(t){return void 0!==e[t]&&""===e[t].textContent}));!1===c(g,t)&&r?e[i+a]&&e[i+a].classList.add("hoverCell"):e[i].classList.add("invalidCell")}}}else for(var o=0;o<e.length;o+=1)if(e[o].getAttribute("data")===m.toString()){for(var l=0;l<11*s;l+=11)!1===t.includes(o+l)&&t.push(o+l);for(var d=0;d<11*s;d+=11){var u=t.every((function(t){return void 0!==e[t]&&""===e[t].textContent}));!1===c(g,t)&&u?e[o+d]&&e[o+d].classList.add("hoverCell"):e[o].classList.add("invalidCell")}}})),p.addEventListener("mouseleave",(function(){var e=document.querySelectorAll(".cell");e.forEach((function(e){return e.classList.remove("hoverCell")})),e.forEach((function(e){return e.classList.remove("invalidCell")}))})))},m=0;m<t.gameBoard.length;m+=1)v(t.gameBoard[m],m)}(m,p,5)})();