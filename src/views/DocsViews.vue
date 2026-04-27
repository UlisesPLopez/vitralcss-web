<template>
  <div class="under-construction ice-theme">
    <div class="container">
      <i class="fa-solid fa-book icon"></i>
      <h1>Documentation</h1>
      <p>Complete guide to using VitralCSS in your projects.</p>
      <router-link to="/" class="btn-home Glass-Panel-5 with-hover">
        <i class="fa-solid fa-house"></i> Back to Home
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DocsView'
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

.ice-theme {
  background: linear-gradient(135deg, #0891b2, #06b6d4, #22d3ee);
}

.container {
  text-align: center;
  max-width: 600px;
}

.icon {
  font-size: 80px;
  color: #e0f2fe;
  margin-bottom: 30px;
  animation: sparkle 2s ease-in-out infinite;
}

@keyframes sparkle {
  0%, 100% { opacity: 1; transform: rotate(0deg); }
  25% { transform: rotate(5deg); }
  75% { transform: rotate(-5deg); }
}

h1 {
  font-family: 'frutiger';
  font-size: 48px;
  font-weight: 900;
  color: #f0f9ff;
  margin-bottom: 20px;
  text-shadow: 0 0 20px rgba(224, 242, 254, 0.5);
}

p {
  font-family: 'frutiger';
  font-size: 20px;
  color: #bae6fd;
  margin-bottom: 40px;
}

.btn-home {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 35px;
  color: #f0f9ff;
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
