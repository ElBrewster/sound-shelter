<script lang="ts">
  // import type { PageData } from "./$types";

  export let data;
</script>

<div>
  <h1>the Sound Community Shelter</h1>
  <p>donations management tool</p>
  <main>
    {#each data.feed as donor (donor.id)}
      <p>{donor.name}</p>
      <p>{donor.email}</p>
    {/each}
  </main>
</div>
