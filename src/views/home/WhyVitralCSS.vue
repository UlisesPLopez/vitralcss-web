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

/* #1 - Móvil pequeño - Landscape */
@media screen and (min-width: 320px) and (orientation: landscape) {
    /* Ajustes para móvil pequeño landscape */
}

/* #2 - Móvil - Portrait */
@media screen and (min-width: 480px) {
    
}

/* #3 - Móvil - Landscape */
@media screen and (min-width: 480px) and (orientation: landscape) {
    /* Ajustes para móvil landscape */
}

/* #4 - Tablet - Portrait */
@media screen and (min-width: 768px) {
    
}

/* #5 - Tablet - Landscape */
@media screen and (min-width: 768px) and (orientation: landscape) {
    /* Ajustes para tablet landscape */
}

/* #6 - Desktop - Portrait */
@media screen and (min-width: 1024px) {
    
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
