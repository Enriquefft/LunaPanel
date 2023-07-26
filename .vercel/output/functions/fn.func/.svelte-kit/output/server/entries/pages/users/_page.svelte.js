import { c as create_ssr_component, b as each, a as add_attribute, e as escape } from "../../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "table.svelte-15fy2kz{border-collapse:collapse;width:100%}th.svelte-15fy2kz{padding-top:12px;padding-bottom:12px;text-align:left;background-color:#4CAF50;color:white}th.svelte-15fy2kz,td.svelte-15fy2kz{border:1px solid #ddd;padding:8px}tr.svelte-15fy2kz:nth-child(even){background-color:#f2f2f2}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { usersData, supabase } = data;
  const emptyUser = {
    first_name: null,
    last_name: null,
    phone: null
  };
  let newUser = emptyUser;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  ({ usersData } = data);
  return `<h1 data-svelte-h="svelte-1b7nu2m">Users:</h1> ${usersData && usersData.length > 0 ? `<table class="svelte-15fy2kz"><tr class="svelte-15fy2kz">${each(Object.keys(usersData[0]), (key) => {
    return `<th class="svelte-15fy2kz">${escape(key)}</th>`;
  })}</tr> ${each(usersData, (user) => {
    return `<tr class="svelte-15fy2kz">${each(Object.values(user), (value) => {
      return `<td class="svelte-15fy2kz">${escape(value)}</td>`;
    })}   <button data-svelte-h="svelte-iv4cv3"><i class="fa fa-trash-o"></i></button>  <button data-svelte-h="svelte-1gqce0g">Events</button> </tr>`;
  })}</table>` : ``} <h3 data-svelte-h="svelte-qbgcoi">Add User:</h3> <form><label for="first-name" data-svelte-h="svelte-1097oef">First Name:</label> <input id="first-name" type="text" placeholder="Jhon" required${add_attribute("value", newUser.first_name, 0)}> <br> <label for="last-name" data-svelte-h="svelte-seix3f">Last Name:</label> <input id="last-name" type="text" placeholder="Doe" required${add_attribute("value", newUser.last_name, 0)}> <br> <label for="phone" data-svelte-h="svelte-11y9508">Phone:</label> <input id="phone" type="telfe" placeholder="987654321" minlength="9" maxlength="9" pattern="${"[0-9]" + escape("{9}", true)}" title="9 numbers without spaces" required${add_attribute("value", newUser.phone, 0)}> <br> <button type="submit" data-svelte-h="svelte-357n1v">Create</button> </form>`;
});
export {
  Page as default
};
