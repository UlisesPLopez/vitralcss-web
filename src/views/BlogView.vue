<template>
  <div class="under-construction fog-theme">
    <div class="container">
      <i class="fa-solid fa-blog icon"></i>
      <h1>Blog</h1>
      <p>Updates, tutorials and insights about VitralCSS and Frutiger Aero design.</p>
      <router-link to="/vitralcss-web/" class="btn-home Glass-Panel-5 with-hover">
        <i class="fa-solid fa-house"></i> Back to Home
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogView'
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

.fog-theme {
  background: linear-gradient(135deg, #2c3e50, #34495e, #7f8c8d);
}

.container {
  text-align: center;
  max-width: 600px;
}

.icon {
  font-size: 80px;
  color: #bdc3c7;
  margin-bottom: 30px;
  animation: drift 4s ease-in-out infinite;
}

@keyframes drift {
  0%, 100% { opacity: 0.7; transform: translateX(0); }
  50% { opacity: 1; transform: translateX(10px); }
}

h1 {
  font-family: 'frutiger';
  font-size: 48px;
  font-weight: 900;
  color: #ecf0f1;
  margin-bottom: 20px;
  text-shadow: 0 0 20px rgba(189, 195, 199, 0.5);
}

p {
  font-family: 'frutiger';
  font-size: 20px;
  color: #bdc3c7;
  margin-bottom: 40px;
}

.btn-home {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 35px;
  color: #ecf0f1;
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
