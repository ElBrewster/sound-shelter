<!-- donation registration -->
<script lang="ts">
  import { enhance } from "$app/forms";
  import { get } from "svelte/store";
  import {
    beddingCount,
    cashCount,
    clothingCount,
    foodCount,
    medicalCount,
    otherCount,
    petSuppliesCount,
    toiletriesCount,
  } from "../svelte-stores/store";
  //wishlist: import donor name data for autocomplete of donor input field?

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
  let name = "Leona";
  let total = 1;
  let date;
  let email = "leona.s.stevents@comcast.net";
  let phone = "303-777-8888";
  let anonymous = false;

  function updateInventoryCount(category, num) {
    console.log("update inventory count with donation: ", category, num);
    switch (category) {
      case "bedding":
        beddingCount.update((n) => (n = n + num));
        console.log("beddingCount: ", get(beddingCount));
        break;
      case "cash":
        cashCount.update((n) => n + num);
        console.log("cashCount: ", get(cashCount));
        break;
      case "clothing":
        clothingCount.update((n) => n + num);
        console.log("clothingCount: ", get(clothingCount));
        break;
      case "food":
        foodCount.update((n) => n + num);
        console.log("foodCount: ", get(foodCount));
        break;
      case "medical":
        medicalCount.update((n) => n + num);
        console.log("medicalCount: ", get(medicalCount));
        break;
      case "pet supplies":
        petSuppliesCount.update((n) => n + num);
        console.log("petSuppliesCount: ", get(petSuppliesCount));
        break;
      case "toiletries":
        toiletriesCount.update((n) => n + num);
        console.log("toiletriesCount: ", get(toiletriesCount));
      default:
        otherCount.update((n) => n + num);
        console.log("otherCount: ", get(otherCount));
    }
  }

  function handleSubmit() {
    if (!anonymous) {
      console.log(`You've added ${total} ${selected} from ${name}.`);
      updateInventoryCount(selected, total);
    } else {
      name = "anonymous";
      console.log(`You've added ${total} ${selected} from an ${name} donor.`);
      updateInventoryCount(selected, total);
    }
  }
</script>

<div class="form-container flow" id="newDonation">
  <h2 class="heading-2">Record Incoming Donation:</h2>

  <form
    class="donation-form"
    method="post"
    use:enhance={handleSubmit}
    action="?/donationCreate"
  >
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
    <div class="donation-form__input-container">
      <label for="anonymous"> anonymous donation? </label>
      <input
        class="checkbox"
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

{#if form?.message}
  <div>{form.message}</div>
{/if}
<!-- <div>
  {#if email}
    <p>Name: {name}</p>
    <p>Email: {email}</p>
    <p>Date: {date}</p>
    <p>Category: {selected}</p>
    <p>total: {total}</p>
  {/if}
</div> -->
