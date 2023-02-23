<template>
  <div class="submit-form">
    <div v-if="!submitted" class="container">
      <h3>Adicionar Advogado</h3>

      <div class="form-group">
        <input type="text" id="name" required v-model="attorney.name" name="name" />
        <span>Nome</span>
      </div>

      <div class="form-group">
        <input id="email" type="email" required v-model="attorney.email" name="email" />
        <span>E-mail</span>
      </div>

      <div class="form-group">
        <input id="cna" required v-model="attorney.cna" name="cna" />
        <span>CNA</span>
      </div>

      <button @click="saveAttorney" class="btn">Adicionar</button>
    </div>

    <div v-else>
      <p>Advogado adicionao com sucesso!</p>
    </div>
  </div>
</template>
  
<script>
import http from "../http-common.js";

class AttorneyDataService {
  create(data) {
    return http.post("/attorney/", data);
  }
}
export default {
  name: "add-attorney",
  data() {
    return {
      attorney: {
        id: null,
        name: "",
        email: "",
        cna: "",
      },
      submitted: false,
    };
  },
  methods: {
    saveAttorney() {
      const data = {
        name: this.attorney.name,
        email: this.attorney.email,
        cna: this.attorney.cna,
      };
      const attorneyDataService = new AttorneyDataService();
      attorneyDataService
        .create(data)
        .then((response) => {
          this.attorney.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    newAttorney() {
      this.submitted = false;
      this.attorney = {};
    },
  },
};
</script>
  
<style scoped>
.submit-form {
  height: calc(100vh - 78px);
  display: flex;
  justify-content: center;
  align-items: center;
}

h3 {
  text-align: center;
  font-size: 20px;
  padding: 15px;
  margin: auto;
  font-weight: 500;
}

.form-group {
  position: relative;
}

span {
  position: absolute;
  left: 2px;
  pointer-events: none;
  transition: 0.5s;
  opacity: 0.7;
  font-size: 16px;
}

input:focus~span,
input:valid~span {
  transform: translateY(-20px);
  font-size: 12px;
  opacity: 1;
}

p {
  padding: 10px;
  text-align: center;
}
</style>