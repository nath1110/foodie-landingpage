<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

@font-face {
  font-family: "Druk Text Wide Heavy";

  src: local("Druk Text Wide Heavy"),
    url(./assets/fonts/DrukText/DrukTextWide-Heavy.ttf) format("truetype");
}

@font-face {
  font-family: "Drunk Text Wide Medium";
  src: local("Drunk Text Wide Medium"),
    url(./assets/fonts/DrukText/DrukTextWide-Medium.ttf) format("truetype");
}

@font-face {
  font-family: "Syne";
  src: local("Syne"),
    url(./assets/fonts/syne-typeface/TTF/Syne-Bold.ttf) format("truetype");
}
</style>
