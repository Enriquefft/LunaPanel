<script lang="ts">
	export let data;
	let { supabase } = data;
	$: ({ supabase } = data);

	let email: string;
	let password: string;

	const handleSignIn = async () => {
		const { error } = await supabase.auth.signInWithPassword({
			email,
			password
		});

		alert(error?.message || 'Success!');
		location.reload();
	};
</script>

<form on:submit={handleSignIn}>
	<input name="email" bind:value={email} />
	<input type="password" name="password" bind:value={password} />
	<button>Log In</button>
</form>
