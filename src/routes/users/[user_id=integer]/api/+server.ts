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
	})
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			if (data.statusCode === 200) {
				console.log('Event created successfully!');
				return new Response(JSON.stringify({ status: 200, body: data.body }));
			} else {
				console.log('Error creating event!');
				return new Response(JSON.stringify({ status: 500, body: data.errorMessage }));
			}
		})
		.catch((error) => {
			console.error('Error:', error);
			return new Response(JSON.stringify({ status: 500, body: error }));
		});
}
