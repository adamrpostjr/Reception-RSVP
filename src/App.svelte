<script>
  import RSVP from "./RSVP.svelte";
  import Card from "./Card.svelte"
</script>

<main>
  <RSVP /> 
  <Card/>
</main>

<style>
  main{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>
