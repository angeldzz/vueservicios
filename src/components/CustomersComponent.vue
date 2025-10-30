<template>
  <div>
    <form>
        <label>Introduzca ID:</label>
        <input type="text" v-model="idCustomer">
        <button v-on:click.prevent="buscarCustomer()">Buscar Cliente</button>
    </form>
    <div v-if="customer">
            <h3>{{ customer.ContactTitle }}</h3>
            <h3>{{ customer.Country }}</h3>
            <h3>{{ customer.Address }}</h3>
    </div>
    <table v-if="status === true" border="3">
        <thead>
            <tr>
                <th>ID</th>
                <th>Company Name</th>
                <th>Adress</th>
                <th>City</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="c in customers" :key="c">
                <td>{{c.CustomerID}}</td>
                <td>{{c.CompanyName}}</td>
                <td>{{c.Address}}</td>
                <td>{{c.City}}</td>
            </tr>
        </tbody>
    </table>
    </div>
</template>

<script>
import Global from '@/Global'
import axios from 'axios'
let url = Global.urlCustomers
export default {
    name:"CustomersComponent",
    data(){
        return {
        customers: [],
        idCustomer: "",
        customer: {},
        status:false
        }
    },
    mounted(){
        let request = "/Customers"
            axios.get(url + request).then(response => {
                this.customers = response.data.value
                this.status = true
            })
    },
    methods:{
        buscarCustomer(){
            this.customers.forEach(cliente => {
                if (cliente.CustomerID === this.idCustomer) {
                    this.customer = cliente
                }
            });
        }
    }
}
</script>

<style>

</style>