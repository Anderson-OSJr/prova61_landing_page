"use client";

const Menu = () => {
  return (
    <nav className="flex flex-col md:flex-row gap-3 text-blue-900 px-6 py-2">
      <a className="cursor:pointer hover:text-blue-300" href="#">
        Serviços
      </a>
      <a className="cursor:pointer hover:text-blue-300" href="#">
        Sobre
      </a>
      <a className="cursor:pointer hover:text-blue-300" href="#">
        Portfólio
      </a>
      <a className="cursor:pointer hover:text-blue-300" href="#">
        Contatos
      </a>
    </nav>
  );
};
export default Menu;
