<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import DonationForm from "$lib/components/DonationForm.svelte";

  export let form;
  export let data;
</script>

<div>
  <Header />

  <DonationForm {form} {data} />

  <main>
    {#each data.feed as donor (donor.id)}
      <p>{donor.name}</p>
      <p>{donor.email}</p>
    {/each}
  </main>

  <Footer />
</div>
