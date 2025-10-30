<template>
    <div>
        <nav>
            <ul>
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link to="/coches">Coches</router-link>
                </li>
                <li>
                    <router-link to="/empleadosdetails">Empleados Details</router-link>
                </li>
                <li>
                    <router-link to="/customers">Customers</router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: "MenuComponent"
}
</script>

<style lang="scss" scoped>
nav {
    background-color: #333;
    padding: 1rem;
}

ul {
    list-style: none;
    display: flex;
    gap: 2rem;
    margin: 0;
    padding: 0;
}

li {
    display: inline;
}

a {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: background-color 0.3s;
}

a:hover {
    background-color: #555;
}

a.router-link-active {
    background-color: #007bff;
}
</style>