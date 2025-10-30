<template>
  <!-- <CochesComponent/> -->
  <!-- <CustomersComponent/> -->
  <EmpleadosDetailsVue/>
</template>

<script>
// import CustomersComponent from './components/CustomersComponent.vue'
import EmpleadosDetailsVue from './components/EmpleadosDetails.vue'
// import CochesComponent from './components/CochesComponent.vue'
export default {
  name: 'App',
  components: {
    // CochesComponent,
    // CustomersComponent,
    EmpleadosDetailsVue
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
