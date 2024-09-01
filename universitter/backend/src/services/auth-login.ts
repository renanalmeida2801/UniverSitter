import { UsersRepository } from '@/repositories/users-repository'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

interface LoginRequest {
  email: string
  password: string
}

interface LoginResponse {
  user: {
    user_id: number
    nome: string
    email: string
  }
  token: string
}
export class AuthLogin {
  constructor(private readonly usersRepository: UsersRepository) { }

  async login({ email, password }: LoginRequest): Promise<LoginResponse> {
    const user = await this.usersRepository.findByEmail(email)

    if (!user) throw new Error('Email ou senha invalido!')
    const verifyPass = await bcrypt.compare(password, user.senha)
    if (!verifyPass) throw new Error('Email ou senha invalido!')

    const token = jwt.sign({ id: user.user_id }, process.env.SECRETKEY ?? '', {
      expiresIn: '45m',
    })

    return { user, token }
  }
}

