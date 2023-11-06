<script lang="ts">
  import { enhance } from "$app/forms";

  //import donor name data for autocomplete of donor input field?

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
  let name = "donor";
  let amount = 1;
  let date;
  let email;
  let phone;
  let anonymous = false;

  function handleSubmit() {
    if (!anonymous) {
      console.log(`You've added ${amount} ${selected} from ${name}.`);
    } else {
      name = "anonymous";
      console.log(`You've added ${amount} ${selected} from an ${name} donor.`);
    }
  }
</script>

<form method="post" use:enhance={handleSubmit}>
  <label for="category">Pick a donation category:</label>
  <select name="category" id="category" bind:value={selected} required>
    {#each categories as category}
      <option value={category}>{category}</option>
    {/each}
  </select>

  <label for="amount"
    >How many?
    <input
      name="amount"
      id="amount"
      type="number"
      bind:value={amount}
      min="1"
      max="1000"
    />
    <input type="range" bind:value={amount} min="1" max="1000" />
  </label>

  <label for="date"
    >When was the donation made?
    <input
      name="date"
      id="date"
      type="date"
      bind:value={date}
      min="2017-04-01"
      max="2024-01-30"
      required
    />
  </label>

  <label for="anonymous">
    Check for anonymous donation
    <input
      name="anonymous"
      id="anonymous"
      type="checkbox"
      bind:checked={anonymous}
    />
  </label>

  <!-- need logic to remove name/email for anonymous donor:  -->
  <label for="donor"
    >donor name
    <input name="donor" id="donor" type="text" bind:value={name} />
  </label>

  <label for="email"
    >contact info:
    <input name="email" id="email" type="email" bind:value={email} />
  </label>
  <input name="phone" type="tel" bind:value={phone} />

  {#if form?.error}
    <div>
      {form.error}
    </div>
  {/if}

  <button disabled={!selected} type="submit">submit</button>
</form>

{#if form?.message}
  <div>{form.message}</div>
{/if}
<!-- <div>
  {#if email}
    <p>Name: {name}</p>
    <p>Email: {email}</p>
    <p>Date: {date}</p>
    <p>Category: {selected}</p>
    <p>Amount: {amount}</p>
  {/if}
</div> -->
