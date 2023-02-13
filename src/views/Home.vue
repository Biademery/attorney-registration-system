<template>
<div class="home">
  <div class="container">
    <h1>Cadastro de Advogados</h1>

  <form class="form" @submit.prevent="submitForm">
    <div class="field">

      <span class="span">Nome Completo</span>
      <input type="text" name="name" class="input" v-model="name">
    </div>
    <div class="field">
      <span class="span">E-mail</span>
      <input type="email" name="email" class="input" v-model="email">     
    </div>
    <div class="field">
      <span class="span">CNA</span>
      <input type="text" name="cna" class="input" v-model="cna">
    </div>
    <div class="notification" v-if="errors.length">
      <p v-for="error in errors" :key="error">{{ error }}</p>
    </div>
    <div class="field">
      <div class="control">
      <button class="button">Cadastrar</button>
    </div>
  </div>
  </form>
  </div>
  <div class="attorney">
    <div class="box">
      <div class="info">
        <h2>{{ name }}arggw</h2>
        <p>{{ email }}srgs</p>
        <p>{{ cna }}aDFe</p>
      </div>

      <div class="icons">
        <a>
          <img src="../assets/icons/trashIcon.png" alt="Lixeira">
        </a>
        <img src="../assets/icons/editIcon.png" alt="Editar">
      </div>
    </div>
    
  </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'LogIn',
  data () {
    return {
      name: '',
      email: '',
      cna: '',
      errors: []
    }
  },
  methods: {
    submitForm(e) {
      axios.defaults.headers.common["Authorization"] = ""

      localStorage.removeItem("token")

      const formData = {
        name: this.name,
        email: this.email,
        cna: this.cna,
      }
      axios
        .post()
        .then(response => {

        })
    },
  }
}
</script>

<style scoped>
.home {
  height: calc(100vh - 78px);
  display: grid;
  grid-template-columns: 50% 50%;
  flex-direction: column;
  align-items: center;
} 

.container {
  background-color: #eeeeee;
  padding: 20px;
  min-width: 400px;
  min-height: 400px;
  text-align: center;
  border-radius: 30px;
  margin: 5%;
}
.input {
  width: 100%;
  height: 30px;
  outline: none;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid #212121;
}
.span {
  display: flex;
  font-size: 14px;
}
.field {
  margin: 40px 0;
}
.button {
  background-color: #7fffd4;
  border: none;
  border-radius: 30px;
  padding: 10px 20px;
  cursor: pointer;
} 
.attorney {
  display: flex;
  flex-direction: row;
  gap: 20px;
  flex-wrap: wrap;
}
.box{
  width: 200px;
  height: 200px;
  background-color: #eeeeee;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-radius: 30px;
}
.icons {
  width: 15px;
}
</style>