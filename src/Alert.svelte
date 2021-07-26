<script>
  import { Alerts } from "./store.js";

  var par;

  var popEm = () => {
    setTimeout(() => {
      if ($Alerts.length > 0) {
        console.log(par.childNodes, $Alerts);
        // par.removeChild(par.childNodes[0]);
        let alert = $Alerts.slice(1);
        Alerts.set(alert);
      }
      popEm();
    }, 2500);
  };
  popEm();
</script>

<alert bind:this={par}>
  {#each $Alerts as alert}
    <p>{alert.message}</p>
  {/each}
</alert>

<style>
  alert {
    position: fixed;
    top: 15px;
    left: 50%;
    transform: translate(-50%);
    z-index: 10;
    width: max-content;
    height: 25%;
    overflow: hidden;
  }
  p {
    background: #2b0d3f;
    font-weight: bolder;
    padding: 15px 45px;
    box-sizing: border-box;
    border: 2px solid #cfcfcf;
    border-radius: 10px;
    margin: 5px 0;
  }
</style>
