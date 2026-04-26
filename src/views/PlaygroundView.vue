<template>
  <div class="under-construction ice-theme">
    <div class="container">
      <i class="fa-solid fa-code icon"></i>
      <h1>Playground</h1>
      <p>Experiment and test VitralCSS components in real-time.</p>
      <router-link to="/vitralcss-web/" class="btn-home Glass-Panel-5 with-hover">
        <i class="fa-solid fa-house"></i> Back to Home
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlaygroundView'
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
  background: linear-gradient(135deg, #1e3a5f, #2563eb, #60a5fa);
}

.container {
  text-align: center;
  max-width: 600px;
}

.icon {
  font-size: 80px;
  color: #bfdbfe;
  margin-bottom: 30px;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 0.9; }
  50% { transform: scale(1.05); opacity: 1; }
}

h1 {
  font-family: 'frutiger';
  font-size: 48px;
  font-weight: 900;
  color: #eff6ff;
  margin-bottom: 20px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

p {
  font-family: 'frutiger';
  font-size: 20px;
  color: #dbeafe;
  margin-bottom: 40px;
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
}

.btn-home {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 35px;
  color: #eff6ff;
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
