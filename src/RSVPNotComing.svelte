<script>
  import { qOneAnswer } from "./store.js";

  var name, email, phone, notes;

  var mask = (e) => {
    var x = e.target.value
      .replace(/\D/g, "")
      .match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    e.target.value = !x[2]
      ? x[1]
      : "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "");
  };

  // TODO: This needs to save the information then move to the next step of choosing food

  function saveInformation() {}
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
  <label for="notes">Other Notes</label>
  <textarea bind:value={notes} name="notes" cols="30" rows="4" />
  <button> Leave a Nice Note </button>
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
</style>
