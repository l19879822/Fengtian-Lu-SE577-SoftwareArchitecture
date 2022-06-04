<template>
  <br />
  <div v-if="authToken">
    <div class="displayBox">
      <div class="leftBox">
        <div class="userItem"><img :src="imageURL" /></div>
        <div class="userItem"><b>Name: </b>{{ user }}</div>
        <div class="userItem"><b>User repo url: </b>{{ repoURL }}</div>
        <div class="userItem"><b>Last updated at: </b>{{ lastUpdated }}</div>
        <div class="userItem"><b>Email: </b>{{ email }}</div>
        <div class="userItem"><b>User self introduction: </b>{{ bio }}</div>
        <button type="button" v-on:click="logout">
          <span class="fa fa-github"></span> Logout
        </button>
      </div>
      <div class="rightBox">
        <div class="headerDisplay">
          <b class="itemParam id">ID</b>
          <b class="itemParam title">Title</b>
          <b class="itemParam language">Language</b>
          <b class="itemParam updatedTime">Updated Time</b>
        </div>
        <RepoListItem
          v-for="gist in gistList"
          :key="gist.name"
          :link="gist.name"
          :title="gist.name"
          :language="gist.language"
          :updatedTime="gist.updated_at"
          :id="gist.id"
        >
        </RepoListItem>
      </div>
    </div>
  </div>
  <div v-else>
    <p>This user is unauthenticated</p>
    <button type="button" v-on:click="loginGithub">
      <span class="fa fa-github"></span> Login with github
    </button>
  </div>
</template>

<script>
import axios from "axios";
import { defineComponent } from "vue";
import RepoListItem from "../components/RepoListItem.vue";

export default defineComponent({
  name: "AuthenticateUser",
  components: {
    RepoListItem,
  },
  data() {
    return {
      authToken: null,
      user: null,
      repoURL: null,
      lastUpdated: null,
      email: null,
      bio: null,
      imageURL: null,
      username: null,
      gistList: [],
    };
  },
  async mounted() {
    this.authToken = this.$cookies.get("Authorization");
    this.username = this.$cookies.get("username");
    if (this.authToken == null) {
      this.user = null;
      this.repoURL = null;
      this.lastUpdated = null;
      this.email = null;
      this.bio = null;
      this.imageURL = null;
    } else {
      await axios
        .get("https://api.github.com/users/" + this.username + "/repos")
        .then((response) => {
          this.gistList = response.data;
          console.log(this.gistList);
        });
      await axios
        .get("/user", {
          baseURL: "https://api.github.com",
          headers: {
            Authorization: "token " + this.authToken,
          },
        })
        .then((response) => {
          if (response.data.plan !== null) {
            this.user = response.data.name;
            this.repoURL = response.data.repos_url;
            this.lastUpdated = response.data.updated_at;
            this.email = response.data.email;
            this.bio = response.data.bio;
            this.imageURL = response.data.avatar_url;
          }
          console.log(response);
        })
        .catch(() => {
          this.user = null;
          this.repoURL = null;
          this.lastUpdated = null;
          this.email = null;
          this.bio = null;
          this.imageURL = null;
        });
    }
    console.log(this.authToken);
  },
  methods: {
    loginGithub() {
      window.location = "http://localhost:3000/auth/github";
    },
    logout() {
      window.location = "http://localhost:3000/logout";
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
p {
  font: 10px;
}
.userItem {
  margin-bottom: 5px;
}
.headerDisplay {
  display: flex;
  padding-bottom: 40px;
  border-bottom: 1px solid grey;
  padding-top: 20px;
}
.itemParam {
  display: inline;
  position: absolute;
}
.id {
  left: 10%;
}
.title {
  left: 30%;
}
.language {
  left: 60%;
}
.updatedTime {
  left: 75%;
}
.leftBox {
  margin-left: 5%;
  width: 30%;
  float: left;
  left: 10%;
  text-align: left;
}
.rightBox {
  width: 60%;
  float: left;
  position: relative;
  margin-right: 5%;
}
.displayBox {
  display: inline;
}
</style>
