import * as server from '../entries/pages/about/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/about/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.6d23a882.js","_app/immutable/chunks/scheduler.7b5d904e.js","_app/immutable/chunks/index.895568c3.js"];
export const stylesheets = [];
export const fonts = [];
