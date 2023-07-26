

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/login/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.c5c896b8.js","_app/immutable/chunks/scheduler.7b5d904e.js","_app/immutable/chunks/index.895568c3.js"];
export const stylesheets = [];
export const fonts = [];
