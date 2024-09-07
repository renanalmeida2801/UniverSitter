import { Sitter } from '@/../@types/postgresKnex'
import { SitterRepository } from '@/repositories/sitters-repository'
import { UsersRepository } from '@/repositories/users-repository'

interface CreateSitterUseCaseRequest {
  user_id: number
  descricao: string
  disponibilidade: boolean
  rating: number
  endereco: string
  cpf: string
  categoria: number
}

interface CreateSitterUseCaseResponse {
  sitter: Sitter
}

export class CreateSitterUseCase {
  constructor(
    private readonly sitterRepository: SitterRepository,
    private readonly usersRepository: UsersRepository,
  ) {}

  async execute({
    user_id,
    descricao,
    disponibilidade,
    rating,
    endereco,
    cpf,
    categoria,
  }: CreateSitterUseCaseRequest): Promise<CreateSitterUseCaseResponse> {
    const sitter = await this.sitterRepository.create(
      user_id,
      descricao,
      disponibilidade,
      rating,
      endereco,
      cpf,
      categoria,
    )

    if (sitter) {
      await this.usersRepository.changeSitterStatus(user_id, true)
    }

    return {
      sitter,
    }
  }
}
