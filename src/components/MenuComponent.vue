<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">BALCONING</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/coches">Coches</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/empleadosdetails">Empleados Details</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/customers">Customers</router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" @click="showDropdown = !showDropdown" aria-expanded="false">
                                Oficios
                            </a>
                            <ul class="dropdown-menu" :class="{ show: showDropdown } ">
                                <li v-for="oficio in oficios" :key="oficio" @click="showDropdown = !showDropdown">
                                    <router-link class="dropdown-item" :to="'/empleadosoficios/' + oficio">{{ oficio }}</router-link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    <router-view></router-view>
</template>

<script>
import ServiceEmpleados from '@/services/ServiceEmpleados';
const service = new ServiceEmpleados()
export default {
    name: "MenuComponent",
    data() {
        return {
            oficios: [],
            showDropdown: false
        }
    },
    mounted () {
        service.getOficio().then(response => {
            this.oficios = response
        })
    },
    
    
}
</script>
