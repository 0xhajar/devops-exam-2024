(()=>{var t={897:(t,e)=>{e.isValid=t=>function(t){return t.length>=8}(t)?function(t){return t.includes("&")||t.includes("$")||t.includes("è")||t.includes("!")||t.includes("§")||t.includes("à")||t.includes("_")}(t)?function(t){for(let e=0;e<t.length;e++)if(!isNaN(t[e]))return!0;return!1}(t)?"Gamer tag is valid":"Invalid - gamertag must contain at least a number":"Invalid - gamertag must contain at least a special character":"Invalid - gamertag length must be at least 8 characters"}},e={};function n(a){var r=e[a];if(void 0!==r)return r.exports;var i=e[a]={exports:{}};return t[a](i,i.exports,n),i.exports}(()=>{try{const{isValid:t}=n(897),e=document.getElementById("body"),a=document.getElementById("gamerTagInput"),r=document.getElementById("gamerTagCheckButton"),i=document.getElementById("resetButton"),g=document.getElementById("gamerTagFeedback"),d="background:linear-gradient(\n                90deg,\n                rgba(2, 0, 36, 1) 0%,\n                rgba(9, 9, 121, 1) 35%,\n                rgba(0, 212, 255, 1) 100%\n            ) !important",c="background:linear-gradient(\n                90deg,\n                rgba(2, 0, 36, 1) 0%,\n                rgba(11, 255, 168, 1) 35%,\n                rgba(0, 212, 0, 1) 100%\n            ) !important",l="background:linear-gradient(\n                90deg,\n                rgba(2, 0, 36, 1) 0%,\n                rgba(200, 9, 70, 1) 35%,\n                rgba(255, 0, 0, 1) 100%\n            ) !important";let s;a.addEventListener("change",(t=>{s=t.target.value})),r.addEventListener("click",(()=>{const n=t(s);g.textContent=n,e.setAttribute("style","Gamer tag is valid"===n?c:l)})),i.addEventListener("click",(()=>{g.textContent="",e.setAttribute("style",d)}))}catch(t){console.error(JSON.stringify(t))}})()})();