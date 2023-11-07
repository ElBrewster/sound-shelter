<script lang="ts">
  import DonationForm from "$lib/components/DonationForm.svelte";
  import DonorList from "$lib/components/DonorList.svelte";
  import InventoryForm from "$lib/components/InventoryForm.svelte";
  import InventoryTotals from "$lib/components/InventoryTotals.svelte";
  import ToolNav from "$lib/components/ToolNav.svelte";

  export let form;
  export let data;
</script>

<div>
  <ToolNav />
  <div class="section">
    <div class="container">
      <DonationForm {form} {data} />
    </div>
  </div>

  <div class="section donor-list-container">
    <div class="container">
      <DonorList {data} />
    </div>
  </div>

  <div class="section">
    <div class="container">
      <InventoryForm {form} {data} />
    </div>
  </div>

  <div class="section inventory-totals-container">
    <div class="container even-columns flow">
      <InventoryTotals {data} />
      <div>
        <h2 class="heading-3">RECENT DISTRIBUTIONS</h2>
        {#each data.distributions as distribution}
          <div class="flex-group">
            <p>{distribution.category}</p>
            <p>{distribution.amount} units</p>
            <p>{distribution.date}</p>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
