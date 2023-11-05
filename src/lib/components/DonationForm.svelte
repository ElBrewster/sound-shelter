<script>
  let categories = [
    "bedding",
    "cash",
    "clothing",
    "food",
    "medical",
    "pet supplies",
    "toiletries",
  ];
  let selected;
  let name = "donor";
  let n = 1;
  let anonymous = false;

  function handleSubmit() {
    if (!anonymous) {
      console.log(`You've added ${n} ${selected} from ${name}.`);
    } else {
      console.log(`You've added ${n} ${selected} from an anonymous donor.`);
    }
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
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
  <!-- donor input -->
  <input type="checkbox" bind:checked={anonymous} />
  <input type="text" bind:value={name} />
  <button disabled={!selected} type="submit">submit</button>
</form>
