<script lang="ts">

  export let data

  let { eventsData, supabase, user_id } = data
  $: ({ eventsData } = data)

  type Time = `${number}:${number}`

  type Event = {
    name: string | null,
    description: string,
    start: Time | null,
    end: Time | null,
    week_day: 1|2|3|4|5|6|7 | null,
  }
  
  const emptyEvent: Event  = {
    name: null,
    description: "",
    start: null,
    end: null,
    week_day: null,
  };
  let newEvent: Event = emptyEvent;

  const isValidTime = (time: string): boolean => {
    return  /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(time)
  }

  const getWeekDay = (day: number) => {
    switch (day) {
      case 1:
        return 'Monday'
      case 2:
        return 'Tuesday'
      case 3:
        return 'Wednesday'
      case 4:
        return 'Thursday'
      case 5:
        return 'Friday'
      case 6:
        return 'Saturday'
      case 7:
        return 'Sunday'
      default:
        return 'Unknown'
    }
  }


  const removeEvent = async (week_day: number, name: string,  id: number) => {

    if (!confirm(`Are you sure you want to delete event ${getWeekDay(week_day)} - ${name}?\nThis action cannot be undone`)){
      return;
    }
    
    const { error } = await supabase
    .from('Events')
    .delete()
    .eq('id', id)

    if (error) {
      alert(error.message);
    } else {
      alert('Event deleted successfully');
      location.reload();
    }

  }

  const addEvent = async () => {

    // Data validation
    // all inputs are required
    if (!newEvent.name || !newEvent.start || !newEvent.end || !newEvent.week_day) {
      alert('Please fill all fields')
      return
    }

    if (!isValidTime(newEvent.start) || !isValidTime(newEvent.end)) {
      alert('Invalid time')
      return
    }


    const { error } = await supabase
    .from('Events')
    .insert({
        user_id: user_id,
        name: newEvent.name,
        description: newEvent.description,
        start: newEvent.start,
        end: newEvent.end,
        week_day: newEvent.week_day,
       })

    if (error) {
      alert(error.message)
    } else {
      newEvent = emptyEvent;
      alert('Event created')
      location.reload() 
    }
    
  }

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
        <button on:click|once={() => removeEvent(event.week_day, event.name, event.id)}>
          <i class="fa fa-trash-o"></i>
        </button>

    </tr>


  {/each}

</table>
{/if}

  <h3>Add User:</h3>
  <form on:submit|preventDefault={addEvent}>

    <label for="name">Name:</label>
    <input
      bind:value={newEvent.name}
      id="name"
      type="text"
      placeholder="Eat"
      required
    />
    <br>

    <label for="description">Description:</label>
    <textarea id="description"
    bind:value={newEvent.description}></textarea>
    <br>

    <label for="start-time">Start:</label>
    <input
      bind:value={newEvent.start}
      id="start-time"
      type="time"
      required
    />

    <label for="end-time">End:</label>
    <input
      bind:value={newEvent.end}
      id="end-time"
      type="time"
      required
    />

    <!-- week day -->
    <label for="week-day">Week Day:</label>
    <select id="week-day" bind:value={newEvent.week_day}>
      <option value="" disabled selected>Select</option>
      <option value="1">Monday</option>
      <option value="2">Tuesday</option>
      <option value="3">Wednesday</option>
      <option value="4">Thursday</option>
      <option value="5">Friday</option>
      <option value="6">Saturday</option>
      <option value="7">Sunday</option>
    </select>

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
