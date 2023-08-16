import { r as redirect } from "../../../../chunks/index.js";
const load = async ({ parent, params }) => {
  const { supabase, session } = await parent();
  if (!session) {
    throw redirect(303, "/login");
  }
  const user_id = params.user_id;
  const { data: eventsData, error } = await supabase.from("Events").select("*").eq("user_id", user_id);
  const { data: userData, error: _ } = await supabase.from("Users").select("first_name, last_name, phone_number").eq("id", user_id);
  const currentUser = userData[0];
  return {
    eventsData,
    user_id,
    currentUser
  };
};
export {
  load
};
