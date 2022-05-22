<template>
  <div class="q-pa-md">
    <q-banner class="bg-primary text-white">
      <h6>GitHubDemo</h6>
    </q-banner>
    <div class="row">
      <q-table
        title="GitHub Data"
        dense
        :rows="rows"
        :columns="columns"
        row-key="id"
      />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'GitHubPage',
};
</script>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { rowType } from '../types/rowType';
import things from '../../data/GithubRepo.yaml';

let rowData = Object.entries(things);

type rowType = {
  id: string;
  name: string;
  url: string;
  language: string;
  updated_at: string;
};

const columns = [
  { name: 'id', label: 'ID', align: 'left', field: 'id', sortable: true },
  { name: 'name', label: 'name', align: 'left', field: 'name', sortable: true },
  { name: 'url', label: 'URL', align: 'left', field: 'url', sortable: true },
  { name: 'language', label: 'Language', align: 'left', field: 'language' },
  { name: 'updated_at', label: 'Updated', align: 'left', field: 'updated_at' },
];
let rows = ref([] as rowType[]);

onMounted(async () => {
  rows.value = [];
  const resList = rowData.map((row) => {
    const mappedRow: rowType = {
      id: row[1].id,
      name: row[1].name,
      url: row[1].url,
      language: row[1].language,
      updated_at: row[1].updated_at,
    };
    return mappedRow;
  });
  console.log('DEBUG', resList);
  rows.value = resList;
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
