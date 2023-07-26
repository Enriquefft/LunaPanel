import { c as create_ssr_component, a as add_attribute } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let email;
  let password;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<form><input name="email"${add_attribute("value", email, 0)}> <input type="password" name="password"${add_attribute("value", password, 0)}> <button data-svelte-h="svelte-1upmudf">Log In</button></form>`;
});
export {
  Page as default
};
