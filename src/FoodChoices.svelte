<script>
  import { qTwoAnswerTwo, qThreeAnswer, qThree } from "./store.js";
  import Adult from "./Adults.svelte";

  let adults;
  qTwoAnswerTwo.subscribe((value) => {
    adults = value.food.Adults;
  });

  let q3Ans;
  qThreeAnswer.subscribe((value) => {
    q3Ans = value;
    console.log(value);
  });

  const saveAdultFood = () => {
    if (q3Ans.length == adults.length) {
      qThree.set(1);
    }
  };
</script>

<foodtainer>
  <form on:submit|preventDefault={saveAdultFood}>
    {#each adults as adult, i}
      <Adult person={i} />
    {/each}
    <button type="submit">Save Adult Food Choices</button>
  </form>
</foodtainer>

<style>
  foodtainer,
  form {
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
  form {
    overflow: hidden;
  }
  button {
    width: 100%;
  }
</style>
