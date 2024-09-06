import { Sitter } from '@/../@types/postgresKnex'
import { SitterRepository } from '@/repositories/sitters-repository'

interface EditSitterUseCaseRequest {
    id: number,
    user_id?: number,
    descricao?: string,
    disponibilidade?: boolean,
    rating?: number,
    endereco?: string,
    cpf?: string
}

interface EditSitterUseCaseResponse {
  sitter: Sitter
}

export class EditSitterUseCase {
  constructor(private readonly sittersRepository: SitterRepository) {}

  async execute({
    id,
    user_id,
    descricao,
    disponibilidade,
    rating,
    endereco,
    cpf,
  }: EditSitterUseCaseRequest): Promise<EditSitterUseCaseResponse> {
    const sitter = await this.sittersRepository.update(
      id,
      user_id,
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
