<template>
  <!-- Wrap our app with App component -->
  <k-app>
    <NuxtPage />
  </k-app>
</template>

<script>
import { kApp } from "konsta/vue";
import "./assets/main.scss";

export default {
  components: {
    kApp,
  },
};
</script>
