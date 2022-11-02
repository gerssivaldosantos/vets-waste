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
    async getById (id: string):Promise<Residuo> {
      const result = this.residuos.find((residuo: Residuo) => residuo.id === id)
      if (result) return result
      else throw new Error('Não foi possível buscar este resíduo')
    },
    async getResiduos ():Promise<Residuo[]> {
      return this.residuos
    },
    async deleteResiduo (id: string):Promise<void> {
      this.residuos = this.residuos.filter((residuo:Residuo) => residuo.id !== id)
    },
    async updateResiduo (data: Residuo):Promise<void> {
      this.residuos = this.residuos.map((residuo:Residuo) => residuo.id === data.id ? data : residuo)
    }
  }
})
