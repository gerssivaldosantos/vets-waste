import { Residuo, ResiduosRepositoryInterface } from '../../residuos.repository.interface'
import { initializeApp, FirebaseApp } from 'firebase/app'
import { Firestore } from 'firebase/firestore'
import { getFirestore, collection, getDocs, DocumentData } from 'firebase/firestore/lite'
export class ResiduosFirebaseRepository implements ResiduosRepositoryInterface {
  private readonly database: Firestore
  private readonly app: FirebaseApp
  constructor (
        private connectionConfig: object
  ) {
    this.app = initializeApp(connectionConfig)
    this.database = getFirestore(this.app)
  }

  async getResiduos (): Promise<Residuo[]> {
    const citiesCol = collection(this.database, 'residuos')
    const citySnapshot:DocumentData = await getDocs(citiesCol)
    const cityList:any[] = citySnapshot.docs.map((doc:any) => doc.data())
    return cityList
  }

  getResiduoById (id: string): Promise<Residuo> {
    throw new Error('Method not implemented.')
  }

  createResiduo (data: Residuo): Promise<void> {
    throw new Error('Method not implemented.')
  }

  updateResiduo (data: Residuo): Promise<void> {
    throw new Error('Method not implemented.')
  }

  deleteResiduo (id: string): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
