import { postgres } from '@/config/database'
import { Feedback, Sitter, UsuarioSitter } from 'postgresKnex'
import { feedbackRepository } from '../feedback-repository'
import { error } from 'console'

export class KnexFeedbackRepository implements feedbackRepository {
  async create(
    feedback_id: number,
    comment: string,
    rating: number,
    date: Date,
    sitter_id: number,
    user_id: number
  ): Promise<Feedback> {
    return await postgres('feedback').insert({
      feedback_id,
      comment,
      rating,
      date,
      sitter_id,
      user_id
    })
  }

  async delete(id: number): Promise<Feedback> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const feedback = await postgres('feedback').where('feedback_id', id).first()

    if (!feedback) throw new Error("Feedback doesn't exist")

    await postgres('feedback').where('feedback_id', feedback?.feedback_id).del()

    return feedback
  }

  async fetchBySitterId(id: number): Promise<Feedback[]> {
    const feedback = await postgres('feedback')
    .leftJoin('usuario', 'feedback.user_id', 'usuario.user_id')
    .leftJoin('sitter', 'usuario.user_id', 'sitter.user_id')
    .select('feedback.*',
      'usuario.nome as nome',
      'sitter.foto as foto'
    )
    .where('feedback.sitter_id', id);     
    if(!feedback) throw new Error("Feedback doesn't exist")
      
    return feedback
  }


}
