<script>
  import RSVP from "./RSVP.svelte";
  import RSVPNotComing from "./RSVPNotComing.svelte";
  import FoodChoices from "./FoodChoices.svelte";
  import Card from "./Card.svelte";
  import Coming from "./Coming.svelte";
  import FinalResults from "./FinalResults.svelte";
  import { qOne, qTwo, qThree, qFour, qOneAnswer } from "./store.js";

  import Alert from "./Alert.svelte";

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
  <Alert />
  {#if !qOneAnswered && !qTwoAnswered && !qThreeAnswered && !qFourAnswered}
    <Coming />
  {:else if qOneAnswered && !qTwoAnswered && !qThreeAnswered && !qFourAnswered}
    {#if coming}
      <RSVP />
    {:else}
      <RSVPNotComing />
    {/if}
  {:else if coming && qOneAnswered && qTwoAnswered && (!qThreeAnswered || !qFourAnswered)}
    <FoodChoices />
  {:else if (qOneAnswered && qTwoAnswered && qThreeAnswered && qFourAnswered) || (!coming && qOneAnswered && qTwoAnswered)}
    <FinalResults />
  {/if}

  <Card />
</main>

<style>
  main {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  @media only screen and (max-width: 768px) {
    main {
      flex-direction: column;
    }
  }
</style>
