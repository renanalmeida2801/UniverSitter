import { Feedback } from '@/../@types/postgresKnex'
import { feedbackRepository } from '@/repositories/feedback-repository'

interface CreateFeedbackUseCaseRequest {
  feedback_id: number,
  comment: string,
  rating: number,
  date: Date,
  sitter_id: number,
  user_id: number
}

interface CreateFeedbackUseCaseResponse {
  feedback: Feedback
}

export class CreateFeedbackUseCase {
  constructor( private readonly feedbackRepository: feedbackRepository) { }

  async execute({
    feedback_id,
    comment,
    rating,
    date,
    sitter_id,
    user_id
  }: CreateFeedbackUseCaseRequest) {

    const feedback = await this.feedbackRepository.create(
      feedback_id,
      comment,
      rating,
      date,
      sitter_id,
      user_id
    )

    return {
      feedback,
    }
  }
}