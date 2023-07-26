import { c as create_ssr_component, d as createEventDispatcher, s as subscribe, v as validate_component } from "../../chunks/ssr.js";
import { n as navigating } from "../../chunks/stores.js";
const NavBar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".nav-bar.svelte-zagq4e.svelte-zagq4e{list-style-type:none;overflow:hidden;background-color:#333333;position:sticky}.nav-bar-right.svelte-zagq4e.svelte-zagq4e{float:right}.nav-bar.svelte-zagq4e li.svelte-zagq4e{float:left}.nav-bar.svelte-zagq4e li a.svelte-zagq4e{display:block;color:white;text-align:center;padding:14px 16px;text-decoration:none}.nav-bar.svelte-zagq4e li a.svelte-zagq4e:hover{background-color:#111111}",
  map: null
};
const NavBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  $$result.css.add(css$1);
  return `<ul class="nav-bar svelte-zagq4e"><li class="svelte-zagq4e" data-svelte-h="svelte-1huopth"><a href="/" class="svelte-zagq4e">Home</a></li> <li class="svelte-zagq4e" data-svelte-h="svelte-1bc9el4"><a href="/about" class="svelte-zagq4e">About</a></li> <li class="svelte-zagq4e" data-svelte-h="svelte-12vprw2"><a href="/users" class="svelte-zagq4e">Users</a></li> <li class="svelte-zagq4e" data-svelte-h="svelte-7mluaw"><a href="/chats" class="svelte-zagq4e">Chats</a></li> <div class="nav-bar-right svelte-zagq4e"><li class="svelte-zagq4e"><button data-svelte-h="svelte-ktsy4a">Logout</button></li></div> </ul>`;
});
const Spinner_svelte_svelte_type_style_lang = "";
const css = {
  code: ".spinner.svelte-1w88nps.svelte-1w88nps{margin:100px auto;width:50px;height:40px;text-align:center;font-size:10px}.spinner.svelte-1w88nps>div.svelte-1w88nps{background-color:#333;height:100%;width:6px;display:inline-block;-webkit-animation:svelte-1w88nps-sk-stretchdelay 1.2s infinite ease-in-out;animation:svelte-1w88nps-sk-stretchdelay 1.2s infinite ease-in-out}.spinner.svelte-1w88nps .rect2.svelte-1w88nps{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.spinner.svelte-1w88nps .rect3.svelte-1w88nps{-webkit-animation-delay:-1.0s;animation-delay:-1.0s}.spinner.svelte-1w88nps .rect4.svelte-1w88nps{-webkit-animation-delay:-0.9s;animation-delay:-0.9s}.spinner.svelte-1w88nps .rect5.svelte-1w88nps{-webkit-animation-delay:-0.8s;animation-delay:-0.8s}@-webkit-keyframes svelte-1w88nps-sk-stretchdelay{0%,40%,100%{-webkit-transform:scaleY(0.4) }20%{-webkit-transform:scaleY(1.0) }}@keyframes svelte-1w88nps-sk-stretchdelay{0%,40%,100%{transform:scaleY(0.4);-webkit-transform:scaleY(0.4)}20%{transform:scaleY(1.0);-webkit-transform:scaleY(1.0)}}",
  map: null
};
const Spinner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="spinner svelte-1w88nps" data-svelte-h="svelte-1wsd0rd"><div class="rect1 svelte-1w88nps"></div> <div class="rect2 svelte-1w88nps"></div> <div class="rect3 svelte-1w88nps"></div> <div class="rect4 svelte-1w88nps"></div> <div class="rect5 svelte-1w88nps"></div></div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $navigating, $$unsubscribe_navigating;
  $$unsubscribe_navigating = subscribe(navigating, (value) => $navigating = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_navigating();
  return `   ${$$result.head += `<!-- HEAD_svelte-1o1r0o2_START --><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"><!-- HEAD_svelte-1o1r0o2_END -->`, ""} ${validate_component(NavBar, "NavBar").$$render($$result, {}, {}, {})} ${$navigating ? `${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})} <h1 data-svelte-h="svelte-13esjn0">Fetching...</h1>` : `${slots.default ? slots.default({}) : ``}`}`;
});
export {
  Layout as default
};
