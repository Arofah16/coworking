<template>
  <v-app>

    <Header />
    <Section1 />
    <!-- Sizes your content based upon application components -->
    <Content />

    <Footer />
  </v-app>
</template>

<script>
  import Header from './components/Header.vue';
  import Content from './components/Content.vue';
  import Footer from './components/Footer.vue';
  import Section1 from './components/Section1.vue';

  export default {
    name: 'App',

    components: {
      Header,
      Content,
      Footer,
      Section1,
    },

    data: () => ({
      //
    }),
  };
</script>
