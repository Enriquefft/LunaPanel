import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent }) => {
	const { supabase, session } = await parent();
	if (!session) {
		throw redirect(303, '/login');
	}
	const { data: usersData, error } = await supabase.from('Users').select('*');

	return {
		usersData,
	};

};
