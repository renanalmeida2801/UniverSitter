import { Usuario } from '@/../@types/postgresKnex'
import { UsersRepository } from '@/repositories/users-repository'

interface CreateUserUseCaseRequest {
  nome: string
  sobrenome: string
  email: string
  senha: string
  telefone: string
}

interface CreateUserUseCaseResponse {
  user: Usuario
}

export class CreateUserUseCase {
  constructor(private readonly userRepository: UsersRepository) {}

  async execute({
    nome,
    sobrenome,
    email,
    senha,
    telefone,
  }: CreateUserUseCaseRequest): Promise<CreateUserUseCaseResponse> {
    const user = await this.userRepository.create(
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
