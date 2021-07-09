<script>
  import RSVP from "./RSVP.svelte";
  import RSVPNotComing from "./RSVPNotComing.svelte";
  import Card from "./Card.svelte";
  import Coming from "./Coming.svelte";
  import { qOne, qTwo, qThree, qFour, qOneAnswer } from "./store.js";

  let qOneAnswered;
  let qTwoAnswered;
  let qThreeAnswered;
  let qFourAnswered;
  let coming;

  qOne.subscribe((value) => {
    qOneAnswered = value;
  });
  qTwo.subscribe((value) => {
    qTwoAnswered = value;
  });
  qThree.subscribe((value) => {
    qThreeAnswered = value;
  });
  qFour.subscribe((value) => {
    qFourAnswered = value;
  });
  qOneAnswer.subscribe((value) => {
    coming = value;
  });
</script>

<main>
  {#if !qOneAnswered && !qTwoAnswered && !qThreeAnswered && !qFourAnswered}
    <Coming />
  {:else if qOneAnswered && !qTwoAnswered && !qThreeAnswered && !qFourAnswered}
    {#if coming}
      <RSVP />
    {:else}
      <RSVPNotComing />
    {/if}
  {:else if qOneAnswered && qTwoAnswered && !qThreeAnswered && !qFourAnswered}
    adult food choices
  {:else if qOneAnswered && qTwoAnswered && qThreeAnswered && !qFourAnswered}
    children food choices
  {:else if qOneAnswered && qTwoAnswered && qThreeAnswered && qFourAnswered}
    The End -- submit / store a cookie or some shit
  {/if}

  <Card />
</main>

<style>
  main {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>
