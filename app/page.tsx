import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className="text-center home-container"> 
        <h1 className="text-3xl font-semibold mb-2">Concessionaria Fiap</h1>
        <p className="text-lg mb-4">O local perfeito para escolher seu Carro</p>
      </div>
      <Footer />
    </>
  );
}