import { QuestionComment } from "../../enterprise/entities/question-comment";

export interface QuestionCommentsRepository {
  findById(id: string): Promise<QuestionComment | null>;
  delete(question: QuestionComment): Promise<void>;
  create(question: QuestionComment): Promise<void>;
}
