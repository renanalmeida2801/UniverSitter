import { Feedback } from '@/../@types/postgresKnex'
import { feedbackRepository } from '@/repositories/feedback-repository'

interface CreateFeedbackUseCaseRequest {
  comment: string,
  rating: number,
  sitter_id: number,
  user_id: number
}

interface CreateFeedbackUseCaseResponse {
  feedback: Feedback
}

export class CreateFeedbackUseCase {
  constructor( private readonly feedbackRepository: feedbackRepository) { }

  async execute({
    comment,
    rating,
    sitter_id,
    user_id
  }: CreateFeedbackUseCaseRequest) {

    const feedback = await this.feedbackRepository.create(
      comment,
      rating,
      sitter_id,
      user_id
    )

    return {
      feedback,
    }
  }
}