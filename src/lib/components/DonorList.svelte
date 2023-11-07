<!-- donator report -->
<!-- total contributions from each donor -->
<script lang="ts">
  export let data;
</script>

<div id="donorList">
  <h2 class="heading-3">DONATORS</h2>
  {#each data.donors as donor (donor.id)}
    <p>{donor.name}</p>
    <p>{donor.email}</p>
  {/each}
</div>
