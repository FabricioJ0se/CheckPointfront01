import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className="text-center home-container"> 
        <h1 className="text-3xl font-semibold mb-2">Bem-vindo à Elite Motors</h1>
        <p className="text-lg mb-4">A melhor seleção de carros de luxo para você.</p>
        <div className="mt-8 flex justify-center">
          <img
            src="/Image/1663674828_ferrari_purosangue_suv_uvod-32532628.jpg"
            className="mx-auto max-w-full rounded-lg"
            style={{ maxWidth: "800px" }}
            alt="Carro de luxo"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}