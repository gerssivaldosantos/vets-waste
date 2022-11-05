<template>
  <div class="q-pa-md page" style="max-width: 400px">
    <q-page class="page">
      <q-form
        @submit="onSubmit"
        class="q-gutter-md"
      >

      <!-- Fundo Verde -->
      <div>

        <!-- Botão de voltar  -->
        <div>
          <q-btn class="btn-back" round icon="arrow_back" />
        </div>
      </div>

      <!-- Form -->

        <h6 class="align-center"> Criar Novo Resíduo</h6>
        <!-- Nome -->

        <q-item-label class="item-label"> Nome:</q-item-label>
          <q-input
            class="input"
            color="teal"
            bg-color="white"
            placeholder="Seringa"
            rounded outlined
            clearable
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Insira o nome do Resíduo']"
            v-model="name"
            />

        <!-- Descrição -->
        <q-item-label class="item-label"> Descrição: </q-item-label>
          <q-input
            color="teal"
            bg-color="white"
            placeholder="Instrumento perfurocortante para uso clínico"
            rounded outlined
            clearable
            v-model="description"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Insira uma descrição']"
          />

          <!-- Método de Descarte -->
          <q-item-label class="item-label"> Método de Descarte: </q-item-label>
            <q-editor
                class="rounded"
                v-model="disposalMethod"
                min-height="5rem"
              />
          <!-- Botão de Criar Resíduo -->
          <div class="align-center">
            <q-btn class="btn-save" rounded label="Criar Resíduo" type="submit"/>
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

.circle{
  background-color: rgba(18, 170, 115, 1);
}

.page{
  background-color: rgba(191, 219, 209, 1);
  display: flex;

}

.btn-back{
  background-color: rgba(191, 219, 209, 1);
  color:black;
}

.btn-save{
  background-color: rgba(19, 91, 70, 1);
  color: white;
  align-items: center;
}

.item-label{
  margin-left: 40px;
  margin-bottom: -15px;
}

.rounded{
 border-radius: 1rem;
}

.align-center{
  text-align: center;
}

</style>
