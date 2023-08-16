import * as universal from '../entries/pages/_layout.ts.js';
import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.2c764b87.js","_app/immutable/chunks/preload-helper.cf010ec4.js","_app/immutable/chunks/scheduler.c5a8d159.js","_app/immutable/chunks/index.eaf0ba35.js","_app/immutable/chunks/singletons.b5b1df16.js","_app/immutable/chunks/stores.c58900aa.js"];
export const stylesheets = ["_app/immutable/assets/0.12c9810c.css"];
export const fonts = [];
