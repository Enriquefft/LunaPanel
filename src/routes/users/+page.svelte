<script lang="ts">

  export let data

  let { usersData, supabase } = data
  $: ({ usersData } = data)

  type User = {
    first_name: string | null,
    last_name: string | null,
    phone: string | null
  }
  
  const emptyUser: User  = {
    first_name: null,
    last_name: null,
    phone: null
  };
  let newUser: User = emptyUser;


  const removeUser = async (first_name: string, id: number) => {

    if (!confirm(`Are you sure you want to delete user ${first_name}?\nThis action cannot be undone`)){
      return;
    }
    
    const { error } = await supabase
    .from('Users')
    .delete()
    .eq('id', id)

    if (error) {
      alert(error.message);
    } else {
      alert('User deleted successfully');
      location.reload();
    }

  }

  const addUser = async () => {

    // Data validation
    if (!newUser.first_name || !newUser.last_name || !newUser.phone) {
      alert('Please fill all fields')
      return
    }
    if (newUser.phone.length !== 9) {
      alert('Phone must have 9 numbers')
      return
    }
    if (isNaN(Number(newUser.phone))) {
      alert('Phone must be a number')
      return
    }

    const { error } = await supabase
    .from('Users')
    .insert({
        first_name: newUser.first_name,
        last_name: newUser.last_name,
        phone_number: newUser.phone
       })

    if (error) {
      alert(error.message)
    } else {
      newUser = emptyUser;
      alert('User created')
      location.reload() 
    }
    
  }

</script>


<h1>Users:</h1>

{#if usersData && usersData.length > 0}
<table>

  <tr>
    {#each Object.keys(usersData[0]) as key}
      <th>{key}</th>
    {/each}
  </tr>

  {#each usersData as user}
    <tr>
      {#each Object.values(user) as value}
        <td>{value}</td>
      {/each}

      <!-- Buttons -->

        <!--delete-->
        <button on:click|once={(event) => removeUser(user.first_name, user.id)}>
          <i class="fa fa-trash-o"></i>
        </button>

        <!--edit-->
        <button on:click={() => {
          window.location.href = `/users/${user.id}`
        }}>Events</button>

    </tr>


  {/each}

</table>
{/if}

  <h3>Add User:</h3>
  <form on:submit|preventDefault={addUser}>

    <label for="first-name">First Name:</label>
    <input
      bind:value={newUser.first_name}
      id="first-name"
      type="text"
      placeholder="Jhon"
      required
    />
    <br>

    <label for="last-name">Last Name:</label>
    <input
      bind:value={newUser.last_name}
      id="last-name"
      type="text"
      placeholder="Doe"
      required
    />
    <br>

    <label for="phone">Phone:</label>
    <input
      bind:value={newUser.phone}
      id="phone"
      type="telfe"
      placeholder="987654321"
      minlength="9"
      maxlength="9"
      pattern="[0-9]{'{9}'}"
      title="9 numbers without spaces"
      required
    />
    <br>

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
    background-color: #4CAF50;
    color: white;
  }

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }


</style>
