import { InMemoryAnswersRepository } from "@/test/repositories/in-memory-answers-repository";
import { makeAnswer } from "@/test/factories/make-answer";
import { InMemoryAnswerCommentsRepository } from "@/test/repositories/in-memory-answer-comments-repository";
import { CommentOnAnswerUseCase } from "./comment-on-answer";

let inMemoryAnswersRepository: InMemoryAnswersRepository;
let inMemoryAnswerCommentsRepository: InMemoryAnswerCommentsRepository;
let sut: CommentOnAnswerUseCase;

describe("Comment on Answer", () => {
  beforeEach(() => {
    inMemoryAnswerCommentsRepository = new InMemoryAnswerCommentsRepository();
    inMemoryAnswersRepository = new InMemoryAnswersRepository();
    sut = new CommentOnAnswerUseCase(
      inMemoryAnswersRepository,
      inMemoryAnswerCommentsRepository
    );
  });

  it("should be able to comment on answer", async () => {
    const answer = makeAnswer();

    await inMemoryAnswersRepository.create(answer);

    await sut.execute({
      answerId: answer.id.toString(),
      authorId: answer.authorId.toString(),
      content: "Comentário 1",
    });

    expect(inMemoryAnswerCommentsRepository.items[0].content).toEqual(
      "Comentário 1"
    );
  });
});
