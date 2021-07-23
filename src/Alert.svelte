<script>
  import { Alerts } from "./store.js";

  var alerts = [];

  Alerts.subscribe((value) => {
    alerts = value;
  });
</script>

<alert>
  <ul>
    {#each alerts as alert}
      <li>{alert.message}</li>
    {/each}
  </ul>
</alert>

<style>
  alert {
    position: absolute;
    top: 15px;
    left: 50%;
    transform: translate(-50%);
  }
</style>
