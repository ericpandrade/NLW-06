import { Button } from "../../components/Button";

import { useNavigate, useParams } from "react-router-dom";

import logoImg from "../../assets/images/logo.svg";
import deleteImg from "../../assets/images/delete.svg";
import checkImg from "../../assets/images/check.svg";
import asnwerImg from "../../assets/images/answer.svg";

import { RoomCode } from "../../components/RoomCode";

import { Questions } from "../../components/Question";
import { useRoom } from "../../hooks/useRoom";
import { database } from "../../services/firebase";

type RoomParams = {
  id: string;
};

export function AdminRoom() {
  /*   const { user, signInWithGoogle } = useAuth(); */
  const navigate = useNavigate();
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const { questions, title } = useRoom(roomId!);

  async function handleEndRoom() {
    database.ref(`rooms/${roomId}`).update({ endedAt: new Date() });
    navigate("/");
  }

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm("Tem certeza que você deseja excluir esta pergunta?")) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  }

  async function handleCheckQuestionAsAnswered(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
    });
  }

  async function handleHighlightQuestion(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true,
    });
  }

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="LetMeAsk" />
          <div>
            <RoomCode code={roomId!} />
            <Button isOutlined onClick={handleEndRoom}>
              Encerrar sala
            </Button>
          </div>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>

        <div className="question-list">
          {questions.map((questions) => {
            return (
              <Questions
                key={questions.id}
                content={questions.content}
                author={questions.author}
                isAnswered={questions.isAnswered}
                isHighlighted={questions.isHighlighted}
              >
                <div>
                  {!questions.isAnswered && (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          handleCheckQuestionAsAnswered(questions.id)
                        }
                      >
                        <img
                          src={checkImg}
                          alt="Marcar pergunta como respondida"
                        />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleHighlightQuestion(questions.id)}
                      >
                        <img src={asnwerImg} alt="Dar destaque a pergunta" />
                      </button>
                    </>
                  )}

                  <button
                    type="button"
                    onClick={() => handleDeleteQuestion(questions.id)}
                  >
                    <img src={deleteImg} alt="Remover pergunta" />
                  </button>
                </div>
              </Questions>
            );
          })}
        </div>
      </main>
    </div>
  );
}
