
export type Residuo = {
  id?: string;
  name: string;
  description: string;
  discard_method: string;
}

export interface ResiduosRepositoryInterface {
  getResiduos():Promise<Residuo[]>
  getResiduoById(id: string):Promise<Residuo>
  createResiduo(data: Residuo):Promise<void>
  updateResiduo(data: Residuo):Promise<void>
  deleteResiduo(id: string):Promise<void>
}
