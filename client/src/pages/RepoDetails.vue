<template>
  <div class="q-pa-md">
    <div v-if="authToken">
      <h2>Repoistory details as below:</h2>
      <p>Repository Name: {{ gistList.name }}</p>
      <p>Clone URL: {{ gistList.clone_url }}</p>
      <p>SSH URL: {{ gistList.ssh_url }}</p>
      <p>Visibility: {{ gistList.visibility }}</p>
      <p>Updated at: {{ gistList.updated_at }}</p>
    </div>
    <div v-else>Please login first</div>
  </div>
</template>

<script>
import axios from "axios";
import { defineComponent } from "vue";

export default defineComponent({
  name: "RepoDetails",
  data() {
    return {
      authToken: null,
      username: null,
      gistList: [],
    };
  },
  async mounted() {
    this.authToken = this.$cookies.get("Authorization");
    this.username = this.$cookies.get("username");
    if (this.authToken == null) {
      console.log("Please login");
    } else {
      let repoID = this.$route.params.repoID;
      console.log(repoID);
      await axios
        .get("https://api.github.com/repos/" + this.username + "/" + repoID)
        .then((response) => {
          console.log(repoID);
          this.gistList = response.data;
          console.log(this.gistList);
        });
    }
  },
});
</script>
<style scoped></style>
