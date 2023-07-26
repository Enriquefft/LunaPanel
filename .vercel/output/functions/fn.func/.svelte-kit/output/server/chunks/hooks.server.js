import { P as PUBLIC_SUPABASE_URL, a as PUBLIC_SUPABASE_ANON_KEY } from "./public.js";
import { createSupabaseServerClient } from "@supabase/auth-helpers-sveltekit";
import { r as redirect } from "./index.js";
const handle = async ({ event, resolve }) => {
  event.locals.supabase = createSupabaseServerClient({
    supabaseUrl: PUBLIC_SUPABASE_URL,
    supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
    event
  });
  event.locals.getSession = async () => {
    const {
      data: { session }
    } = await event.locals.supabase.auth.getSession();
    return session;
  };
  if (!event.url.pathname.startsWith("/login")) {
    const session = await event.locals.getSession();
    if (!session) {
      throw redirect(303, "/login");
    }
  }
  return resolve(event, {
    filterSerializedResponseHeaders(name) {
      return name === "content-range";
    }
  });
};
export {
  handle
};
