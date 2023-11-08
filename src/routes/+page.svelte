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
  } from "$lib/components/stores/store.js";
  import DonationForm from "$lib/components/DonationForm.svelte";
  import DonorList from "$lib/components/DonorList.svelte";
  import InventoryForm from "$lib/components/InventoryForm.svelte";
  import InventoryTotals from "$lib/components/InventoryTotals.svelte";
  import ToolNav from "$lib/components/ToolNav.svelte";

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
      <div>
        <table>
          <thead>
            <tr>
              <th colspan="3" class="heading-3">RECENT DISTRIBUTIONS</th>
            </tr>
          </thead>
          <tbody>
            {#each data.distributions as distribution}
              <tr>
                <td>{distribution.category}</td>
                <td>{distribution.amount} units</td>
                <td>{distribution.date}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
