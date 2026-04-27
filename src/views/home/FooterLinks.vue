<template>
    <footer class="site-footer">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="Fog-Panel-6 footer-content">
                        <div class="row">
                            <div class="col-12 col-md-4 footer-section">
                                <h4>Quick Links</h4>
                                <ul class="footer-links">
                                    <li><router-link to="/Docs">Documentation</router-link></li>
                                    <li><router-link to="/Examples">Examples</router-link></li>
                                    <li><router-link to="/Playground">Playground</router-link></li>
                                    <li><router-link to="/Blog">Blog</router-link></li>
                                </ul>
                            </div>
                            <div class="col-12 col-md-4 footer-section">
                                <h4>Resources</h4>
                                <ul class="footer-links">
                                    <li><a href="https://github.com/UlisesPLopez/vitralcss" target="_blank">GitHub</a></li>
                                    <li><a href="https://www.npmjs.com/package/vitracss" target="_blank">npm Package</a></li>
                                    <li><a href="https://github.com/UlisesPLopez/vitralcss/releases" target="_blank">Changelog</a></li>
                                    <li><a href="https://github.com/UlisesPLopez/vitralcss/blob/main/LICENSE" target="_blank">License</a></li>
                                </ul>
                            </div>
                            <div class="col-12 col-md-4 footer-section">
                                <h4>Connect</h4>
                                <div class="social-links">
                                    <a href="https://github.com/UlisesPLopez/vitralcss" target="_blank" class="social-link Glass-Panel-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                        </svg>
                                    </a>
                                </div>
                                <p class="copyright">
                                    Made with ❤️ by <a href="https://github.com/UlisesPLopez" target="_blank">Ulises</a>
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 footer-bottom">
                                <p>© {{ currentYear }} VitralCSS. Released under MIT License.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterLinks',
    computed: {
        currentYear() {
            return new Date().getFullYear()
        }
    }
}
</script>

<style scoped>
.site-footer {
    margin-top: 40px;
}

.footer-content {
    padding: 30px 20px;
    background-color: rgba(0, 0, 0, 0.4);
}

.footer-section {
    margin-bottom: 25px;
    text-align: center;
}

.footer-section h4 {
    color: aliceblue;
    font-family: 'frutiger';
    font-weight: bold;
    margin-bottom: 15px;
    text-shadow: 0 0 10px rgb(104, 104, 104);
}

.footer-links {
    list-style: none;
    padding: 0;
    margin: 0;
}

.footer-links li {
    margin-bottom: 8px;
}

.footer-links a {
    color: aliceblue;
    text-decoration: none;
    font-family: 'frutiger';
    transition: color 0.2s;
}

.footer-links a:hover {
    color: #4fc3f7;
    text-decoration: underline;
}

.social-links {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 15px;
}

.social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: aliceblue;
    text-decoration: none;
    transition: transform 0.2s;
}

.social-link:hover {
    transform: scale(1.1);
}

.copyright {
    color: aliceblue;
    font-family: 'frutiger';
    font-size: 14px;
    margin: 0;
}

.copyright a {
    color: #4fc3f7;
    text-decoration: none;
}

.copyright a:hover {
    text-decoration: underline;
}

.footer-bottom {
    margin-top: 25px;
    padding-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    text-align: center;
}

.footer-bottom p {
    color: rgba(255, 255, 255, 0.6);
    font-family: 'frutiger';
    font-size: 13px;
    margin: 0;
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
    .footer-section {
        margin-bottom: 0;
        text-align: left;
    }
    
    .social-links {
        justify-content: flex-start;
    }
    
    .footer-bottom {
        text-align: center;
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