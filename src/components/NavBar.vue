<template>
    <nav class="navbar navbar-expand-lg Glass-Cu-4">
        <div class="container">
            <a class="navbar-brand" href="#">VitralCSS</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link" aria-current="page" to="/vitralcss-web/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/vitralcss-web/Docs">Docs</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/vitralcss-web/Examples">Examples</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/vitralcss-web/Playground">Playground</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/vitralcss-web/Blog">Blog</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Github</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">NPM</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style scoped>
nav{
    font-family: 'frutiger';
    position: fixed;
    z-index: 1000;
    width: 100vw;
    background-color: rgba(0, 61, 103, 0.3);
}
.navbar-brand{
    font-size: 1.5rem;
    font-weight: bold;
    color: #ffffff;
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
}
li{
    font-size: 1.1rem;
}
.nav-link{
    color: #ffffff;
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
}
.nav-link:hover,
.nav-link.router-link-active{
    color: #ffffff;
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 15px rgba(96, 217, 247, 0.4);
}

/* Dropdown animation */
.navbar-collapse {
    transition: all 0.5s ease-out;
}
</style>
