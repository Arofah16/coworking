<template>
  <v-app>

    <Header />
    
    <!-- Sizes your content based upon application components -->
    <Content />

    <Footer />
  </v-app>
</template>

<script>
  import Header from './components/Header.vue';
  import Content from './components/Content.vue';
  import Footer from './components/Footer.vue';
  
  export default {
    name: 'App',

    components: {
      Header,
      Content,
      Footer,
    },

    data: () => ({
      //
    }),
  };
</script>
