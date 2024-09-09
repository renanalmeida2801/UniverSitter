import { Feedback } from '@/../@types/postgresKnex'
import { feedbackRepository } from '@/repositories/feedback-repository'

interface DeleteFeedbackUseCaseRequest {
  feedback_id: number
}

interface DeleteFeedbackUseCaseResponse {
  feedback: Feedback
}

export class DeleteFeedbackUseCase {
  constructor(private readonly feedbackRepository: feedbackRepository) {}

  async execute({
    feedback_id,
  }: DeleteFeedbackUseCaseRequest): Promise<DeleteFeedbackUseCaseResponse> {
    const feedback = await this.feedbackRepository.delete(feedback_id)

    return {
      feedback,
    }
  }
}
