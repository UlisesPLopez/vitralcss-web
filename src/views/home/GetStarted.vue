<template>
    <section class="get-started">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2>Get Started</h2>
                    <p class="intro">VitralCSS is designed for easy implementation and straightforward usage.
                        You can install it via a package manager or include it through a CDN.</p>
                </div>
                <div class="col-12">
                    <div class="Glass-Panel-3 install-box">
                        <h3>Install via NPM:</h3>
                        <p class="install-text">Install VitralCSS using npm.</p>
                        <button class="Glass-Panel-5 code-button" @click="CopyNPM()">
                            <code>npm install vitracss</code>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>
                                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>
                            </svg>
                        </button>
                    </div>

                    <div class="Glass-Panel-3 install-box">
                        <h3>Install via CDN:</h3>
                        <p class="install-text">Include VitralCSS directly in your HTML.</p>
                        <button class="Glass-Panel-5 code-button" @click="CopyCSS()">
                            <code class="scroll-code">&lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vitracss/dist/VitraCss.min.css"&gt;</code>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>
                                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>
                            </svg>
                        </button>
                        <br><br>
                        <button class="Glass-Panel-5 code-button" @click="CopyJS()">
                            <code class="scroll-code">&lt;script src="https://cdn.jsdelivr.net/npm/vitracss/dist/VitraCss.min.js" defer&gt;&lt;/script&gt;</code>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>
                                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <p class="col-12 examples-text">You can see usage examples in the Examples section, or explore and interact with them in the Playground.</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'GetStarted',
    methods: {
        CopyNPM() {
            const textToCopy = "npm i vitracss";
            if (navigator.clipboard) navigator.clipboard.writeText(textToCopy);
        },
        CopyCSS() {
            const textToCopy = '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vitracss/dist/VitraCss.min.css">';
            if (navigator.clipboard) navigator.clipboard.writeText(textToCopy);
        },
        CopyJS() {
            const textToCopy = '<script src="https://cdn.jsdelivr.net/npm/vitracss/dist/VitraCss.min.js" defer></' + 'script>';
            if (navigator.clipboard) navigator.clipboard.writeText(textToCopy);
        }
    }
}
</script>

<style scoped>
.get-started {}

h2 {
    text-align: center;
    color: aliceblue;
    font-family: 'frutiger';
    text-shadow: 0 0 10px rgb(104, 104, 104);
}

.intro {
    text-align: center;
    color: aliceblue;
    font-family: 'frutiger';
}

h3 {
    text-align: center;
    color: aliceblue;
    font-family: 'frutiger';
}

.install-box {
    background-color: rgba(49, 104, 255, 0.219);
}

.install-text {
    text-align: center;
    color: aliceblue;
    font-family: 'frutiger';
}

.code-button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(5, 4, 54, 0.651);
}

.code-button code {
    font-family: 'frutiger';
    color: aliceblue;
    text-align: left;
}

.code-button svg {
    flex-shrink: 0;
}

.scroll-code {
    display: block;
    white-space: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
}

.examples-text {
    text-align: center;
    color: aliceblue;
    font-family: 'frutiger';
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
