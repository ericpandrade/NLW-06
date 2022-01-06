/* eslint-disable jsx-a11y/img-redundant-alt */
import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";

import { Link } from "react-router-dom";

import "../styles/auth.scss";

import { Button } from "../components/Button";

import { useAuth } from "../contexts/AuthContext";

export function NewRoom() {
  const { user } = useAuth();

  return (
    <div id="page-auth">
      <aside>
        <img
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>
          Crie salas de Q&amp;A ao-vivo <h1>{user?.name}</h1>
        </strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="LetMeAsk" />
          <h2>Criar uma nova sala</h2>
          <form>
            <input type="text" placeholder="Nome da Sala" />
            <Button type="submit">Criar sala</Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">Clique aqui!</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
