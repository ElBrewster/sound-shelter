<script lang="ts">
  import DonationForm from "$lib/components/DonationForm.svelte";

  export let form;
  export let data;
</script>

<div>
  <h1>the Sound Community Shelter</h1>
  <p>donations management tool</p>

  <DonationForm {form} {data} />

  <main>
    {#each data.feed as donor (donor.id)}
      <p>{donor.name}</p>
      <p>{donor.email}</p>
    {/each}
  </main>
</div>
