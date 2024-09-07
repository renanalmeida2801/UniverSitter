import { Sitter } from '@/../@types/postgresKnex'
import { storage } from '@/config/firebase'
import { SitterRepository } from '@/repositories/sitters-repository'
import { UsersRepository } from '@/repositories/users-repository'
import { getDownloadURL, ref, uploadBytesResumable, uploadString } from 'firebase/storage'

interface CreateSitterUseCaseRequest {
  user_id: number,
  descricao: string,
  disponibilidade: boolean,
  rating: number,
  endereco: string,
  cpf: string,
  image: string,
  categoria: number
}

interface CreateSitterUseCaseResponse {
  sitter: Sitter
}

export class CreateSitterUseCase {
  constructor(
    private readonly sitterRepository: SitterRepository,
    private readonly usersRepository: UsersRepository,
  ) { }

  async execute({
    user_id,
    descricao,
    disponibilidade,
    rating,
    endereco,
    cpf,
    categoria,
    image
  }: CreateSitterUseCaseRequest) {
    const isRegistered = await this.sitterRepository.findByUserId(user_id)

    if (isRegistered)
      throw new Error("Usuário registrado")

    const storageRef = ref(storage, `image/${user_id}.png`)
    await uploadString(storageRef, image, 'data_url');
    const url = await getDownloadURL(storageRef);

    const sitter = await this.sitterRepository.create(
      user_id,
      descricao,
      disponibilidade,
      rating,
      endereco,
      cpf,
      categoria,
      url
    )

    if (sitter) {
      await this.usersRepository.changeSitterStatus(user_id, true)
    }

    return {
      sitter,
    }
  }
}