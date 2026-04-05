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
    padding: 3rem 0;
    text-align: center;
    color: aliceblue;
}

.header-panel {
    padding: 2rem 1rem;
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

.key-features {
    margin-top: 2rem;
    gap: 1rem;
}

.feature {
    padding: 1rem;
    font-size: 0.9rem;
    text-shadow: 0 0 5px rgb(104, 104, 104);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.feature span {
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

    .feature {
        font-size: 1rem;
    }
}

@media (min-width: 992px) {
    h2 {
        font-size: 3rem;
    }

    .features {
        padding: 4rem 0;
    }

    .header-panel {
        padding: 3rem 2rem;
    }
}
</style>
