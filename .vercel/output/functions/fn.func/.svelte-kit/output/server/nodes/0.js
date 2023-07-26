import * as universal from '../entries/pages/_layout.ts.js';
import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.30f62960.js","_app/immutable/chunks/preload-helper.cf010ec4.js","_app/immutable/chunks/scheduler.7b5d904e.js","_app/immutable/chunks/index.895568c3.js","_app/immutable/chunks/singletons.ac31e9a4.js","_app/immutable/chunks/stores.921e4fba.js"];
export const stylesheets = ["_app/immutable/assets/0.12c9810c.css"];
export const fonts = [];
