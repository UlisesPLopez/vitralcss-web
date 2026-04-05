<template>
    <header>
        <div class="Water-Panel-10 title-box">
            <p>Where nature and design unite again with</p>
            <h1>VitralCSS</h1>
            <p class="subtitle">Inspired by nature, designed for tomorrow</p>

            <div class="cta-container">
                <div class="Glass-Panel-10 with-hover code-box">
                    <code>npm i vitracss</code>
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
header {
    background-image: url('../assets/images/home-images/HomeBG.webp');
    background-size: cover;
    background-position: center;
    padding-top: 12vh;
    min-height: 90vh;
    width: 100%;
}

.title-box {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
    color: #F2FFFF;
    font-family: 'frutiger';
    padding: 2rem 1rem;
}

.title-box p:first-of-type {
    font-size: 1rem;
    opacity: 0.9;
}

.title-box h1 {
    font-size: 3rem;
    font-weight: bold;
    margin: 0.5rem 0;
    text-shadow: 0 0 20px rgba(255,255,255,0.3);
}

.title-box .subtitle {
    font-size: 1.2rem;
    margin-bottom: 2rem;
}

.cta-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
}

.code-box {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    background-color: rgba(0, 0, 0, 0.514);
    padding: 0.75rem 1.5rem;
    width: 100%;
    max-width: 400px;
}

.code-box code {
    font-family: 'frutiger';
    color: aliceblue;
    font-size: 0.9rem;
}

.code-box button {
    background-color: transparent;
    color: aliceblue;
    border: none;
    padding: 0;
    display: flex;
    align-items: center;
}

.docs-link {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    background-color: rgba(0, 0, 0, 0.137);
    color: aliceblue;
    padding: 0.75rem 1.5rem;
    width: 100%;
    max-width: 400px;
    text-decoration: none;
}

.docs-link span {
    font-size: 1rem;
}

@media (min-width: 768px) {
    .title-box h1 {
        font-size: 4.5rem;
    }

    .title-box p:first-of-type {
        font-size: 1.25rem;
    }

    .title-box .subtitle {
        font-size: 1.5rem;
    }

    .cta-container {
        flex-direction: row;
        justify-content: center;
    }

    .code-box code {
        font-size: 1.1rem;
    }

    .docs-link span {
        font-size: 1.1rem;
    }
}

@media (min-width: 992px) {
    .title-box h1 {
        font-size: 5rem;
    }

    .title-box {
        padding: 3rem 2rem;
    }
}
</style>
