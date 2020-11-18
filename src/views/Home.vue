<template>
  <div class="home">
    <Section1/>
    <List/>
  </div>
</template>

<script>
import Section1 from '@/components/home/Section1';
import List from '@/components/home/list';

export default {
  name: 'Home',
  components: {
    Section1,
    List
  }
}
</script>