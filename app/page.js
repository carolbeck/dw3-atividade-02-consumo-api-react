"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [personagens, setPersonagens] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    async function buscarPersonagens() {
      try {
        const resposta = await fetch("https://rickandmortyapi.com/api/character");
        const dados = await resposta.json();
        setPersonagens(dados.results);
      } catch (e) {
        setErro(true);
      } finally {
        setCarregando(false);
      }
    }

    buscarPersonagens();
  }, []);

  if (carregando) {
    return <main className="container"><p>Carregando...</p></main>;
  }

  if (erro) {
    return <main className="container"><p>Erro ao carregar os personagens.</p></main>;
  }

  return (
    <main className="container">
      <h1>Rick and Morty</h1>
      <p className="subtitulo">Catálogo de personagens</p>

      <div className="grid">
        {personagens.map((personagem) => (
          <Link
            href={`/personagem/${personagem.id}`}
            key={personagem.id}
            className="card"
          >
            <img src={personagem.image} alt={personagem.name} />
            <h2>{personagem.name}</h2>
            <p>{personagem.species}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}