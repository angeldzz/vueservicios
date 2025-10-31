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
import ServiceEmpleados from '@/services/ServiceEmpleados'
const service = new ServiceEmpleados()
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
        service.getEmpleadosOficio(this.$route.params.oficio).then(response => {
            this.empleados = response
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