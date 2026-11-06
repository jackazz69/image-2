'use client';
import Link from 'next/link';

interface PrimeiroComponente {
  mensagem: string;
  mensagemBotao?: string;
}

export const PrimeiroComponente = ({ mensagem, mensagemBotao }: PrimeiroComponente) => {
  const clique = () => {
    console.log('Você clicou no botão!');
    alert(mensagemBotao);
  };

  return (
    <div>
      <h1></h1>
      <p>{mensagem}</p>
      <button onClick={clique}></button>

      <Link href="/galeria">
  <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
    Ir para a Galeria
  </button>
</Link>
    </div>
  );
};