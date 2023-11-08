<script lang="ts">
  // Svelte component imports:
  import DonationForm from "$lib/svelte-components/DonationForm.svelte";
  import DonorList from "$lib/svelte-components/DonorList.svelte";
  import InventoryForm from "$lib/svelte-components/InventoryForm.svelte";
  import InventoryTotals from "$lib/svelte-components/InventoryTotals.svelte";
  import ToolNav from "$lib/svelte-components/ToolNav.svelte";
  import RecentDistributions from "$lib/svelte-components/RecentDistributions.svelte";
  // Svelte stores:
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

  export let form;
  export let data;

  let beddingTotal = 0;
  let cashTotal = 0;
  let clothingTotal = 0;
  let foodTotal = 0;
  let medicalTotal = 0;
  let otherTotal = 0;
  let petSuppliesTotal = 0;
  let toiletriesTotal = 0;

  const upDateStores = () => {
    getDatabaseInventoryTotals();
    getDatabaseDistributionTotals();
    setInventoryCount("bedding", beddingTotal);
    setInventoryCount("cash", cashTotal);
    setInventoryCount("clothing", clothingTotal);
    setInventoryCount("food", foodTotal);
    setInventoryCount("medical", medicalTotal);
    setInventoryCount("other", otherTotal);
    setInventoryCount("petSupplies", petSuppliesTotal);
    setInventoryCount("toiletries", toiletriesTotal);
  };

  upDateStores();

  function getDatabaseInventoryTotals() {
    data.donations.forEach((donation) => {
      if (donation.category === "bedding") {
        beddingTotal = beddingTotal += donation.amount;
      } else if (donation.category === "cash") {
        cashTotal = cashTotal += donation.amount;
      } else if (donation.category === "clothing") {
        clothingTotal = clothingTotal += donation.amount;
      } else if (donation.category === "food") {
        foodTotal = foodTotal += donation.amount;
      } else if (donation.category === "medical") {
        medicalTotal = medicalTotal += donation.amount;
      } else if (donation.category === "petSupplies") {
        petSuppliesTotal = petSuppliesTotal += donation.amount;
      } else if (donation.category === "toiletries") {
        toiletriesTotal = toiletriesTotal += donation.amount;
      } else {
        otherTotal = otherTotal += donation.amount;
      }
    });
  }

  function getDatabaseDistributionTotals() {
    data.distributions.forEach((distribution) => {
      if (distribution.category === "bedding") {
        beddingTotal = beddingTotal -= distribution.amount;
      } else if (distribution.category === "cash") {
        cashTotal = cashTotal -= distribution.amount;
      } else if (distribution.category === "clothing") {
        clothingTotal = clothingTotal -= distribution.amount;
      } else if (distribution.category === "food") {
        foodTotal = foodTotal -= distribution.amount;
      } else if (distribution.category === "medical") {
        medicalTotal = medicalTotal -= distribution.amount;
      } else if (distribution.category === "petSupplies") {
        petSuppliesTotal = petSuppliesTotal -= distribution.amount;
      } else if (distribution.category === "toiletries") {
        toiletriesTotal = toiletriesTotal -= distribution.amount;
      } else {
        otherTotal = otherTotal -= distribution.amount;
      }
    });
  }

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
