<template>
  <v-app>
    <v-app-bar
        app
        color="orange"
        dark
    >
      <div class="d-flex align-center">
        <v-btn to="/" text class="ml-2">효짱생일선물선택기</v-btn>
      </div>

      <v-spacer></v-spacer>

      <span class="mr-2">버전 V1.1</span>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>