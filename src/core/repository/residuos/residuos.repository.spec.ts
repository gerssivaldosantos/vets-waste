import { beforeAll, describe, expect, it } from 'vitest'
import { residuoRepository } from 'src/core/repository/residuos/module'
import { Residuo } from 'src/core/repository/residuos/residuos.repository.interface'
import { setActivePinia, createPinia } from 'pinia'

describe('Residuos Pinia Repository', () => {
  beforeAll(() => {
    setActivePinia(createPinia())
  })
  describe('Create', () => {
    it('should create an residuo successfully', async () => {
      const residuo:Residuo = { id: '1', name: 'Seringa', description: 'Material Hospitalar', discard_method: '<h1>Como Descartar</h1>' }
      await expect(residuoRepository.createResiduo(residuo)).resolves.toBeUndefined()
    })
  })

  describe('GetResiduos', () => {
    it('should get residuos successfully', async () => {
      const result:Residuo[] = await residuoRepository.getResiduos()
      for (const residuo of result) {
        expect(residuo).toHaveProperty('id')
        expect(residuo).toHaveProperty('name')
        expect(residuo).toHaveProperty('description')
        expect(residuo).toHaveProperty('discard_method')
      }
    })
  })

  describe('GetResiduoById', () => {
    it('should get residuo unsuccessfully', async () => {
      await expect(residuoRepository.getResiduoById('')).rejects.toThrow('Não foi possível buscar este resíduo')
    })
  })

  describe('UpdateResiduo', () => {
    it('should update residuo unsuccessfully', async () => {
      await expect(residuoRepository.updateResiduo({} as Residuo)).rejects.toThrow('Não foi possível atualizar resíduo')
    })
  })

  describe('DeleteResiduo', () => {
    it('should delete residuo unsuccessfully', async () => {
      await expect(residuoRepository.deleteResiduo('')).rejects.toThrow('Não foi possível deletar resíduo')
    })
  })
})
