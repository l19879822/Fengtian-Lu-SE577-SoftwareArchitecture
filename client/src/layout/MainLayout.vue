<template>
  <div class="header">
    <b class="headerTitle">Fengtian Lu SE-577 Project</b>
  </div>
  <div id="navlinks">
    <div id="nav">
      <router-link to="/">Home Page</router-link> |
      <router-link to="/gistDisplay">Github Gist Display</router-link> |
      <router-link to="/authentication">Authentication</router-link> |
    </div>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "MainLayout",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#navlinks {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.header {
  background-color: #1976d2;
  flex: block;
  color: white;
  style: bold;
  height: 50px;
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  text-align: left;
  padding-top: 15px;
}
.headerTitle {
  font-size: 25px;
  margin-left: 1%;
  vertical-align: middle;
}
</style>
