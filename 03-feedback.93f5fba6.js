!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return s.Date.now()};function b(e,t,n){var r,i,u,a,f,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function b(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function S(e){return c=e,f=setTimeout(w,t),d?b(e):a}function T(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=u}function w(){var e=p();if(T(e))return O(e);f=setTimeout(w,function(e){var n=t-(e-l);return s?g(n,u-(e-c)):n}(e))}function O(e){return f=void 0,v&&r?b(e):(r=i=void 0,a)}function h(){var e=p(),n=T(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return S(l);if(s)return f=setTimeout(w,t),b(l)}return void 0===f&&(f=setTimeout(w,t)),a}return t=j(t)||0,y(n)&&(d=!!n.leading,u=(s="maxWait"in n)?m(j(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),h.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},h.flush=function(){return void 0===f?a:O(p())},h}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=a.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:r,maxWait:t,trailing:i})};var S,T,w,O="feedback-form-state",h=document.querySelector(".feedback-form"),x={};h.addEventListener("submit",(function(e){e.preventDefault(),localStorage.removeItem(O);var t=e.currentTarget.elements,n={email:t.email.value,password:t.message.value};console.log(n),e.currentTarget.reset()})),h.addEventListener("input",e(t)((function(e){x[e.target.name]=e.target.value,localStorage.setItem(O,JSON.stringify(x))}),500)),S=JSON.parse(localStorage.getItem(O)),T=document.querySelector(".feedback-form input"),w=document.querySelector(".feedback-form textarea"),S.email&&(T.value=S.email),S.message&&(w.value=S.message)}();
//# sourceMappingURL=03-feedback.93f5fba6.js.map