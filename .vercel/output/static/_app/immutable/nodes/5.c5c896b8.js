import{s as b,f,a as g,g as h,h as C,c as w,r as P,d as y,j as _,i as S,u as p,E as c,v,w as I,F as T}from"../chunks/scheduler.7b5d904e.js";import{S as N,i as U}from"../chunks/index.895568c3.js";function E(u){let e,a,o,n,l,s,m="Log In",r,d;return{c(){e=f("form"),a=f("input"),o=g(),n=f("input"),l=g(),s=f("button"),s.textContent=m,this.h()},l(t){e=h(t,"FORM",{});var i=C(e);a=h(i,"INPUT",{name:!0}),o=w(i),n=h(i,"INPUT",{type:!0,name:!0}),l=w(i),s=h(i,"BUTTON",{"data-svelte-h":!0}),P(s)!=="svelte-1upmudf"&&(s.textContent=m),i.forEach(y),this.h()},h(){_(a,"name","email"),_(n,"type","password"),_(n,"name","password")},m(t,i){S(t,e,i),p(e,a),c(a,u[0]),p(e,o),p(e,n),c(n,u[1]),p(e,l),p(e,s),r||(d=[v(a,"input",u[4]),v(n,"input",u[5]),v(e,"submit",u[2])],r=!0)},p(t,[i]){i&1&&a.value!==t[0]&&c(a,t[0]),i&2&&n.value!==t[1]&&c(n,t[1])},i:I,o:I,d(t){t&&y(e),r=!1,T(d)}}}function F(u,e,a){let{data:o}=e,{supabase:n}=o,l,s;const m=async()=>{const{error:t}=await n.auth.signInWithPassword({email:l,password:s});alert((t==null?void 0:t.message)||"Success!")};function r(){l=this.value,a(0,l)}function d(){s=this.value,a(1,s)}return u.$$set=t=>{"data"in t&&a(3,o=t.data)},u.$$.update=()=>{u.$$.dirty&8&&({supabase:n}=o)},[l,s,m,o,r,d]}class q extends N{constructor(e){super(),U(this,e,F,E,b,{data:3})}}export{q as component};