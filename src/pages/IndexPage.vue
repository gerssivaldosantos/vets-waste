<template>
  <q-page class="page">
    <q-item style="height: 150px">
    </q-item>
    <h7>RESIDUOS</h7>
   <q-table
      grid
      :rows="rows"
      row-key="name"
      virtual-scroll
      v-model:pagination="pagination"
      :rows-per-page-options="[0]"
      >
      <template v-slot:item="{row}">
        <q-card class="cards">
          <q-item>
            <q-item-section avatar>
            <q-avatar rounded>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            </q-item-section>
            <q-item-section>
              {{ row.name }} <br>
              {{row.description }}
            </q-item-section>
          </q-item>
        </q-card>
    </template>
    </q-table>
    <div class="bnt">
      <q-btn round icon="add" class="q-bnt" @click="addRow" />
    </div>
   </q-page>
 </template>

<script setup lang="ts">
import { Residuo } from 'src/core/repository/residuos/residuos.repository.interface'
import { ref } from 'vue'

const pagination = ref()

const rows : Residuo[] = [
  {
    id: '1',
    name: 'Nome',
    description: 'Descrição',
    discard_method: 'dasd'
  },
  {
    id: '2',
    name: 'Nome 2',
    description: 'Descrição 2',
    discard_method: 'dasd'
  },
  {
    id: '1',
    name: 'Nome',
    description: 'Descrição',
    discard_method: 'dasd'
  },
  {
    id: '1',
    name: 'Nome',
    description: 'Descrição',
    discard_method: 'dasd'
  },
  {
    id: '1',
    name: 'Nome',
    description: 'Descrição',
    discard_method: 'dasd'
  },
  {
    id: '1',
    name: 'Nome',
    description: 'Descrição',
    discard_method: 'dasd'
  },
  {
    id: '1',
    name: 'Nome',
    description: 'Descrição',
    discard_method: 'dasd'
  },
  {
    id: '1',
    name: 'Nome',
    description: 'Descrição',
    discard_method: 'dasd'
  },
  {
    id: '1',
    name: 'Nome',
    description: 'Descrição',
    discard_method: 'dasd'
  },
  {
    id: '1',
    name: 'Nome',
    description: 'Descrição',
    discard_method: 'dasd'
  }
]

const addRow = () => {
  console.log('teste')
}

</script>

<style lang="scss">
.page{
  background-color: rgba(43, 192, 139, 0.25);
  padding-left: 2%;
  padding-right: 2%;
};

.icon{
  padding-right:30px ;
}

.cards{
  display: flex;
  background: #FFFFFF;
  border-radius: 1.5rem;
  height: 5rem;
  width: 100%;
  margin-bottom: 3%;
};

.q-bnt{
  position:fixed;
  background: rgba(19, 91, 70, 0.9);
  width: 83px;
  height: 83px;
  color: #FFFFFF;
  font-size: 27px;
};
.bnt{
  position:fixed;
  width:60px;
  height:60px;
  bottom:40px;
  right:40px;
}

</style>
