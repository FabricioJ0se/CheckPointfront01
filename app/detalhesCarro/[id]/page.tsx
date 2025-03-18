import carrosData from "@/data/carrosData";
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function DetalhesCarro({ params }: { params: { id: string } }) {
  const carro = carrosData.find((c) => c.id.toString() === params.id);

  if (!carro)
    return (
      <p style={{ textAlign: "center", color: "red" }}>Carro não encontrado!</p>
    );

  return (
    <>
      <Header /> 
      <div
        className="card"
        style={{
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          maxWidth: "600px",
          margin: "20px auto",
        }}
      >
        <img
          src={carro.foto}
          alt={carro.modelo}
          style={{ width: "100%", borderRadius: "8px", marginBottom: "15px" }}
        />
        <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>
          {carro.modelo}
        </h2>
        <p style={{ marginBottom: "8px" }}>Ano: {carro.ano}</p>
        <p style={{ marginBottom: "8px" }}>Potência: {carro.potencia}</p>
        <p style={{ marginBottom: "8px" }}>
          <strong>Preço: R$ {carro.preco.toLocaleString()}</strong>
        </p>
      </div>
      <Footer />
    </>
  );
}