<script lang="ts">
	export let data;

	let { eventsData, supabase, user_id, currentUser } = data;
	$: ({ eventsData } = data);

	type Time = `${number}:${number}`;

	type WeekDay = 1 | 2 | 3 | 4 | 5 | 6 | 7;
	const week_days: readonly WeekDay[] = [1, 2, 3, 4, 5, 6, 7] as const;

	type Category = 'sleep' | 'class' | 'study';
	const categories: readonly Category[] = ['sleep', 'class', 'study'] as const;

	type Event = {
		category: Category | null;
		name: string | null;
		description: string;
		startTime: Time | null;
		endTime: Time | null;
		weekDays: WeekDay[];
		readonly userName: string;
		readonly userPhone: string;
	};

	const emptyEvent: Event = {
		category: 'sleep',
		name: 'enrique',
		description: 'test',
		startTime: '12:00',
		endTime: '13:05',
		weekDays: [1],
		userName: currentUser.last_name,
		userPhone: '51' + currentUser.phone_number
	};
	let newEvent: Event = emptyEvent;

	const isValidTime = (time: string): boolean => {
		return /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(time);
	};

	const getWeekDay = (day: WeekDay) => {
		switch (day) {
			case 1:
				return 'Monday';
			case 2:
				return 'Tuesday';
			case 3:
				return 'Wednesday';
			case 4:
				return 'Thursday';
			case 5:
				return 'Friday';
			case 6:
				return 'Saturday';
			case 7:
				return 'Sunday';
		}
	};

	// const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });
	const removeEvent = async (Name: string, id: number) => {
		if (!confirm(`Are you sure you want to delete event ${Name}?\nThis action cannot be undone`)) {
			return;
		}

		const { error } = await supabase.from('Events').delete().eq('id', id);

		if (error) {
			alert(error.message);
		} else {
			alert('Event deleted successfully');
			location.reload();
		}
	};

	const addEvent = async () => {
		// Data validation
		// all inputs are required

		console.log('newEvent', newEvent);

		if (
			!newEvent.name ||
			!newEvent.startTime ||
			!newEvent.endTime ||
			newEvent.weekDays.length === 0
		) {
			alert('Please fill all fields');
			return;
		}

		if (!isValidTime(newEvent.startTime) || !isValidTime(newEvent.endTime)) {
			alert('Invalid time');
			return;
		}

		const { error } = await supabase.from('Events').insert({
			user_id: user_id,
			name: newEvent.name,
			description: newEvent.description,
			start: newEvent.startTime,
			end: newEvent.endTime,
			week_days: newEvent.weekDays
		});

		if (error) {
			alert(error.message);
			return;
		}

		fetch(`/users/${user_id}/api`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ newEvent, user_id })
		})
			.then((res) => {
				console.log('loc_res', res);
				return res.json();
			})
			.then((data) => {
				if (data.statusCode == '200') {
					newEvent = emptyEvent;
					location.reload();
				}
				throw new Error(data.message);
			})
			.catch((err) => {
				alert(err.message);
			});
	};
</script>

<h1>Events:</h1>

{#if eventsData && eventsData.length > 0}
	<table>
		<tr>
			{#each Object.keys(eventsData[0]) as key}
				<th>{key}</th>
			{/each}
		</tr>

		{#each eventsData as event}
			<tr>
				{#each Object.values(event) as value}
					<td>{value}</td>
				{/each}

				<!-- Buttons -->

				<!--delete-->
				<button on:click|once={() => removeEvent(event.name, event.id)}>
					<i class="fa fa-trash-o" />
				</button>
			</tr>
		{/each}
	</table>
{/if}

<h3>Add User:</h3>
<form on:submit|preventDefault={addEvent}>
	<!-- <input bind:value={newEvent.category} id="category" type="text" placeholder="Eat" required /> -->
	<!-- <label for="category">Category:</label> -->
	<!-- <select id="category" bind:value={newEvent.category}> -->
	<!-- 	<option value="" disabled selected>Select</option> -->
	<!-- 	<option value="sleep">Sleep</option> -->
	<!-- 	<option value="wakeUp">Wake Up</option> -->
	<!-- 	<option value="sleep">Class</option> -->
	<!-- 	<option value="study">Study</option> -->
	<!-- </select> -->
	{#each categories as category}
		<label>
			<input type="radio" Name="category" value={category} bind:group={newEvent.category} />
			{category}
		</label>
	{/each}
	<br />

	<label for="Name">Name:</label>
	<input bind:value={newEvent.name} id="Name" type="text" placeholder="Eat" required />
	<br />

	<label for="Description">Description:</label>
	<textarea id="Description" bind:value={newEvent.description} />
	<br />

	<label for="StartTime-time">StartTime:</label>
	<input bind:value={newEvent.startTime} id="StartTime-time" type="time" required />

	<label for="EndTime-time">EndTime:</label>
	<input bind:value={newEvent.endTime} id="EndTime-time" type="time" required />

	<br />

	{#each week_days as week_day}
		<label>
			<input type="checkbox" Name="week-days" value={week_day} bind:group={newEvent.weekDays} />
			{getWeekDay(week_day)}
		</label>
	{/each}
	<br />

	<button type="submit">Create</button>
</form>

<style>
	table {
		border-collapse: collapse;
		width: 100%;
	}

	th {
		padding-top: 12px;
		padding-bottom: 12px;
		text-align: left;
		background-color: #4caf50;
		color: white;
	}

	th,
	td {
		border: 1px solid #ddd;
		padding: 8px;
	}

	tr:nth-child(even) {
		background-color: #f2f2f2;
	}
</style>
