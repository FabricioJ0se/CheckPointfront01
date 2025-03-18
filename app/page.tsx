import Header from "../components/Header";
import Footer from "../components/Footer";
import { carrosData } from "@/data/carrosData"; 
import Link from "next/link";
import "./globals.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className="text-center home-container"> 
        <h1 className="text-3xl font-semibold mb-2">Concessionária Fiap</h1>
        <p className="text-lg mb-4">O local perfeito para escolher seu Carro</p>
        <div className="carros-list grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {carrosData.map((carro) => (
            <div key={carro.id} className="carro-item bg-white rounded-lg shadow-lg p-4">
              <img
                src={`/img/${carro.img}`} 
                alt={carro.modelo}
                className="w-full h-40 object-cover rounded-lg"
              />
              <h3 className="mt-3 text-lg font-semibold">{carro.modelo}</h3>
              <p className="text-sm text-gray-500">{carro.preco}</p>
              <Link href={`/detalhesCarro/${carro.id}`} className="text-blue-500">Ver detalhes</Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
