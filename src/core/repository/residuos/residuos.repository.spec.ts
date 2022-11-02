import { describe, expect, it } from 'vitest'
import { repository } from 'src/core/repository/residuos/module'
import { Residuo } from 'src/core/repository/residuos/residuos.repository.interface'

describe('Residuos Pinia Repository', () => {
  describe('Create', () => {
    it('should create an residuo successfully', async () => {
      const residuo:Residuo = { name: 'Seringa', description: 'Material Hospitalar', discard_method: '<h1>Como Descartar</h1>' }
      await expect(repository.createResiduo(residuo)).resolves.toBeNull()
    })

    it('should create an residuo unsuccessfully', async () => {
      const residuo:Residuo = {} as Residuo
      await expect(repository.createResiduo(residuo)).rejects.toThrow('Não foi possível criar o novo resíduo')
    })
  })

  describe('GetResiduos', () => {
    it('should get residuos successfully', async () => {
      const result:Residuo[] = await repository.getResiduos()
      for (const residuo in result) {
        expect(residuo).toHaveProperty('id')
        expect(residuo).toHaveProperty('name')
        expect(residuo).toHaveProperty('description')
        expect(residuo).toHaveProperty('discard_method')
      }
    })

    it('should get residuos unsuccessfully', async () => {
      await expect(repository.getResiduos()).rejects.toThrow('Erro ao buscar resíduos')
    })
  })

  describe('GetResiduoById', () => {
    it('should get residuo unsuccessfully', async () => {
      await expect(repository.getResiduoById('')).rejects.toThrow('Não foi possível buscar este resíduo')
    })
  })

  describe('UpdateResiduo', () => {
    it('should update residuo unsuccessfully', async () => {
      await expect(repository.updateResiduo({} as Residuo)).rejects.toThrow('Não foi possível atualizar resíduo')
    })
  })

  describe('DeleteResiduo', () => {
    it('should delete residuo unsuccessfully', async () => {
      await expect(repository.deleteResiduo({} as Residuo)).rejects.toThrow('Não foi possível deletar resíduo')
    })
  })
})
