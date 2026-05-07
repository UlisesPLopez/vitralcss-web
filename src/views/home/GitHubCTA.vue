<template>
    <section v-once class="github-cta">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-md-8 col-lg-6">
                    <div class="Ice-Panel-8 cta-box">
                        <h2>Love VitralCSS?</h2>
                        <p class="description">If you enjoy using VitralCSS, please consider starring the project on GitHub!</p>
                        <div class="cta-buttons">
                            <a href="https://github.com/UlisesPLopez/vitralcss" target="_blank" class="Glass-Panel-5 github-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                </svg>
                                <span>Star on GitHub</span>
                                <span class="star-count">⭐</span>
                            </a>
                            <a href="https://github.com/UlisesPLopez/vitralcss/issues" target="_blank" class="Glass-Panel-5 issue-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm1.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                </svg>
                                <span>Report Issue</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'GitHubCTA'
}
</script>

<style scoped>
.github-cta {
    padding: 50px 0;
}

.cta-box {
    text-align: center;
    padding: 30px;
    background-color: rgba(0, 0, 0, 0.2);
}

.cta-box h2 {
    font-family: 'frutiger';
    font-weight: bold;
    color: aliceblue;
    text-shadow: 0 0 10px rgb(104, 104, 104);
    margin-bottom: 15px;
}

.description {
    color: aliceblue;
    font-family: 'frutiger';
    margin-bottom: 25px;
}

.cta-buttons {
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
}

.github-btn, .issue-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 20px;
    text-decoration: none;
    color: aliceblue;
    font-family: 'frutiger';
    font-weight: bold;
    transition: transform 0.2s, box-shadow 0.2s;
}

.github-btn:hover, .issue-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 20px rgba(255, 255, 255, 0.3);
}

.github-btn svg, .issue-btn svg {
    flex-shrink: 0;
}

.star-count {
    font-size: 18px;
}

/* ============================================
   MEDIAS QUERIES
   ============================================ */

/* #1 - Móviles 480px+ */
@media screen and (min-width: 480px) {
    .cta-buttons {
        flex-direction: row;
    }
}

/* #2 - Tablets 768px+ */
@media screen and (min-width: 768px) {
    .github-btn, .issue-btn {
        padding: 15px 25px;
    }
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