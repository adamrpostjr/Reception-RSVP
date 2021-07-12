<script>
  import { qTwoAnswerTwo } from "./store.js";
  import Adult from "./Adults.svelte";

  let adults;
  qTwoAnswerTwo.subscribe((value) => {
    adults = value.food.Adults;
    console.log(adults);
  });
</script>

<foodtainer>
  {#each adults as adult}
    <Adult />
  {/each}
</foodtainer>

<style>
  foodtainer {
    height: 100vh;
    width: 100%;
    padding: 25px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    overflow: scroll;
    box-sizing: border-box;
  }
</style>
