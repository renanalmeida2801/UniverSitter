import { Usuario } from '@/../@types/postgresKnex'
import { UsersRepository } from '@/repositories/users-repository'

interface FetchUserByEmailUseCaseRequest {
  email: string
}

interface FetchUserByEmailUseCaseResponse {
  user: Usuario
}

export class FetchUsersByEmailUseCase {
  constructor(private readonly usersRepository: UsersRepository) {}

  async execute({
    email,
  }: FetchUserByEmailUseCaseRequest): Promise<FetchUserByEmailUseCaseResponse> {
    const user = await this.usersRepository.findUserIdByEmail(email)

    if (!user) {
      throw new Error('User not found')
    }

    return {
      user,
    }
  }
}
