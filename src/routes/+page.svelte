<script lang="ts">
  import DonationForm from "$lib/components/DonationForm.svelte";
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

  {#each data.feed as donor (donor.id)}
    <p>{donor.name}</p>
    <p>{donor.email}</p>
  {/each}
</div>
