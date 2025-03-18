"use client"; 

import { useParams } from 'next/navigation';
import { carrosData } from '@/data/carrosData';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const DetalhesCarro = () => {
  const { id } = useParams(); 

  const carro = carrosData.find((carro) => carro.id.toString() === id);

  if (!carro) {
    return <div>Carro não encontrado.</div>;
  }

  return (
    <>
      <Header />
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <img
          src={`/img/${carro.img}`}
          alt={carro.modelo}
          style={{ width: '100%', height: '20rem', objectFit: 'cover', borderRadius: '0.5rem' }}
        />
        <h2>{carro.modelo}</h2>
        <p><strong>Ano:</strong> {carro.ano}</p>
        <p><strong>Especificações:</strong> {carro.especificacoes}</p>
        <p><strong>Preço:</strong> {carro.preco}</p>
        <p><strong>Quantidade disponível:</strong> {carro.quantidade}</p>
      </div>
      <Footer />
    </>
  );
};

export default DetalhesCarro;
