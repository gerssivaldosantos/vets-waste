import { defineStore } from 'pinia'
import { Residuo } from 'src/core/repository/residuos/residuos.repository.interface'

export const useResiduoStore = defineStore('residuo', {
  state: () => ({
    residuos: [] as Residuo[]
  }),
  actions: {
    async create (residuo: Residuo):Promise<void> {
      this.residuos.push(residuo)
    },
    async getById (id: string):Promise<Residuo | undefined> {
      return this.residuos.find((residuo: Residuo) => residuo.id === id)
    },
    async getResiduos ():Promise<Residuo[]> {
      return this.residuos
    }
  }
})
