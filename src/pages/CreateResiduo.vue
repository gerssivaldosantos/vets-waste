<template>
  <div class="q-pa-md bg-julia" style="max-width: 400px">
    <q-page class="">
      <q-form
        @submit="onSubmit"
        class="q-gutter-md"
      >
      <h6> Criar Novo Resíduo</h6>
      <!-- Nome -->
        <q-input
          rounded outlined
          clearable
          stack-label
          v-model="name"
          label="Nome"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Insira o nome do Resíduo']"
          />

      <!-- Descrição -->
        <q-input
          rounded outlined
          clearable
          stack-label
          v-model="description"
          label="Descrição"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Insira uma descrição']"
        />

        <!-- Método de Descarte -->
        <div >
          <q-editor
          class="rounded"
          v-model="disposalMethod"
          min-height="5rem"
          />
        </div>

        <div>
          <q-btn label="Criar Resíduo" type="submit" color="primary"/>

        </div>
      </q-form>
    </q-page>

  </div>
</template>

<script setup lang="ts">

import { ref } from 'vue'

const name = ref()
const description = ref()
const disposalMethod = ref()

const onSubmit = () => {
  console.log('teste')
}

</script>

<style  setup lang="scss">

.bg-julia{
  background-color: #12AA73;
}

.bg-secondary{
  background-color: #19D28D;
}

.rounded{
 border-radius: 1rem;
}

</style>
