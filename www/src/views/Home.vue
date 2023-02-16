<template>
<div class="home">
  <div class="container">
    <h1 class="title">Adicionar um novo Advogado</h1>
    <router-link to="/add"><button class="btn">Adicionar</button></router-link>
  </div>
</div>
</template>

<script>
export default {
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15%;
} 

.container {
  background-color: #eeeeee;
  padding: 20px;
  min-width: 200px;
  min-height: 200px;
  text-align: center;
  border-radius: 30px;
}
.title {
  font-weight: 500;
  padding: 20px;
}
.btn {
  background-color: #7fffd4;
  border: none;
  border-radius: 30px;
  padding: 10px 20px;
  cursor: pointer;
  margin: 5%;
  transition: 0.2s;
}
.btn:hover {
  background-color: #77eec6;
  transition: 0.2s;
}
</style>