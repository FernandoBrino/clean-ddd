import { faker } from "@faker-js/faker";

import { UniqueEntityId } from "@/core/entities/unique-entity-id";
import { QuestionProps } from "@/domain/forum/enterprise/entities/question";
import { QuestionComment } from "@/domain/forum/enterprise/entities/question-comment";

export function makeQuestionComment(
  override: Partial<QuestionProps> = {},
  id?: UniqueEntityId
) {
  const question = QuestionComment.create(
    {
      authorId: new UniqueEntityId(),
      questionId: new UniqueEntityId(),
      content: faker.lorem.text(),
      ...override,
    },
    id
  );

  return question;
}
