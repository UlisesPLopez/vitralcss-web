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
    padding: 3rem 0;
    text-align: center;
}

h2 {
    font-family: 'frutiger';
    font-size: 2rem;
    font-weight: bold;
    color: aliceblue;
    text-shadow: 0 0 10px rgb(104, 104, 104);
}

.subtitle {
    font-size: 1.2rem;
    margin-top: 0.5rem;
    color: aliceblue;
    text-shadow: 0 0 10px rgb(104, 104, 104);
}

.description {
    margin-top: 1rem;
    font-size: 0.9rem;
    color: aliceblue;
    font-family: 'frutiger';
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
}

.key-benefits {
    margin-top: 2rem;
    gap: 1rem;
}

.benefit {
    padding: 1rem;
    margin-bottom: 1rem;
    font-size: 0.9rem;
    color: aliceblue;
    text-shadow: 0 0 5px rgb(104, 104, 104);
    background-color: rgba(32, 17, 85, 0.219);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.benefit span {
    text-align: center;
}

@media (min-width: 768px) {
    h2 {
        font-size: 2.5rem;
    }

    .subtitle {
        font-size: 1.5rem;
    }

    .description {
        font-size: 1rem;
    }

    .benefit {
        font-size: 1rem;
    }
}

@media (min-width: 992px) {
    h2 {
        font-size: 3rem;
    }

    .why-vitralcss {
        padding: 4rem 0;
    }
}
</style>
