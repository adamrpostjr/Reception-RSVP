<script>
  import axios from "axios";

  import {
    qOneAnswer,
    qTwoAnswerOne,
    qTwoAnswerTwo,
    qThreeAnswer,
    qFourAnswer,
    qOne,
    qTwo,
    qThree,
    qFour,
    Alerts,
  } from "./store";

  let info, adultFood, childFood;
  var alert;
  var processing;
  Alerts.subscribe((value) => {
    alert = value;
  });

  qTwoAnswerTwo.subscribe((value) => {
    info = value;
    console.log(value);
  });
  qThreeAnswer.subscribe((value) => {
    adultFood = value;
  });
  qFourAnswer.subscribe((value) => {
    childFood = value;
  });

  const rsvp = () => {
    processing = 1;
    axios
      .post("/RSVP", {
        coming: "yes",
        contactinfo: info,
        adultFood: adultFood,
        childFood: childFood,
      })
      .then((response) => {
        let intThisAlert = alert;
        intThisAlert.push({ message: "Thank You!!", code: 1 });
        Alerts.set(intThisAlert);
        setTimeout(() => {
          startFresh();
          document.body.scrollTo(0, 0);
          location.reload();
        }, 3000);
      })
      .catch((error) => {
        let intThisAlert = alert;
        intThisAlert.push({ message: "Woops, try again shortly", code: 3 });
        Alerts.set(intThisAlert);
      });
  };

  const startFresh = () => {
    // clear all content from the store
    // we need to either clear all results or show populated results
    // qOne.set(0);
    // qOneAnswer.set(0);

    qTwo.set(0);
    qTwoAnswerOne.set(0);
    qTwoAnswerTwo.set(0);

    qThree.set(0);
    qThreeAnswer.set([]);

    qFour.set(0);
    qFourAnswer.set([]);
  };
</script>

<main>
  <h2>How Does This Information Look?</h2>
  <div>
    <h2>Contact Information</h2>
    <p>Contact Name: {info.name}</p>
    <p>Contact Email: {info.email}</p>
    <p>Contact Phone: {info.phone}</p>
  </div>
  <container>
    <h2>Adults</h2>
    {#each adultFood as adult}
      <div class="each">
        <p>Name:<br /> {adult.name}</p>
        <p>Food:<br /> {adult.food}</p>
      </div>
    {/each}
  </container>
  {#if childFood.length}
    <container>
      <h2>Children</h2>
      {#each childFood as child}
        <div class="each">
          <p>Name:<br /> {child.name}</p>
          <p>Food:<br /> {child.food}</p>
        </div>
      {/each}
    </container>
  {/if}
  {#if !processing}
    <span>
      <button on:click={startFresh}>Start Over</button>
      <button on:click={rsvp}>RSVP</button>
    </span>
  {/if}
</main>

<style>
  h2 {
    flex: 1 0 100%;
    text-align: center;
  }
  .each {
    flex: 1 0 31%;
    text-align: center;
  }
  main {
    overflow-y: auto;
    overflow-x: hidden;
    display: block;
    height: 100vh;
    box-sizing: border-box;
    width: 100%;
  }
  container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
  span {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  span > button {
    width: 150px;
    height: 45px;
    border: unset;
    border-radius: 5px;
  }
  @media only screen and (max-width: 768px) {
    main {
      order: 2;
      height: 100vh;
    }
  }
</style>
