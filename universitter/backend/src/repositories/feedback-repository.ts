import { Feedback, Sitter, UsuarioSitter } from '@/../@types/postgresKnex'

export interface feedbackRepository {
  create(
    feedback_id: number,
    comment: string,
    rating: number,
    date: Date,
    sitter_id: number,
    user_id: number
  ): Promise<Feedback>
  fetchBySitterId(id: number): Promise<Feedback[]>
  delete(id: number): Promise<Feedback>
}