import { Sitter } from '@/../@types/postgresKnex'
import { SitterRepository } from '@/repositories/sitters-repository'

interface ListSittersUseCaseResponse {
  sitter: Sitter[]
}

export class ListSittersUseCase {
  constructor(private readonly sittersRepository: SitterRepository) {}

  async execute(): Promise<ListSittersUseCaseResponse> {
    const sitter = await this.sittersRepository.list()

    return {
      sitter,
    }
  }
}
