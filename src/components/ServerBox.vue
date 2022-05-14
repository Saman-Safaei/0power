<template>
  <div class="server-box">
    <img class="server-box__pfp" src="/imgs/profilepic.jpg" alt="">
    <h3 class="server-box__title">'Zer0Power</h3>
    <p class="server-box__subtitle">0powerdev.ir</p>
    <br>
    <p class="server-box__bio">2003/12/27</p>
    <br>
    <p class="server-box__bio">INTP</p>
    <br>
    <p class="server-box__bio">US / IR</p>
    <div class="server-box__tags">
      <Tags>🎮 Gamer</Tags>
      <Tags>🎵 Music</Tags>
      <Tags>☁ In The Clouds</Tags>
      <Tags>😇 Angel</Tags>
      <Tags>⚠️ Ex-Pentester</Tags>
      <Tags>🌗 MoonWalker</Tags>

      
      </div>
  </div>
</template>
<script setup>
import Tags from "@/components/Tags.vue";

</script>
<style lang="scss" scoped>
.server-box {
  background: rgba(0, 0, 0, 0.5);
  padding: 1rem;
  border-radius: 0.5rem;
  width: 300px;
  color: white;

  .server-box__pfp {
    display: block;
    width: 40%;
    margin: auto;
    border-radius: 0.3rem;
  }

  .server-box__title {
    font-family: 'Macondo', cursive;
    font-size: 20px;
    text-align: center;
    color: white;
     margin: 0.3rem;
  }
  .server-box__subtitle {
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    color: #131415;
    text-align: center;
    margin: 0;
  }
  .server-box__bio{

    font-family: Modelica, sans-serif;
    font-size: 15px;
    color: #131415;
    text-align: center;
    margin: 0;

  }
  .server-box__tags{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 1rem 0;
    gap: .3rem;
  }

}
</style>
