import { Feedback } from '@/../@types/postgresKnex'
import { feedbackRepository } from '@/repositories/feedback-repository'

interface GetFeedbackBySitterIdUseCaseResponse {
  feedback: Feedback[] // Ajustado para um array de Feedback
}

export class GetFeedbackBySitterIdUseCase {
  constructor(private readonly feedbacksRepository: feedbackRepository) {}

  async execute(sitter_id: number): Promise<GetFeedbackBySitterIdUseCaseResponse> { // Ajustado o tipo de retorno
    const feedback = await this.feedbacksRepository.fetchBySitterId(sitter_id)

    return {
      feedback,
    }
  }
}
