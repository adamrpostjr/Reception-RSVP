<script>
  import * as axios from "axios";

  import { qOneAnswer } from "./store.js";
  let coming;
  qOneAnswer.subscribe((value) => {
    coming = value;
  });

  var name, email, phone, notes;

  var attending = 0,
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

  // TODO: This needs to save the information then move to the next step of choosing food

  var saveInformation = () => {};
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
    on:change={mask}
    bind:value={phone}
    placeholder="(555) 555-5555"
    required
  />

  {#if coming}
    <label for="PeopleAttending">How many attending? *</label>
    <input
      type="number"
      name="PeopleAttending"
      bind:value={attending}
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
            max={attending - adults}
            required
          />
        </right>
      </row>
    {/if}
  {/if}
  <label for="notes">Other Notes</label>
  <textarea bind:value={notes} name="notes" cols="30" rows="4" />
  <button>
    {#if coming}
      Choose Some Food!
    {:else}
      Leave a Note!
    {/if}
  </button>
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
</style>
