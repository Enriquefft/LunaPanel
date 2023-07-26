export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.c3b6b05b.js","app":"_app/immutable/entry/app.67dd7671.js","imports":["_app/immutable/entry/start.c3b6b05b.js","_app/immutable/chunks/scheduler.7b5d904e.js","_app/immutable/chunks/singletons.ac31e9a4.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/entry/app.67dd7671.js","_app/immutable/chunks/preload-helper.cf010ec4.js","_app/immutable/chunks/scheduler.7b5d904e.js","_app/immutable/chunks/index.895568c3.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js')),
			__memo(() => import('../output/server/nodes/7.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/chats",
				pattern: /^\/chats\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/users",
				pattern: /^\/users\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/users/[user_id=integer]",
				pattern: /^\/users\/([^/]+?)\/?$/,
				params: [{"name":"user_id","matcher":"integer","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			}
		],
		matchers: async () => {
			const { match: integer } = await import ('../output/server/entries/matchers/integer.js')
			return { integer };
		}
	}
}
})();
