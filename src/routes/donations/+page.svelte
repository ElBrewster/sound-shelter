<script lang="ts">
  // import type { PageData } from "./$types";

  export let data;
</script>

<div>
  {#each data.feed as donation}
    <p>{donation.amount}</p>
  {/each}
</div>
