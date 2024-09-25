import { Sitter } from '@/../@types/postgresKnex'
import { SitterRepository } from '@/repositories/sitters-repository'

interface GetSitterByIdUseCaseResponse {
  sitter: Sitter
}

export class GetSitterByIdUseCase {
  constructor(private readonly sittersRepository: SitterRepository) {}

  async execute(id: number): Promise<GetSitterByIdUseCaseResponse> {
    const sitter = await this.sittersRepository.findById(id)

    return {
      sitter,
    }
  }
}
