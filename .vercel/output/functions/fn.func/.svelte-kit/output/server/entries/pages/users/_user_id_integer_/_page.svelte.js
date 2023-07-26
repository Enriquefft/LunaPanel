import { c as create_ssr_component, b as each, a as add_attribute, e as escape } from "../../../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "table.svelte-15fy2kz{border-collapse:collapse;width:100%}th.svelte-15fy2kz{padding-top:12px;padding-bottom:12px;text-align:left;background-color:#4CAF50;color:white}th.svelte-15fy2kz,td.svelte-15fy2kz{border:1px solid #ddd;padding:8px}tr.svelte-15fy2kz:nth-child(even){background-color:#f2f2f2}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { eventsData, supabase, user_id } = data;
  const emptyEvent = {
    name: null,
    description: "",
    start: null,
    end: null,
    week_day: null
  };
  let newEvent = emptyEvent;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  ({ eventsData } = data);
  return `<h1 data-svelte-h="svelte-113i1ud">Events:</h1> ${eventsData && eventsData.length > 0 ? `<table class="svelte-15fy2kz"><tr class="svelte-15fy2kz">${each(Object.keys(eventsData[0]), (key) => {
    return `<th class="svelte-15fy2kz">${escape(key)}</th>`;
  })}</tr> ${each(eventsData, (event) => {
    return `<tr class="svelte-15fy2kz">${each(Object.values(event), (value) => {
      return `<td class="svelte-15fy2kz">${escape(value)}</td>`;
    })}   <button data-svelte-h="svelte-qnz2u2"><i class="fa fa-trash-o"></i></button> </tr>`;
  })}</table>` : ``} <h3 data-svelte-h="svelte-qbgcoi">Add User:</h3> <form><label for="name" data-svelte-h="svelte-ir8c70">Name:</label> <input id="name" type="text" placeholder="Eat" required${add_attribute("value", newEvent.name, 0)}> <br> <label for="description" data-svelte-h="svelte-1jjlhqk">Description:</label> <textarea id="description">${escape("")}</textarea> <br> <label for="start-time" data-svelte-h="svelte-fq4ed2">Start:</label> <input id="start-time" type="time" required${add_attribute("value", newEvent.start, 0)}> <label for="end-time" data-svelte-h="svelte-b1gj4e">End:</label> <input id="end-time" type="time" required${add_attribute("value", newEvent.end, 0)}>  <label for="week-day" data-svelte-h="svelte-hfwph1">Week Day:</label> <select id="week-day"><option value="" disabled selected data-svelte-h="svelte-1eahvcv">Select</option><option value="1" data-svelte-h="svelte-p2cqpn">Monday</option><option value="2" data-svelte-h="svelte-1j4gv89">Tuesday</option><option value="3" data-svelte-h="svelte-1075f2z">Wednesday</option><option value="4" data-svelte-h="svelte-7u8426">Thursday</option><option value="5" data-svelte-h="svelte-1x31ayg">Friday</option><option value="6" data-svelte-h="svelte-c0bgu9">Saturday</option><option value="7" data-svelte-h="svelte-1vt9v6l">Sunday</option></select> <button type="submit" data-svelte-h="svelte-357n1v">Create</button> </form>`;
});
export {
  Page as default
};
