import { Usuario } from '@/../@types/postgresKnex'
import { UsersRepository } from '@/repositories/users-repository'
import bcrypy from 'bcrypt'

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
    
    const hashPass = await bcrypy.hash(senha, 10)

    const user = await this.userRepository.create(
      nome,
      sobrenome,
      email,
      hashPass,
      telefone,
    )

    return {
      user,
    }
  }
}
