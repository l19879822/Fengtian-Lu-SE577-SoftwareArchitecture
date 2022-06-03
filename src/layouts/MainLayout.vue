<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar
        ><q-toolbar-title> Fengtian Lu SE-577 project </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <div id="navlinks">
        <div id="nav">
          <router-link to="/myrepositories">Github Repositories</router-link> |
          <router-link to="/gistDisplay">Github Gist Display</router-link> |
          <router-link to="/authentication">Authentication</router-link> |
        </div>
      </div>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style>
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
</style>
