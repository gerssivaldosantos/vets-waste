import { ResiduosRepositoryInterface, Residuo } from 'src/core/repository/residuos/residuos.repository.interface'

export class ResiduosPiniaRepository implements ResiduosRepositoryInterface {
  createResiduo (data: Residuo): Promise<void> {
    return Promise.resolve(undefined)
  }

  deleteResiduo (data: Residuo): Promise<void> {
    return Promise.resolve(undefined)
  }

  getResiduoById (id: string): Promise<Residuo> {
    return Promise.resolve({} as Residuo)
  }

  getResiduos (): Promise<Residuo[]> {
    return Promise.resolve([])
  }

  updateResiduo (data: Residuo): Promise<void> {
    return Promise.resolve(undefined)
  }
}
