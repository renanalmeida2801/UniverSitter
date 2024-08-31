import { Sitter } from '@/../@types/postgresKnex'
import { SitterRepository } from '@/repositories/sitters-repository'

interface DeleteSitterUseCaseRequest {
  id: number
}

interface DeleteSitterUseCaseResponse {
  sitter: Sitter
}

export class DeleteSitterUseCase {
  constructor(private readonly sitterRepository: SitterRepository) {}

  async execute({
    id,
  }: DeleteSitterUseCaseRequest): Promise<DeleteSitterUseCaseResponse> {
    const sitter = await this.sitterRepository.delete(id)

    return {
      sitter,
    }
  }
}
