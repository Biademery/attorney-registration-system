<template>
  <div>
    <nav class="navbar">
      <div class="navbar-brand">
        <router-link to="/"><img src="./assets/icons/loginIcon.png" alt=""></router-link>
      </div>
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
import axios from 'axios';

export default {
  name: 'App',
  beforeCreate() {
    this.$store.commit('initializeStore')

    const token = this.$store.state.token
  }
 }
</script>

<style scoped>
.navbar {
  background-color: #eeeeee;
  height: 54px;
}
.navbar-brand img {
  width: 50px;
  margin-left: 15px;
}
.footer {
  background-color: #eeeeee;
  text-align: center;
}
</style>
