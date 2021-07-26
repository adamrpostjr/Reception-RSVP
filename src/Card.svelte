<script>
</script>

<card>
  <img id="card" src="/Reception.webp" alt="" />
  <scroll> &#8659; &#8659; &#8659; </scroll>
</card>

<style>
  card {
    float: right;
  }
  #card {
    height: 100vh;
    border-radius: 0 25px 25px 0;
  }
  scroll {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    card {
      /* position: absolute; */
      width: 100vw;
      height: 100vh;
      float: unset;
      order: 1;
    }
    #card {
      width: 100vw;
      height: 100vh;
    }
    scroll {
      display: block;
      position: absolute;
      bottom: 10px;
      left: 50%;
      font-family: monospace;
      font-size: 20px;
      animation: updown 3s ease infinite;
    }
    @keyframes updown {
      0% {
        transform: translateY(-50%) translate(-50%);
      }

      50% {
        transform: translateY(50%) translate(-50%);
      }

      100% {
        transform: translateY(-50%) translate(-50%);
      }
    }
  }

  @media only screen and (max-width: 414px) {
    #card {
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
