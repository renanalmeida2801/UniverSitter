import { Sitter } from '@/../@types/postgresKnex'
import { SitterRepository } from '@/repositories/sitters-repository'

interface GetSitterByUserIdUseCaseResponse {
  sitter: Sitter
}

export class GetSitterByUserIdUseCase {
  constructor(private readonly sittersRepository: SitterRepository) {}

  async execute(id: number): Promise<GetSitterByUserIdUseCaseResponse> {
    const sitter = await this.sittersRepository.findByUserId(id)

    return {
      sitter,
    }
  }
}
