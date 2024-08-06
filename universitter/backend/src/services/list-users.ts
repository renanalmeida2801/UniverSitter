import { Usuario } from '@/../@types/postgresKnex'
import { UsersRepository } from '@/repositories/users-repository'

interface ListUsersUseCaseRequest {
  query: string
}

interface ListUsersUseCaseResponse {
  users: Usuario[]
}

export class ListUsersUseCase {
  constructor(private readonly usersRepository: UsersRepository) {}

  async execute({
    query,
  }: ListUsersUseCaseRequest): Promise<ListUsersUseCaseResponse> {
    let users = await this.usersRepository.findByName(query)

    if (!users) {
      // if not found group, then list all.
      users = await this.usersRepository.list()
    }

    return {
      users,
    }
  }
}