import { Sitter } from '@/../@types/postgresKnex'
import { SitterRepository } from '@/repositories/sitters-repository'

interface CreateSitterUseCaseRequest {
    id_user: number,
    descricao: string,
    disponibilidade: boolean,
    rating: number,
    endereco: string,
    cpf: string,
}

interface CreateSitterUseCaseResponse {
  sitter: Sitter
}

export class CreateSitterUseCase {
  constructor(private readonly sitterRepository: SitterRepository) {}

  async execute({
    id_user,
    descricao,
    disponibilidade,
    rating,
    endereco,
    cpf,
  }: CreateSitterUseCaseRequest): Promise<CreateSitterUseCaseResponse> {
    const sitter = await this.sitterRepository.create(
      id_user,
      descricao,
      disponibilidade,
      rating,
      endereco,
      cpf,
    )

    return {
      sitter,
    }
  }
}
