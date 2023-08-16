

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.dbd2c0f6.js","_app/immutable/chunks/scheduler.c5a8d159.js","_app/immutable/chunks/index.eaf0ba35.js","_app/immutable/chunks/stores.c58900aa.js","_app/immutable/chunks/singletons.b5b1df16.js"];
export const stylesheets = [];
export const fonts = [];
