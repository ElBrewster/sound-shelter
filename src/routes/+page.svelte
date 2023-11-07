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
  <div class="section">
    <div class="container">
      <InventoryForm />
    </div>
  </div>
  <div class="section">
    <div class="container">
      <DonorList {data} />
    </div>
  </div>
  <div class="section">
    <div class="container">
      <InventoryTotals />
    </div>
  </div>
</div>
