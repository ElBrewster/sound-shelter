<script lang="ts">
  let categories = [
    "bedding",
    "cash",
    "clothing",
    "food",
    "medical",
    "other",
    "pet supplies",
    "toiletries",
  ];
  let selected: String;
  let name = "donor";
  let n = 1;
  let date: String;
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
  <button disabled={!selected} type="submit">submit</button>
</form>
