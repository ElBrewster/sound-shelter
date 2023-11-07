<!-- donation distribution -->
<script lang="ts">
  import { enhance } from "$app/forms";

  export let data;
  export let form;

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
  let total = 1;
  let date;
  function handleSubmit() {
    console.log(`We used ${total} ${selected} on ${date}.`);
  }
</script>

<div class="form-container flow" id="inventory">
  <h2 class="heading-2">Record Donation Distribution:</h2>
  <form
    class="inventory-form"
    method="post"
    use:enhance={handleSubmit}
    action="?/inventoryAdjust"
  >
    <div class="inventory-form__input-container">
      <label for="category">donation category:</label>
      <select name="category" id="category" bind:value={selected} required>
        {#each categories as category}
          <option value={category}>{category}</option>
        {/each}
      </select>
    </div>
    <div class="inventory-form__input-container">
      <label for="date">donation date: </label>
      <input
        name="date"
        id="date"
        type="date"
        bind:value={date}
        min="2017-04-01"
        max="2024-01-30"
        required
      />
    </div>
    <div class="inventory-form__input-container">
      <label for="total">donation total: </label>
      <input type="range" bind:value={total} min="1" max="1000" />
      <input
        name="total"
        id="total"
        type="number"
        bind:value={total}
        min="1"
        max="1000"
      />
    </div>
    <div class="padding-inline-4">
      <button
        class="button"
        disabled={!selected}
        type="submit"
        data-type="primary">submit</button
      >
    </div>
  </form>
</div>

{#if form?.success}
  <p>Thanks for keeping track of our stuff!</p>
  <p>Successfully adjusted ${selected} totals to ${total}</p>
{/if}
