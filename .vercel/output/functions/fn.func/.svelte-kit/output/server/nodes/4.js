import * as server from '../entries/pages/chats/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/chats/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/chats/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.dae80440.js","_app/immutable/chunks/scheduler.c5a8d159.js","_app/immutable/chunks/index.eaf0ba35.js"];
export const stylesheets = [];
export const fonts = [];
