<template>
    <div>
        <h1>
            Empleados
        </h1>
        <form style="width: 50%; margin: auto;">
            <label>Selecione un empleado</label>
            <select v-model="idEmpleado" class="form-control">
                <option v-for="empleado in empleados" :key="empleado" :value="empleado.idEmpleado">{{ empleado.apellido }}</option>
            </select>
            <button @click.prevent="mostrarEmpleado" class="btn btn-primary mt-2">Buscar Empleado</button>
        </form>
        <table v-if="empleado !== null" class="table table-bordered table-striped">
            <thead>
            <tr>
                <th>IdEmpleado</th>
                <th>Apellido</th>
                <th>Oficio</th>
                <th>Salario</th>
                <th>Departamento</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>{{ empleado.idEmpleado }}</td>
                <td>{{ empleado.apellido }}</td>
                <td>{{ empleado.oficio }}</td>
                <td>{{ empleado.salario }}</td>
                <td>{{ empleado.departamento }}</td>
            </tr>
            </tbody>
            </table>
    </div>
</template>

<script>
import ServiceEmpleados from '@/services/ServiceEmpleados'
const service = new ServiceEmpleados()
export default {
    name: "EmpleadosDetails",
    data(){
        return{
        empleados: [],
        empleado: null,
        idEmpleado:"" 
        }
    },
    mounted(){
        service.getEmpleados().then(response => {
            this.empleados = response
        })
    },
    methods:{
        mostrarEmpleado(){
            if( this.idEmpleado !== ""){
                service.findEmpleado(this.idEmpleado).then(response => {
                    this.empleado = response;
                })
            }
        }
    }
}
</script>
