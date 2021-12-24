<template>
  <v-app>
    <v-main>
      <welcome />
    </v-main>
  </v-app>
</template>

<script>
import Welcome from "../components/Welcome.vue";

export default {
  name: "App",

  components: {
    Welcome,
  },
};
</script>
