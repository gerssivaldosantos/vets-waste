<template>
  <q-page class="page">
    <q-item clickable v-ripple round class="items">
      <q-item-section avatar>
        <q-avatar rounded>
          <img src="https://cdn.quasar.dev/img/boy-avatar.png">
        </q-avatar>
      </q-item-section>
      <q-item-section>Image rounded avatar</q-item-section>
    </q-item>
    <q-table
      grid
      :rows="rows"
      row-key="name">
      <template v-slot:item="{row}" class="">
        <q-card>
          {{ row.name }}
        </q-card>
    </template>
    </q-table>
    <q-btn round icon="add" class="bnt" />
   </q-page>
 </template>

<script setup lang="ts">

const rows = [
  {
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: '14%',
    iron: '1%'
  }
]
</script>

<style lang="scss">
*{
  background: rgba(43, 192, 138, 0.05);
}
.items{
  background: #FFFFFF;
  max-width: 90%;
  margin-left: 5%;
  border-radius: 20px;
};
.bnt{
  background: #135B46;
  position: absolute;
  right: 16px;
};

</style>
