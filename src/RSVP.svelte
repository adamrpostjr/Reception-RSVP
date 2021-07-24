<script>
  import * as axios from "axios";

  import { qTwoAnswerTwo, qTwo, Alerts } from "./store.js";
  var alert;
  Alerts.subscribe((value) => {
    alert = value;
  });

  var name, email, phone, notes;
  let phoneField, totalAttending;

  let attending = 0,
    adults = 0,
    children = 0;

  var mask = (e) => {
    var x = e.target.value
      .replace(/\D/g, "")
      .match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    e.target.value = !x[2]
      ? x[1]
      : "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "");
  };

  var numberLogic = () => {
    if (attending < adults + children) {
      if (children > 0) {
        if (children >= attending) {
          children = attending - 1;
          adults = 1;
        } else {
          adults = attending - children;
        }
      } else {
        adults = attending;
      }
    }

    if (attending == 1 && adults == 0 && children == 0) {
      adults = attending;
    }
  };

  let saveInformation = () => {
    if (
      name &&
      email &&
      phone &&
      phone.length >= 10 &&
      attending > 0 &&
      adults + children == attending
    ) {
      var adultsComing = [];
      var childrenComing = [];

      let adult = { Name: "", Food: "" };
      let child = { Name: "", Food: "" };

      for (let a = 0; a < adults; a++) {
        // for each adult we need to append an object to the array
        adultsComing.push(adult);
      }
      for (let c = 0; c < children; c++) {
        // for each child we need to append an object to the array
        childrenComing.push(child);
      }

      qTwoAnswerTwo.set({
        name: name,
        email: email,
        phone: phone,
        attending: attending,
        adults: adults,
        children: children,
        food: {
          Adults: adultsComing,
          Children: childrenComing,
        },
        notes: notes,
      });
      qTwo.set(1);
    } else if (phone.length < 10) {
      console.log(phone.length);
      // alert this some how...
      let intThisAlert = alert;
      intThisAlert.push({ message: "Phone Number Seems A Bit Off", code: 3 });
      Alerts.set(intThisAlert);
    } else if (adults + children != attending) {
      let intThisAlert = alert;
      intThisAlert.push({ message: "You Person Count Is A Bit Off", code: 3 });
      Alerts.set(intThisAlert);

      console.log(adults, children, attending);
      console.log(adults + children === attending);
      // alert this some how....
    } else {
      console.log({
        name: name,
        email: email,
        phone: phone,
        attending: attending,
        adults: adults,
        children: children,
        food: {
          Adults: adultsComing,
          Children: childrenComing,
        },
        notes: notes,
      });
    }
  };
</script>

<form on:submit|preventDefault={saveInformation} action="/RSVP" method="POST">
  <label for="Name">Name *</label>
  <input bind:value={name} type="text" name="Name" required />
  <label for="Email">Email *</label>
  <input bind:value={email} type="email" name="Email" required />
  <label for="Phone">Phone Number *</label>
  <input
    type="tel"
    name="Phone"
    on:blur={mask}
    bind:value={phone}
    bind:this={phoneField}
    placeholder="(555) 555-5555"
    required
  />

  <label for="PeopleAttending">How many attending? *</label>
  <input
    type="number"
    name="PeopleAttending"
    bind:value={attending}
    bind:this={totalAttending}
    on:blur={numberLogic}
    min="1"
    max="10"
    required
  />
  <!-- logic depending on the number above -->
  {#if attending > 1}
    <row>
      <left>
        <label for="Adults">Of the {attending} how many are adults? *</label>
        <input
          type="number"
          bind:value={adults}
          on:blur={numberLogic}
          name="Adults"
          min="1"
          max={attending - children}
          required
        />
      </left>
      <right>
        <label for="Children"
          >Of the {adults ? attending - adults : 0} how many are children? *</label
        >
        <input
          type="number"
          bind:value={children}
          name="Children"
          min="0"
          on:blur={numberLogic}
          max={attending - adults}
          required
        />
      </right>
    </row>
  {/if}
  <label for="notes">Other Notes</label>
  <textarea bind:value={notes} name="notes" cols="30" rows="4" />
  <button type="submit">Choose Your Meal!</button>
</form>

<style>
  label {
    font-weight: bolder;
    font-size: large;
  }
  form {
    width: 100%;
    justify-content: flex-start;
    display: flex;
    flex-direction: column;
    margin: 25px 150px;
  }
  textarea {
    resize: none;
  }
  row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  left {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-right: 5px;
    box-sizing: border-box;
  }
  right {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 5px;
    box-sizing: border-box;
  }
  @media only screen and (max-width: 1024px) {
    form {
      width: 100%;
      justify-content: flex-start;
      display: flex;
      flex-direction: column;
      margin: unset;
      box-sizing: border-box;
      padding: 30px;
    }
  }

  @media only screen and (max-width: 768px) {
    form {
      order: 2;
      height: 100vh;
    }
  }
</style>
