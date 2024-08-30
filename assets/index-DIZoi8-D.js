var l=Object.defineProperty;var u=(r,e,n)=>e in r?l(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n;var a=(r,e,n)=>u(r,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();const s={advice:{},loading:!1,error:null};function f(r){const{slip:e}=r;return{id:e.id,advice:e.advice}}const p=async function(r,e=o=>{},n=o=>{}){s.loading=!0,console.log("Fetching advice from",r);try{const o=await fetch(r);if(!o.ok)throw new Error(`HTTP error! Status: ${o.status}`);const t=await o.json();s.advice=f(t),e(s.advice,s.advice.id)}catch(o){console.error("Error occurred:",o),s.error=o.message,n(o)}finally{s.loading=!1,s.error&&(s.error=null)}};class h{constructor(){a(this,"_parentElement",document.querySelector("#root"));a(this,"_formElement",null);a(this,"_data")}_showError(){}_showLoading(){}addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return` 
        <div id="advice">
            <h1 class="advice__header">
                    ADVICE <span class="header-number"> #${this._data.id}</span>
            </h1>

            <p class="advice__text">
                ${this._data.advice}
            </p>
            <span class="pause">
                <img src="/advice-generator/images/pattern-divider-desktop.svg"
                    alt="Description of SVG"/>
            </span>
            <form class="form">
                <button class="btn">
                    <img src="/advice-generator/images/icon-dice.svg" alt="Description of SVG" />
                </button>
            </form>
        </div>
		`}_clear(){this._parentElement.innerHTML=""}render(e){console.log("render"),this._data=e;const n=this._generateMarkup();this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",n)}}const d=new h,m="https://api.adviceslip.com",v=async function(){const r=`${m}/advice`,e=d.render.bind(d);await p(r,(n,o)=>{e(n),g(o)})};function g(r){const e=new URL(window.location);e.searchParams.set("advice",r),window.history.pushState({path:e.href},"",e.href)}const _=function(){console.log("init"),d.addHandlerRender(v)};_();
