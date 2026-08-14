import Image from "next/image";
import { PrimeiroComponente } from "./componente/PrimeiroComponente";

export default function Home() {
  return (
    <div>
      <main>
        <h1>Sayori (¬_¬")💢</h1>
        <PrimeiroComponente
          mensagem="Eu gentilmente abro a porta do quarto "
          mensagemBotao=" 🪑𓍯"
        />

      </main>
    </div>
  );
}