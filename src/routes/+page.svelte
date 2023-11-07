<script lang="ts">
  import DonationForm from "$lib/components/DonationForm.svelte";

  export let form;
  export let data;
</script>

<div>
  <DonationForm {form} {data} />

  {#each data.feed as donor (donor.id)}
    <p>{donor.name}</p>
    <p>{donor.email}</p>
  {/each}
</div>
