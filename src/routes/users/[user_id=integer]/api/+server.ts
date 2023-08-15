import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export async function POST({ request }: any) {
	const { newEvent } = await request.json();

	console.log('Calling backend POST');

	console.log('Posting: ', JSON.stringify(newEvent));

	const url = 'https://lwiho1keuc.execute-api.us-east-1.amazonaws.com/v1/createschedule';
	return fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(newEvent)
	});
}
