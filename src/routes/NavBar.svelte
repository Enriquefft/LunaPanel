<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  function handleLogOut() {
    dispatch('logout');
  }

</script>

<ul class="nav-bar">
	<li><a href="/">Home</a></li>
	<li><a href="/about">About</a></li>
	<li><a href="/users">Users</a></li>
	<li><a href="/chats">Chats</a></li>
	<div class="nav-bar-right">
		<li><button on:click={handleLogOut}>Logout</button></li>
	</div>
</ul>

<style>
	.nav-bar {
		list-style-type: none;
		overflow: hidden;
		background-color: #333333;
		position: sticky;
	}

	.nav-bar-right {
		float: right;
	}

	.nav-bar li {
		float: left;
	}
	.nav-bar li a {
		display: block;
		color: white;
		text-align: center;
		padding: 14px 16px;
		text-decoration: none;
	}
	.nav-bar li a:hover {
		background-color: #111111;
	}
</style>
