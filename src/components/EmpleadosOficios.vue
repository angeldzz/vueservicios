<template>
  <div>
    <h1>Oficios {{ oficio }}</h1>
    <table class="table table-bordered table-striped">
        <thead>
            <tr>
                <th>ID Empleado</th>
                <th>Apellido</th>
                <th>Oficio</th>
                <th>Salario</th>
                <th>Departamento</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="empleado in empleados" :key="empleado">
                <td>{{ empleado.idEmpleado}}</td>
                <td>{{ empleado.apellido}}</td>
                <td>{{ empleado.oficio}}</td>
                <td>{{ empleado.salario}}</td>
                <td>{{ empleado.departamento}}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
import Global from '@/Global'
let url = Global.urlEmpleados
export default {
    name: "EmpleadosOficios",
    data() {
        return {
            oficio:"",
            empleados:[]
    }
    },
    mounted () {
        this.loadEmpleados()
    },
    methods: {
        loadEmpleados() {
        this.oficio = this.$route.params.oficio
            let request = "api/Empleados/EmpleadosOficio/" + this.oficio
        axios.get(url + request).then(response => {
            this.empleados = response.data
        })
        }
    },
    watch: {
        '$route.params.oficio'(newValue, oldValue) {
            if(newValue !== oldValue){
                this.loadEmpleados()
            }
        }
    },
    
}
</script>

<style>

</style>