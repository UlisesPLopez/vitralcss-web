<template>
    <section class="demo-preview">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="Glass-Panel-10 header-panel">
                        <h2>✨ Try It Yourself ✨</h2>
                        <p class="subtitle">See it in action, customize and copy the code</p>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-12 col-md-10">
                    <div class="Glass-Panel-3 demo-box">
                        <div class="row">
                            <div class="col-12 col-md-4">
                                <div class="control-group">
                                    <label>Element</label>
                                    <div class="btn-group">
                                        <button 
                                            v-for="elem in elements" 
                                            :key="elem"
                                            :class="['Glass-Panel-5', 'selector-btn', { active: selectedElement === elem }]"
                                            @click="selectedElement = elem"
                                        >
                                            {{ elem }}
                                        </button>
                                    </div>
                                </div>
                                <div class="control-group">
                                    <label>Variant</label>
                                    <div class="variant-selector">
                                        <button 
                                            v-for="n in 10" 
                                            :key="n"
                                            :class="['Glass-Panel-5', 'variant-btn', { active: selectedVariant === n }]"
                                            @click="selectedVariant = n"
                                        >
                                            {{ n }}
                                        </button>
                                    </div>
                                </div>
                                <div class="control-group">
                                    <label>Hover Effect</label>
                                    <div class="toggle-container">
                                        <button 
                                            :class="['Glass-Panel-5', 'toggle-btn', { active: withHover }]"
                                            @click="withHover = !withHover"
                                        >
                                            {{ withHover ? 'ON' : 'OFF' }}
                                        </button>
                                    </div>
                                </div>
                                <div class="control-group">
                                    <label>Background Color</label>
                                    <div class="color-controls">
                                        <input 
                                            type="color" 
                                            v-model="bgColor" 
                                            class="color-picker"
                                        >
                                        <input 
                                            type="range" 
                                            v-model="bgOpacity" 
                                            min="0" 
                                            max="1" 
                                            step="0.1"
                                            class="opacity-slider"
                                        >
                                        <span class="opacity-value">{{ bgOpacity }}</span>
                                    </div>
                                    <p class="color-hint">Add color + transparency to your panel!</p>
                                    <p class="default-note">Default: dark tone (black 50%)</p>
                                </div>
                                <div class="control-group">
                                    <label>Layer Mode</label>
                                    <div class="toggle-container">
                                        <button 
                                            :class="['Glass-Panel-5', 'toggle-btn', { active: layerMode }]"
                                            @click="layerMode = !layerMode"
                                        >
                                            {{ layerMode ? 'ON' : 'OFF' }}
                                        </button>
                                    </div>
                                    <p class="layer-hint" v-if="layerMode">Add multiple panels to see overlapping effects!</p>
                                </div>
                                <div class="control-group" v-if="layerMode">
                                    <label>Layers: {{ layerCount }}</label>
                                    <div class="layer-controls">
                                        <button 
                                            class="Glass-Panel-5 layer-btn"
                                            @click="layerCount = Math.max(1, layerCount - 1)"
                                            :disabled="layerCount <= 1"
                                        >
                                            -
                                        </button>
                                        <button 
                                            class="Glass-Panel-5 layer-btn"
                                            @click="layerCount = Math.min(4, layerCount + 1)"
                                            :disabled="layerCount >= 4"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-8">
                                    <div class="preview-area">
                                        <div v-if="layerMode" class="layer-container">
                                            <div 
                                                v-for="i in layerCount" 
                                                :key="i"
                                                :class="[getLayerClass(i), { 'with-hover': withHover }]"
                                                :style="getLayerStyle(i)"
                                            >
                                                <span class="layer-label">Layer {{ i }}</span>
                                            </div>
                                        </div>
                                        <div v-else :class="previewClass" class="single-preview" :style="previewStyle">
                                            <span class="preview-text">Hover me!</span>
                                        </div>
                                    </div>
                                <div class="code-output">
                                    <div class="Glass-Panel-5 code-display">
                                        <code v-if="layerMode">{{ generatedLayerCode }}</code>
                                        <code v-else>{{ generatedCode }}</code>
                                        <button class="copy-btn" @click="copyCode">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>
                                                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'DemoPreview',
    data() {
        return {
            elements: ['Glass', 'Water', 'Ice', 'Fog', 'Fire'],
            selectedElement: 'Glass',
            selectedVariant: 5,
            withHover: true,
            layerMode: false,
            layerCount: 2,
            bgColor: '#000000',
            bgOpacity: 0.5
        }
    },
    computed: {
        previewClass() {
            let cls = `${this.selectedElement}-Panel-${this.selectedVariant}`
            if (this.withHover) cls += ' with-hover'
            return cls
        },
        previewStyle() {
            return {
                backgroundColor: `rgba(${this.hexToRgb(this.bgColor)}, ${this.bgOpacity})`
            }
        },
        generatedCode() {
            let code = `${this.selectedElement}-Panel-${this.selectedVariant}`
            if (this.withHover) code += ' with-hover'
            if (this.bgColor !== '#000000' || this.bgOpacity !== 0.5) {
                code += `\nstyle="background-color: rgba(${this.hexToRgb(this.bgColor)}, ${this.bgOpacity})"`
            }
            return code
        },
        generatedLayerCode() {
            let code = ''
            for (let i = 1; i <= this.layerCount; i++) {
                code += `<div class="${this.selectedElement}-Panel-${this.selectedVariant}${this.withHover ? ' with-hover' : ''} layer-${i}"></div>\n`
            }
            return code.trim()
        }
    },
    methods: {
        hexToRgb(hex) {
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
            return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : '0, 0, 0'
        },
        getLayerClass() {
            return `${this.selectedElement}-Panel-${this.selectedVariant}`
        },
        getLayerStyle(i) {
            const offset = (i - 1) * 30
            return {
                position: 'absolute',
                top: `${20 + offset}px`,
                left: `${20 + offset}px`,
                width: `calc(100% - ${40 + offset * 2}px)`,
                height: `calc(100% - ${40 + offset * 2}px)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }
        },
        copyCode() {
            const textToCopy = this.layerMode ? this.generatedLayerCode : `<div class="${this.generatedCode}"></div>`
            if (navigator.clipboard) {
                navigator.clipboard.writeText(textToCopy).then(() => {
                    alert('Code copied to clipboard!')
                })
            }
        }
    }
}
</script>

<style scoped>
.demo-preview {
    padding: 40px 0;
}

.header-panel {
    text-align: center;
    margin-bottom: 30px;
}

.header-panel h2 {
    font-family: 'frutiger';
    font-weight: bold;
    color: aliceblue;
    text-shadow: 0 0 10px rgb(104, 104, 104);
    margin-bottom: 10px;
}

.subtitle {
    color: aliceblue;
    text-shadow: 0 0 10px rgb(104, 104, 104);
    font-family: 'frutiger';
}

.demo-box {
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.3);
}

.control-group {
    margin-bottom: 20px;
}

.control-group label {
    display: block;
    color: aliceblue;
    font-family: 'frutiger';
    margin-bottom: 8px;
    font-weight: bold;
}

.btn-group {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
}

.selector-btn {
    padding: 8px 12px;
    font-size: 12px;
    cursor: pointer;
    border: none;
    color: aliceblue;
    transition: transform 0.2s;
}

.selector-btn.active {
    transform: scale(1.1);
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
}

.variant-selector {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
}

.variant-btn {
    padding: 6px 10px;
    font-size: 11px;
    cursor: pointer;
    border: none;
    color: aliceblue;
    min-width: 35px;
}

.variant-btn.active {
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
    transform: scale(1.1);
}

.toggle-btn {
    padding: 8px 20px;
    cursor: pointer;
    border: none;
    color: aliceblue;
    font-family: 'frutiger';
    font-weight: bold;
}

.toggle-btn.active {
    background-color: rgba(0, 200, 100, 0.5);
}

.color-controls {
    display: flex;
    align-items: center;
    gap: 10px;
}

.color-picker {
    width: 40px;
    height: 35px;
    border: none;
    cursor: pointer;
    background: none;
}

.color-picker::-webkit-color-swatch-wrapper {
    padding: 0;
}

.color-picker::-webkit-color-swatch {
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 5px;
}

.opacity-slider {
    flex: 1;
    height: 8px;
    cursor: pointer;
    accent-color: #4fc3f7;
}

.opacity-value {
    color: aliceblue;
    font-family: 'frutiger';
    font-size: 14px;
    min-width: 30px;
    text-align: center;
}

.color-hint {
    color: aliceblue;
    font-size: 11px;
    font-family: 'frutiger';
    opacity: 0.7;
    margin-top: 6px;
    text-align: center;
}

.default-note {
    color: rgba(255, 255, 255, 0.5);
    font-size: 10px;
    font-family: 'frutiger';
    text-align: center;
    margin-top: 4px;
}

.preview-area {
    position: relative;
    min-height: 250px;
    background-image: url('../../assets/images/FrutigerFruitsBG.webp');
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 20px;
}

.layer-container {
    position: relative;
    width: 100%;
    height: 250px;
}

.layer-container > div {
    background-color: rgba(0, 0, 0, 0.2);
}

.preview-text {
    color: aliceblue;
    font-family: 'frutiger';
    font-size: 18px;
    text-shadow: 0 0 10px rgb(104, 104, 104);
}

.code-output {
    margin-top: 15px;
}

.code-display {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 12px;
}

.code-display code {
    font-family: 'frutiger';
    color: aliceblue;
    font-size: 14px;
    overflow-x: auto;
    white-space: nowrap;
}

.copy-btn {
    background: transparent;
    border: none;
    color: aliceblue;
    cursor: pointer;
    padding: 5px;
    display: flex;
    align-items: center;
    transition: transform 0.2s;
}

.copy-btn:hover {
    transform: scale(1.1);
}

.layer-hint {
    color: aliceblue;
    font-size: 12px;
    font-family: 'frutiger';
    opacity: 0.8;
    margin-top: 8px;
    text-align: center;
}

.layer-controls {
    display: flex;
    gap: 10px;
    justify-content: center;
}

.layer-btn {
    padding: 8px 15px;
    cursor: pointer;
    border: none;
    color: aliceblue;
    font-family: 'frutiger';
    font-size: 16px;
}

.layer-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.layer-label {
    color: aliceblue;
    font-family: 'frutiger';
    font-size: 14px;
    text-shadow: 0 0 10px rgb(104, 104, 104);
    font-weight: bold;
}

.single-preview {
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.2);
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
    .control-group {
        margin-bottom: 15px;
    }
}

/* #3 - Desktop 1024px+ */
@media screen and (min-width: 1024px) {
    .preview-area {
        margin-bottom: 0;
    }
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