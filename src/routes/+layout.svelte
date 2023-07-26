<!-- src/routes/+layout.svelte -->
<script lang="ts">
  import { invalidate, goto } from '$app/navigation'
  import { onMount } from 'svelte'
  import NavBar from './NavBar.svelte'

  import { navigating } from '$app/stores'
  import Spinner from '$lib/design/Spinner.svelte'


  export let data

  let { supabase, session } = data
  $: ({ supabase, session } = data)

  onMount(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, _session) => {
      if (_session?.expires_at !== session?.expires_at) {
        invalidate('supabase:auth')
      }
      if (!_session || !_session.user) {
        goto('/login');
      }
    })

    return () => subscription.unsubscribe()
  });

  const handleLogOut = async () => {
    await supabase.auth.signOut()
  }

</script>

<!--head-->
<svelte:head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</svelte:head>

<NavBar on:logout={handleLogOut}/>

    {#if $navigating}
        <Spinner />
        <h1>Fetching...</h1>
    {:else}
      <slot />
    {/if}


<style>
</style>
