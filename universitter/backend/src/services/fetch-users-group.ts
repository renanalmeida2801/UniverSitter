import { Usuario } from '@/../@types/postgresKnex'
import { UsersRepository } from '@/repositories/users-repository'

interface FetchUserByGroupIdUseCaseRequest {
  id_grupo: number
}

interface FetchUserByGroupIdUseCaseResponse {
  users: Usuario[]
}

export class FetchUsersByGroupIdUseCase {
  constructor(private readonly usersRepository: UsersRepository) {}

  async execute({
    id_grupo,
  }: FetchUserByGroupIdUseCaseRequest): Promise<FetchUserByGroupIdUseCaseResponse> {
    const users = await this.usersRepository.findByGroup(id_grupo)

    if (!users) {
      throw new Error('Group not found')
    }

    return {
      users,
    }
  }
}
