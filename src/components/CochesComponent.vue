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
import axios from 'axios'
//Si necesitamos variables para todo el component y sus metodos
// se declaran aqui (mounted, methods,create)
let urlApi = "https://apicochespaco.azurewebsites.net/"
export default {
    name:"CochesComponent",
    data(){
        return{
            coches:[],
        }
    },
    mounted(){
        let request = "webresources/coches"
        axios.get(urlApi + request).then(response => {
            this.coches = response.data
        })
    }
}
</script>