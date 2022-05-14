  <template>
    <div class="bio-box">
      <img class="bio-box__pfp" src="/imgs/profilepic2.jpg" alt="" />
      <h3 class="bio-box__title">'Zer0Power</h3>
      <p class="bio-box__subtitle">Maxgaming Dev</p>
      <br />
      <p class="bio-box__bio">2003/12/27</p>
      <br />
      <p class="bio-box__bio">INTP</p>
      <br />
      <p class="bio-box__bio">Eng / Per</p>
      <div class="bio-box__tags">
        <tag>🎮 Gamer</tag>
        <tag>🎵 Music</tag>
        <tag>☁ In The Clouds</tag>
        <tag>👻 Evil Genius</tag>
        <tag>🔞 Ex-Pentester</tag>
        <tag>🌗 MoonWalker</tag>
        <tag>🚬 MaxGaming Dev</tag>
        <tag>⌨️ Programmer</tag>
      </div>
    </div>
  </template>

  <script setup>
  import Tag from "@/components/Tag.vue";
  </script>

  <style lang="scss" scoped>
  .bio-box {
    background: rgba(0, 0, 0, 0.5);
    padding: 1rem;
    border-radius: 0.5rem;
    width: 300px;
    color: white;

    .bio-box__pfp {
      display: block;
      width: 40%;
      margin: auto;
      border-radius: 0.3rem;
    }

    .bio-box__title {
      font-family: "Macondo", cursive;
      font-size: 20px;
      text-align: center;
      color: white;
      margin: 0.3rem;
    }
    .bio-box__subtitle {
      font-family: "Roboto", sans-serif;
      font-size: 12px;
      color: #131415;
      text-align: center;
      margin: 0;
    }
    .bio-box__bio {
      font-family: Modelica, sans-serif;
      font-size: 15px;
      color: #131415;
      text-align: center;
      margin: 0;
    }
    .bio-box__tags {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      margin: 1rem 0;
      gap: 0.3rem;
    }
  }
  </style>
