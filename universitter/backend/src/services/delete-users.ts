import { Usuario } from '@/../@types/postgresKnex'
import { UsersRepository } from '@/repositories/users-repository'

interface DeleteUserUseCaseRequest {
  id: number
}

interface DeleteUserUseCaseResponse {
  user: Usuario
}

export class DeleteUserUseCase {
  constructor(private readonly userRepository: UsersRepository) {}

  async execute({
    id,
  }: DeleteUserUseCaseRequest): Promise<DeleteUserUseCaseResponse> {
    const user = await this.userRepository.delete(id)

    return {
      user,
    }
  }
}
