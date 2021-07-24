<script>
</script>

<card>
  <img src="/Reception.webp" alt="" />
</card>

<style>
  card {
    float: right;
  }
  img {
    height: 100vh;
    border-radius: 0 25px 25px 0;
  }

  @media only screen and (max-width: 768px) {
    card {
      /* position: absolute; */
      width: 100vw;
      height: 100vh;
      float: unset;
      order: 1;
    }
    img {
      width: 100vw;
      height: 100vh;
    }
  }

  @media only screen and (max-width: 414px) {
    img {
      width: 100%;
      height: unset;
    }
    card {
      justify-content: center;
      display: flex;
      flex-direction: column;
    }
  }
</style>
