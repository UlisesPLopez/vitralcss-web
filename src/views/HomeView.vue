<template>
    <header>
        <div class="Water-Panel-10 title-box">
            <p class="subtittle">Where nature and design unite again with</p>
            <h1 class="tittle">VitralCSS</h1>
            <p class="subtitle">Inspired by nature, designed for tomorrow</p>

            <div class="cta-container">
                <div class="Glass-Panel-10 with-hover code-box">
                    <code>$ npm i vitracss</code>
                    <button @click="CopyCode()">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1z"/>
                            <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>
                        </svg>
                    </button>
                </div>

                <router-link to="/Docs" class="Glass-Panel-10 with-hover docs-link">
                    <span>Read The Docs</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
                    </svg>
                </router-link>
            </div>
        </div>
    </header>
    <GetStarted />
    <WhyVitralCSS />
    <HomeFeatures />

    <!-- jasja -->
</template>

<script>
import GetStarted from './home/GetStarted.vue';
import WhyVitralCSS from './home/WhyVitralCSS.vue';
import HomeFeatures from './home/HomeFeatures.vue';

export default {
    name: 'HomeView',
    components: {
        GetStarted,
        WhyVitralCSS,
        HomeFeatures
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
}

.title-box {
    text-align: center;
    color: #F2FFFF;
    font-family: 'frutiger';
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 91, 133, 0.2);
}

.title-box p:first-of-type {
    opacity: 0.9;
}

.title-box h1 {
    font-weight: bold;
    text-shadow: 0 0 20px rgba(255,255,255,0.3);
}


.cta-container {
    width: 100%;
    display: flex;
    justify-content: space-around;

}

.code-box {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: rgba(0, 0, 0, 0.514);
}

.code-box code {
    font-family: 'frutiger';
    color: aliceblue;
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
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: rgba(0, 0, 0, 0.137);
    color: aliceblue;
    text-decoration: none;
}

/* ============================================
   MEDIAS QUERIES - HOME
   ============================================ */

/* #1 - Móvil pequeño - Landscape */
@media screen and (min-width: 320px) and (orientation: landscape) {
    /* Ajustes para móvil pequeño landscape */
    header{
        height: 120vh;
        width: 100vw;
    }

    .title-box{
        width: 90%;
    }

    .subtittle{
        font-size: 20px;
    }

    .tittle{
        font-size: 40px;
    }

    .code-box{
        width: 45%;
        height: 1vh;
    }

    .code-box code{
        width: 80%;
        font-size: 18px;
        text-align: left;
    }
    
    .code-box button{
        width: 20%;
        justify-content: end;
    }

    .docs-link{
        width: 45%;
        height: 1vh;
    }

    .docs-link span{
        width: 80%;
        font-size: 18px;
        text-align: left;
    }

    .docs-link svg{
        width: 20%;
        justify-content: end;
    }
}

/* #2 - Móvil - Portrait */
@media screen and (min-width: 480px) {
    header{
        height: 120vh;
        width: 100vw;
    }

    .title-box{
        width: 90%;
    }

    .subtittle{
        font-size: 20px;
    }

    .tittle{
        font-size: 40px;
    }

    .code-box{
        width: 45%;
        height: 1vh;
    }

    .code-box code{
        width: 80%;
        font-size: 18px;
        text-align: left;
    }
    
    .code-box button{
        width: 20%;
        justify-content: end;
    }

    .docs-link{
        width: 45%;
        height: 1vh;
    }

    .docs-link span{
        width: 80%;
        font-size: 18px;
        text-align: left;
    }

    .docs-link svg{
        width: 20%;
        justify-content: end;
    }
}

/* #3 - Móvil - Landscape */
@media screen and (min-width: 480px) and (orientation: landscape) {
    /* Ajustes para móvil landscape */
    header{
        height: 120vh;
        width: 100vw;
    }

    .title-box{
        width: 90%;
    }

    .subtittle{
        font-size: 20px;
    }

    .tittle{
        font-size: 40px;
    }

    .code-box{
        width: 45%;
        height: 1vh;
    }

    .code-box code{
        width: 80%;
        font-size: 18px;
        text-align: left;
    }
    
    .code-box button{
        width: 20%;
        justify-content: end;
    }

    .docs-link{
        width: 45%;
        height: 1vh;
    }

    .docs-link span{
        width: 80%;
        font-size: 18px;
        text-align: left;
    }

    .docs-link svg{
        width: 20%;
        justify-content: end;
    }
}

/* #4 - Tablet - Portrait */
@media screen and (min-width: 768px) {
    header{
        height: 120vh;
        width: 100vw;
    }

    .title-box{
        width: 90%;
    }

    .subtittle{
        font-size: 20px;
    }

    .tittle{
        font-size: 40px;
    }

    .code-box{
        width: 45%;
        height: 1vh;
    }

    .code-box code{
        width: 80%;
        font-size: 18px;
        text-align: left;
    }
    
    .code-box button{
        width: 20%;
        justify-content: end;
    }

    .docs-link{
        width: 45%;
        height: 1vh;
    }

    .docs-link span{
        width: 80%;
        font-size: 18px;
        text-align: left;
    }

    .docs-link svg{
        width: 20%;
        justify-content: end;
    }
}

/* #5 - Tablet - Landscape */
@media screen and (min-width: 768px) and (orientation: landscape) {
    /* Ajustes para tablet landscape */
    header{
        height: 120vh;
        width: 100vw;
    }

    .title-box{
        width: 90%;
    }

    .subtittle{
        font-size: 20px;
    }

    .tittle{
        font-size: 40px;
    }

    .code-box{
        width: 45%;
        height: 1vh;
    }

    .code-box code{
        width: 80%;
        font-size: 18px;
        text-align: left;
    }
    
    .code-box button{
        width: 20%;
        justify-content: end;
    }

    .docs-link{
        width: 45%;
        height: 1vh;
    }

    .docs-link span{
        width: 80%;
        font-size: 18px;
        text-align: left;
    }

    .docs-link svg{
        width: 20%;
        justify-content: end;
    }
}

/* #6 - Desktop - Portrait */
@media screen and (min-width: 1024px) {
    header{
        height: 120vh;
        width: 100vw;
    }

    .title-box{
        width: 90%;
    }

    .subtittle{
        font-size: 20px;
    }

    .tittle{
        font-size: 40px;
    }

    .code-box{
        width: 45%;
        height: 1vh;
    }

    .code-box code{
        width: 80%;
        font-size: 18px;
        text-align: left;
    }
    
    .code-box button{
        width: 20%;
        justify-content: end;
    }

    .docs-link{
        width: 45%;
        height: 1vh;
    }

    .docs-link span{
        width: 80%;
        font-size: 18px;
        text-align: left;
    }

    .docs-link svg{
        width: 20%;
        justify-content: end;
    }
}

/* #7 - Desktop - Landscape */
@media screen and (min-width: 1024px) and (orientation: landscape) {
    /* Ajustes para desktop landscape */
    header{
        height: 120vh;
        width: 100vw;
    }

    .title-box{
        width: 90%;
    }

    .subtittle{
        font-size: 20px;
    }

    .tittle{
        font-size: 40px;
    }

    .code-box{
        width: 45%;
        height: 1vh;
    }

    .code-box code{
        width: 80%;
        font-size: 18px;
        text-align: left;
    }
    
    .code-box button{
        width: 20%;
        justify-content: end;
    }

    .docs-link{
        width: 45%;
        height: 1vh;
    }

    .docs-link span{
        width: 80%;
        font-size: 18px;
        text-align: left;
    }

    .docs-link svg{
        width: 20%;
        justify-content: end;
    }
}

/* #8 - Desktop grande - Portrait */
@media screen and (min-width: 1440px) {
    /* Ajustes para desktop grande portrait */
    header{
        height: 120vh;
        width: 100vw;
    }

    .title-box{
        width: 90%;
    }

    .subtittle{
        font-size: 20px;
    }

    .tittle{
        font-size: 40px;
    }

    .code-box{
        width: 45%;
        height: 1vh;
    }

    .code-box code{
        width: 80%;
        font-size: 18px;
        text-align: left;
    }
    
    .code-box button{
        width: 20%;
        justify-content: end;
    }

    .docs-link{
        width: 45%;
        height: 1vh;
    }

    .docs-link span{
        width: 80%;
        font-size: 18px;
        text-align: left;
    }

    .docs-link svg{
        width: 20%;
        justify-content: end;
    }
}

/* #9 - Desktop grande - Landscape */
@media screen and (min-width: 1440px) and (orientation: landscape) {
    /* Ajustes para desktop grande landscape */
    header{
        height: 120vh;
        width: 100vw;
    }

    .title-box{
        width: 90%;
    }

    .subtittle{
        font-size: 20px;
    }

    .tittle{
        font-size: 40px;
    }

    .code-box{
        width: 45%;
        height: 1vh;
    }

    .code-box code{
        width: 80%;
        font-size: 18px;
        text-align: left;
    }
    
    .code-box button{
        width: 20%;
        justify-content: end;
    }

    .docs-link{
        width: 45%;
        height: 1vh;
    }

    .docs-link span{
        width: 80%;
        font-size: 18px;
        text-align: left;
    }

    .docs-link svg{
        width: 20%;
        justify-content: end;
    }
}
</style>
