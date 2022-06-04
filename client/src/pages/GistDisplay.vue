<template>
  <div class="q-pa-md">
    <div>Github gist hello world file content as below:</div>
    <div class style="margin-top: 20px">
      Hello World in Java:
      <p>{{ helloWorldTxt }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { defineComponent } from "vue";
export default defineComponent({
  name: "GistDisplay",
  data() {
    return {
      helloWorldTxt: null,
    };
  },
  async mounted() {
    await axios
      .get("/gists/511c15215ac0a2c9a7f649b33575c2f0", {
        baseURL: "https://api.github.com",
      })
      .then((response) => {
        this.helloWorldTxt = response.data.files.helloworld.content;
        console.log(response);
      })
      .catch(() => {
        this.helloWorldTxt = null;
      });
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
