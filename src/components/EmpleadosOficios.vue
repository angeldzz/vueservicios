<template>
  <div>
    <h1>Oficios {{ oficio }}</h1>
  </div>
</template>

<script>
export default {
    name: "EmpleadosOficios",
    data() {
        return {
            oficio:""
    }
    },
    mounted () {
        this.oficio = this.$route.params.oficio
    },
    watch: {
        '$route.params.oficio'(newValue, oldValue) {
            console.log(newValue,oldValue);
            this.oficio = this.$route.params.oficio
        }
    },
}
</script>

<style>

</style>