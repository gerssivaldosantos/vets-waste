<template>
  <q-page class="page">
    <q-item style="height: 150px;">
    </q-item>
    <h7>RESIDUOS</h7>
   <q-table
      grid
      :rows="rows"
      row-key="name">
      <template v-slot:item="{row}">
        <q-card class="items">
          <q-item >
            <q-item-section avatar>
            <q-avatar rounded>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            </q-item-section>
            <q-item-section>
              {{ row.name }}
              {{row.description }}
            </q-item-section>
          </q-item>
        </q-card>
    </template>
    </q-table>
    <q-btn round icon="add" class="bnt" @click="addRow" />
   </q-page>
 </template>

<script setup lang="ts">
import { Residuo } from 'src/core/repository/residuos/residuos.repository.interface'

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

.items{
  display: flex;
  background: #FFFFFF;
  border-radius: 1.5rem;
  height: 5rem;
  width: 100%;
  margin-bottom: 5%;
};

.bnt{
  background: #135B46;
  position: absolute;
  right: 16px;
};

</style>
