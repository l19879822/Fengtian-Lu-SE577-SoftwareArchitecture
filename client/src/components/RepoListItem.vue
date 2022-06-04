<template>
  <div>
    <router-link class="listItem" :to="{ path: '/repolist/' + link }">
      <div class="itemParam id">{{ id }}</div>
      <div class="itemParam title">{{ title }}</div>
      <div class="itemParam language">{{ language }}</div>
      <div class="itemParam updatedTime">{{ updatedTime }}</div>
    </router-link>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "RepoListItem",
  props: {
    title: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      default: "",
    },
    link: {
      type: String,
      default: "#",
    },
    language: {
      type: String,
      default: "",
    },
    updatedTime: {
      type: String,
      default: "",
    },
  },
});
</script>

<style>
.listItem {
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
a {
  color: #2c3e50;
}
</style>
