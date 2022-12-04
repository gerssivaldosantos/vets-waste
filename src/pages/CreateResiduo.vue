<template>
    <q-page>
      <div class="top-canva"></div>
      <div class="bottom-canva"></div>
      <q-form
        @submit="onSubmit"
        class="main-form"
      >

        <!-- Botão de voltar  -->
        <div>
          <q-btn class="btn-back" round icon="arrow_back" />
        </div>

      <!-- Form -->

        <h6 class="align-center"> Criar Novo Resíduo</h6>
        <!-- Nome -->

        <q-item-label class="item-label"> Nome</q-item-label>
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
        <q-item-label class="item-label"> Descrição </q-item-label>
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
          <q-item-label class="item-label"> Método de Descarte </q-item-label>
            <q-editor
                class="discard-method-input"
                v-model="disposalMethod"
                min-height="5rem"
              />
          <!-- Botão de Criar Resíduo -->
          <div class="align-center">
            <q-btn class="btn-save" rounded label="Criar Resíduo" type="submit"/>
          </div>

      </q-form>
    </q-page>
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

.item-label {
  padding: 0.5rem 0 0.5rem 0.9rem;
}

.discard-method-input {
  border-radius: 1.5rem;
  margin-bottom: 2rem;
}

.q-page {
  padding: 2rem;
  background-color: #12AA73;
}

.btn-back{
  background-color: rgba(191, 219, 209, 1);
  color:black;
}

.btn-save{
  background-color: rgba(19, 91, 70, 1);
  color: white;
  align-items: center;
  width: 75%;
}

.align-center{
  text-align: center;
}

.top-canva {
  position: absolute;
  width: 100vw;
  height: 25vh;
  border-radius: 100%;
  bottom: 58vh;
  left: 0;
  background-color: rgba(191, 219, 209, 1);

}

.bottom-canva {
  position: absolute;
  height: 70vh;
  width: 100vw;
  left: 0;
  bottom: 0;
  background-color: rgba(191, 219, 209, 1);
}

</style>
