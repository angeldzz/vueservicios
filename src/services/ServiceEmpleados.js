import axios from "axios";
import Global from "@/Global";
export default class ServiceEmpleados {
    
    getEmpleados () {
        let url = Global.urlEmpleados
        return new Promise(function(resolve){
            let empleados = []
            let request = "api/empleados"
            axios.get( url + request).then(response => {
                console.log("Leyendo Empleados");
                empleados = response.data
                resolve(empleados);
            })
        })
    }
    findEmpleado (id) {
        let url = Global.urlEmpleados
        return new Promise(function(resolve){
            let empleado = []
            let request = "api/empleados/" + id
            axios.get( url + request).then(response => {
                console.log("Leyendo Empleados");
                empleado = response.data
                resolve(empleado);
            })
        })
    }
    getOficio () {
        let url = Global.urlEmpleados
        return new Promise(function(resolve){
            let oficios = []
            let request = "api/Empleados/oficios" 
            axios.get( url + request).then(response => {
                console.log("Leyendo Empleados");
                oficios = response.data
                resolve(oficios);
            })
        })
    }
    getEmpleadosOficio (oficio) {
        let url = Global.urlEmpleados
        return new Promise(function(resolve){
            let empleados = []
            let request = "api/Empleados/EmpleadosOficio/" + oficio
            axios.get( url + request).then(response => {
                console.log("Leyendo Empleados");
                empleados = response.data
                resolve(empleados);
            })
        })
    }
}