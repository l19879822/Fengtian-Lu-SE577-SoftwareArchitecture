<template>
  <div class="q-pa-md">
    <q-banner class="bg-primary text-white">
      <h6>Authentication Demo</h6>
    </q-banner>
    <button @click="authenticate(true)">Authenticated</button>
    <button @click="authenticate(false)">Unauthenticated</button>
    <div v-if="user" style="margin-top: 50px">
      <div>This user is authenticated, User information as below:</div>
      <div class style="margin-top: 20px">
        Name:
        <p>{{ user }}</p>
      </div>
      <div>
        User repo url:
        <p>{{ repoURL }}</p>
      </div>
      <div>
        Last updated at:
        <p>{{ lastUpdated }}</p>
      </div>
      <div>
        Email:
        <p>{{ email }}</p>
      </div>
      <div>
        User self introduction:
        <p>{{ bio }}</p>
      </div>
    </div>
    <div v-else style="margin-top: 50px">This user is unauthenticated</div>
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
      lastUpdated: null,
      email: null,
      bio: null,
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
              this.user = response.data.name;
              this.repoURL = response.data.repos_url;
              this.lastUpdated = response.data.updated_at;
              this.email = response.data.email;
              this.bio = response.data.bio;
            }
            console.log(response);
          })
          .catch(() => {
            this.user = null;
            this.repoURL = null;
            this.lastUpdated = null;
            this.email = null;
            this.bio = null;
          });
      } else {
        this.user = null;
        this.repoURL = null;
        this.lastUpdated = null;
        this.email = null;
        this.bio = null;
      }
    },
  },
});
</script>

Add "scoped" attribute to limit CSS to this component only
<style scoped></style>
