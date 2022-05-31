<template>
  <div class="q-pa-md">
    <q-banner class="bg-primary text-white">
      <h6>Authentication Demo</h6>
    </q-banner>
    <button @click="authenticate(true)">Authenticated</button>
    <button @click="authenticate(false)">Unauthenticated</button>
    <div v-if="user">
      This user is authenticated
      <p>{{ user }}</p>
      <p>{{ repoURL }}</p>
    </div>
    <div v-else>This user is unauthenticated</div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'UserAuth',
  data() {
    return {
      user: null,
      repoURL: null,
    };
  },
  methods: {
    async authenticate(authenticate: boolean) {
      if (authenticate) {
        await axios
          .get('/user', {
            baseURL: 'https://api.github.com',
            headers: {
              Authorization: 'token ' + process.env.GITHUB_ACCESS_TOKEN,
            },
          })
          .then((response) => {
            if (response.data.plan !== null) {
              this.user = response.data.login;
              this.repoURL = response.data.repos_url;
            }
            console.log(response);
          })
          .catch(() => {
            this.user = null;
            this.repoURL = null;
          });
      } else {
        this.user = null;
        this.repoURL = null;
      }
    },
  },
});
</script>

Add "scoped" attribute to limit CSS to this component only
<style scoped></style>
