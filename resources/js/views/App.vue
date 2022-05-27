<template>
  <div>
        <header-main />
        <router-view></router-view>
  </div>
</template>

<script>
import HeaderMain from '../components/HeaderMain.vue';
export default {
    name: 'App',
    components: {
        HeaderMain,
    }
}
</script>

<style>
</style>