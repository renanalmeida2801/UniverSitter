import { Sitter } from '@/../@types/postgresKnex'
import { SitterRepository } from '@/repositories/sitters-repository'

interface ListSittersUseCaseRequest {
  query: string
}

interface ListSittersUseCaseResponse {
  sitter: Sitter[]
}

export class ListSittersUseCase {
  constructor(private readonly sittersRepository: SitterRepository) {}

  async execute({
    query,
  }: ListSittersUseCaseRequest): Promise<ListSittersUseCaseResponse> {
    let sitter = await this.sittersRepository.list()
    
    return {
      sitter,
    }
  }
}