<template>
  <div class="q-pa-md">
    <q-layout view="hHh Lpr lff">
      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App',
  setup() {
    return {}
  }
})
</script>
