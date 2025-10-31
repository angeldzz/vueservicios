<template>
  <div>
    <h1>HOME</h1>
    <h2 style="color: blue;">{{ mensaje }}</h2>
  </div>
</template>

<script>
import ServiceEjemplo from '../services/services'
//Para poder utilizar el servicio necesitamos una instancia (variable)
//de la clase servicio
const service = new ServiceEjemplo()
export default {
    name:"HomeComponent",
    data() {
      return {
        mensaje: ""
      }
    },
    mounted () {
      this.mensaje = service.getSaludo("Angel");
    },
}
</script>

<style>

</style>