<template>
    <section class="features">
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

/* #1 - Móvil pequeño - Landscape */
@media screen and (min-width: 320px) and (orientation: landscape) {
    /* Ajustes para móvil pequeño landscape */
}

/* #2 - Móvil - Portrait */
@media screen and (min-width: 480px) {
    /* Ajustes para móvil portrait */
}

/* #3 - Móvil - Landscape */
@media screen and (min-width: 480px) and (orientation: landscape) {
    /* Ajustes para móvil landscape */
}

/* #4 - Tablet - Portrait */
@media screen and (min-width: 768px) {
    /* Ajustes para tablet portrait */
}

/* #5 - Tablet - Landscape */
@media screen and (min-width: 768px) and (orientation: landscape) {
    /* Ajustes para tablet landscape */
}

/* #6 - Desktop - Portrait */
@media screen and (min-width: 1024px) {
    /* Ajustes para desktop portrait */
}

/* #7 - Desktop - Landscape */
@media screen and (min-width: 1024px) and (orientation: landscape) {
    /* Ajustes para desktop landscape */
}

/* #8 - Desktop grande - Portrait */
@media screen and (min-width: 1440px) {
    /* Ajustes para desktop grande portrait */
}

/* #9 - Desktop grande - Landscape */
@media screen and (min-width: 1440px) and (orientation: landscape) {
    /* Ajustes para desktop grande landscape */
}
</style>
