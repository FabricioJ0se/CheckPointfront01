import Link from 'next/link';
import carrosData from '../../data/carrosData';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function ListaCarros() {
  return (
    <>
      <Header />
      <h2 style={{ fontSize: '2rem', fontWeight: '600', textAlign: 'center', marginBottom: '1rem' }}>Lista de Carros</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
        {carrosData.map((carro) => (
          <div key={carro.id} style={{ border: '1px solid #ccc', borderRadius: '0.5rem', padding: '1rem' }}>
            <img src={carro.foto} alt={carro.modelo} style={{ width: '100%', height: '12rem', objectFit: 'cover', borderRadius: '0.5rem' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginTop: '0.5rem' }}>{carro.modelo}</h3>
            <p style={{ color: '#666' }}>Ano: {carro.ano}</p>
            <p style={{ color: '#666' }}>Potência: {carro.potencia}</p>
            <p style={{ fontWeight: '600' }}>Preço: R$ {carro.preco.toLocaleString()}</p>
            <Link href={`/detalhesCarro/${carro.id}`} style={{ display: 'block', textAlign: 'center', backgroundColor: '#3498db', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.25rem', marginTop: '0.75rem', textDecoration: 'none' }}>Ver Detalhes</Link>
          </div>
        ))}
      </div>
      <Footer /> 
    </>
  );
}