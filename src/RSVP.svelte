<script>
  import * as axios from 'axios' 
  var post = ()=>{
    
  }
</script>

<main>
  <form action="/RSVP" method="POST">
    <label for="Name">Name</label>
    <input type="text" name="Name" id="" />
    <label for="Email">Email</label>
    <input type="email" name="Email" />
    <label for="Phone">Phone Number</label>
    <input type="tel" name="Phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
    <label for="PeopleAttending">How many attending?</label>
    <input type="number" name="PeopleAttending" min="1" max="15" />
    <!-- logic depending on the number above -->
    <label for="Adults">Of the --number-- many are adults?</label>
    <input type="number" name="Adults" min="1" max="15" />
    <!-- logic for max-->
    <label for="Children">Of the --number-- many are Children?</label>
    <input type="number" name="Children" min="1" max="15" />
    <!-- logic for max-->
    <!-- Logic for food choices -->
    blah blah blah
    <button>RSVP</button>
  </form>
</main>

<style>
</style>
