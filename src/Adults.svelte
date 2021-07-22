<script>
  import { qThreeAnswer, qTwoAnswerTwo } from "./store.js";
  import axios from "axios";

  export let person;
  // form question 2
  let adults;
  let numberOfAdults;
  qTwoAnswerTwo.subscribe((value) => {
    if (value) {
      adults = value.food.Adults;
      numberOfAdults = adults.length;
    }
  });
  // question 3 - adult food choices
  let adultChoices;
  qThreeAnswer.subscribe((value) => {
    adultChoices = value;
  });

  let Name;
  let FoodChoice;

  const updateThisAdult = () => {
    if (Name && FoodChoice != 0) {
      if ((!adultChoices || adultChoices.length == 0) && person > 0) {
        let placeholderArray = [];
        placeholderArray.length = numberOfAdults;
        qThreeAnswer.set(placeholderArray);
      }
      adultChoices.splice(person, 1, {
        name: Name,
        food: FoodChoice,
      });
      qThreeAnswer.set(adultChoices);
    }
  };
</script>

<foodSelection>
  <input
    type="text"
    placeholder="Name"
    on:blur={updateThisAdult}
    bind:value={Name}
    required
  />
  <select
    name="FoodChoice"
    on:blur={updateThisAdult}
    bind:value={FoodChoice}
    required
  >
    <option value="0" disabled selected>Choose your meal</option>
    <option value="Top Round of Beef">Top Round of Beef</option>
    <option value="Salmon">Salmon</option>
  </select>
  <div>
    <header>
      Sides <span>Included</span>
    </header>
    <row>
      <span>Tossed Salad</span>
      <span>Dinner Rolls</span>
    </row>
    <row>
      <span>Red Roasted Potatoes</span>
      <span>Honey Glazed Carrots</span>
    </row>
  </div>
  <div>
    <header>
      Drinks <span>Included</span>
    </header>
    <row>
      <span>Coffee</span>
      <span>Water</span>
    </row>
    <row>
      <span>Iced Tea</span>
      <span>Hot Tea</span>
    </row>
    <row>
      <span>Punch Bowl</span>
    </row>
  </div>
  <div>
    <header>
      Desserts <span>Included</span>
    </header>
    <row>
      <span>Dessert Table</span>
      <span>Chocolate Fountain</span>
    </row>
  </div>
</foodSelection>

<style>
  div {
    padding: 14px 0;
  }
  foodSelection {
    flex: 1 0 31%;
    background: #d1d1d1;
    color: black;
    padding: 25px;
    margin: 15px;
    width: 50%;
  }
  input,
  select {
    width: 100%;
  }
  header {
    text-align: center;
    font-weight: bolder;
    text-transform: uppercase;
    position: relative;
  }
  header > span {
    color: #5f4b6c;
    font-size: 9px;
    position: absolute;
    margin-left: 13px;
  }
  row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  row > span:first-of-type {
    float: left;
    width: 100%;
  }
  row > span:last-of-type {
    float: right;
    width: 100%;
  }
</style>
