import Link from 'next/link';

const Header = () => {
  return (
    <header className="header-container">
      <h1>COncessionaria Fiap</h1>
      <div className="header-buttons">
        <Link href="/" className="header-button">
          Home
        </Link>
        <Link href="/listaCarros" className="header-button">
          Lista de Carros
        </Link>
      </div>
    </header>
  );
};

export default Header;