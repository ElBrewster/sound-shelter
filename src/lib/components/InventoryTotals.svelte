<!-- inventory report -->
<!-- current status of donations, grouped by type -->
<script>
  export let data;

  function displayTotals() {
    console.log("data.distributions: ", data.distributions);
    //need to add logic to keep track of running totals based on database, and recent form submissions.
    //don't want to display category repeats, so how to avoid that?
  }
</script>

<div id="donationList">
  <table>
    <thead>
      <tr>
        <th colspan="2" class="heading-3">INVENTORY STATUS</th>
      </tr>
    </thead>
    <tbody>
      {#each data.distributions as distribution}
        <tr>
          <td>{distribution.category}</td>
          <td>{distribution.amount} units</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
