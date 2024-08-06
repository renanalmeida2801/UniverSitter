import { Usuario } from '@/../@types/postgresKnex'
import { UsersRepository } from '@/repositories/users-repository'

interface EditUserUseCaseRequest {
  id: number
  id_grupo?: number
  nome?: string
  sobrenome?: string
  email?: string
  senha?: string
  telefone?: string
}

interface EditUserUseCaseResponse {
  user: Usuario
}

export class EditUserUseCase {
  constructor(private readonly usersRepository: UsersRepository) {}

  async execute({
    id,
    id_grupo,
    nome,
    sobrenome,
    email,
    senha,
    telefone,
  }: EditUserUseCaseRequest): Promise<EditUserUseCaseResponse> {
    const user = await this.usersRepository.update(
      id,
      id_grupo,
      nome,
      sobrenome,
      email,
      senha,
      telefone,
    )

    return {
      user,
    }
  }
}
