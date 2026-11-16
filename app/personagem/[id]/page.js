"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function Detalhes() {
  const { id } = useParams();

  const [personagem, setPersonagem] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    async function buscarPersonagem() {
      try {
        const resposta = await fetch(`https://rickandmortyapi.com/api/character/${id}`);

        if (!resposta.ok) {
          setErro(true);
          return;
        }

        const dados = await resposta.json();
        setPersonagem(dados);
      } catch (e) {
        setErro(true);
      } finally {
        setCarregando(false);
      }
    }

    buscarPersonagem();
  }, [id]);

  if (carregando) {
    return <main className="container"><p>Carregando...</p></main>;
  }

  if (erro) {
    return (
      <main className="container">
        <Link href="/" className="voltar">← Voltar ao catálogo</Link>
        <p>Personagem não encontrado.</p>
      </main>
    );
  }

  return (
    <main className="container">
      <Link href="/" className="voltar">
        ← Voltar ao catálogo
      </Link>

      <div className="detalhes">
        <img src={personagem.image} alt={personagem.name} />

        <div className="info">
          <h1>{personagem.name}</h1>
          <p><strong>Status:</strong> {personagem.status}</p>
          <p><strong>Espécie:</strong> {personagem.species}</p>
          <p><strong>Gênero:</strong> {personagem.gender}</p>
          <p><strong>Origem:</strong> {personagem.origin.name}</p>
          <p><strong>Última localização:</strong> {personagem.location.name}</p>
          <p><strong>Aparece em:</strong> {personagem.episode.length} episódios</p>
        </div>
      </div>
    </main>
  );
}