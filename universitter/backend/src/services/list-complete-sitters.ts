import { UsuarioSitter } from '@/../@types/postgresKnex'
import { SitterRepository } from '@/repositories/sitters-repository'

interface ListCompleteSitterUseCaseResponse {
  sitter: UsuarioSitter[]
}

export class ListCompleteSitterUseCase {
  constructor(private readonly sittersRepository: SitterRepository) {}

  async execute(): Promise<ListCompleteSitterUseCaseResponse> {
    const sitter = await this.sittersRepository.getFullSitterInfo()

    return {
      sitter,
    }
  }
}
