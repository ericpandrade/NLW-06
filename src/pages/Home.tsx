/* eslint-disable jsx-a11y/img-redundant-alt */

import { useNavigate } from "react-router-dom";

import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconImage from "../assets/images/google-icon.svg";

import "../styles/auth.scss";

import { Button } from "../components/Button";

import { useAuth } from "../contexts/AuthContext";

export function Home() {
  const navigate = useNavigate();
  const { user, signInWithGoogle } = useAuth();

  async function handleCreateRoom() {
    user && (await signInWithGoogle());

    navigate("/rooms/news");
  }

  return (
    <div id="page-auth">
      <aside>
        <img
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Logo image" />
          <button className="create-room" onClick={handleCreateRoom}>
            <img src={googleIconImage} alt="Google Icon Image" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form>
            <input type="text" placeholder="Digite o código da sala" />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
