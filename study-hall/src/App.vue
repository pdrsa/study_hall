<template>
  <v-app>
    <v-app-bar app collapse-on-scroll elevation="2" color="#28B7E4" height="100px">
      <v-spacer></v-spacer>
      <v-toolbar-title>Study Hall</v-toolbar-title>
      <v-img
        src="https://cdn.discordapp.com/attachments/691762837457993788/1033767650054123551/study-icon-78591_1.png"
        max-height="60px"
        max-width="60px"
      >
      </v-img>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main app>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Sanchez');

#app {
  background-color: #A3D9F8;
  font-family: 'Sanchez', normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.v-toolbar__title {
  font-size: 3rem !important;
  color: #FFFFFF;
  -webkit-text-stroke-width: 1.2px;
  -webkit-text-stroke-color: black;
  border-right: 20px solid transparent;
  border-top: 10px solid transparent;
}
</style>
