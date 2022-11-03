<template>
  <q-dialog maximized ref="dialogRef" @hide="onDialogHide">
    <q-card class="content q-dialog-plugin">
      <q-card-actions align="left">
        <q-btn size="1.4rem" flat round icon="arrow_back"  @click="onDialogCancel" />
      </q-card-actions>
      <q-card-section class="header">
        <img class="avatar" src="src/assets/avatar.png" alt="avatar">
        <div class="name">{{residuo.name}}</div>
        <p>{{residuo.description}}</p>
      </q-card-section>
      <q-card-section>
        <div v-html="residuo.discard_method"/>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { useDialogPluginComponent } from 'quasar'
import { Residuo } from 'src/core/repository/residuos/residuos.repository.interface'

defineProps<{
  residuo: Residuo
}>()

defineEmits([
  ...useDialogPluginComponent.emits
])

const { dialogRef, onDialogHide, onDialogCancel } = useDialogPluginComponent()

</script>

<style scoped lang="scss">
.content {
  height: 100vh;
  border-radius: 2rem;
  font-family: 'Poppins', monospace;
}

.header > img {
  width: 4rem;
}

.header > .name {
  font-size: 2rem;
}

</style>
