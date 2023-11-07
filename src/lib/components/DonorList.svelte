<!-- donator report -->
<!-- total contributions from each donor -->
<script lang="ts">
  export let data;
</script>

<div class="donor-list-container" id="donorList">
  <p>donators</p>
  {#each data.feed as donor (donor.id)}
    <p>{donor.name}</p>
    <p>{donor.email}</p>
  {/each}
</div>
