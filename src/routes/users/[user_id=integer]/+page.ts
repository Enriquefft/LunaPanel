import { redirect } from '@sveltejs/kit';
import type { PageLoad } from '../$types';

export const load: PageLoad = async ({ parent, params }) => {
	const { supabase, session } = await parent();
	if (!session) {
		throw redirect(303, '/login');
	}
	const user_id = params.user_id;

	const { data: eventsData, error } = await supabase
		.from('Events')
		.select('*')
		.eq('user_id', user_id);

	const { data: userData, error: _ } = await supabase
		.from('Users')
		.select('first_name, last_name, phone_number')
		.eq('id', user_id);

	const currentUser = userData[0];

	return {
		eventsData,
		user_id,
		currentUser
	};
};
// export const load: PageLoad = async ({ parent }) => {
// 	const { supabase, session } = await parent();
// 	if (!session) {
// 		throw redirect(303, '/login');
// 	}
// 	const { data: usersData, error } = await supabase.from('Users').select('*');
//
// 	return {
// 		usersData,
// 	};
//
// };
