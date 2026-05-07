<template>
    <header v-once>
        <div class="Water-Panel-10 title-box">
            <p class="subtittle">Where nature and design unite again with</p>
            <h1 class="tittle">VitralCSS</h1>
            <p class="subtittle">Inspired by nature, designed for tomorrow</p>

            <div class="cta-container">
                <div class="Glass-Panel-10 with-hover code-box">
                    <code>$ npm i vitracss</code>
                    <button @click="CopyCode()">
                        <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                            viewBox="0 0 16 16">
                            <path
                                d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1z" />
                            <path
                                d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" />
                        </svg>
                    </button>
                </div>

                <router-link to="/Docs" class="Glass-Panel-10 with-hover docs-link">
                    <span>Read The Docs</span>
                    <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                        viewBox="0 0 16 16">
                        <path
                            d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                    </svg>
                </router-link>
            </div>
        </div>
    </header>
    <GetStarted />
    <WhyVitralCSS />
    <HomeFeatures />
    <DemoPreview />
    <GitHubCTA />
    <FooterLinks />
</template>

<script>
import GetStarted from './home/GetStarted.vue';
import WhyVitralCSS from './home/WhyVitralCSS.vue';
import HomeFeatures from './home/HomeFeatures.vue';
import DemoPreview from './home/DemoPreview.vue';
import GitHubCTA from './home/GitHubCTA.vue';
import FooterLinks from './home/FooterLinks.vue';

export default {
    name: 'HomeView',
    components: {
        GetStarted,
        WhyVitralCSS,
        HomeFeatures,
        DemoPreview,
        GitHubCTA,
        FooterLinks
    },
    methods: {
        CopyCode() {
            const textToCopy = "npm i vitracss";
            if (navigator.clipboard) {
                navigator.clipboard.writeText(textToCopy).then(() => {
                    alert("Copied to clipboard!");
                });
            }
        }
    }
}
</script>

<style scoped>
/* *{
    border: solid red 1px !important;
} */

header {
    background-image: url('../assets/images/home-images/HomeBG.webp');
    background-size: cover;
    background-position: center;
    align-items: center;
    justify-content: center;
    display: flex;
    height: 100vh;
    width: 100vw;
}

.title-box {
    text-align: center;
    color: #F2FFFF;
    font-family: 'frutiger';
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(14, 56, 75, 0.226);
    width: 90%;
}

.title-box p:first-of-type {
    opacity: 0.9;
}

.title-box h1 {
    font-weight: bold;
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
}

.subtittle {
    font-size: 22px;
}

.tittle {
    font-size: 30px;
}

.cta-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

}

.code-box {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: rgba(0, 0, 0, 0.514);
    width: 100%;
    height: 1vh;
}

.code-box code {
    font-family: 'frutiger';
    color: aliceblue;
    font-size: 20px;
}

.code-box button {
    background-color: transparent;
    color: aliceblue;
    border: none;
    display: flex;
    align-items: center;
}

.docs-link {
    position: relative;
    top: 2vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: rgba(0, 0, 0, 0.137);
    color: aliceblue;
    text-decoration: none;
    width: 100%;
    height: 1vh;
    font-size: 20px;
}

.svg-icon{
        width: 1.5rem;
        height: 1.5rem;
    }

/* ============================================
   MEDIAS QUERIES - HOME
   ============================================ */

/* Base: móviles pequeños (< 480px) - Estilos por defecto */

/* #1 - Móviles 480px+ */
@media screen and (min-width: 480px) {
    header {
        height: 100vh;
        width: 100vw;
    }

    .title-box {
        width: 90%;
    }

    .subtittle {
        font-size: 30px;
    }

    .tittle {
        font-size: 50px;
    }

    .code-box,
    .docs-link {
        width: 100%;
        height: 1vh;
    }

    .code-box code,
    .docs-link span {
        width: 80%;
        font-size: 28px;
        text-align: left;
    }

    .code-box button,
    .docs-link svg {
        width: 10%;
        justify-content: end;
    }

    .svg-icon{
        width: 2rem;
        height: 2rem;
    }
}

/* #2 - Tablets 768px+ */
@media screen and (min-width: 768px) {
    header {
        height: 80vh;
    }

    .title-box {
        width: 90%;
    }

    .subtittle {
        font-size: 35px;
    }

    .tittle {
        font-size: 60px;
    }

    .cta-container{
        flex-direction: row;
    }

    .code-box{
        width: 45%;
        height: 7vh;
    }
    
    .docs-link{
        top: 0vh;
        width: 45%;
        height: 7vh;
    }

    .svg-icon{
        width: 2.5rem;
        height: 2.5rem;
    }
}

/* #3 - Desktop 1024px+ */
@media screen and (min-width: 1024px) {
    header {
        height: 80vh;
    }

    .title-box {
        width: 80%;
    }

    .subtittle {
        font-size: 35px;
    }

    .tittle {
        font-size: 60px;
    }

    .cta-container{
        flex-direction: row;
    }

    .code-box{
        width: 45%;
        height: 10vh;
    }
    
    .docs-link{
        top: 0vh;
        width: 45%;
        height: 10vh;
    }

    .code-box code,
    .docs-link span{
        font-size: 35px;
    }

    .code-box button,
    .docs-link svg {
        width: 10%;
        justify-content: end;   
    }

    .svg-icon{
        width: 2.5rem;
        height: 2.5rem;
    }
}

/* #4 - Large Desktop 1440px+ */
@media screen and (min-width: 1440px) {
    header {
        height: 80vh;
    }

    .title-box {
        width: 60%;
    }

    .subtittle {
        font-size: 40px;
    }

    .tittle {
        font-size: 90px;
    }

    .cta-container{
        flex-direction: row;
    }

    .code-box{
        width: 45%;
        height: 10vh;
    }
    
    .docs-link{
        top: 0vh;
        width: 45%;
        height: 10vh;
    }

    .code-box code,
    .docs-link span{
        font-size: 35px;
    }

    .code-box button,
    .docs-link svg {
        width: 10%;
        justify-content: end;   
    }

    .svg-icon{
        width: 2.5rem;
        height: 2.5rem;
    }
}

/* #5 - Ultra-wide 1920px+ */
@media screen and (min-width: 1910px) {
    header {
        height: 80vh;
    }

    .title-box {
        width: 70%;
    }

    .subtittle {
        font-size: 40px;
    }

    .tittle {
        font-size: 90px;
    }

    .cta-container{
        flex-direction: row;
    }

    .code-box{
        width: 45%;
        height: 10vh;
    }
    
    .docs-link{
        top: 0vh;
        width: 45%;
        height: 10vh;
    }

    .code-box code,
    .docs-link span{
        font-size: 35px;
    }

    .code-box button,
    .docs-link svg {
        width: 10%;
        justify-content: end;   
    }

    .svg-icon{
        width: 2.5rem;
        height: 2.5rem;
    }
}
</style>
