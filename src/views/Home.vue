<template>
  <div class="home">
    <Section1/>
    <Section2/>
    <List/>
    <Section3/>
  </div>
</template>

<script>
import Section1 from '@/components/home/Section1';
import Section2 from '@/components/home/Section2';
import Section3 from '@/components/home/Section3';
import List from '@/components/home/list';

export default {
  name: 'Home',
  components: {
    Section1,
    Section2,
    Section3,
    List
  }
}
</script>