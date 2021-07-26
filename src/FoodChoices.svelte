<script>
  import {
    qTwoAnswerTwo,
    qThreeAnswer,
    qThree,
    qFour,
    qFourAnswer,
  } from "./store.js";
  import Adult from "./Adults.svelte";
  import Child from "./Child.svelte";

  let adults;
  let children;
  let kidkount;
  qTwoAnswerTwo.subscribe((value) => {
    if (value) {
      adults = value.food.Adults;
      children = value.food.Children;
      kidkount = value.children;
    }
  });

  let q3Ans;
  qThreeAnswer.subscribe((value) => {
    q3Ans = value;
  });

  let q4Ans;
  qFourAnswer.subscribe((value) => {
    q4Ans = value;
  });

  let q3;
  qThree.subscribe((value) => {
    q3 = value;
  });

  let q4;
  qFour.subscribe((value) => {
    q4 = value;
  });

  const saveAdultFood = () => {
    if (q3Ans.length == adults.length) {
      qThree.set(1);
      if (kidkount == 0) {
        qFour.set(1);
      }
    }
  };

  const saveChildFood = () => {
    if (q4Ans.length == children.length) {
      qFour.set(1);
    }
  };
</script>

<foodtainer>
  {#if !q3 && !q4}
    <form on:submit|preventDefault={saveAdultFood}>
      {#each adults as adult, i}
        <Adult person={i} />
      {/each}
      <button type="submit">Save Adult Food Choices</button>
    </form>
  {/if}
  {#if q3 && !q4 && kidkount != 0}
    <form on:submit|preventDefault={saveChildFood}>
      {#each children as child, i}
        <Child person={i} />
      {/each}
      <button type="submit">Save Child Food Choices</button>
    </form>
  {/if}
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
    overflow-y: scroll;
    overflow-x: hidden;
    box-sizing: border-box;
  }
  form {
    overflow: hidden;
    display: contents;
  }
  button {
    width: 100%;
  }
  @media only screen and (max-width: 768px) {
    foodtainer {
      order: 2;
      height: 100vh;
    }
  }
  @media only screen and (max-width: 500px) {
    foodtainer {
      padding-top: 50px;
    }
  }
</style>
