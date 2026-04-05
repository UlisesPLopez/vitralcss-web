<template>
  <div class="under-construction water-theme">
    <div class="container">
      <i class="fa-solid fa-layer-group icon"></i>
      <h1>Examples</h1>
      <p>Discover what's possible with VitralCSS through practical examples.</p>
      <router-link to="/" class="btn-home Glass-Panel-5 with-hover">
        <i class="fa-solid fa-house"></i> Back to Home
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExamplesView'
}
</script>

<style scoped>
.under-construction {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 20px 40px;
}

.water-theme {
  background: linear-gradient(135deg, #0a3d62, #1e5f74, #148f77);
}

.container {
  text-align: center;
  max-width: 600px;
}

.icon {
  font-size: 80px;
  color: #60d9f7;
  margin-bottom: 30px;
  animation: wave 3s ease-in-out infinite;
}

@keyframes wave {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

h1 {
  font-family: 'frutiger';
  font-size: 48px;
  font-weight: 900;
  color: #e0f7fa;
  margin-bottom: 20px;
  text-shadow: 0 0 20px rgba(96, 217, 247, 0.5);
}

p {
  font-family: 'frutiger';
  font-size: 20px;
  color: #b2ebf2;
  margin-bottom: 40px;
}

.btn-home {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 35px;
  color: #e0f7fa;
  text-decoration: none;
  font-family: 'frutiger';
  font-size: 18px;
  transition: all 0.3s ease;
}

.btn-home:hover {
  transform: scale(1.05);
  color: #fff;
}

@media (max-width: 767px) {
  .icon {
    font-size: 60px;
  }
  h1 {
    font-size: 36px;
  }
  p {
    font-size: 18px;
  }
}
</style>
