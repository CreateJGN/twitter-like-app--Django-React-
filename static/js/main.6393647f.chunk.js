(this["webpackJsonptweetme2-web"]=this["webpackJsonptweetme2-web"]||[]).push([[0],[,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},,function(e,t,a){e.exports=a(14)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),o=a.n(r),l=(a(12),a(5)),s=a.n(l);a(13);function i(e,t,a,n){var c;n&&(c=JSON.stringify(n));var r=new XMLHttpRequest,o="http://localhost:8000/api".concat(t);r.responseType="json";var l=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var a=document.cookie.split(";"),n=0;n<a.length;n++){var c=a[n].trim();if(c.substring(0,e.length+1)===e+"="){t=decodeURIComponent(c.substring(e.length+1));break}}return t}("csrftoken");r.open(e,o),r.setRequestHeader("Content-Type","application/json"),l&&(r.setRequestHeader("HTTP_X_REQUESTED_WITH","XMLHttpRequest"),r.setRequestHeader("X-Requested-With","XMLHttpRequest"),r.setRequestHeader("X-CSRFToken",l)),r.onload=function(){a(r.response,r.status)},r.onerror=function(e){console.log(e),a({message:"The request was an error"},400)},r.send(c)}function u(e){var t=e.tweet,a=e.action,n=e.didPerformAction,r=t.likes?t.likes:0,o=e.className?e.className:"btn btn-primary btn-sm",l=a.display?a.display:"Action",s=function(e,t){console.log(e,t),200!==t&&201!==t||!n||n(e,t)},u="like"===a.type?"".concat(r," ").concat(l):l;return c.a.createElement("button",{className:o,onClick:function(e){e.preventDefault(),function(e,t,a){i("POST","/tweets/action/",a,{id:e,action:t})}(t.id,a.type,s)}},u)}var m=a(2),d=a(1);function f(e){var t=c.a.createRef(),a=e.didTweet,n=function(e,t){201===t?a(e):(console.log(e),alert("An error occured please try again"))};return c.a.createElement("div",{className:e.className},c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a=t.current.value;i("POST","/tweets/create/",n,{content:a}),t.current.value=""}},c.a.createElement("textarea",{ref:t,required:!0,className:"form-control",name:"tweet"}),c.a.createElement("button",{type:"submit",className:"btn btn-primary my-3"},"Tweet")))}var p=a(6);function w(e){var t=e.tweet;return t.parent?c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-11 mx-auto p-3 border rounded"},c.a.createElement("p",{className:"mb-0 text-muted small"},"Retweet"),c.a.createElement(b,{hideActions:!0,className:" ",tweet:t.parent}))):null}function b(e){var t=e.tweet,a=e.didRetweet,r=e.hideActions,o=Object(n.useState)(e.tweet?e.tweet:null),l=Object(d.a)(o,2),s=l[0],i=l[1],m=e.className?e.className:"col-10 mx-auto col-md-6",f=window.location.pathname.match(Object(p.a)(/([0-9]+)/,{tweetid:1})),b=f?f.groups.tweetid:-1,v="".concat(t.id)==="".concat(b),E=function(e,t){200===t?i(e):201===t&&a&&a(e)};return c.a.createElement("div",{className:m},c.a.createElement("div",null,c.a.createElement("p",null,t.id," - ",t.content),c.a.createElement(w,{tweet:t})),c.a.createElement("div",{className:"btn btn-group"},s&&!0!==r&&c.a.createElement(c.a.Fragment,null,c.a.createElement(u,{tweet:s,didPerformAction:E,action:{type:"like",display:"Likes"}}),c.a.createElement(u,{tweet:s,didPerformAction:E,action:{type:"unlike",display:"Unlike"}}),c.a.createElement(u,{tweet:s,didPerformAction:E,action:{type:"retweet",display:"Retweet"}})),!0===v?null:c.a.createElement("button",{className:"btn btn-outline-primary btn-sm",onClick:function(e){e.preventDefault(),window.location.href="/".concat(t.id)}},"View")))}function v(e){var t=Object(n.useState)([]),a=Object(d.a)(t,2),r=a[0],o=a[1],l=Object(n.useState)([]),s=Object(d.a)(l,2),u=s[0],f=s[1],p=Object(n.useState)(!1),w=Object(d.a)(p,2),v=w[0],E=w[1];Object(n.useEffect)((function(){var t=Object(m.a)(e.newTweets).concat(r);t.length!==u.length&&f(t)}),[e.newTweets,u,r]),Object(n.useEffect)((function(){if(!1===v){!function(e,t){var a="/tweets/";e&&(a="/tweets/?username=".concat(e)),i("GET",a,t)}(e.username,(function(e,t){200===t?(o(e),E(!0)):alert("There was an error")}))}}),[r,v,E,e.username]);var h=function(e){var t=Object(m.a)(r);t.unshift(e),o(t);var a=Object(m.a)(u);a.unshift(u),f(a)};return u.map((function(e,t){return c.a.createElement(b,{tweet:e,didRetweet:h,className:"my-5 py-5 border bg-white text-dark",key:"".concat(t,"-{item.id}")})}))}function E(e){var t=Object(n.useState)([]),a=Object(d.a)(t,2),r=a[0],o=a[1],l="false"!==e.canTweet;return c.a.createElement("div",{className:e.className},!0===l&&c.a.createElement(f,{didTweet:function(e){var t=Object(m.a)(r);t.unshift(e),o(t)},className:"col-12 mb-3"}),c.a.createElement(v,Object.assign({newTweets:r},e)))}function h(e){var t=e.tweetId,a=Object(n.useState)(!1),r=Object(d.a)(a,2),o=r[0],l=r[1],s=Object(n.useState)(null),u=Object(d.a)(s,2),m=u[0],f=u[1],p=function(e,t){200===t?f(e):alert("There was an error finding your tweet.")};return Object(n.useEffect)((function(){!1===o&&(!function(e,t){i("GET","/tweets/".concat(e,"/"),t)}(t,p),l(!0))}),[t,o,l]),null===m?null:c.a.createElement(b,{tweet:m,className:e.className})}var g=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("img",{src:s.a,className:"App-logo",alt:"logo"}),c.a.createElement("p",null,"Edit ",c.a.createElement("code",null,"src/App.js")," and save to reload."),c.a.createElement("div",null,c.a.createElement(E,null)),c.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=document.getElementById("root");j&&o.a.render(c.a.createElement(g,null),j);var y=c.a.createElement,N=document.getElementById("tweetme-2");N&&o.a.render(y(E,N.dataset),N),document.querySelectorAll(".tweetme-2-detail").forEach((function(e){o.a.render(y(h,e.dataset),e)})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[7,1,2]]]);
//# sourceMappingURL=main.6393647f.chunk.js.map