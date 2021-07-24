<script>
  import { qFourAnswer, qTwoAnswerTwo } from "./store.js";
  import axios from "axios";

  export let person;

  let children;
  let numberOfChildren;
  qTwoAnswerTwo.subscribe((value) => {
    if (value) {
      children = value.food.Children;
      numberOfChildren = children.length;
    }
  });

  let childChoices;
  qFourAnswer.subscribe((value) => {
    childChoices = value;
  });

  let Name;
  let FoodChoice;

  const updateThisChild = () => {
    if (Name && FoodChoice != 0) {
      if ((!childChoices || childChoices.length == 0) && person > 0) {
        let placeholderArray = [];
        placeholderArray.length = numberOfChildren;
        qFourAnswer.set(placeholderArray);
      }
      childChoices.splice(person, 1, {
        name: Name,
        food: FoodChoice,
      });
      qFourAnswer.set(childChoices);
    }
  };
</script>

<foodSelection>
  <input
    type="text"
    placeholder="Name"
    on:blur={updateThisChild}
    bind:value={Name}
  />
  <select name="FoodChoice" on:blur={updateThisChild} bind:value={FoodChoice}>
    <option value="0" disabled selected>Choose your meal</option>
    <option value="Chicken Fingers and Steak Fries"
      >Chicken Fingers and Steak Fries</option
    >
    <option value="Grilled Cheese and Steak Fries"
      >Grilled Cheese and Steak Fries</option
    >
    <option value="Pasta w/ Marinara">Pasta w/ Marinara</option>
    <option value="Pasta w/ Butter">Pasta w/ Butter</option>
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
  @media only screen and (max-width: 1024px) {
    foodSelection {
      flex: 1 0 auto;
      background: #d1d1d1;
      color: black;
      padding: 25px;
      margin: 15px;
      width: 50%;
    }
  }
</style>
