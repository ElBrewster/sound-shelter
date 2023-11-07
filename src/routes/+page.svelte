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
        <h2 class="heading-3 padding-block-end-4">RECENT DISTRIBUTIONS</h2>
        <div class="flow">
          {#each data.distributions as distribution}
            <div class="flex-group">
              <p>{distribution.category}</p>
              <p>{distribution.amount} units</p>
              <p>{distribution.date}</p>
            </div>
            <hr />
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>
