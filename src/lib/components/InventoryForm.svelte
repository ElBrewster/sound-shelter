<!-- donation distribution -->
<script lang="ts">
  let categories = [
    "",
    "bedding",
    "cash",
    "clothing",
    "food",
    "medical",
    "other",
    "pet supplies",
    "toiletries",
  ];
  let selected;
</script>

<div class="form-container" id="inventory">
  <h2 class="heading-2">Record Donation Distribution:</h2>
  <form class="inventory-form" method="post" use:enhance={handleSubmit}>
    <label for="category">donation category:</label>
    <select name="category" id="category" bind:value={selected} required>
      {#each categories as category}
        <option value={category}>{category}</option>
      {/each}
    </select>
  </form>
</div>
