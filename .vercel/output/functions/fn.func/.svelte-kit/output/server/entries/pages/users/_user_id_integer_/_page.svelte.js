import { c as create_ssr_component, b as each, a as add_attribute, e as escape } from "../../../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "table.svelte-1tal2za{border-collapse:collapse;width:100%}th.svelte-1tal2za{padding-top:12px;padding-bottom:12px;text-align:left;background-color:#4caf50;color:white}th.svelte-1tal2za,td.svelte-1tal2za{border:1px solid #ddd;padding:8px}tr.svelte-1tal2za:nth-child(even){background-color:#f2f2f2}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { eventsData, supabase, user_id, currentUser } = data;
  const week_days = [1, 2, 3, 4, 5, 6, 7];
  const categories = ["sleep", "class", "study"];
  const emptyEvent = {
    category: "sleep",
    name: "enrique",
    description: "test",
    startTime: "12:00",
    endTime: "13:05",
    weekDays: [1],
    userName: currentUser.last_name,
    userPhone: currentUser.phone_number
  };
  let newEvent = emptyEvent;
  const getWeekDay = (day) => {
    switch (day) {
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
      case 7:
        return "Sunday";
    }
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  ({ eventsData } = data);
  return `<h1 data-svelte-h="svelte-113i1ud">Events:</h1> ${eventsData && eventsData.length > 0 ? `<table class="svelte-1tal2za"><tr class="svelte-1tal2za">${each(Object.keys(eventsData[0]), (key) => {
    return `<th class="svelte-1tal2za">${escape(key)}</th>`;
  })}</tr> ${each(eventsData, (event) => {
    return `<tr class="svelte-1tal2za">${each(Object.values(event), (value) => {
      return `<td class="svelte-1tal2za">${escape(value)}</td>`;
    })}   <button data-svelte-h="svelte-1dj12k9"><i class="fa fa-trash-o"></i></button> </tr>`;
  })}</table>` : ``} <h3 data-svelte-h="svelte-qbgcoi">Add User:</h3> <form>         ${each(categories, (category) => {
    return `<label><input type="radio" name="category"${add_attribute("value", category, 0)}${category === newEvent.category ? add_attribute("checked", true, 1) : ""}> ${escape(category)} </label>`;
  })} <br> <label for="Name" data-svelte-h="svelte-1egcg2k">Name:</label> <input id="Name" type="text" placeholder="Eat" required${add_attribute("value", newEvent.name, 0)}> <br> <label for="Description" data-svelte-h="svelte-10pq9m4">Description:</label> <textarea id="Description">${escape(newEvent.description)}</textarea> <br> <label for="StartTime-time" data-svelte-h="svelte-13nxf9e">StartTime:</label> <input id="StartTime-time" type="time" required${add_attribute("value", newEvent.startTime, 0)}> <label for="EndTime-time" data-svelte-h="svelte-pn2b7m">EndTime:</label> <input id="EndTime-time" type="time" required${add_attribute("value", newEvent.endTime, 0)}> <br> ${each(week_days, (week_day) => {
    return `<label><input type="checkbox" name="week-days"${add_attribute("value", week_day, 0)}${~newEvent.weekDays.indexOf(week_day) ? add_attribute("checked", true, 1) : ""}> ${escape(getWeekDay(week_day))} </label>`;
  })} <br> <button type="submit" data-svelte-h="svelte-357n1v">Create</button> </form>`;
});
export {
  Page as default
};
