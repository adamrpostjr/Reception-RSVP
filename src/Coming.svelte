<script>
  import { qOne, qOneAnswer } from "./store.js";

  // TODO:  Needs to be styled

  function imComing() {
    // person is coming 🥳
    qOneAnswer.set(1);
    qOne.set(1);
  }
  function cantMakeIt() {
    // person is not coming! 😥
    qOneAnswer.set(0);
    qOne.set(1);
  }
</script>

<rsvp>
  <span on:click={imComing}>I'm Coming!</span>
  <span on:click={cantMakeIt}>I Can't Make It</span>
</rsvp>

<style>
  rsvp {
    justify-content: space-around;
    display: flex;
    flex-direction: row;
    margin: 25px 150px;
    width: 100%;
    align-items: center;
  }
  span {
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    height: 10vh;
    width: 10vw;
    text-align: center;
  }

  @media only screen and (max-width: 1024px) {
    rsvp {
      margin: unset;
    }
    span {
      white-space: nowrap;
    }
  }

  @media only screen and (max-width: 768px) {
    rsvp {
      height: 100vh;
      order: 2;
    }
  }
</style>
