import * as universal from '../entries/pages/users/_page.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/users/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/users/+page.ts";
export const imports = ["_app/immutable/nodes/6.4aebce61.js","_app/immutable/chunks/index.c7d36aa9.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/scheduler.7b5d904e.js","_app/immutable/chunks/index.895568c3.js"];
export const stylesheets = ["_app/immutable/assets/6.89ac217c.css"];
export const fonts = [];
