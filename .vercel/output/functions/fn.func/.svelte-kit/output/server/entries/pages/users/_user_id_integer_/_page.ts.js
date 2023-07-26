import { r as redirect } from "../../../../chunks/index.js";
const load = async ({ parent, params }) => {
  const { supabase, session } = await parent();
  if (!session) {
    throw redirect(303, "/login");
  }
  const user_id = params.user_id;
  const { data: eventsData, error } = await supabase.from("Events").select("*").eq("user_id", user_id);
  return {
    eventsData,
    user_id
  };
};
export {
  load
};
