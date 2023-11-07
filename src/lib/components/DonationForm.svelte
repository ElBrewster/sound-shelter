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

<div class="form-container" id="newDonation">
  <h2 class="heading-2">Record Incoming Donation:</h2>

  <form class="donation-form" method="post" use:enhance={handleSubmit}>
    <div class="donation-form__input-container">
      <label for="category">donation category:</label>
      <select name="category" id="category" bind:value={selected} required>
        {#each categories as category}
          <option value={category}>{category}</option>
        {/each}
      </select>
    </div>
    <div class="donation-form__input-container">
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
    <div class="donation-form__input-container">
      <label for="amount">donation amount: </label>
      <input
        name="amount"
        id="amount"
        type="number"
        bind:value={amount}
        min="1"
        max="1000"
      />
      <input type="range" bind:value={amount} min="1" max="1000" />
    </div>
    <div class="donation-form__input-container">
      <label for="anonymous"> anonymous donation? </label>
      <input
        name="anonymous"
        id="anonymous"
        type="checkbox"
        bind:checked={anonymous}
      />
    </div>
    <div class="donation-form__input-container">
      <label for="donor">donor name: </label>
      <input name="donor" id="donor" type="text" bind:value={name} />
    </div>
    <!-- need logic to remove name/email for anonymous donor:  -->
    <div class="donation-form__input-container">
      <label for="email">donor contact email: </label>
      <input name="email" id="email" type="email" bind:value={email} />
    </div>
    <div class="donation-form__input-container">
      <label for="phone"> donor contact number: </label>
      <input name="phone" type="tel" bind:value={phone} />
    </div>

    {#if form?.error}
      <div>
        {form.error}
      </div>
    {/if}
    <div>
      <button
        class="button"
        disabled={!selected}
        type="submit"
        data-type="primary">submit</button
      >
    </div>
  </form>
</div>

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
