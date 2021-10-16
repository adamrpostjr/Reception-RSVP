<script>
</script>

<card>
  <img id="card" src="/Reception.webp" alt="" />
</card>

<style>
  card {
    float: right;
  }
  #card {
    height: 100vh;
    border-radius: 0 25px 25px 0;
  }
  @media only screen and (max-width: 768px) {
    card {
      width: 100vw;
      height: 100%;
      text-align: center;
    }
    #card {
    }
    h1 {
      text-align: center;
    }
  }

  @media only screen and (max-width: 414px) {
    card {
      justify-content: center;
      display: flex;
      flex-direction: column;
    }
  }
</style>
