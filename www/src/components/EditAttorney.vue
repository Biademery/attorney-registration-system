<template>
<div class="container">
  <div v-if="currentAttorney" class="edit-form">
      <h4>Editar Advogado</h4>
      <form>
        <div class="form-group">
          <label for="title">Nome</label>
          <input
            type="text"
            class="form-control"
            id="title"
            v-model="currentAttorney.name"
          />
        </div>
  
        <div class="form-group">
          <label for="email">E-mail</label>
          <input
            type="email"
            class="form-control"
            id="email"
            v-model="currentAttorney.email"
          />
        </div>
  
        <div class="form-group">
          <label for="description">CNA</label>
          <input
            type="text"
            class="form-control"
            id="cna"
            v-model="currentAttorney.cna"
          />
        </div>
      </form>
  
      <button
        type="submit"
        class="btn"
        @click="updateAttorney"
      >
        Atualizar
      </button>
  
      <p>{{ message }}</p>
    </div>
</div>
  </template>
  
  <script>
import http from '../http-common.js';

class AttorneyDataService {
    get(id) {
        return http.get(`/api/attorney/`);
    }

    update(id, data) {
        return http.put(`/api/attorney/${id}/`, data);
    }
}
  
  export default {
    name: "edit-attorney",
    data() {
      return {
        currentAttorney: null,
        message: "",
      };
    },
    methods: {
      getAttorney(id) {
        const attorneyDataService = new AttorneyDataService
        attorneyDataService
          .get(id)
          .then((response) => {
            this.currentAttorney = response.data[0];
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
      },
  
      updatePublished(status) {
        var data = {
          id: this.currentAttorney.id,
          name: this.currentAttorney.name,
          email: this.currentAttorney.email,
          cna: this.currentAttorney.cna,
          published: status,
        };
  
        const attorneyDataService = new AttorneyDataService
        attorneyDataService
          .update(this.currentAttorney.id, data)
          .then((response) => {
            this.currentAttorney.published = status;
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
      },
  
      updateAttorney() {
        const attorneyDataService = new AttorneyDataService
        attorneyDataService
          .update(this.currentAttorney.id, this.currentAttorney)
          .then((response) => {
            console.log(response.data);
            this.message = "Advogado atualizado com sucesso.";
          })
          .catch((e) => {
            console.log(e);
          });
      },
    },
    mounted() {
      this.message = "";
      this.getAttorney(this.$route.params.id);
    },
  };
  </script>
  
  <style scoped>

.container {
    height: calc(100vh - 78px);
    display: flex;
    justify-content: center;
    align-items: center;

  }
  .edit-form {
    min-width: 400px;
    min-height: 400px;
    border-radius: 30px;
    background-color: #eeeeee;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
}
h4 {
    text-align: center;
    font-size: 20px;
    padding: 15px;
    margin: auto;
    font-weight: 500;
}

input {
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
    border-bottom: 1px solid #212121;
    height: 20px;
    font-size: 16px;
    margin-bottom: 25px;
}
label {
    font-size: 12px;
}
.btn {
  background-color: #7fffd4;
  border: none;
  border-radius: 30px;
  padding: 10px 20px;
  cursor: pointer;
  width: fit-content;
  margin: auto;
  transition: 0.2s;
}
.btn:hover {
  background-color: #77eec6;
  transition: 0.2s;
}
p {
  padding: 10px;
  text-align: center;
}
  </style>