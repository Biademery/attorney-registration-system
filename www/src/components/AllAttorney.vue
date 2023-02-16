<template>
  <div class="list">
    <div>
      <h4>Todos advogados</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          v-for="(attorney, index) in attorneys"
          :key="index"
          @click="setActiveAttorney(attorney, index)"
        >
          {{ attorney.name }}
        </li>
      </ul>
    </div>
    <div>
      <div v-if="attorneys == 0">
        <p>Nenhum advogado adicionado</p>
      </div>
      <div class="container" v-if="currentAttorney">
        <h4>Advogado</h4>
        <div class="input">
          <label><strong>Nome:</strong></label> {{ currentAttorney.name }}
        </div>
        <div class="input">
          <label><strong>E-mail:</strong></label> {{ currentAttorney.email }}
        </div>
        <div class="input">
          <label><strong>CNA:</strong></label> {{ currentAttorney.cna }}
        </div>

        <div class="buttons">
          <router-link to="/edit">
            <img src="../assets/icons/edit.svg" alt="" />
          </router-link>

          <button class="btn" @click="deleteAttorney">
            <img src="../assets/icons/trash-2.svg" alt="" />
          </button>
        </div>
      </div>

      <div v-if="isAttorneyDeleted">
        <p>Advogado excluído com sucesso</p>
      </div>
    </div>
  </div>
</template>
  
<script>
import http from "../http-common.js";

class AttorneyDataService {
  getAll() {
    return http.get("/api/attorney/");
  }

  get(id) {
    return http.get(`/api/attorney/${id}/`);
  }

  delete(id) {
    return http.delete(`/api/attorney/${id}/`);
  }
}
export default {
  name: "attorney-list",
  data() {
    return {
      attorneys: [],
      currentAttorney: null,
      isAttorneyDeleted: null,
      currentIndex: -1,
      name: "",
    };
  },
  methods: {
    retrieveAttorney() {
      const attorneyDataService = new AttorneyDataService();
      attorneyDataService
        .getAll()
        .then((response) => {
          this.attorneys = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveAttorney();
      this.currentAttorney = null;
      this.currentIndex = -1;
      this.isAttorneyDeleted = null;
    },
    setActiveAttorney(attorney, index) {
      this.currentAttorney = attorney;
      this.currentIndex = index;
    },
    deleteAttorney() {
      const attorneyDataService = new AttorneyDataService();
      attorneyDataService
        .delete(this.currentAttorney.id)
        .then(() => {
          this.$router.push({ name: "attroney-list" });
          this.attorneys = this.attorneys.filter(
            (attorney) => attorney.id !== this.currentAttorney.id
          );
          this.currentAttorney = null;
          this.currentIndex = -1;
          this.isAttorneyDeleted = 1;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveAttorney();
  },
};
</script>
  
  <style scoped>
.container {
  min-width: 250px;
  min-height: 200px;
}
.list {
  height: calc(100vh - 78px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  flex-wrap: wrap;
}
.input {
  padding: 5px;
}
li {
  list-style: none;
  font-size: 18px;
  background-color: #eeeeee;
  border-radius: 30px;
  padding: 10px 20px;
  margin: 10px;
  cursor: pointer;
}
.buttons {
  text-align: end;
}
.btn {
  background-color: transparent;
}
.btn:hover {
  background-color: transparent;
}
</style>
