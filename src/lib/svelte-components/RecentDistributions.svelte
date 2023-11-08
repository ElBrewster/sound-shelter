<!-- recent inventory distributions report -->

<script>
  //could add logic to limit the length of this report to the last 10 logged inventory adjustments,
  //or perhaps adjusments in the last month/year
  export let data;
</script>

<div>
  <table>
    <thead>
      <tr>
        <th colspan="3" class="heading-3">RECENT DISTRIBUTIONS</th>
      </tr>
    </thead>
    <tbody>
      {#each data.distributions as distribution}
        <tr>
          <td>{distribution.category}</td>
          <td>{distribution.amount} units</td>
          <td>{distribution.date}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
