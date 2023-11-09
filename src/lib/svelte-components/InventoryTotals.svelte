<!-- inventory report -->
<!-- current status of donations, grouped by type -->
<script>
  import { browser } from "$app/environment";
  import {
    beddingCount,
    cashCount,
    clothingCount,
    foodCount,
    medicalCount,
    otherCount,
    petSuppliesCount,
    toiletriesCount,
  } from "../svelte-stores/store";

  export let data;

  function displayTotals() {
    console.log("data.distributions: ", data.distributions);
    //need to add logic to keep track of running totals based on database, and recent form submissions.
  }
</script>

<div id="donationList">
  <table>
    <thead>
      <tr>
        <th colspan="2" class="heading-3">INVENTORY STATUS</th>
      </tr>
    </thead>
    <!-- {#if !browser} -->
    <tbody>
      <tr>
        <td>bedding</td>
        <td>{$beddingCount} units</td>
      </tr>
      <tr>
        <td>cash</td>
        <td>{$cashCount} units</td>
      </tr>
      <tr>
        <td>clothing</td>
        <td>{$clothingCount} units</td>
      </tr>
      <tr>
        <td>food</td>
        <td>{$foodCount} units</td>
      </tr>
      <tr>
        <td>medical</td>
        <td>{$medicalCount} units</td>
      </tr>
      <tr>
        <td>other</td>
        <td>{$otherCount} units</td>
      </tr>
      <tr>
        <td>pet supplies</td>
        <td>{$petSuppliesCount} units</td>
      </tr>
      <tr>
        <td>toiletries</td>
        <td>{$toiletriesCount} units</td>
      </tr>
    </tbody>
    <!-- {/if} -->
  </table>
</div>
