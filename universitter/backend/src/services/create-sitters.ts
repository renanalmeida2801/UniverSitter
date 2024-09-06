import { Sitter } from '@/../@types/postgresKnex'
import { storage } from '@/config/firebase'
import { SitterRepository } from '@/repositories/sitters-repository'
import { UsersRepository } from '@/repositories/users-repository'
import { MultipartFile } from '@fastify/multipart'
import { getDownloadURL, ref, uploadBytesResumable, uploadString } from 'firebase/storage'
import { unknown } from 'zod'

interface CreateSitterUseCaseRequest {
  id_user: number,
  descricao: string,
  disponibilidade: boolean,
  rating: number,
  endereco: string,
  cpf: string,
  image: string,
}

interface CreateSitterUseCaseResponse {
  sitter: Sitter
}

export class CreateSitterUseCase {
  constructor(private readonly sitterRepository: SitterRepository) { }

  async execute({
    id_user,
    descricao,
    disponibilidade,
    rating,
    endereco,
    cpf,
    image
  }: CreateSitterUseCaseRequest) {
    const isRegistered = await this.sitterRepository.findByUserId(id_user)

    if (isRegistered)
      throw new Error("Usuário registrado")

    const storageRef = ref(storage, `image/${id_user}.png`)
    await uploadString(storageRef, image, 'data_url');
    const url = await getDownloadURL(storageRef);

    const sitter = await this.sitterRepository.create(
      id_user,
      descricao,
      disponibilidade,
      rating,
      endereco,
      cpf,
      url
    )
    return (
      { sitter }
    )
  }
}