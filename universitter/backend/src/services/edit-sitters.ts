import { Sitter } from '@/../@types/postgresKnex'
import { storage } from '@/config/firebase'
import { SitterRepository } from '@/repositories/sitters-repository'
import { UsersRepository } from '@/repositories/users-repository'
import { getDownloadURL, ref, uploadBytesResumable, uploadString } from 'firebase/storage'

interface EditSitterUseCaseRequest {
  user_id: number,
  descricao: string,
  disponibilidade: boolean,
  rating: number,
  endereco: string,
  cpf: string,
  image: string,
  categoria: number
}

interface EditSitterUseCaseResponse {
  sitter: Sitter
}

export class EditSitterUseCase {
  constructor(
    private readonly sitterRepository: SitterRepository
  ) { }

  async execute({
    user_id,
    descricao,
    disponibilidade,
    endereco,
    cpf,
    categoria,
    image
  }: EditSitterUseCaseRequest) {

    const storageRef = ref(storage, `image/${user_id}.png`)
    if(image){
      await uploadString(storageRef, image, 'data_url');
    }
    const url = await getDownloadURL(storageRef);

    const sitter = await this.sitterRepository.update(
      user_id,
      descricao,
      disponibilidade,
      endereco,
      cpf,
      categoria,
      url
    )

    return {
      sitter,
    }
  }
}