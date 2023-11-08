<script lang="ts">
  import {
    beddingCount,
    cashCount,
    clothingCount,
    foodCount,
    medicalCount,
    otherCount,
    petSuppliesCount,
    toiletriesCount,
  } from "$lib/svelte-stores/store.js";
  import DonationForm from "$lib/svelte-components/DonationForm.svelte";
  import DonorList from "$lib/svelte-components/DonorList.svelte";
  import InventoryForm from "$lib/svelte-components/InventoryForm.svelte";
  import InventoryTotals from "$lib/svelte-components/InventoryTotals.svelte";
  import ToolNav from "$lib/svelte-components/ToolNav.svelte";
  import RecentDistributions from "$lib/svelte-components/RecentDistributions.svelte";

  export let form;
  export let data;

  function setInventoryCount(category, total) {
    switch (category) {
      case "bedding":
        beddingCount.set(total);
        break;
      case "cash":
        cashCount.set(total);
        break;
      case "clothing":
        clothingCount.set(total);
        break;
      case "food":
        foodCount.set(total);
        break;
      case "medical":
        medicalCount.set(total);
        break;
      case "pet supplies":
        petSuppliesCount.set(total);
        break;
      case "toiletries":
        toiletriesCount.set(total);
      default:
        otherCount.set(total);
    }
  }
</script>

<div>
  <ToolNav />
  <div class="section">
    <div class="container" data-type="narrow">
      <DonationForm {form} {data} />
    </div>
  </div>

  <div class="section donor-list-container">
    <div class="container">
      <DonorList {data} />
    </div>
  </div>

  <div class="section">
    <div class="container" data-type="narrow">
      <InventoryForm {form} {data} />
    </div>
  </div>

  <div class="section inventory-totals-container">
    <div class="container even-columns" data-type="narrow">
      <InventoryTotals {data} />
      <RecentDistributions {data} />
    </div>
  </div>
</div>
