<template>
  <div class="q-pa-md">
    <q-banner class="bg-primary text-white">
      <h6>Gist Display Demo</h6>
    </q-banner>
    <p v-if="user">{{ user }}</p>
    <p v-if="gistURL">{{ gistURL }}</p>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'GistDisplay',
  data() {
    return {
      user: null,
      gistURL: null,
    };
  },
  async mounted() {
    await axios
      .get('/gists/511c15215ac0a2c9a7f649b33575c2f0', {
        baseURL: 'https://api.github.com',
        headers: {
          Authorization: 'token ' + process.env.GITHUB_ACCESS_TOKEN,
        },
      })
      .then((response) => {
        this.user = response.data.owner.login;
        this.gistURL = response.data.git_pull_url;
        console.log(response);
      })
      .catch(() => {
        this.user = null;
        this.gistURL = null;
      });
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
