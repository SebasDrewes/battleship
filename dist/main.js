(()=>{"use strict";var e=function(e,t,a){var r={},o=t,i=a;if("horizontal"===i)for(var n=0;n<t;n+=1)r[e+n]="noHit";else if("vertical"===i)for(var l=0;l<11*t;l+=11)r[e+l]="noHit";return{hitPoints:r,hit:function(e){r[e]="hit"},isSunk:function(){return!!Object.values(r).every((function(e){return"hit"===e}))},shipLength:o}};var t="",a="",r="",o=document.querySelector("#playerBoard"),i=document.querySelector("#enemyBoard"),n=document.querySelector("#tuRadar"),l=document.querySelector("#enemyRadar"),s=document.querySelector("#enemyRadarMobile"),d=document.querySelector("#text"),c=document.querySelector("#change"),u=document.querySelector("#title"),h=document.querySelector("#puertaCorrediza"),m=document.querySelector("#newGame"),v=document.querySelector("#winWrap");function f(e,t){return e.some((function(e){return t.includes(e)}))}var g=function e(n,l){for(c.style.display="none",i.style.display="grid";o.firstChild;)o.removeChild(o.firstChild);for(;i.firstChild;)i.removeChild(i.firstChild);for(var s=function(s,d,c){var f=document.createElement("div");f.textContent=s,f.classList.add("cellHittable"),f.classList.add("cellHidden"),f.setAttribute("data",[d]),!1===[10,21,32,43,54,65,76,87,98,109].includes(d)&&(f.classList.remove("cellHidden"),c?(i.appendChild(f),f.addEventListener("click",(function(){if(function(e,o,i){function n(e,t){return e.some((function(e){return t===e}))}if("hit"!==o.gameBoard[i]&&"noHit"!==o.gameBoard[i]){o.receiveAttack(i);for(var l=[10,21,32,43,54,65,76,87,98,109],s=[],d=0;d<e.gameBoard.length;d+=1)"hit"!==e.gameBoard[d]&&"noHit"!==e.gameBoard[d]&&!1===n(l,e.gameBoard[d])&&s.push(d);if("hit"===e.gameBoard[t]){if(s=[],a=t,""!==e.gameBoard[t-1]&&isNaN(e.gameBoard[t-1])||!1!==n(l,e.gameBoard[t-1])||s.push(t-1),""!==e.gameBoard[t+1]&&isNaN(e.gameBoard[t+1])||!1!==n(l,e.gameBoard[t+1])||s.push(t+1),""!==e.gameBoard[t+11]&&isNaN(e.gameBoard[t+11])||!1!==n(l,e.gameBoard[t+11])||s.push(t+11),""!==e.gameBoard[t-11]&&isNaN(e.gameBoard[t-11])||!1!==n(l,e.gameBoard[t-11])||s.push(t-11),!s[0])for(var c=0;c<e.gameBoard.length;c+=1)"hit"!==e.gameBoard[c]&&"noHit"!==e.gameBoard[c]&&!1===n(l,e.gameBoard[c])&&s.push(c)}else if("hit"===e.gameBoard[a]&&"noHit"===e.gameBoard[t]){if(s=[],r=a,""!==e.gameBoard[a-1]&&isNaN(e.gameBoard[a-1])||!1!==n(l,e.gameBoard[a-1])||s.push(a-1),""!==e.gameBoard[a+1]&&isNaN(e.gameBoard[a+1])||!1!==n(l,e.gameBoard[a+1])||s.push(a+1),""!==e.gameBoard[a+11]&&isNaN(e.gameBoard[a+11])||!1!==n(l,e.gameBoard[a+11])||s.push(a+11),""!==e.gameBoard[a-11]&&isNaN(e.gameBoard[a-11])||!1!==n(l,e.gameBoard[a-11])||s.push(a-11),!s[0])for(var u=0;u<e.gameBoard.length;u+=1)"hit"!==e.gameBoard[u]&&"noHit"!==e.gameBoard[u]&&!1===n(l,e.gameBoard[u])&&s.push(u)}else if("hit"===e.gameBoard[r]&&"noHit"===e.gameBoard[t]&&(s=[],""!==e.gameBoard[r-1]&&isNaN(e.gameBoard[r-1])||!1!==n(l,e.gameBoard[r-1])||s.push(r-1),""!==e.gameBoard[r+1]&&isNaN(e.gameBoard[r+1])||!1!==n(l,e.gameBoard[r+1])||s.push(r+1),""!==e.gameBoard[r+11]&&isNaN(e.gameBoard[r+11])||!1!==n(l,e.gameBoard[r+11])||s.push(r+11),""!==e.gameBoard[r-11]&&isNaN(e.gameBoard[r-11])||!1!==n(l,e.gameBoard[r-11])||s.push(r-11),!s[0]))for(var h=0;h<e.gameBoard.length;h+=1)"hit"!==e.gameBoard[h]&&"noHit"!==e.gameBoard[h]&&!1===n(l,e.gameBoard[h])&&s.push(h);var m=s[Math.floor(Math.random()*s.length)];t=m,e.receiveAttack(m)}}(n,l,d),e(n,l),null!==f.textContent.match(/^[0-9]+$/))for(var o=0;o<l.shipList.length;o+=1){if(f.textContent===l.shipList[o].shipNumber.toString()&&!0===l.shipList[o].isSunk()){u.textContent="¡Hundiste un barco enemigo!";break}u.textContent="¡Le diste a un barco enemigo!"}else""===f.textContent&&(u.textContent="¡Fallaste el tiro!");l.allShipsSunked()?(u.textContent="Ganaste!!!",v.style.display="block",setTimeout((function(){h.style.width="100%",u.textContent="Batalla Naval"}),5e3),setTimeout((function(){m.style.display="block",window.location.reload()}),6e3)):n.allShipsSunked()&&(u.textContent="Perdiste!",v.style.display="block",setTimeout((function(){h.style.width="100%",u.textContent="Batalla Naval"}),5e3),setTimeout((function(){window.location.reload()}),6e3))})),f.addEventListener("mouseover",(function(){f.classList.add("hoverCell")})),f.addEventListener("mouseleave",(function(){f.classList.remove("hoverCell")})),"hit"===f.textContent?f.classList.add("cellShipHitted"):"noHit"===f.textContent&&f.classList.add("cellMiss")):(o.appendChild(f),f.classList.remove("cellHittable"),f.classList.add("cellFriendly"),null!==f.textContent.match(/^[0-9]+$/)?f.classList.add("cellShip"):"hit"===f.textContent?f.classList.add("cellShipHittedFriendly"):"noHit"===f.textContent&&f.classList.add("cellMissFriendly")))},d=0;d<n.gameBoard.length;d+=1)s(n.gameBoard[d],d,!1);for(var f=0;f<l.gameBoard.length;f+=1)s(l.gameBoard[f],f,!0)},p="horizontal",B=window.matchMedia("(max-width: 1050px)");c.addEventListener("click",(function(){p="horizontal"===p?"vertical":"horizontal"})),document.querySelector("#github").addEventListener("click",(function(){window.open("https://github.com/SebasDrewes/","_blank")})),m.addEventListener("click",(function(){h.style.width="0%",m.style.display="none"}));var y=function(){var t=[],a=["","","","","","","","","","",10,"","","","","","","","","","",21,"","","","","","","","","","",32,"","","","","","","","","","",43,"","","","","","","","","","",54,"","","","","","","","","","",65,"","","","","","","","","","",76,"","","","","","","","","","",87,"","","","","","","","","","",98,"","","","","","","","","","",109],r=[10,21,32,43,54,65,76,87,98,109],o=function(o,i,n){var l=[];function s(e,t){return e.some((function(e){return t.includes(e)}))}if("horizontal"===n){for(var d=o;d<o+i;d+=1)!1===l.includes(d)&&l.push(d);if(!1===s(r,l)&&o+i<120){var c=e(o,i,n);t.push(c);for(var u=o;u<o+i;u+=1)!1===r.includes(u)&&r.push(u);for(var h=0;h<c.shipLength;h+=1)a[o+h]=o;c.shipNumber=o}}else if("vertical"===n){for(var m=o;m<o+11*i;m+=11)!1===l.includes(m)&&l.push(m);if(!1===s(r,l)&&o+11*i<120){var v=e(o,i,n);t.push(v);for(var f=o;f<o+11*i;f+=11)!1===r.includes(f)&&r.push(f);for(var g=0;g<11*v.shipLength;g+=11)a[o+g]=o;v.shipNumber=o}}};return{placeShip:o,receiveAttack:function(e){if(""!==a[e])for(var r=0;r<t.length;r+=1)t[r].shipNumber===a[e]&&(a[e]="hit",t[r].hit(e));else a[e]="noHit"},gameBoard:a,shipList:t,allShipsSunked:function(){return!!t.every((function(e){return!0===e.isSunk()}))},placeShipsRandomly:function(){switch(Math.floor(5*Math.random()+1)){case 1:o(0,5,"horizontal"),o(44,4,"vertical"),o(7,3,"horizontal"),o(36,3,"vertical"),o(96,2,"horizontal");break;case 2:o(0,5,"vertical"),o(47,4,"vertical"),o(17,3,"horizontal"),o(74,3,"vertical"),o(93,2,"horizontal");break;case 3:o(27,5,"horizontal"),o(58,4,"vertical"),o(12,3,"horizontal"),o(83,3,"horizontal"),o(99,2,"horizontal");break;case 4:o(16,5,"vertical"),o(56,4,"vertical"),o(52,3,"vertical"),o(12,3,"vertical"),o(8,2,"vertical");break;case 5:o(78,5,"horizontal"),o(34,4,"horizontal"),o(50,3,"horizontal"),o(15,3,"horizontal"),o(95,2,"horizontal");break;default:o(0,5,"horizontal"),o(44,4,"vertical"),o(7,3,"horizontal"),o(36,3,"vertical"),o(96,2,"horizontal")}}}},C=y(),L=y();L.placeShipsRandomly(),function e(t,a,r){for(;o.firstChild;)o.removeChild(o.firstChild);for(var i=function(i,c){var h=document.createElement("div"),m=[10,21,32,43,54,65,76,87,98,109];h.setAttribute("data",[c]),h.classList.add("cellHidden"),h.classList.add("cell"),h.textContent=i,o.appendChild(h),!1===m.includes(c)&&(h.classList.remove("cellHidden"),h.addEventListener("click",(function(){switch(t.placeShip(c,r,p),t.shipList.length){case 1:e(t,a,4);break;case 2:case 3:e(t,a,3);break;case 4:e(t,a,2);break;case 5:g(t,a),u.textContent="Esperando instrucciones...",d.style.display="none",function(e){e.matches?(s.style.display="block",u.style.fontSize="2.5em",n.style.display="block"):(n.style.display="block",l.style.display="block")}(B);break;default:e(t,a,4)}for(var o=c;o<c+r;o+=1)m.push(o);for(var i=document.querySelectorAll(".cell"),h=0;h<i.length;h+=1)""!==i[h].textContent&&i[h].classList.add("cellShip")})),h.addEventListener("mouseover",(function(){var e=document.querySelectorAll(".cell"),t=[];if("horizontal"===p){for(var a=0;a<e.length;a+=1)if(e[a].getAttribute("data")===c.toString()){for(var o=0;o<r;o+=1)!1===t.includes(a+o)&&t.push(a+o);for(var i=0;i<r;i+=1){var n=t.every((function(t){return void 0!==e[t]&&""===e[t].textContent}));!1===f(m,t)&&n?e[a+i]&&e[a+i].classList.add("hoverCell"):e[a].classList.add("invalidCell")}}}else for(var l=0;l<e.length;l+=1)if(e[l].getAttribute("data")===c.toString()){for(var s=0;s<11*r;s+=11)!1===t.includes(l+s)&&t.push(l+s);for(var d=0;d<11*r;d+=11){var u=t.every((function(t){return void 0!==e[t]&&""===e[t].textContent}));!1===f(m,t)&&u?e[l+d]&&e[l+d].classList.add("hoverCell"):e[l].classList.add("invalidCell")}}})),h.addEventListener("mouseleave",(function(){var e=document.querySelectorAll(".cell");e.forEach((function(e){return e.classList.remove("hoverCell")})),e.forEach((function(e){return e.classList.remove("invalidCell")}))})))},c=0;c<t.gameBoard.length;c+=1)i(t.gameBoard[c],c)}(C,L,5)})();