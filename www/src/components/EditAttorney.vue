<template>
  <div class="edit-form">
    <div v-if="currentAttorney" class="container">
      <h4>Editar Advogado</h4>
      <form>
        <div class="form-group">
          <label for="title">Nome</label>
          <input type="text" class="form-control" id="title" v-model="currentAttorney.name" />
        </div>

        <div class="form-group">
          <label for="email">E-mail</label>
          <input type="email" class="form-control" id="email" v-model="currentAttorney.email" />
        </div>

        <div class="form-group">
          <label for="description">CNA</label>
          <input type="text" class="form-control" id="cna" v-model="currentAttorney.cna" />
        </div>
      </form>

      <button type="submit" class="btn" @click="updateAttorney">
        Atualizar
      </button>

      <p>{{ message }}</p>
    </div>
  </div>
</template>
  
<script>
import http from "../http-common.js";

class AttorneyDataService {
  get(id) {
    return http.get(`/attorney/`);
  }

  update(id, data) {
    return http.put(`/attorney/${id}/`, data);
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
      const attorneyDataService = new AttorneyDataService();
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

      const attorneyDataService = new AttorneyDataService();
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
      const attorneyDataService = new AttorneyDataService();
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
.edit-form {
  height: calc(100vh - 78px);
  display: flex;
  justify-content: center;
  align-items: center;
}

label {
  font-size: 12px;
}

p {
  padding: 10px;
  text-align: center;
}
</style>