import { ResiduosRepositoryInterface, Residuo } from 'src/core/repository/residuos/residuos.repository.interface'
import { useResiduoStore } from 'src/stores/residuos-store'

export class ResiduosPiniaRepository implements ResiduosRepositoryInterface {
  async createResiduo (data: Residuo): Promise<void> {
    try {
      const store = useResiduoStore()
      await store.create(data)
    } catch (e) {
      console.log(e)
      throw new Error('Não foi possível criar o novo resíduo')
    }
  }

  async deleteResiduo (id: string): Promise<void> {
    try {
      const store = useResiduoStore()
      await store.deleteResiduo(id)
    } catch (e) {
      throw new Error('Não foi possível deletar resíduo')
    }
  }

  async getResiduoById (id: string): Promise<Residuo> {
    try {
      const store = useResiduoStore()
      return store.getById(id)
    } catch (e) {
      throw new Error('Não foi possível buscar este resíduo')
    }
  }

  async getResiduos (): Promise<Residuo[]> {
    try {
      const store = useResiduoStore()
      return store.getResiduos()
    } catch (e) {
      throw new Error('Erro ao buscar resíduos')
    }
  }

  async updateResiduo (data: Residuo): Promise<void> {
    try {
      const store = useResiduoStore()
      return store.updateResiduo(data)
    } catch (e) {
      throw new Error('Não foi possível atualizar resíduo')
    }
  }
}
