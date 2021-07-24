<script>
  import { qTwoAnswerOne, qTwo } from "./store.js";

  var name, email, phone, notes;

  let phoneField;

  var mask = (e) => {
    var x = e.target.value
      .replace(/\D/g, "")
      .match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    e.target.value = !x[2]
      ? x[1]
      : "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "");
  };

  // TODO: This needs to save the information then move to the next step of choosing food

  function saveInformation() {
    if (name && email && phone && phone.length >= 10) {
      // save
      qTwoAnswerOne.set({
        name: name,
        email: email,
        phone: phone,
        notes: notes,
      });
      qTwo.set(1);
    } else if (phone.length < 10) {
      console.log(phone.length);
      // alert this some how?
    } else {
      console.log({ name: name, email: email, phone: phone, notes: notes });
    }
  }
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
    min="14"
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
  @media only screen and (max-width: 414px) {
    form {
      padding-top: 80px;
    }
  }
</style>
