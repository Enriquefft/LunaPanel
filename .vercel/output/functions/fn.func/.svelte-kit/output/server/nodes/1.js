

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.07ded4a5.js","_app/immutable/chunks/scheduler.7b5d904e.js","_app/immutable/chunks/index.895568c3.js","_app/immutable/chunks/stores.921e4fba.js","_app/immutable/chunks/singletons.ac31e9a4.js"];
export const stylesheets = [];
export const fonts = [];
