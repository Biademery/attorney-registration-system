<template>
  <div>
    <nav class="navbar">
      <router-link to="/" class="navbar-item"
        ><img src="./assets/icons/home.svg" alt=""
      /></router-link>
      <router-link to="/add" class="navbar-item">Adicionar</router-link>
      <router-link to="/all" class="navbar-item">Todos Advogados</router-link>
    </nav>

    <section class="section">
      <router-view />
    </section>

    <footer class="footer">
      <p>Copyright (c) 2023</p>
    </footer>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
};
</script>

<style scoped>
.navbar {
  background-color: #eeeeee;
  height: 54px;
  width: 100%;
  padding: 10px;
  display: flex;
  gap: 20px;
}
.navbar-item {
  text-decoration: none;
  color: #212121;
  margin-top: auto;
  margin-bottom: auto;
}
img {
  width: 40px;
}
.section {
  height: calc(100vh - 78px);
}
.footer {
  background-color: #eeeeee;
  text-align: center;
}
</style>
