import { r as redirect } from "../../../chunks/index.js";
const load = async ({ parent }) => {
  const { supabase, session } = await parent();
  if (!session) {
    throw redirect(303, "/login");
  }
  const { data: usersData, error } = await supabase.from("Users").select("*");
  return {
    usersData
  };
};
export {
  load
};
