import * as server from '../entries/pages/chats/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/chats/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/chats/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.230a78f3.js","_app/immutable/chunks/scheduler.7b5d904e.js","_app/immutable/chunks/index.895568c3.js"];
export const stylesheets = [];
export const fonts = [];
