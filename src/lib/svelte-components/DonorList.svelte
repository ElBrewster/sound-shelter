<!-- donator report -->
<!-- total contributions from each donor -->
<script lang="ts">
  export let data;
</script>

<div class="" id="donorList">
  <h2 class="heading-3">DONATORS</h2>
  <div class="even-columns">
    {#each data.donors as donor (donor.id)}
      <div class="donor-card">
        <div class="donor-card__profile">
          <h3>{donor.name}</h3>
          <p>contact number: {donor.phone}</p>
          <p>email: {donor.email}</p>
        </div>

        <div class="donor-card__inner">
          {#each data.donations as donation (donation.id)}
            {#if donor.id === donation.donorId}
              <div class="flex-group donor-card__list-item">
                <p>{donation.amount}&nbsp;&nbsp;{donation.category}</p>
                <p>&mdash; {donation.date}</p>
              </div>
            {/if}
          {/each}
        </div>
      </div>
    {/each}
  </div>
</div>
