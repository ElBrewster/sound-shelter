<script lang="ts">
//import donor name data for autocomplete of donor input field

  let categories = [
    "bedding",
    "cash",
    "clothing",
    "food",
    "medical",
    "other",
    "pet supplies",
    "toiletries"
  ];
  let selected;
  let name = "donor";
  let n = 1;
  let date;
  let email;
  let anonymous = false;

  function handleSubmit() {
    if (!anonymous) {
      console.log(`You've added ${n} ${selected} from ${name}.`);
    } else {
      name = "anonymous";
      console.log(`You've added ${n} ${selected} from an ${name} donor.`);
    }
  }
</script>

<form on:submit|preventDefault={handleSubmit} action="POST">
  <!-- select category -->
  <select bind:value={selected}>
    {#each categories as category}
      <option value={category}>{category}</option>
    {/each}
  </select>
  <!-- number input amount -->
  <label for="">
    <input type="number" bind:value={n} min="1" max="1000" />
    <input type="range" bind:value={n} min="1" max="1000" />
  </label>
  <!-- date feature -->
  <input
    type="date"
    bind:value={date}
    min="2017-04-01"
    max="2024-01-30"
    required
  />
  <!-- donor input -->
  <label for="">
    Check for anonymous donation
    <input type="checkbox" bind:checked={anonymous} />
  </label>
  <input type="text" bind:value={name} />
  <input type="email" bind:value={email} />
  <button disabled={!selected} type="submit">submit</button>
</form>
