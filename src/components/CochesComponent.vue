<template>
    <div>
        <h1>Coches</h1>
        <div v-for="coche in coches" :key="coche">
            <h3 style="color: blue;">
                {{coche.marca}} {{coche.modelo}}
            </h3>
            <p>Driver: {{ coche.conductor }}</p>
            <img :src="coche.imagen" alt="" style="width: 150px; heigth: 150px;">
        </div>
    </div>
</template>

<script>
import ServiceCoches from '../services/ServiceCoches'
const service = new ServiceCoches()
//Si necesitamos variables para todo el component y sus metodos
// se declaran aqui (mounted, methods,create)
export default {
    name:"CochesComponent",
    data(){
        return{
            coches:[],
        }
    },
    mounted(){
        service.getCoches.then(response => {
            this.coches = response
        })
    }
}
</script>