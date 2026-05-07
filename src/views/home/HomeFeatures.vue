<template>
    <section v-once class="features">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="Fog-Panel-8 header-panel">
                        <h2>✨ Features ✨</h2>
                        <p class="subtitle">Powerful, lightweight and beautiful</p>
                        <p class="description">
                            VitralCSS comes packed with tools, effects and components to speed up your design workflow without sacrificing beauty.
                        </p>
                    </div>
                </div>
            </div>
            <div class="row key-features">
                <div class="col-md-4 col-sm-6">
                    <div class="Ice-Panel-8 with-hover feature">
                        <span>⚡ Ultra lightweight — Less than 50KB for instant loading.</span>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6">
                    <div class="Ice-Panel-8 with-hover feature">
                        <span>🎨 Natural design — Inspired by Frutiger Aero.</span>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6">
                    <div class="Ice-Panel-8 with-hover feature">
                        <span>🛠 Easy to use — Start creating in seconds.</span>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6">
                    <div class="Ice-Panel-10 with-hover feature">
                        <span>🔄 Smooth animations — Performance without compromises.</span>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6">
                    <div class="Ice-Panel-10 with-hover feature">
                        <span>📦 Ready components — Panels, waves and more.</span>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6">
                    <div class="Ice-Panel-10 with-hover feature">
                        <span>🌍 Compatible — HTML, Vue, React, Angular and more.</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'HomeFeatures',
}
</script>

<style scoped>
.features {
    text-align: center;
    color: aliceblue;
}

.header-panel {}

h2 {
    font-family: 'frutiger';
    font-weight: bold;
    color: aliceblue;
    text-shadow: 0 0 10px rgb(104, 104, 104);
}

.subtitle {
    color: aliceblue;
    text-shadow: 0 0 10px rgb(104, 104, 104);
}

.description {
    color: aliceblue;
    font-family: 'frutiger';
}

.key-features {}

.feature {
    text-shadow: 0 0 5px rgb(104, 104, 104);
    display: flex;
    align-items: center;
    justify-content: center;
}

.feature span {
    text-align: center;
}

/* ============================================
   MEDIAS QUERIES
   ============================================ */

/* #1 - Móviles 480px+ */
@media screen and (min-width: 480px) {
    /* Ajustes para móviles */
}

/* #2 - Tablets 768px+ */
@media screen and (min-width: 768px) {
    /* Ajustes para tablets */
}

/* #3 - Desktop 1024px+ */
@media screen and (min-width: 1024px) {
    /* Ajustes para desktop */
}

/* #4 - Large Desktop 1440px+ */
@media screen and (min-width: 1440px) {
    /* Ajustes para large desktop */
}

/* #5 - Ultra-wide 1920px+ */
@media screen and (min-width: 1920px) {
    /* Ajustes para ultra-wide */
}
</style>
