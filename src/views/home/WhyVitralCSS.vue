<template>
    <section class="why-vitralcss container">
        <div class="row">
            <div class="col-12">
                <h2>Why VitralCSS?</h2>
                <p class="subtitle">Where natural inspiration meets modern design</p>
                <p class="description">
                    VitralCSS combines the timeless beauty of natural elements — water, ice, fire, fog and crystal —
                    with a modern, lightweight and dependency-free approach.
                </p>
            </div>
        </div>
        <div class="row key-benefits">
            <div class="col-md-4 col-sm-6">
                <div class="Water-Panel-10 with-hover benefit">
                    <span>🌿 Inspired by nature, designed for tomorrow</span>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div class="Water-Panel-10 with-hover benefit">
                    <span>⚡ Ultra lightweight and fast</span>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div class="Water-Panel-10 with-hover benefit">
                    <span>🧩 Plug & play: pure CSS & JS, no dependencies</span>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div class="Water-Panel-10 with-hover benefit">
                    <span>🎨 Smooth, elegant animations out of the box</span>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div class="Water-Panel-10 with-hover benefit">
                    <span>🧪 Easily customizable: mix panels and effects</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'WhyVitralCSS',
}
</script>

<style scoped>
.why-vitralcss {
    text-align: center;
}

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

.key-benefits {}

.benefit {
    color: aliceblue;
    text-shadow: 0 0 5px rgb(104, 104, 104);
    background-color: rgba(32, 17, 85, 0.219);
    display: flex;
    align-items: center;
    justify-content: center;
}

.benefit span {
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
