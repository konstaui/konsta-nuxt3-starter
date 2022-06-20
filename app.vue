<template>
  <!-- Wrap our app with App component -->
  <k-app theme="ios">
    <NuxtPage />
  </k-app>
</template>

<script>
  import { kApp } from 'konsta/vue';
  import './assets/main.scss';

  export default {
    components: {
      kApp,
    },
  };
</script>