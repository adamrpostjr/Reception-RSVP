<script>
  import { qTwoAnswerTwo } from "./store.js";
  import Person from "./People.svelte";

  let adults;
  let choices = []; // an array of objects of people food choices ie {name: Adam, food: pizza, drink: ☕}
  qTwoAnswerTwo.subscribe((value) => {
    adults = value.adults;
    choices.length = adults;
  });
</script>

<foodtainer>
  {#each choices as choice}
    <Person />
  {/each}
</foodtainer>

<style>
</style>
